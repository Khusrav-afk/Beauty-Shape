'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const PHONE = '+79002747119'
const PHONE_DISPLAY = '+7 900 274-71-19'

export default function BottomNav() {
  const pathname = usePathname()
  const [modalOpen, setModalOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScroll, setLastScroll] = useState(0)

  // Скрываем при скролле вниз, показываем при скролле вверх
  useEffect(() => {
    function onScroll() {
      const current = window.scrollY
      if (current < 100) { setVisible(true); setLastScroll(current); return }
      setVisible(current < lastScroll)
      setLastScroll(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastScroll])

  const navItems = [
    {
      href: '/',
      label: 'Главная',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
      ),
    },
    {
      href: '/catalog',
      label: 'Каталог',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
        </svg>
      ),
    },
    {
      // Центральная кнопка — звонок
      href: `tel:${PHONE}`,
      label: 'Звонок',
      isCall: true,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      ),
    },
    {
      href: '/training',
      label: 'Обучение',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
        </svg>
      ),
    },
    {
      action: () => setModalOpen(true),
      label: 'Заявка',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
        </svg>
      ),
    },
  ]

  return (
    <>
      {/* Bottom Nav — только мобильный */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${visible ? 'translate-y-0' : 'translate-y-full'}`}
        style={{background:'rgba(255,255,255,0.97)', backdropFilter:'blur(12px)', borderTop:'1px solid #f1f5f9', boxShadow:'0 -4px 20px rgba(0,0,0,0.08)'}}>
        <div className="flex items-center justify-around px-2 py-1 pb-safe">
          {navItems.map((item) => {
            const isActive = item.href && item.href !== `tel:${PHONE}` && pathname === item.href
            const isCall = item.isCall

            if (isCall) {
              return (
                <a key="call" href={`tel:${PHONE}`}
                  className="flex flex-col items-center justify-center -mt-5 relative">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-transform active:scale-95"
                    style={{background:'linear-gradient(135deg, #3ECAB4, #20b09a)'}}>
                    {item.icon}
                  </div>
                  <span className="text-xs mt-1 font-medium" style={{color:'#3ECAB4'}}>{item.label}</span>
                </a>
              )
            }

            if (item.action) {
              return (
                <button key="zaявка" onClick={item.action}
                  className="flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl transition-all active:scale-95 min-w-0">
                  <span className={`transition-colors ${isActive ? '' : 'text-gray-400'}`} style={isActive ? {color:'#3ECAB4'} : {}}>
                    {item.icon}
                  </span>
                  <span className={`text-xs font-medium transition-colors ${isActive ? '' : 'text-gray-400'}`} style={isActive ? {color:'#3ECAB4'} : {}}>
                    {item.label}
                  </span>
                </button>
              )
            }

            return (
              <Link key={item.href} href={item.href}
                className="flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl transition-all active:scale-95 min-w-0">
                <span className={`transition-colors`} style={isActive ? {color:'#3ECAB4'} : {color:'#9ca3af'}}>
                  {item.icon}
                </span>
                <span className={`text-xs font-medium transition-colors`} style={isActive ? {color:'#3ECAB4'} : {color:'#9ca3af'}}>
                  {item.label}
                </span>
                {isActive && (
                  <span className="w-1 h-1 rounded-full mt-0.5" style={{background:'#3ECAB4'}}/>
                )}
              </Link>
            )
          })}
        </div>
      </div>

      {/* Desktop — фиксированная боковая кнопка «Заявка» */}
      <div className="hidden md:block fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <button
          onClick={() => setModalOpen(true)}
          className="flex flex-col items-center gap-2 px-3 py-4 text-white text-xs font-bold rounded-l-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-x-1 active:scale-95"
          style={{background:'linear-gradient(180deg, #3ECAB4, #20b09a)', writingMode:'vertical-rl', textOrientation:'mixed'}}>
          <svg className="w-4 h-4 flex-shrink-0" style={{transform:'rotate(90deg)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
          </svg>
          Заявка
        </button>
      </div>

      {/* Модальное окно заявки */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{background:'rgba(0,0,0,0.5)'}}
          onClick={e => e.target === e.currentTarget && setModalOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-gray-900">Оставить заявку</h3>
              <button onClick={() => setModalOpen(false)}
                className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-200 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <QuickOrderForm onClose={() => setModalOpen(false)} />
          </div>
        </div>
      )}
    </>
  )
}

function QuickOrderForm({ onClose }) {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name:'', phone:'', comment:'' })

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/orders', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(form),
      })
    } catch {}
    setLoading(false)
    setSent(true)
  }

  if (sent) return (
    <div className="text-center py-6">
      <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{background:'#f0fdfb'}}>
        <svg className="w-7 h-7" style={{color:'#3ECAB4'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
        </svg>
      </div>
      <p className="font-semibold text-gray-900 mb-1">Заявка отправлена!</p>
      <p className="text-sm text-gray-500 mb-4">Перезвоним в течение 30 минут</p>
      <button onClick={onClose} className="text-sm font-medium hover:underline" style={{color:'#3ECAB4'}}>Закрыть</button>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input required value={form.name} onChange={e => setForm({...form, name:e.target.value})}
        placeholder="Ваше имя *"
        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"/>
      <input required value={form.phone} onChange={e => setForm({...form, phone:e.target.value})}
        placeholder="Телефон *" type="tel"
        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"/>
      <textarea value={form.comment} onChange={e => setForm({...form, comment:e.target.value})}
        placeholder="Комментарий (необязательно)" rows={3}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all resize-none"/>
      <label className="flex items-start gap-2 text-xs text-gray-500 cursor-pointer">
        <input type="checkbox" required className="mt-0.5 accent-teal-500"/>
        <span>Соглашаюсь с политикой обработки данных</span>
      </label>
      <button type="submit" disabled={loading}
        className="w-full py-3 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90 hover:shadow-md disabled:opacity-60"
        style={{background:'#3ECAB4'}}>
        {loading ? 'Отправка...' : 'Отправить заявку'}
      </button>
    </form>
  )
}
