'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{background:'#3ECAB4'}}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="7" cy="7" r="3.5" stroke="white" strokeWidth="1.8"/>
                  <circle cx="13" cy="7" r="3.5" stroke="white" strokeWidth="1.8"/>
                  <circle cx="7" cy="13" r="3.5" stroke="white" strokeWidth="1.8"/>
                  <circle cx="13" cy="13" r="3.5" stroke="white" strokeWidth="1.8"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-base leading-tight tracking-wide text-gray-900">BEAUTY SHAPE</div>
                <div className="text-xs text-gray-400 leading-tight">Косметологическое оборудование</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {[
                { href: '/catalog', label: 'Каталог' },
                { href: '/training', label: 'Обучение' },
                { href: '/about', label: 'О нас' },
                { href: '/contacts', label: 'Контакты' },
              ].map(({ href, label }) => (
                <Link key={href} href={href}
                  className="px-3 py-2 text-sm text-gray-600 hover:text-teal-500 hover:bg-teal-50 rounded-lg transition-colors font-medium">
                  {label}
                </Link>
              ))}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-2">
              <a href="tel:+79000000000"
                className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-teal-500 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                +7 (___) ___-__-__
              </a>
              <button onClick={() => setModalOpen(true)}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                style={{background:'#3ECAB4'}}>
                Заявка
              </button>
              <button className="md:hidden p-2 text-gray-500" onClick={() => setMobileOpen(!mobileOpen)}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}/>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile nav */}
          {mobileOpen && (
            <div className="md:hidden py-3 border-t border-gray-100">
              {[
                { href: '/catalog', label: 'Каталог' },
                { href: '/training', label: 'Обучение' },
                { href: '/about', label: 'О нас' },
                { href: '/contacts', label: 'Контакты' },
              ].map(({ href, label }) => (
                <Link key={href} href={href} onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-teal-500 font-medium">
                  {label}
                </Link>
              ))}
              <a href="tel:+79000000000" className="block px-3 py-2 text-sm text-gray-600 font-medium">
                +7 (___) ___-__-__
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Quick modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{background:'rgba(0,0,0,0.5)'}}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-fadeIn">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-gray-900">Оставить заявку</h3>
              <button onClick={() => setModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <QuickForm onClose={() => setModalOpen(false)} />
          </div>
        </div>
      )}
    </>
  )
}

function QuickForm({ onClose, productName }) {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', comment: productName ? `Интересует: ${productName}` : '' })

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/orders', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(form) })
    } catch {}
    setLoading(false)
    setSent(true)
  }

  if (sent) return (
    <div className="text-center py-6">
      <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{background:'#f0fdfb'}}>
        <svg className="w-7 h-7" style={{color:'#3ECAB4'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
        </svg>
      </div>
      <p className="font-semibold text-gray-900 mb-1">Заявка отправлена!</p>
      <p className="text-sm text-gray-500 mb-4">Перезвоним в течение 30 минут</p>
      <button onClick={onClose} className="text-sm font-medium" style={{color:'#3ECAB4'}}>Закрыть</button>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
        placeholder="Ваше имя *" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400 transition-colors"/>
      <input required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
        placeholder="Телефон *" type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400 transition-colors"/>
      <textarea value={form.comment} onChange={e => setForm({...form, comment: e.target.value})}
        placeholder="Комментарий (необязательно)" rows={3}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400 transition-colors resize-none"/>
      <label className="flex items-start gap-2 text-xs text-gray-500 cursor-pointer">
        <input type="checkbox" required className="mt-0.5 accent-teal-500"/>
        <span>Даю согласие на обработку персональных данных в соответствии с <a href="/privacy" className="underline" style={{color:'#3ECAB4'}}>Политикой конфиденциальности</a></span>
      </label>
      <button type="submit" disabled={loading}
        className="w-full py-3 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90 disabled:opacity-60"
        style={{background:'#3ECAB4'}}>
        {loading ? 'Отправка...' : 'Отправить заявку'}
      </button>
    </form>
  )
}

export { QuickForm }
