'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/components/AuthContext'

const STATUS_LABELS = { new: 'Новая', in_progress: 'В обработке', done: 'Завершена', cancelled: 'Отменена' }
const STATUS_STYLE = {
  new:         { background: '#fef3c7', color: '#92400e' },
  in_progress: { background: '#dbeafe', color: '#1e40af' },
  done:        { background: '#dcfce7', color: '#166534' },
  cancelled:   { background: '#fee2e2', color: '#991b1b' },
}

export default function AccountPage() {
  const router = useRouter()
  const { user, loading, signOut } = useAuth()
  const [orders, setOrders] = useState([])
  const [loadingOrders, setLoadingOrders] = useState(true)
  const [profile, setProfile] = useState({ full_name: '', phone: '' })
  const [savingProfile, setSavingProfile] = useState(false)
  const [profileSaved, setProfileSaved] = useState(false)

  // Не вошёл — на страницу входа
  useEffect(() => {
    if (!loading && !user) router.replace('/login')
  }, [user, loading, router])

  // Подставляем сохранённые ФИО/телефон
  useEffect(() => {
    if (user) setProfile({
      full_name: user.user_metadata?.full_name || '',
      phone:     user.user_metadata?.phone || '',
    })
  }, [user])

  async function saveProfile(e) {
    e.preventDefault()
    if (!supabase) return
    setSavingProfile(true); setProfileSaved(false)
    await supabase.auth.updateUser({ data: { full_name: profile.full_name, phone: profile.phone } })
    setSavingProfile(false); setProfileSaved(true)
    setTimeout(() => setProfileSaved(false), 2000)
  }

  // Загружаем свои заявки (RLS вернёт только принадлежащие пользователю)
  useEffect(() => {
    if (!user || !supabase) return
    supabase.from('orders').select('*').order('created_at', { ascending: false })
      .then(({ data }) => { setOrders(data || []); setLoadingOrders(false) })
  }, [user])

  if (loading || !user) return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto px-6 py-32 flex flex-col items-center text-gray-400">
        <div className="w-9 h-9 rounded-full border-4 border-gray-200 border-t-teal-400 animate-spin mb-3" />
        <p className="text-sm">Загрузка…</p>
      </div>
      <Footer />
    </>
  )

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 min-h-[60vh]">
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Личный кабинет</h1>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
          <button onClick={async () => { await signOut(); router.replace('/') }}
            className="px-4 py-2 rounded-xl text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors flex-shrink-0">
            Выйти
          </button>
        </div>

        {/* Профиль */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Мои данные</h2>
          <form onSubmit={saveProfile} className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">ФИО</label>
              <input value={profile.full_name} onChange={e => setProfile({ ...profile, full_name: e.target.value })}
                placeholder="Иванова Анна Сергеевна"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Телефон</label>
              <input type="tel" value={profile.phone} onChange={e => setProfile({ ...profile, phone: e.target.value })}
                placeholder="+7 ..."
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400" />
            </div>
            <div className="flex items-center gap-3">
              <button type="submit" disabled={savingProfile}
                className="px-5 py-2.5 rounded-xl text-white text-sm font-semibold hover:opacity-90 disabled:opacity-60 transition-all"
                style={{ background:'#3ECAB4' }}>
                {savingProfile ? 'Сохранение…' : 'Сохранить'}
              </button>
              {profileSaved && <span className="text-sm text-green-600">✓ Сохранено</span>}
            </div>
          </form>
        </div>

        <h2 className="text-lg font-bold text-gray-900 mb-4">Мои заявки</h2>

        {loadingOrders ? (
          <div className="py-10 text-center text-gray-400 text-sm">Загрузка заявок…</div>
        ) : orders.length === 0 ? (
          <div className="text-center py-12 rounded-2xl border border-dashed border-gray-200">
            <div className="text-4xl mb-3">📦</div>
            <p className="text-gray-600 font-medium mb-1">Заявок пока нет</p>
            <p className="text-sm text-gray-400 mb-5">Оформите заказ из каталога — он появится здесь</p>
            <Link href="/catalog" className="inline-block px-5 py-2.5 rounded-xl text-white text-sm font-semibold hover:opacity-90" style={{ background: '#3ECAB4' }}>
              В каталог
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {orders.map(o => (
              <div key={o.id} className="bg-white rounded-2xl border border-gray-100 p-5">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-xs text-gray-400">{new Date(o.created_at).toLocaleString('ru-RU')}</span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={STATUS_STYLE[o.status] || {}}>
                    {STATUS_LABELS[o.status] || o.status}
                  </span>
                </div>
                {o.product_name && <p className="font-semibold text-gray-900 text-sm">{o.product_name}</p>}
                {o.comment && <p className="text-sm text-gray-500 mt-1 whitespace-pre-line">{o.comment}</p>}
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
