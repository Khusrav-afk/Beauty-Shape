'use client'
import Link from 'next/link'

const PHONE = '+79002747119'
const PHONE_DISPLAY = '+7 900 274-71-19'
const EMAIL = 'b.shape@mail.ru'
const TG    = 'https://t.me/+aPk5OJJWJoJiYjhi'
const IG    = 'https://www.instagram.com/apparat_kosmetolog.bs'

function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.14 14.516l-2.98-.924c-.647-.204-.66-.647.136-.958l11.647-4.491c.537-.194 1.006.131.951.078z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background:'#3ECAB4'}}>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <circle cx="7" cy="7" r="3.5" stroke="white" strokeWidth="1.8"/>
                  <circle cx="13" cy="7" r="3.5" stroke="white" strokeWidth="1.8"/>
                  <circle cx="7" cy="13" r="3.5" stroke="white" strokeWidth="1.8"/>
                  <circle cx="13" cy="13" r="3.5" stroke="white" strokeWidth="1.8"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-sm tracking-wide">BEAUTY SHAPE</div>
                <div className="text-xs text-gray-500">Косметологическое оборудование</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">15 лет на рынке. Прямые поставки. Гарантия 1 год.</p>

            <div className="flex gap-2">
              <a href={TG} target="_blank" rel="noopener"
                className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-sky-500 hover:text-white transition-all duration-200 hover:scale-110"
                title="Telegram">
                <TelegramIcon />
              </a>
              <a href={IG} target="_blank" rel="noopener" title="Instagram"
                className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
                onMouseEnter={e => { e.currentTarget.style.background='linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' }}
                onMouseLeave={e => { e.currentTarget.style.background='#1f2937' }}>
                <InstagramIcon />
              </a>
              <a href={`mailto:${EMAIL}`} title="Email"
                className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-teal-500 hover:text-white transition-all duration-200 hover:scale-110">
                <EmailIcon />
              </a>
            </div>
          </div>

          {/* Catalog */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-300">Каталог</h4>
            <ul className="space-y-2">
              {[
                ['HIFU SMAS Лифтинг','/catalog/hifu-smas'],
                ['Лазерная эпиляция','/catalog/diode-laser'],
                ['RF-лифтинг','/catalog/needle-rf'],
                ['Пилинги','/catalog/hydropeel'],
                ['Все категории','/catalog'],
              ].map(([l,h]) => (
                <li key={h}>
                  <Link href={h} className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-300">Компания</h4>
            <ul className="space-y-2">
              {[
                ['О нас','/about'],
                ['Обучение','/training'],
                ['Гарантия','/about#warranty'],
                ['Доставка','/about#delivery'],
                ['Сервисный центр','/about#service'],
              ].map(([l,h]) => (
                <li key={h}>
                  <Link href={h} className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-300">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${PHONE}`} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="text-base">📞</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="text-base">✉️</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">{EMAIL}</span>
                </a>
              </li>
              <li className="text-sm text-gray-500 flex items-center gap-2">
                <span className="text-base">🕐</span>
                Пн–Пт: 9:00–18:00
              </li>
            </ul>
            <a href={`tel:${PHONE}`}
              className="mt-5 inline-block px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 hover:opacity-90"
              style={{background:'#3ECAB4'}}>
              Позвонить
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-500">© 2026 Beauty Shape. Все права защищены.</p>
          <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  )
}
