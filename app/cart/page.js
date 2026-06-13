'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useCart } from '@/components/CartContext'
import { useAuth } from '@/components/AuthContext'
import { formatPrice } from '@/lib/catalog'

export default function CartPage() {
  const { items, setQty, removeItem, clear, count, total, loaded } = useCart()
  const { user } = useAuth()
  const [form, setForm] = useState({ name:'', phone:'', comment:'' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [agree, setAgree] = useState(false)

  // Подставляем ФИО/телефон вошедшего пользователя
  useEffect(() => {
    if (user) setForm(f => ({
      ...f,
      name:  f.name  || user.user_metadata?.full_name || '',
      phone: f.phone || user.user_metadata?.phone || '',
    }))
  }, [user])

  async function submitOrder(e) {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim() || !agree) return
    setLoading(true)

    const list = items.map(i => `• ${i.name} ×${i.qty}${i.price ? ` — ${formatPrice(i.price, i.priceFrom)}` : ''}`).join('\n')
    const comment = `Заказ из корзины (${count} поз.):\n${list}${total ? `\n\nИтого: ${total.toLocaleString('ru-RU')} ₽` : ''}${form.comment.trim() ? `\n\nКомментарий: ${form.comment.trim()}` : ''}`

    try {
      await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          comment,
          productName: `Корзина (${count} поз.)`,
          userId: user?.id || null,
        }),
      })
    } catch {}
    setLoading(false)
    setSent(true)
    clear()
  }

  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 min-h-[60vh]">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8 flex-wrap">
          <Link href="/" className="hover:text-teal-500">Главная</Link>
          <span>/</span>
          <span className="text-gray-700">Корзина</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Корзина</h1>

        {/* Успех */}
        {sent ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{background:'#f0fdfb'}}>
              <svg className="w-8 h-8" style={{color:'#3ECAB4'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Заявка отправлена!</h2>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">Менеджер свяжется с вами в течение 30 минут, подтвердит наличие и условия. Оплата — после подтверждения.</p>
            <Link href="/catalog" className="inline-block px-6 py-3 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-opacity" style={{background:'#3ECAB4'}}>
              Вернуться в каталог
            </Link>
          </div>
        ) : !loaded ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <div className="w-9 h-9 rounded-full border-4 border-gray-200 border-t-teal-400 animate-spin mb-3" />
            <p className="text-sm">Загрузка…</p>
          </div>
        ) : items.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🛒</div>
            <p className="font-semibold text-gray-700 mb-2">Корзина пуста</p>
            <p className="text-sm text-gray-400 mb-6">Добавьте оборудование из каталога</p>
            <Link href="/catalog" className="inline-block px-6 py-3 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-opacity" style={{background:'#3ECAB4'}}>
              Перейти в каталог
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Список товаров */}
            <div className="lg:col-span-2 space-y-3">
              {items.map(item => (
                <div key={item.slug} className="flex gap-4 p-3 rounded-2xl border border-gray-100 bg-white">
                  <Link href={`/catalog/${item.categorySlug}/${item.slug}`}
                    className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center" style={{background:'#f0fdfb'}}>
                    {item.image
                      ? <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      : <span className="text-gray-300 text-xs">Фото</span>}
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link href={`/catalog/${item.categorySlug}/${item.slug}`}
                      className="font-semibold text-gray-900 text-sm leading-tight hover:text-teal-700 line-clamp-2">
                      {item.name}
                    </Link>
                    <p className="text-sm font-bold text-gray-900 mt-1">{formatPrice(item.price, item.priceFrom)}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                        <button onClick={() => setQty(item.slug, item.qty - 1)} className="w-8 h-8 text-gray-500 hover:bg-gray-50">−</button>
                        <span className="w-8 text-center text-sm font-medium">{item.qty}</span>
                        <button onClick={() => setQty(item.slug, item.qty + 1)} className="w-8 h-8 text-gray-500 hover:bg-gray-50">+</button>
                      </div>
                      <button onClick={() => removeItem(item.slug)} className="text-xs text-gray-400 hover:text-red-500">Удалить</button>
                    </div>
                  </div>
                </div>
              ))}
              <button onClick={clear} className="text-xs text-gray-400 hover:text-red-500 mt-2">Очистить корзину</button>
            </div>

            {/* Оформление */}
            <div className="lg:col-span-1">
              <div className="p-5 rounded-2xl border border-gray-100 bg-gray-50 sticky top-20">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">Позиций</span>
                  <span className="font-medium text-gray-900">{count}</span>
                </div>
                <div className="flex justify-between text-base mb-4 pb-4 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Итого</span>
                  <span className="font-bold text-gray-900">{total.toLocaleString('ru-RU')} ₽</span>
                </div>
                <p className="text-xs text-gray-400 mb-4">Оставьте контакты — менеджер подтвердит наличие и условия, после чего пришлёт ссылку на оплату.</p>
                <form onSubmit={submitOrder} className="space-y-3">
                  <input required value={form.name} onChange={e => setForm({...form, name:e.target.value})}
                    placeholder="Ваше имя *"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400" />
                  <input required type="tel" value={form.phone} onChange={e => setForm({...form, phone:e.target.value})}
                    placeholder="Телефон *"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400" />
                  <textarea value={form.comment} onChange={e => setForm({...form, comment:e.target.value})}
                    placeholder="Комментарий (необязательно)" rows={2}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400 resize-none" />
                  <label className="flex items-start gap-2 text-xs text-gray-500 cursor-pointer">
                    <input type="checkbox" checked={agree} onChange={e => setAgree(e.target.checked)} className="mt-0.5 accent-teal-500" />
                    <span>Соглашаюсь с политикой обработки данных</span>
                  </label>
                  <button type="submit" disabled={loading || !agree}
                    className="w-full py-3 rounded-xl text-white text-sm font-semibold hover:opacity-90 disabled:opacity-50 transition-all"
                    style={{background:'#3ECAB4'}}>
                    {loading ? 'Отправка…' : 'Оформить заявку'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
