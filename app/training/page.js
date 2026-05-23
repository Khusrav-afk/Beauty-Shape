import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = { title: 'Обучение — Beauty Shape' }

export default function TrainingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <div className="py-16 px-4 sm:px-6 text-center" style={{background:'linear-gradient(135deg, #f0fdfb, #ffffff)'}}>
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{color:'#3ECAB4'}}>Обучение</p>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Обучение работе<br/>на оборудовании</h1>
            <p className="text-lg text-gray-500 leading-relaxed">Обучаем онлайн и оффлайн. После покупки аппарата — базовое обучение в подарок.</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">

          {/* Formats */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Форматы обучения</h2>
          <div className="grid md:grid-cols-2 gap-5 mb-16">
            {[
              {
                icon: '💻',
                title: 'Онлайн-обучение',
                desc: 'Обучаем через видеосвязь — Zoom или Telegram. Удобно: занимаетесь из своего кабинета на своём оборудовании.',
                features: ['Индивидуальный формат', 'Удобное время', 'Запись сессии', 'Доступ из любого города'],
                color: '#f0fdfb',
                border: '#99f4e8',
              },
              {
                icon: '🏫',
                title: 'Оффлайн-обучение',
                desc: 'Очные занятия в нашем учебном центре. Практика на реальных аппаратах под руководством опытного специалиста.',
                features: ['Живая практика', 'Материалы в подарок', 'Сертификат', 'Вопросы и ответы'],
                color: '#fff8f0',
                border: '#fcd9a0',
              },
            ].map(({ icon, title, desc, features, color, border }) => (
              <div key={title} className="p-6 rounded-2xl border" style={{background: color, borderColor: border}}>
                <span className="text-4xl mb-4 block">{icon}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{desc}</p>
                <ul className="space-y-1.5">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <span style={{color:'#3ECAB4'}}>✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* In future - video */}
          <div className="p-6 rounded-2xl bg-gray-50 border border-dashed border-gray-200 text-center mb-16">
            <span className="text-3xl mb-3 block">🎬</span>
            <h3 className="font-semibold text-gray-700 mb-1">Видеоуроки — скоро</h3>
            <p className="text-sm text-gray-500">Работаем над созданием обучающих видео по каждому аппарату. Оставьте заявку — сообщим о запуске.</p>
          </div>

          {/* CTA */}
          <div className="rounded-3xl overflow-hidden" style={{background:'linear-gradient(135deg, #3ECAB4, #168d7d)'}}>
            <div className="px-8 py-10 text-center text-white">
              <h2 className="text-2xl font-bold mb-3">Записаться на обучение</h2>
              <p className="text-teal-100 mb-6 max-w-md mx-auto">Оставьте заявку — свяжемся, уточним ваш аппарат и подберём удобное время</p>
              <Link href="/contacts"
                className="inline-block px-8 py-3 bg-white font-semibold text-sm rounded-xl hover:bg-gray-50 transition-colors"
                style={{color:'#168d7d'}}>
                Записаться на обучение
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
