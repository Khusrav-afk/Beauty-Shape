import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { categories, getHitProducts, formatPrice, COUNTRY_FLAGS } from '@/lib/catalog'

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
                    <div className="h-52 flex items-center justify-center relative" style={{background:'linear-gradient(135deg, #f0fdfb, #e6faf7)'}}>

                      {/* Хит */}
                      {product.isHit && (
                        <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-bold text-white rounded-full flex items-center gap-1" style={{background:'#3ECAB4'}}>
                          <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                          Хит
                        </span>
                      )}

                      {/* Статус — графическая плашка с точкой */}
                      {product.stock > 0 ? (
                        <span className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full bg-green-50 text-green-700 border border-green-100">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"/>
                          В наличии
                        </span>
                      ) : (
                        <span className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full bg-gray-50 text-gray-500 border border-gray-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400"/>
                          Под заказ
                        </span>
                      )}

                      {/* Флаг страны */}
                      {product.country && COUNTRY_FLAGS[product.country] && (
                        <div className="absolute bottom-3 right-3 w-7 h-7 rounded-lg bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center text-base">
                          {COUNTRY_FLAGS[product.country]}
                        </div>
                      )}

                      <div className="text-center text-gray-300">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="mx-auto mb-2 opacity-30">
                          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5"/>
                          <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5"/>
                          <polyline points="21 15 16 10 5 21" strokeWidth="1.5"/>
                        </svg>
                        <p className="text-xs">Фото аппарата</p>
                      </div>
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
                  <img src="data:image/png;base64,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" alt="Деловые Линии" className="h-20 w-auto object-contain rounded-xl"/>
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
