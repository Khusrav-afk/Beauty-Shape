import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { categories, getHitProducts, formatPrice } from '@/lib/catalog'

export const dynamic = 'force-dynamic'

const CAT_COLORS = [
  '#3ECAB4', '#5B8DEF', '#F97B6B', '#A78BFA',
  '#34D399', '#FBBF24', '#60A5FA', '#F472B6',
  '#4ADE80', '#FB923C', '#38BDF8', '#E879F9',
  '#2DD4BF', '#818CF8',
]

export default function HomePage() {
  const hits = getHitProducts()

  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="relative overflow-hidden" style={{background:'linear-gradient(135deg, #f0fdfb 0%, #ffffff 50%, #f8fffe 100%)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6" style={{background:'#f0fdfb', color:'#168d7d', border:'1px solid #99f4e8'}}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{background:'#3ECAB4'}}/>
                  Собственный сервисный центр
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
                  Профессиональное{' '}
                  <span style={{color:'#3ECAB4'}}>косметологическое</span>{' '}
                  оборудование
                </h1>
                <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-lg">
                  HIFU SMAS лифтинг, лазерная эпиляция, RF-омоложение и многое другое. 100+ моделей в 14 категориях. Доставка по России и СНГ.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/catalog"
                    className="px-6 py-3 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                    style={{background:'#3ECAB4'}}>
                    Смотреть каталог
                  </Link>
                  <Link href="/contacts"
                    className="px-6 py-3 rounded-xl font-semibold text-sm border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors">
                    Оставить заявку
                  </Link>
                </div>
                {/* Счётчики — без гарантии */}
                <div className="flex gap-8 mt-10">
                  {[['100+','Моделей'],['14','Категорий'],['15+','Лет на рынке']].map(([num, label]) => (
                    <div key={label}>
                      <div className="text-2xl font-bold text-gray-900">{num}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <div className="w-72 h-80 rounded-3xl flex items-center justify-center" style={{background:'linear-gradient(145deg, #3ECAB4, #20b09a)'}}>
                  <div className="text-center text-white p-8">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="mx-auto mb-4">
                      <circle cx="28" cy="28" r="14" stroke="white" strokeWidth="3"/>
                      <circle cx="52" cy="28" r="14" stroke="white" strokeWidth="3"/>
                      <circle cx="28" cy="52" r="14" stroke="white" strokeWidth="3"/>
                      <circle cx="52" cy="52" r="14" stroke="white" strokeWidth="3"/>
                    </svg>
                    <p className="font-bold text-xl tracking-wide">BEAUTY SHAPE</p>
                    <p className="text-sm opacity-80 mt-1">Косметологическое оборудование</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages — без гарантии, она есть в блоке сервиса */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: 'Доставка по России и СНГ',
                desc: 'Любая транспортная компания на выбор клиента',
                icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8l1.647 9.172A2 2 0 008.626 19h6.748a2 2 0 001.979-1.828L19 8M10 12h4',
              },
              {
                title: 'Документы',
                desc: 'Сертификаты качества и инструкции на русском',
                icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
              },
              {
                title: 'Обучение',
                desc: 'Бесплатное обучение после покупки большинства аппаратов',
                icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
              },
            ].map(({ title, desc, icon }) => (
              <div key={title} className="p-5 rounded-2xl bg-gray-50 hover:bg-teal-50 transition-colors">
                <svg className="w-5 h-5 mb-3" style={{color:'#3ECAB4'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={icon}/>
                </svg>
                <div className="font-semibold text-sm text-gray-900 mb-1">{title}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{color:'#3ECAB4'}}>Ассортимент</p>
              <h2 className="text-3xl font-bold text-gray-900">Категории оборудования</h2>
            </div>
            <Link href="/catalog" className="text-sm font-medium hidden sm:block hover:underline" style={{color:'#3ECAB4'}}>
              Весь каталог
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {categories.map((cat, i) => (
              <Link key={cat.slug} href={`/catalog/${cat.slug}`}
                className="group p-4 rounded-2xl border border-gray-100 bg-white hover:border-teal-200 hover:shadow-md transition-all duration-200">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                  style={{background: CAT_COLORS[i % CAT_COLORS.length] + '20'}}>
                  <div className="w-3 h-3 rounded-full" style={{background: CAT_COLORS[i % CAT_COLORS.length]}}/>
                </div>
                <div className="font-medium text-xs text-gray-800 leading-tight group-hover:text-teal-700 transition-colors line-clamp-2">{cat.name}</div>
                <div className="text-xs text-gray-400 mt-1">{cat.count} тов.</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Hits */}
        <section style={{background:'#f8fffe'}} className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{color:'#3ECAB4'}}>Популярное</p>
                <h2 className="text-3xl font-bold text-gray-900">Хиты продаж</h2>
              </div>
              <Link href="/catalog" className="text-sm font-medium hidden sm:block hover:underline" style={{color:'#3ECAB4'}}>Все товары</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {hits.map(product => (
                <div key={product.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-200 group">
                  <div className="h-48 flex items-center justify-center relative" style={{background:'linear-gradient(135deg, #f0fdfb, #e6faf7)'}}>
                    {product.isHit && (
                      <span className="absolute top-3 left-3 px-2 py-0.5 text-xs font-semibold text-white rounded-full" style={{background:'#3ECAB4'}}>Хит</span>
                    )}
                    {product.stock > 0
                      ? <span className="absolute top-3 right-3 px-2 py-0.5 text-xs font-semibold rounded-full bg-green-50 text-green-700">В наличии</span>
                      : <span className="absolute top-3 right-3 px-2 py-0.5 text-xs font-semibold rounded-full bg-gray-100 text-gray-500">Под заказ</span>
                    }
                    <div className="text-center text-gray-300">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="mx-auto mb-2 opacity-30">
                        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5"/>
                        <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5"/>
                        <polyline points="21 15 16 10 5 21" strokeWidth="1.5"/>
                      </svg>
                      <p className="text-xs">Фото аппарата</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-sm mb-2 leading-tight line-clamp-2">{product.name}</h3>
                    <p className="text-xl font-bold text-gray-900 mb-3">{formatPrice(product.price, product.priceFrom)}</p>
                    <Link href={`/catalog/${product.categorySlug}/${product.slug}`}
                      className="block w-full py-2.5 rounded-xl text-center text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                      style={{background:'#3ECAB4'}}>
                      Подробнее
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== СЕРВИСНЫЙ ЦЕНТР ===== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">

          {/* Заголовок с акцентом */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5" style={{background:'#f0fdfb', color:'#168d7d', border:'2px solid #3ECAB4'}}>
                <svg className="w-3.5 h-3.5" style={{color:'#3ECAB4'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                Собственный сервисный центр
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Ремонтируем сами —<br/>
                <span style={{color:'#3ECAB4'}}>без посредников</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Не сторонний подрядчик, а штатные инженеры и склад запасных частей. Ремонт быстро, с гарантией и по прозрачным ценам.
              </p>
              <Link href="/contacts"
                className="inline-block px-6 py-3 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                style={{background:'#3ECAB4'}}>
                Записаться на сервис
              </Link>
            </div>

            {/* 3 карточки: гарантия / постгарантия / техподдержка */}
            <div className="space-y-3">
              {[
                {
                  title: 'Гарантия 1 год',
                  desc: 'На всё оборудование с момента покупки. Устраняем производственные дефекты бесплатно.',
                  icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                  color: '#3ECAB4',
                  bg: '#f0fdfb',
                },
                {
                  title: 'Постгарантийное обслуживание',
                  desc: 'После окончания гарантии продолжаем обслуживать по выгодным ценам. Оригинальные запчасти в наличии.',
                  icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
                  color: '#3b82f6',
                  bg: '#eff6ff',
                },
                {
                  title: 'Долгосрочная техподдержка',
                  desc: 'Консультируем по эксплуатации и настройке. Связь по телефону, Telegram и email.',
                  icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
                  color: '#8b5cf6',
                  bg: '#f5f3ff',
                },
              ].map(({ title, desc, icon, color, bg }) => (
                <div key={title} className="flex items-start gap-4 p-4 rounded-2xl" style={{background: bg}}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{background: color + '25'}}>
                    <svg className="w-4.5 h-4.5" style={{color, width:18, height:18}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={icon}/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900 mb-0.5">{title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Аккордеон — виды работ */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-lg font-bold text-gray-900">Виды работ сервисного центра</h3>
              <span className="text-xs text-gray-400 font-medium">— скоро здесь будет полный прайс</span>
            </div>
            <div className="border border-gray-100 rounded-2xl overflow-hidden">
              {[
                { title: 'Диагностика оборудования', desc: 'Полная техническая диагностика аппарата с выдачей заключения.' },
                { title: 'Ремонт любой сложности', desc: 'Используем оригинальные запасные части. Сроки и стоимость уточняйте у менеджера — здесь появится подробный прайс.' },
                { title: 'Замена расходных материалов', desc: 'Картриджи, наконечники, манипулы. Все расходники в наличии на складе.' },
                { title: 'Калибровка и настройка', desc: 'Настройка параметров под конкретные процедуры. Проверка мощности и точности показаний.' },
                { title: 'Профилактическое обслуживание', desc: 'Плановое ТО для продления срока службы. Рекомендуем 1 раз в год.' },
                { title: 'Консультация по эксплуатации', desc: 'Помогаем разобраться с настройками, протоколами и техническими вопросами.' },
              ].map((item, i) => (
                <details key={i} className="group border-b border-gray-100 last:border-b-0">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                    <span className="font-medium text-sm text-gray-900">{item.title}</span>
                    <svg className="w-4 h-4 text-gray-400 transition-transform duration-200 group-open:rotate-180 flex-shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">{item.desc}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery */}
        <section className="py-16" style={{background:'#f8fffe'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{color:'#3ECAB4'}}>Логистика</p>
              <h2 className="text-3xl font-bold text-gray-900">Доставка по России и СНГ</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto">Работаем с любой транспортной компанией на ваш выбор. Согласуем способ при оформлении заказа.</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5 mb-8">

              {/* СДЭК */}
              <div className="p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-shadow">
                <div className="h-12 flex items-center mb-4">
                  <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 w-auto">
                    <rect width="120" height="40" rx="6" fill="#00A651"/>
                    <text x="12" y="28" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="22" fill="white" letterSpacing="1">СДЭК</text>
                  </svg>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">Быстрая доставка по всей России. Постаматы и пункты выдачи в 1000+ городах.</p>
              </div>

              {/* Яндекс Доставка */}
              <div className="p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-shadow">
                <div className="h-12 flex items-center mb-4">
                  <svg viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 w-auto">
                    {/* Яндекс лого — красная буква Я + текст */}
                    <circle cx="20" cy="20" r="20" fill="#FC3F1D"/>
                    <text x="8" y="28" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="24" fill="white">Я</text>
                    <text x="48" y="17" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="13" fill="#1a1a1a">Яндекс</text>
                    <text x="48" y="33" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="13" fill="#1a1a1a">Доставка</text>
                  </svg>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">Доставка от двери до двери по России и СНГ. Удобное онлайн-отслеживание.</p>
              </div>

              {/* Деловые Линии */}
              <div className="p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-shadow">
                <div className="h-12 flex items-center mb-4">
                  <svg viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 w-auto">
                    {/* Синий прямоугольник + белый текст */}
                    <rect width="200" height="40" rx="6" fill="#005BAA"/>
                    {/* Стилизованная стрелка-грузовик */}
                    <path d="M10 28 L10 16 L20 10 L30 16 L30 28 Z" fill="white" opacity="0.3"/>
                    <path d="M14 28 L14 18 L20 14 L26 18 L26 28" stroke="white" strokeWidth="1.5" fill="none"/>
                    <text x="36" y="26" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="14" fill="white" letterSpacing="0.3">ДЕЛОВЫЕ ЛИНИИ</text>
                  </svg>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">Грузовая логистика по России. Оптимально для крупногабаритного оборудования.</p>
              </div>

            </div>

            {/* Любая ТК */}
            <div className="flex items-center justify-center gap-3">
              <div className="h-px flex-1 bg-gray-100 max-w-xs"/>
              <p className="text-sm text-gray-400 text-center">А также любая другая транспортная компания на ваш выбор</p>
              <div className="h-px flex-1 bg-gray-100 max-w-xs"/>
            </div>
          </div>
        </section>

        {/* How to order */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{color:'#3ECAB4'}}>Просто</p>
            <h2 className="text-3xl font-bold text-gray-900">Как сделать заказ</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { n:'01', title:'Выбираете аппарат', desc:'Изучите каталог. Поможем с выбором под ваши задачи.' },
              { n:'02', title:'Оставляете заявку', desc:'Нажмите "Купить в 1 клик". Форма займёт 10 секунд.' },
              { n:'03', title:'Менеджер звонит', desc:'Свяжемся в течение 30 минут, обсудим доставку.' },
              { n:'04', title:'Получаете аппарат', desc:'Доставка по России и СНГ + бесплатное обучение.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-teal-50 transition-colors">
                <div className="w-12 h-12 rounded-full text-white font-bold text-lg flex items-center justify-center mx-auto mb-4" style={{background:'#3ECAB4'}}>{n}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-4 sm:mx-6 lg:mx-auto max-w-5xl mb-16 rounded-3xl overflow-hidden" style={{background:'linear-gradient(135deg, #3ECAB4, #168d7d)'}}>
          <div className="px-8 py-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Нужна помощь с выбором?</h2>
            <p className="text-teal-100 mb-8 max-w-xl mx-auto">Оставьте заявку — перезвоним и подберём оборудование под ваши задачи</p>
            <Link href="/contacts" className="inline-block px-8 py-3 bg-white font-semibold text-sm rounded-xl hover:bg-gray-50 transition-colors" style={{color:'#168d7d'}}>
              Оставить заявку
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
