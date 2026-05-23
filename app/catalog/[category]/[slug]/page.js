'use client'
import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { products, getCategoryBySlug, formatPrice } from '@/lib/catalog'

export default function ProductPage({ params }) {
  const product = products.find(p => p.slug === params.slug)
  const category = product ? getCategoryBySlug(product.categorySlug) : null

  if (!product) return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Товар не найден</h1>
        <Link href="/catalog" className="text-teal-500 hover:underline font-medium">Вернуться в каталог</Link>
      </div>
      <Footer />
    </>
  )

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8 flex-wrap">
          <Link href="/" className="hover:text-teal-500">Главная</Link>
          <span>/</span>
          <Link href="/catalog" className="hover:text-teal-500">Каталог</Link>
          <span>/</span>
          <Link href={`/catalog/${product.categorySlug}`} className="hover:text-teal-500">{category?.name}</Link>
          <span>/</span>
          <span className="text-gray-700 line-clamp-1">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <div className="aspect-square rounded-3xl flex items-center justify-center relative overflow-hidden" style={{background:'linear-gradient(145deg, #f0fdfb, #e0f7f3)'}}>
              {product.isHit && <span className="absolute top-4 left-4 px-3 py-1 text-sm font-semibold text-white rounded-full" style={{background:'#3ECAB4'}}>Хит продаж</span>}
              {product.stock === 0 && <span className="absolute top-4 right-4 px-3 py-1 text-sm font-semibold bg-red-100 text-red-600 rounded-full">Нет в наличии</span>}
              <div className="text-center text-gray-300">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="mx-auto mb-3 opacity-30">
                  <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1"/>
                  <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1"/>
                  <polyline points="21 15 16 10 5 21" strokeWidth="1"/>
                </svg>
                <p className="text-sm">Фото аппарата</p>
                <p className="text-xs mt-1 opacity-60">Будет добавлено</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-green-50 text-green-700">Гарантия 1 год</span>
              <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-50 text-blue-700">Доставка по России</span>
              <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-purple-50 text-purple-700">Обучение в подарок</span>
              {product.stock > 0 && <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-teal-50 text-teal-700">Есть в наличии</span>}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{color:'#3ECAB4'}}>{category?.name}</p>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">{product.name}</h1>
            <div className="text-3xl font-bold mb-6 text-gray-900">{formatPrice(product.price, product.priceFrom)}</div>
            <p className="text-gray-600 leading-relaxed mb-6">{product.desc}</p>

            {Object.keys(product.specs).length > 0 && (
              <div className="mb-6 p-4 rounded-2xl bg-gray-50">
                <h3 className="font-semibold text-sm text-gray-900 mb-3">Характеристики</h3>
                <div className="space-y-2">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-gray-500">{key}</span>
                      <span className="font-medium text-gray-900">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {product.stock > 0 ? <BuyForm productName={product.name} /> : (
              <div className="p-4 rounded-2xl bg-red-50 border border-red-100 text-sm text-red-700">
                Этот аппарат сейчас отсутствует. Оставьте заявку — сообщим о поступлении.
                <Link href="/contacts" className="block mt-2 font-semibold underline">Оставить заявку</Link>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

function BuyForm({ productName }) {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name:'', phone:'', comment:`Интересует: ${productName}` })

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/orders', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({...form, productName}) })
    } catch {}
    setLoading(false)
    setSent(true)
  }

  if (sent) return (
    <div className="p-6 rounded-2xl text-center" style={{background:'#f0fdfb', border:'1px solid #99f4e8'}}>
      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{background:'#3ECAB4'}}>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
        </svg>
      </div>
      <p className="font-semibold text-gray-900">Заявка отправлена!</p>
      <p className="text-sm text-gray-500 mt-1">Менеджер свяжется в течение 30 минут</p>
    </div>
  )

  if (!open) return (
    <button onClick={() => setOpen(true)}
      className="w-full py-4 rounded-2xl text-white font-semibold text-base transition-all hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
      style={{background:'#3ECAB4'}}>
      Купить в 1 клик
    </button>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-5 rounded-2xl border border-teal-100" style={{background:'#f8fffe'}}>
      <p className="font-semibold text-gray-900 text-sm">Оставить заявку</p>
      <input required value={form.name} onChange={e => setForm({...form, name:e.target.value})}
        placeholder="Ваше имя *" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400 bg-white"/>
      <input required value={form.phone} onChange={e => setForm({...form, phone:e.target.value})}
        placeholder="Телефон *" type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400 bg-white"/>
      <textarea value={form.comment} onChange={e => setForm({...form, comment:e.target.value})}
        rows={2} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400 resize-none bg-white"/>
      <label className="flex items-start gap-2 text-xs text-gray-500 cursor-pointer">
        <input type="checkbox" required className="mt-0.5 accent-teal-500"/>
        <span>Соглашаюсь с политикой обработки данных</span>
      </label>
      <div className="flex gap-2">
        <button type="submit" disabled={loading}
          className="flex-1 py-3 rounded-xl text-white text-sm font-semibold hover:opacity-90 disabled:opacity-60 transition-all"
          style={{background:'#3ECAB4'}}>
          {loading ? 'Отправка...' : 'Отправить'}
        </button>
        <button type="button" onClick={() => setOpen(false)}
          className="px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-500 hover:bg-gray-50">
          Отмена
        </button>
      </div>
    </form>
  )
}
