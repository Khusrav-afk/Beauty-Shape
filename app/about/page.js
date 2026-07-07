import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export const metadata = { title: 'О компании — Beauty Shape' }

const TIMELINE = [
  { year: '2009', title: 'Основание компании', desc: 'Beauty Shape начала работу как поставщик профессионального косметологического оборудования.' },
  { year: '2013', title: 'Открытие сервисного центра', desc: 'Запустили собственный сервисный центр — теперь ремонт и обслуживание полностью под нашим контролем.' },
  { year: '2017', title: 'Выход на рынок СНГ', desc: 'Расширили географию поставок — начали работать с клиентами в Казахстане, Беларуси, Узбекистане.' },
  { year: '2020', title: 'Онлайн-обучение', desc: 'Запустили формат онлайн-обучения по работе с оборудованием — стали доступны клиентам из любого города.' },
  { year: '2024', title: '100+ моделей', desc: 'Расширили каталог до 100+ моделей оборудования в 14 категориях. Открыли учебный центр.' },
]

const ADVANTAGES = [
  {
    title: 'Прямые поставки',
    desc: 'Работаем напрямую с производителями в Китае и Южной Корее. Никаких посредников — честная цена.',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    color: '#3ECAB4',
    bg: '#f0fdfb',
  },
  {
    title: 'Собственный сервис',
    desc: 'Штатные инженеры и склад запчастей. Гарантийный и постгарантийный ремонт без задержек.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    color: '#3b82f6',
    bg: '#eff6ff',
  },
  {
    title: 'Документы и сертификаты',
    desc: 'Полный пакет документов на каждый аппарат. Инструкции на русском языке.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    color: '#8b5cf6',
    bg: '#f5f3ff',
  },
  {
    title: 'Обучение в подарок',
    desc: 'После покупки большинства аппаратов — бесплатное обучение онлайн или оффлайн.',
    icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
    color: '#f59e0b',
    bg: '#fffbeb',
  },
  {
    title: 'Гарантия 1 год',
    desc: 'Официальная гарантия на всё оборудование. Устраняем дефекты бесплатно в течение года.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    color: '#10b981',
    bg: '#f0fdf4',
  },
  {
    title: 'Доставка по России и СНГ',
    desc: 'Любая транспортная компания на выбор клиента. СДЭК, Яндекс Доставка, Деловые Линии и другие.',
    icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8l1.647 9.172A2 2 0 008.626 19h6.748a2 2 0 001.979-1.828L19 8M10 12h4',
    color: '#ec4899',
    bg: '#fdf2f8',
  },
]

