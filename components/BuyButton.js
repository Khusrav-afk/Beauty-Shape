'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function BuyButton({ productName }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full py-4 rounded-2xl text-white font-semibold text-base transition-all hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
        style={{background:'#3ECAB4'}}>
        Купить в 1 клик
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{background:'rgba(0,0,0,0.55)'}}
          onClick={e => e.target === e.currentTarget && setOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-gray-900">Оставить заявку</h3>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-200 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <BuyForm productName={productName} onClose={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  )
}

function BuyForm({ productName, onClose }) {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name:'', phone:'', comment:`Интересует: ${productName}` })

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/orders', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({...form, productName}),
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
      <p className="text-sm text-gray-500 mb-4">Менеджер свяжется в течение 30 минут</p>
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
        rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all resize-none"/>
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
        <button type="button" onClick={onClose}
          className="px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-500 hover:bg-gray-50">
          Отмена
        </button>
      </div>
    </form>
  )
}
