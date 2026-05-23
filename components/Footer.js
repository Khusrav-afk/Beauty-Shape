import Link from 'next/link'

export default function Footer() {
  const phone = process.env.NEXT_PUBLIC_PHONE || '+79002747119'
  const email = process.env.NEXT_PUBLIC_EMAIL || 'b.shape@mail.ru'
  const tg    = process.env.NEXT_PUBLIC_TELEGRAM || 'https://t.me/+aPk5OJJWJoJiYjhi'
  const ig    = process.env.NEXT_PUBLIC_INSTAGRAM || 'https://www.instagram.com/apparat_kosmetolog.bs'

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{background:'#3ECAB4'}}>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
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
            <p className="text-sm text-gray-400 leading-relaxed mb-4">15 лет на рынке. Прямые поставки. Гарантия 1 год.</p>
            <div className="flex gap-2">
              <a href={tg} target="_blank" rel="noopener" className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-xs text-gray-400 hover:bg-teal-600 hover:text-white transition-colors" title="Telegram">TG</a>
              <a href={ig} target="_blank" rel="noopener" className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-xs text-gray-400 hover:bg-pink-600 hover:text-white transition-colors" title="Instagram">IG</a>
              <a href={`mailto:${email}`} className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-xs text-gray-400 hover:bg-gray-700 hover:text-white transition-colors" title="Email">@</a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 text-gray-300">Каталог</h4>
            <ul className="space-y-2">
              {[['HIFU SMAS Лифтинг','/catalog/hifu-smas'],['Лазерная эпиляция','/catalog/laser-epil'],['RF-лифтинг','/catalog/rf-lifting'],['Пилинги','/catalog/peelings'],['Все категории','/catalog']].map(([l,h])=>(
                <li key={h}><Link href={h} className="text-sm text-gray-400 hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 text-gray-300">Компания</h4>
            <ul className="space-y-2">
              {[['О нас','/about'],['Обучение','/training'],['Гарантия','/about#warranty'],['Доставка','/about#delivery'],['Сервисный центр','/about#service']].map(([l,h])=>(
                <li key={h}><Link href={h} className="text-sm text-gray-400 hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 text-gray-300">Контакты</h4>
            <ul className="space-y-3">
              <li><a href={`tel:${phone}`} className="text-sm text-gray-400 hover:text-white transition-colors">{phone}</a></li>
              <li><a href={`mailto:${email}`} className="text-sm text-gray-400 hover:text-white transition-colors">{email}</a></li>
              <li className="text-sm text-gray-500">Пн–Пт: 9:00–18:00</li>
            </ul>
            <a href={`tel:${phone}`} className="mt-4 inline-block px-4 py-2 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90" style={{background:'#3ECAB4'}}>
              Позвонить
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-500">© 2025 Beauty Shape. Все права защищены.</p>
          <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-300">Политика конфиденциальности</Link>
        </div>
      </div>
    </footer>
  )
}