const TEAM_VALUES = [
  { emoji: '🤝', title: 'Честность', desc: 'Говорим правду о возможностях аппаратов. Не продаём то, что не подходит под задачи клиента.' },
  { emoji: '⚡', title: 'Скорость', desc: 'Отвечаем в течение 30 минут. Отправляем заказы день в день при наличии на складе.' },
  { emoji: '🎓', title: 'Экспертность', desc: '15 лет в индустрии. Знаем каждый аппарат досконально и помогаем выбрать правильно.' },
  { emoji: '🔧', title: 'Надёжность', desc: 'Собственный сервисный центр гарантирует, что вы не останетесь один на один с проблемой.' },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="py-16 px-4 sm:px-6 text-center" style={{background:'linear-gradient(135deg, #f0fdfb, #ffffff)'}}>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{color:'#3ECAB4'}}>О компании</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              Beauty Shape —<br/>
              <span style={{color:'#3ECAB4'}}>15 лет</span> в косметологии
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Поставляем профессиональное косметологическое оборудование по всей России и СНГ. Прямые поставки от производителей, собственный сервисный центр, бесплатное обучение.
            </p>
            {/* Счётчики */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-12 max-w-2xl mx-auto">
              {[
                { num: '15+', label: 'Лет на рынке' },
                { num: '100+', label: 'Моделей оборудования' },
                { num: '1000+', label: 'Клиентов по России' },
                { num: '1 год', label: 'Гарантия на всё' },
              ].map(({ num, label }) => (
                <div key={label} className="p-4 rounded-2xl bg-white border border-gray-100">
                  <div className="text-2xl font-black mb-1" style={{color:'#3ECAB4'}}>{num}</div>
                  <div className="text-xs text-gray-500 font-medium leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* О компании — текст */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">Кто мы</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Beauty Shape — это команда профессионалов с 15-летним опытом в сфере поставок косметологического оборудования. Мы начинали с небольшого ассортимента аппаратов для салонов красоты, а сегодня — это полноценная компания с собственным сервисным центром, учебным центром и складом запасных частей.</p>
                <p>Работаем напрямую с заводами-производителями в Китае и Южной Корее. Это позволяет предлагать честные цены без наценок посредников и гарантировать оригинальность каждого аппарата.</p>
                <p>Наш принцип — не просто продать оборудование, а обеспечить клиента всем необходимым для успешного бизнеса: от подбора аппарата под конкретные задачи до долгосрочного технического обслуживания.</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">Наши ценности</h2>
              <div className="space-y-4">
                {TEAM_VALUES.map(({ emoji, title, desc }) => (
                  <div key={title} className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-teal-50 transition-colors">
                    <span className="text-2xl flex-shrink-0">{emoji}</span>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">{title}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Преимущества */}
        <section className="py-16" style={{background:'#f8fffe'}}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{color:'#3ECAB4'}}>Почему выбирают нас</p>
              <h2 className="text-3xl font-bold text-gray-900">Наши преимущества</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {ADVANTAGES.map(({ title, desc, icon, color, bg }) => (
                <div key={title} className="p-5 rounded-2xl bg-white border border-gray-100 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background: bg}}>
                    <svg className="w-5 h-5" style={{color}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={icon}/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* История */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{color:'#3ECAB4'}}>Путь компании</p>
            <h2 className="text-3xl font-bold text-gray-900">История Beauty Shape</h2>
          </div>
          <div className="relative">
            {/* Вертикальная линия */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 -translate-x-px"/>
            <div className="space-y-8">
              {TIMELINE.map(({ year, title, desc }, i) => (
                <div key={year} className={`relative flex gap-6 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  {/* Точка на линии */}
                  <div className="absolute left-6 sm:left-1/2 w-3 h-3 rounded-full border-2 border-white -translate-x-1.5 mt-5" style={{background:'#3ECAB4'}}/>
                  {/* Контент */}
                  <div className={`ml-14 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-10 sm:text-right' : 'sm:pl-10'}`}>
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-2" style={{background:'#3ECAB4'}}>
                      {year}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                  <div className="hidden sm:block sm:w-1/2"/>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Сервисный центр — anchor #service */}
        <section id="service" className="py-16" style={{background:'#f8fffe'}}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4" style={{background:'#f0fdfb', color:'#168d7d', border:'2px solid #3ECAB4'}}>
                  <svg className="w-3.5 h-3.5" style={{color:'#3ECAB4'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  Собственный сервисный центр
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Ремонтируем сами</h2>
                <p className="text-gray-500 leading-relaxed mb-6">Штатные инженеры, склад запасных частей, быстрая диагностика. Гарантийный ремонт — бесплатно. Постгарантийный — по прозрачным ценам без сюрпризов.</p>
                <Link href="/contacts"
                  className="inline-block px-6 py-3 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                  style={{background:'#3ECAB4'}}>
                  Записаться на сервис
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: '🔍', title: 'Диагностика', desc: 'Полная техническая проверка аппарата' },
                  { icon: '🔧', title: 'Ремонт', desc: 'Любой сложности, оригинальные запчасти' },
                  { icon: '📦', title: 'Расходники', desc: 'Картриджи и расходные материалы' },
                  { icon: '⚙️', title: 'Калибровка', desc: 'Настройка под ваши процедуры' },
                  { icon: '🛡️', title: 'Гарантия', desc: '1 год на всё оборудование' },
                  { icon: '📞', title: 'Техподдержка', desc: 'Долгосрочное сопровождение' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="p-4 rounded-2xl bg-white border border-gray-100 hover:border-teal-100 hover:shadow-sm transition-all">
                    <span className="text-xl mb-2 block">{icon}</span>
                    <p className="font-semibold text-sm text-gray-900 mb-1">{title}</p>
                    <p className="text-xs text-gray-500 leading-tight">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Гарантия anchor */}
        <section id="warranty" className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <div className="rounded-2xl p-8 text-center" style={{background:'linear-gradient(135deg, #f0fdfb, #e6faf7)'}}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{background:'#3ECAB4'}}>
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3" id="warranty">Гарантия 1 год на всё оборудование</h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-6">Каждый аппарат продаётся с официальной гарантией 1 год. После её окончания — постгарантийное обслуживание в нашем сервисном центре по выгодным ценам.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contacts"
                className="px-6 py-3 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                style={{background:'#3ECAB4'}}>
                Задать вопрос
              </Link>
              <Link href="/catalog"
                className="px-6 py-3 rounded-xl font-semibold text-sm border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors">
                Смотреть каталог
              </Link>
            </div>
          </div>
        </section>

        {/* Доставка anchor */}
        <section id="delivery" className="py-16" style={{background:'#f8fffe'}}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{color:'#3ECAB4'}}>Логистика</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Доставка по России и СНГ</h2>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">Работаем с любой транспортной компанией. СДЭК, Яндекс Доставка, Деловые Линии и любой другой перевозчик — на ваш выбор.</p>
            <Link href="/contacts"
              className="inline-block px-6 py-3 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-opacity"
              style={{background:'#3ECAB4'}}>
              Уточнить условия доставки
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
