import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { fetchCategories, fetchHitProducts, formatPrice, COUNTRY_FLAGS } from '@/lib/catalog'
import CountryFlag from '@/components/CountryFlag'

export const revalidate = 60

const CAT_COLORS = [
  '#3ECAB4', '#5B8DEF', '#F97B6B', '#A78BFA',
  '#34D399', '#FBBF24', '#60A5FA', '#F472B6',
  '#4ADE80', '#FB923C', '#38BDF8', '#E879F9',
  '#2DD4BF', '#818CF8',
]

export default async function HomePage() {
  const [categories, hits] = await Promise.all([fetchCategories(), fetchHitProducts()])

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
                {/* Счётчики */}
                <div className="flex gap-6 mt-10">
                  <div className="text-center">
                    <div className="text-3xl font-black text-gray-900" style={{color:'#3ECAB4'}}>100+</div>
                    <div className="text-xs text-gray-400 mt-0.5 font-medium">Моделей</div>
                  </div>
                  <div className="w-px bg-gray-200"/>
                  <div className="text-center">
                    <div className="text-3xl font-black text-gray-900">14</div>
                    <div className="text-xs text-gray-400 mt-0.5 font-medium">Категорий</div>
                  </div>
                  <div className="w-px bg-gray-200"/>
                  <div className="text-center">
                    <div className="text-3xl font-black text-gray-900">15+</div>
                    <div className="text-xs text-gray-400 mt-0.5 font-medium">Лет на рынке</div>
                  </div>
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
                <div key={product.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group">
                  <Link href={`/catalog/${product.categorySlug}/${product.slug}`}>
                    <div className="h-52 flex items-center justify-center relative overflow-hidden" style={{background:'linear-gradient(135deg, #f0fdfb, #e6faf7)'}}>

                      {/* Хит */}
                      {product.isHit && (
                        <span className="absolute top-3 left-3 z-10 px-2.5 py-1 text-xs font-bold text-white rounded-full flex items-center gap-1" style={{background:'#3ECAB4'}}>
                          <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                          Хит
                        </span>
                      )}

                      {/* Статус — графическая плашка с точкой */}
                      {product.stock > 0 ? (
                        <span className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full bg-green-50 text-green-700 border border-green-100">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"/>
                          В наличии
                        </span>
                      ) : (
                        <span className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full bg-gray-50 text-gray-500 border border-gray-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400"/>
                          Под заказ
                        </span>
                      )}

                      {/* Флаг страны */}
                      {product.country && COUNTRY_FLAGS[product.country] && (
                        <div className="absolute bottom-3 right-3 z-10 rounded-md overflow-hidden bg-white/90 backdrop-blur-sm shadow-sm">
                          <CountryFlag code={product.country} />
                        </div>
                      )}

                      {/* Фото или заглушка */}
                      {product.images && product.images.length > 0 ? (
                        <img src={product.images[0]} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
                      ) : (
                        <div className="text-center text-gray-300">
                          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="mx-auto mb-2 opacity-30">
                            <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5"/>
                            <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5"/>
                            <polyline points="21 15 16 10 5 21" strokeWidth="1.5"/>
                          </svg>
                          <p className="text-xs">Фото аппарата</p>
                        </div>
                      )}
                    </div>
                  </Link>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-sm mb-2 leading-tight line-clamp-2 group-hover:text-teal-700 transition-colors">
                      <Link href={`/catalog/${product.categorySlug}/${product.slug}`}>{product.name}</Link>
                    </h3>
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
        <section className="py-20" style={{background:'#f8fffe'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">

            {/* Заголовок */}
            <div className="text-center mb-12">
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{color:'#3ECAB4'}}>Логистика</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Доставка по России и СНГ</h2>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{background:'#f0fdfb', color:'#168d7d', border:'1px solid #99f4e8'}}>
                <svg className="w-4 h-4 flex-shrink-0" style={{color:'#3ECAB4'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
                Работаем с любой транспортной компанией на ваш выбор
              </div>
            </div>

            {/* Карточки ТК — единый шаблон */}
            <div className="grid sm:grid-cols-3 gap-6 mb-10">

              {/* ——— СДЭК ——— */}
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-center py-8 px-8" style={{background:'#00A651', minHeight:'120px'}}>
                  <svg viewBox="0 0 160 90" className="h-20 w-auto" xmlns="http://www.w3.org/2000/svg">
                    {/* CDEK — латиница, жирный белый, чуть наклонный */}
                    <text x="80" y="52" textAnchor="middle"
                      fontFamily="Arial Black, Impact, sans-serif"
                      fontWeight="900" fontSize="52" fill="white"
                      letterSpacing="-1">CDEK</text>
                    {/* Таблетка ОТПРАВКИ */}
                    <rect x="25" y="62" width="110" height="22" rx="11" fill="none" stroke="white" strokeWidth="2"/>
                    <text x="80" y="77" textAnchor="middle"
                      fontFamily="Arial, sans-serif"
                      fontWeight="700" fontSize="10" fill="white"
                      letterSpacing="3">ОТПРАВКИ</text>
                  </svg>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{background:'#00A651'}}/>
                    <h3 className="font-bold text-gray-900">СДЭК</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">Быстрая доставка по всей России. Постаматы и пункты выдачи в 1000+ городах. Курьер до двери.</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Вся Россия', 'СНГ', 'Постаматы', 'Курьер'].map(t => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-full font-medium bg-green-50 text-green-700">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ——— Яндекс Доставка ——— */}
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-center py-8 px-8 bg-white" style={{minHeight:'120px'}}>
                  <svg viewBox="0 0 200 70" className="h-16 w-auto" xmlns="http://www.w3.org/2000/svg">
                    {/* Оранжевый круг */}
                    <circle cx="35" cy="35" r="33" fill="#FF6600"/>
                    {/* Буква Я — белая */}
                    <text x="35" y="50" textAnchor="middle"
                      fontFamily="Arial Black, sans-serif"
                      fontWeight="900" fontSize="38" fill="white">Я</text>
                    {/* Яндекс — тёмный мелкий */}
                    <text x="78" y="26"
                      fontFamily="Arial, sans-serif"
                      fontWeight="400" fontSize="15" fill="#1a1a1a">Яндекс</text>
                    {/* Доставка — тёмный крупный */}
                    <text x="78" y="48"
                      fontFamily="Arial Black, sans-serif"
                      fontWeight="900" fontSize="22" fill="#1a1a1a">Доставка</text>
                  </svg>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{background:'#FF6600'}}/>
                    <h3 className="font-bold text-gray-900">Яндекс Доставка</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">Доставка от двери до двери по России и СНГ. Удобное онлайн-отслеживание в реальном времени.</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Россия', 'СНГ', 'До двери', 'Трекинг'].map(t => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-full font-medium bg-orange-50 text-orange-600">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ——— Деловые Линии ——— */}
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-center py-8 px-8 bg-white" style={{minHeight:'120px'}}>
                  <img src="data:image/jpeg;base64,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OWZ4uNSXwxPn88x/1aj7OPxM34Y1hVURdqrTyOOOM0EfLmiv32EYwjyxPz96nJ/EDwxH4k0SW3CbpVXcjf3a+bJ7eSznlt5o9rxttZa+vXG4FW714V8YvCDWF8ddtYv3Urfvtv8ADX5dx5kftI/XaMf8R9Pw9mPsZ+wl8J5nRS7fm2/xUlfkZ9yFFFFAkFFFFAwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAQf40Uf40Vcvhj6fqyVu/UKKKKgoKKKKAClHWkpR1q6fxr1FLZiUUUVAwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApR/epPkrT8OaHceItYt9PhU/M37ytaFGWIqRp0/ikZVq0adP2kuh6F8GPB/nSnxFeR8K37rdXtqr8o5rP0LS4dI0+Kyt0CrGtaP+7X9EcN5THKsFGH2nufmWYYqWMruowoope/419GecITisnxHosGuaZNYzqGWRcVrnGBSEVy4rDxxVKVGe0jWE3TlzRPkrWdJuNB1K4024VlaNvlaqNe0/Gbwd9qtRr9nD+8t+XVf4q8X7fjX86Z9ldTKsZKlL4eh+mZVjY4ygn9oSiiivEPSCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAQf40Uf40Vcvhj6fqyVu/UKKKKgoKKKKAClHWkpR1q6fxr1FLZiUUUVAwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiil2/SgAO77u3czV7n8HvCC6bp39r3Uf+kXHTd/DXmfw88NN4l1+JWVvs8Lbnavpa0tktYEhjGAor9K4DyL29X67Wj7q2PkOI8fy/7PEsUUynDpX7GfHAelNp9FWAgz3oPSlpD0oAqahZxX1q9tMoKSDFfMvjnw3J4Z16e18tvIkbdE1fUXBrhPil4QTxBozzwp/pNv8AMjV8Nxpkf9o4X29P4ons5Lj/AKnX5ZfCz54pe340p3K7RyKysrbdtIetfhUo8kuWR+jRlGXwiUUUVIwooooAKKKKACiiigAooooAKKKK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iioKCiiigApR1pKUdaun8a9RS2YlFFFQMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooBB/jRR/jRVy+GPp+rJW79QoooqCgooooAKUdaSlHWrp/GvUUtmJRRRUDCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAQf40Uf40Vcvhj6fqyVu/UKKKKgoKKKKAClHWkpR1q6fxr1FLZiUUUVAwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigEH+NFH+NFXL4Y+n6slbv1CiiioKCiiigApR1pKUdaun8a9RS2YlFFFQMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooBB/jRR/jRVy+GPp+rJW79QoooqCgooooAKUdaSlHWrp/GvUUtmJRRRUDCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAQf40Uf40Vcvhj6fqyVu/UKKKKgoKKKKAClHWkpR1q6fxr1FLZiUUUVAwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigEH+NFH+NFXL4Y+n6slbv1CiiioKCiiigApR1pKUdaun8a9RS2YlFFFQMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooBB/jRR/jRVy2j6fqyVu/UKKKKgoKKKKAClHWkrO1nX7HQYjNe2+pSgRNNiy024u22q6KflhRiWzIpC/eKhyAQjFdaEJVKkYxV22TNqMW2aNFLn/eoz/vVPI/L8AuvP8Ar5CUUuf96jP+9RyPy/ALrz/r5CUUuf8Aeoz/AL1HI/L8AuvP+vkJRS5/3qM/71HI/L8AuvP+vkJRS5/3qM/71HI/L8AuvP8Ar5CUUuf96jP+9RyPy/ALrz/r5CUUuf8Aeoz/AL1HI/L8AuvP+vkJRS5/3qM/71HI/L8AuvP+vkJRS5/3qM/71HI/L8AuvP8Ar5CUUuf96jP+9RyPy/ALrz/r5CUUuf8Aeoz/AL1HI/L8AuvP+vkJRS5/3qM/71HI/L8AuvP+vkJRS5/3qM/71HI/L8AuvP8Ar5CUUuf96jP+9RyPy/ALrz/r5CUUuf8Aeoz/AL1HI/L8AuvP+vkJRS5/3qM/71HI/L8AuvP+vkJRS5/3qM/71HI/L8AuvP8Ar5CUUuf96jP+9RyPy/ALrz/r5CUUuf8Aeoz/AL1HI/L8AuvP+vkJRS5/3qM/71HI/L8AuvP+vkJRS5/3qM/71HI/L8AuvP8Ar5CUUuf96jP+9RyPy/ALrz/r5CUUuf8Aeoz/AL1HI/L8AuvP+vkJRS5/3qM/71HI/L8AuvP+vkJRS5/3qM/71HI/L8AuvP8Ar5CUUuf96jP+9RyPy/ALrz/r5CUUuf8Aeoz/AL1HI/L8AuvP+vkJRS5/3qM/71HI/L8AuvP+vkJRS5/3qM/71HI/L8AuvP8Ar5CUUuf96jP+9RyPy/ALrz/r5CUUuf8Aeoz/AL1HI/L8AuvP+vkJRS5/3qM/71HI/L8AuvP+vkJRS5/3qM/71HI/L8AuvP8Ar5CUUuf96jP+9RyPy/ALrz/r5CUUuf8Aeoz/AL1HI/L8AuvP+vkJRS5/3qM/71HI/L8AuvP+vkJRS5/3qM/71HI/L8AuvP8Ar5Cf40Vj+KfF3h/wTpEmveKL/wCwadDu866aJ2jj2qSN2wHbuC7Vz95yiDLuqnYq6lKcacJtaO6v0bT1V/K6v6omE4yk0nqFFFFYmgUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH//Z" alt="Деловые Линии" className="h-20 w-auto object-contain" style={{borderRadius:'12px'}}/>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{background:'#C89A2A'}}/>
                    <h3 className="font-bold text-gray-900">Деловые Линии</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">Грузовая логистика по России. Оптимально для крупногабаритного оборудования. Страхование груза.</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Вся Россия', 'Крупный груз', 'Страхование', 'Бизнес'].map(t => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-full font-medium bg-yellow-50 text-yellow-700">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Нижняя плашка */}
            <div className="rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4" style={{background:'linear-gradient(135deg, #f0fdfb, #e6faf7)'}}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'#3ECAB4'}}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Работаем с любой транспортной компанией</p>
                  <p className="text-xs text-gray-500">Укажите предпочтительного перевозчика при оформлении — мы подстроимся</p>
                </div>
              </div>
              <Link href="/contacts"
                className="flex-shrink-0 px-5 py-2.5 rounded-xl text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                style={{background:'#3ECAB4'}}>
                Обсудить доставку
              </Link>
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
