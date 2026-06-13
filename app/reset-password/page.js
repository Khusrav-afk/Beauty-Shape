'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { supabase } from '@/lib/supabase'

export default function ResetPasswordPage() {
  const router = useRouter()
  const [ready, setReady] = useState(false)
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  // По переходу из письма Supabase создаёт сессию восстановления
  useEffect(() => {
    if (!supabase) return
    supabase.auth.getSession().then(({ data }) => { if (data?.session) setReady(true) })
    const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY' || session) setReady(true)
    })
    return () => sub?.subscription?.unsubscribe?.()
  }, [])

  async function submit(e) {
    e.preventDefault()
    setError(''); setLoading(true)
    if (!supabase) { setError('Авторизация не настроена'); setLoading(false); return }
    const { error } = await supabase.auth.updateUser({ password })
    if (error) {
      setError(error.message.toLowerCase().includes('session')
        ? 'Ссылка недействительна или устарела. Запросите новую.'
        : error.message)
      setLoading(false)
      return
    }
    setDone(true); setLoading(false)
    setTimeout(() => router.replace('/account'), 1800)
  }

  return (
    <>
      <Header />
      <main className="max-w-md mx-auto px-4 sm:px-6 py-16 min-h-[60vh]">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">Новый пароль</h1>

        {done ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background:'#f0fdfb' }}>
              <svg className="w-7 h-7" style={{ color:'#3ECAB4' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <p className="font-semibold text-gray-900">Пароль обновлён!</p>
            <p className="text-sm text-gray-500 mt-1">Перенаправляем в кабинет…</p>
          </div>
        ) : (
          <>
            <p className="text-sm text-gray-500 text-center mb-8">Придумайте новый пароль для входа</p>
            <form onSubmit={submit} className="space-y-4">
              <input required type="password" value={password} minLength={6}
                onChange={e => setPassword(e.target.value)}
                placeholder="Новый пароль (минимум 6 символов)"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400" />
              {error && <p className="text-sm text-red-600">{error}</p>}
              {!ready && !error && <p className="text-xs text-gray-400">Откройте эту страницу по ссылке из письма восстановления.</p>}
              <button type="submit" disabled={loading}
                className="w-full py-3 rounded-xl text-white text-sm font-semibold hover:opacity-90 disabled:opacity-60 transition-all"
                style={{ background:'#3ECAB4' }}>
                {loading ? 'Сохранение…' : 'Сохранить пароль'}
              </button>
            </form>
            <p className="text-center mt-6">
              <Link href="/login" className="text-xs text-gray-400 hover:underline">← Ко входу</Link>
            </p>
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
