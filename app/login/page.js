'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/components/AuthContext'

export default function LoginPage() {
  const router = useRouter()
  const { user } = useAuth()
  const [mode, setMode] = useState('login') // login | register
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [info, setInfo] = useState('')

  // Уже вошёл — отправляем в кабинет
  useEffect(() => { if (user) router.replace('/account') }, [user, router])

  async function handleForgot() {
    setError(''); setInfo('')
    if (!form.email.trim()) { setError('Введите email, на который придёт ссылка'); return }
    if (!supabase) { setError('Авторизация не настроена'); return }
    const { error } = await supabase.auth.resetPasswordForEmail(form.email.trim(), {
      redirectTo: `${window.location.origin}/reset-password`,
    })
    if (error) { setError(translate(error.message)); return }
    setInfo('Письмо со ссылкой для смены пароля отправлено на ' + form.email.trim())
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError(''); setInfo(''); setLoading(true)
    if (!supabase) { setError('Авторизация не настроена'); setLoading(false); return }

    if (mode === 'register') {
      const { data, error } = await supabase.auth.signUp({
        email: form.email.trim(),
        password: form.password,
      })
      if (error) { setError(translate(error.message)); setLoading(false); return }
      if (data.session) {
        router.replace('/account')
      } else {
        setInfo('Регистрация почти завершена! Проверьте почту и подтвердите адрес, затем войдите.')
        setMode('login')
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email: form.email.trim(),
        password: form.password,
      })
      if (error) { setError(translate(error.message)); setLoading(false); return }
      router.replace('/account')
    }
    setLoading(false)
  }

  return (
    <>
      <Header />
      <main className="max-w-md mx-auto px-4 sm:px-6 py-16 min-h-[60vh]">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
          {mode === 'login' ? 'Вход в кабинет' : 'Регистрация'}
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          {mode === 'login' ? 'Войдите, чтобы видеть свои заявки' : 'Создайте аккаунт, чтобы отслеживать заказы'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input required type="email" value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400" />
          <input required type="password" value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            placeholder="Пароль (минимум 6 символов)" minLength={6}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400" />

          {error && <p className="text-sm text-red-600">{error}</p>}
          {info && <p className="text-sm text-green-600">{info}</p>}

          {mode === 'login' && (
            <button type="button" onClick={handleForgot}
              className="block text-xs text-gray-400 hover:text-teal-600 hover:underline">
              Забыли пароль?
            </button>
          )}

          <button type="submit" disabled={loading}
            className="w-full py-3 rounded-xl text-white text-sm font-semibold hover:opacity-90 disabled:opacity-60 transition-all"
            style={{ background: '#3ECAB4' }}>
            {loading ? 'Подождите…' : (mode === 'login' ? 'Войти' : 'Зарегистрироваться')}
          </button>
        </form>

        <div className="text-center mt-6 text-sm text-gray-500">
          {mode === 'login' ? (
            <>Нет аккаунта?{' '}
              <button onClick={() => { setMode('register'); setError(''); setInfo('') }}
                className="font-semibold hover:underline" style={{ color: '#3ECAB4' }}>Зарегистрироваться</button>
            </>
          ) : (
            <>Уже есть аккаунт?{' '}
              <button onClick={() => { setMode('login'); setError(''); setInfo('') }}
                className="font-semibold hover:underline" style={{ color: '#3ECAB4' }}>Войти</button>
            </>
          )}
        </div>

        <p className="text-center mt-8">
          <Link href="/catalog" className="text-xs text-gray-400 hover:underline">← В каталог</Link>
        </p>
      </main>
      <Footer />
    </>
  )
}

function translate(msg) {
  const m = (msg || '').toLowerCase()
  if (m.includes('invalid login')) return 'Неверный email или пароль'
  if (m.includes('already registered') || m.includes('already been registered')) return 'Такой email уже зарегистрирован'
  if (m.includes('password')) return 'Пароль слишком короткий (минимум 6 символов)'
  if (m.includes('email')) return 'Проверьте правильность email'
  return msg
}
