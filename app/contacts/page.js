'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
export const dynamic = 'force-dynamic'

const PHONE = '+79002747119'
const PHONE_DISPLAY = '+7 900 274-71-19'
const EMAIL = 'b.shape@mail.ru'
const TG    = 'https://t.me/+aPk5OJJWJoJiYjhi'
const IG    = 'https://www.instagram.com/apparat_kosmetolog.bs'

function TelegramIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.14 14.516l-2.98-.924c-.647-.204-.66-.647.136-.958l11.647-4.491c.537-.194 1.006.131.951.078z"/>
    </svg>
  )
}

function InstagramIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}

export default function ContactsPage() {
  const [form, setForm] = useState({ name:'', phone:'', comment:'' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

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

  const contacts = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      ),
      label: 'Телефон',
      val: PHONE_DISPLAY,
      href: `tel:${PHONE}`,
      color: '#3ECAB4',
      bg: '#f0fdfb',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      label: 'Email',
      val: EMAIL,
      href: `mailto:${EMAIL}`,
      color: '#3b82f6',
      bg: '#eff6ff',
    },
    {
      icon: <TelegramIcon size={20} />,
      label: 'Telegram',
      val: 'Группа Beauty Shape',
      href: TG,
      color: '#29a9eb',
      bg: '#e0f7fe',
    },
    {
      icon: <InstagramIcon size={20} />,
      label: 'Instagram',
      val: '@apparat_kosmetolog.bs',
      href: IG,
      color: '#e1306c',
      bg: '#fdf0f5',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      label: 'Режим работы',
      val: 'Пн–Пт: 9:00–18:00',
      href: null,
      color: '#6b7280',
      bg: '#f9fafb',
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <div className="py-14 px-4 sm:px-6 text-center" style={{background:'linear-gradient(135deg, #f0fdfb, #ffffff)'}}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{color:'#3ECAB4'}}>Контакты</p>
          <h1 className="text-4xl font-bold text-gray-900">Свяжитесь с нами</h1>
          <p className="text-gray-500 mt-3 max-w-md mx-auto">Ответим на вопросы, поможем с выбором, оформим заявку</p>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-2 gap-10 items-start">

          {/* Contact cards */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 mb-5">Контактная информация</h2>
            {contacts.map(({ icon, label, val, href, color, bg }) => (
              <div key={label}
                className="flex items-center gap-4 p-4 rounded-2xl border border-transparent hover:border-gray-200 hover:shadow-md transition-all duration-200 group cursor-pointer"
                style={{background: bg}}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                  style={{background: color, color:'white'}}>
                  {icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-400 font-medium mb-0.5">{label}</div>
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener"
                      className="font-semibold hover:underline truncate block transition-colors"
                      style={{color}}>
                      {val}
                    </a>
                  ) : (
                    <div className="font-semibold text-gray-700">{val}</div>
                  )}
                </div>
                {href && (
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-gray-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                )}
              </div>
            ))}
          </div>

          {/* Form */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-5">Оставить заявку</h2>
            {sent ? (
              <div className="p-8 rounded-2xl text-center" style={{background:'#f0fdfb', border:'1px solid #99f4e8'}}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{background:'#3ECAB4'}}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <p className="font-bold text-gray-900 text-lg mb-1">Заявка отправлена!</p>
                <p className="text-gray-500 text-sm">Перезвоним в течение 30 минут в рабочее время</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Ваше имя *</label>
                  <input required value={form.name} onChange={e => setForm({...form, name:e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
                    placeholder="Как к вам обращаться?"/>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Телефон *</label>
                  <input required type="tel" value={form.phone} onChange={e => setForm({...form, phone:e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all"
                    placeholder="+7 (___) ___-__-__"/>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Комментарий</label>
                  <textarea value={form.comment} onChange={e => setForm({...form, comment:e.target.value})}
                    rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all resize-none"
                    placeholder="Интересующий аппарат, вопросы..."/>
                </div>
                <label className="flex items-start gap-2 text-xs text-gray-500 cursor-pointer">
                  <input type="checkbox" required className="mt-0.5 accent-teal-500"/>
                  <span>Согласен(а) на обработку персональных данных</span>
                </label>
                <button type="submit" disabled={loading}
                  className="w-full py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-md hover:-translate-y-0.5 disabled:opacity-60 disabled:translate-y-0"
                  style={{background:'#3ECAB4'}}>
                  {loading ? 'Отправка...' : 'Отправить заявку'}
