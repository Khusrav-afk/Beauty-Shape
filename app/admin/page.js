'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleLogin(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      if (res.ok) {
        router.push('/admin/orders')
      } else {
        setError('Неверный пароль')
      }
    } catch {
      setError('Ошибка соединения')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{background:'#3ECAB4'}}>
            <svg width="28" height="28" viewBox="0 0 20 20" fill="none">
              <circle cx="7" cy="7" r="3.5" stroke="white" strokeWidth="1.8"/>
              <circle cx="13" cy="7" r="3.5" stroke="white" strokeWidth="1.8"/>
              <circle cx="7" cy="13" r="3.5" stroke="white" strokeWidth="1.8"/>
              <circle cx="13" cy="13" r="3.5" stroke="white" strokeWidth="1.8"/>
            </svg>
          </div>
          <h1 className="text-xl font-bold text-gray-900">Beauty Shape</h1>
          <p className="text-sm text-gray-500 mt-1">Панель управления</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">Пароль</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                placeholder="Введите пароль"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400 transition-colors"
              />
            </div>
            {error && <p className="text-xs text-red-500">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90 disabled:opacity-60"
              style={{background:'#3ECAB4'}}
            >
              {loading ? 'Вход...' : 'Войти'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
