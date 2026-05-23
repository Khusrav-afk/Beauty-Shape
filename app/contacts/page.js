'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactsPage() {
  const [form, setForm] = useState({ name:'', phone:'', comment:'' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/orders', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) })
    } catch {}
    setLoading(false)
    setSent(true)
  }

  return (
    <>
      <Header />
      <main>
        <div className="py-14 px-4 sm:px-6 text-center" style={{background:'linear-gradient(135deg, #f0fdfb, #ffffff)'}}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{color:'#3ECAB4'}}>Контакты</p>
          <h1 className="text-4xl font-bold text-gray-900">Свяжитесь с нами</h1>
          <p className="text-gray-500 mt-3">Ответим на вопросы, поможем с выбором, оформим заказ</p>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-2 gap-10">

          {/* Contact info */}
          <div className="space-y-5">
            <h2 className="text-xl font-bold text-gray-900">Контактная информация</h2>
            {[
              { icon:'📞', label:'Телефон', val:'+7 (___) ___-__-__', href:'tel:+79000000000' },
              { icon:'✉️', label:'Email', val:'info@beautyshape.ru', href:'mailto:info@beautyshape.ru' },
              { icon:'✈️', label:'Telegram', val:'@beautyshape', href:'https://t.me/beautyshape' },
              { icon:'💬', label:'ВКонтакте', val:'vk.com/beautyshape', href:'https://vk.com/beautyshape' },
              { icon:'🕐', label:'Режим работы', val:'Пн–Пт: 9:00–18:00', href: null },
            ].map(({ icon, label, val, href }) => (
              <div key={label} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-xl" style={{background:'#f0fdfb'}}>
                  {icon}
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">{label}</div>
                  {href
                    ? <a href={href} className="font-medium text-gray-900 hover:underline" style={{color:'#168d7d'}}>{val}</a>
                    : <div className="font-medium text-gray-900">{val}</div>
                  }
                </div>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <p className="font-bold text-gray-900 text-lg">Заявка отправлена!</p>
                <p className="text-gray-500 mt-2 text-sm">Перезвоним в течение 30 минут в рабочее время</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Ваше имя *</label>
                  <input required value={form.name} onChange={e => setForm({...form, name:e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400 transition-colors"
                    placeholder="Как к вам обращаться?"/>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Телефон *</label>
                  <input required type="tel" value={form.phone} onChange={e => setForm({...form, phone:e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400 transition-colors"
                    placeholder="+7 (___) ___-__-__"/>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Комментарий</label>
                  <textarea value={form.comment} onChange={e => setForm({...form, comment:e.target.value})}
                    rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400 transition-colors resize-none"
                    placeholder="Интересующий аппарат, вопросы..."/>
                </div>
                <label className="flex items-start gap-2 text-xs text-gray-500 cursor-pointer">
                  <input type="checkbox" required className="mt-0.5 accent-teal-500"/>
                  <span>Согласен(а) на обработку персональных данных</span>
                </label>
                <button type="submit" disabled={loading}
                  className="w-full py-3.5 rounded-xl text-white font-semibold transition-all hover:opacity-90 disabled:opacity-60"
                  style={{background:'#3ECAB4'}}>
                  {loading ? 'Отправка...' : 'Отправить заявку'}
                </button>
              </form>
            )}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
