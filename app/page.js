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
                  <img
                    src="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAKIAlgDASIAAhEBAxEB/8QAHAABAAICAwEAAAAAAAAAAAAAAAEIBgcCBAUD/8QASxAAAgEEAQIDBQQFBwoFBAMAAAECAwQFEQYSIQcxQRMVIlFhCBQycSNCVJGSJFJigbHB0RYzNENVcnOTobImNTZTghdEY+ElRaL/xAAbAQEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EACwRAQACAgEEAgICAgICAwAAAAABAgMEEQUSITETQRRRIjIGIzRCFSRDYYH/2gAMAwEAAhEDEQA/AK1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTLACdEGY8eyZAAGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI2ScRxyz9OS7vWyG9RaXd7GpPtFbl6H0uLe4tnSlWpuPWk/I53vxPBWnKN9TaUUtI4jp1Jy6/P0B048MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAByAAc8sTIGnN9WtJA50KdStWjSgvxtI0yW+OvczWJtPEMj8N+P1+Rcgo9FNulTqJy7dtG3fGXgtJ8fp3NjQhGVKHfoie94I8UhgsFTyFamuqul5r5mfX1pTvLSrZVUpRq7S2eJ2+sf+xxErzFqf6+VIHCUN05r4oSeyDMvFri9bjvJasVFqlN9S7fPZhp67S2PmxxMKnNWaW4F5kkLzJJfHMOUAADHPIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAENamiRHvLXqK+PLMQhz+Lt6GxPBfilXM5mnkZwbhF7012MFxFpK7v4UYQlNyklpLb8y2nhrx2lx7A01GCU5RX5nnetb/w4+2PtYaOGLW8sot6MKajQikowXkvI+motSl6oiKa/S/PzRMunXVrzPndrTNu56SmPjwwPxl4tHP8cr16ME69KG49u7ZVe+tqtrdzs6ycakX6l46sYKK6kpQ/WXzK1ePHEpY3LvK28GoTe3pHrv8AH+o8W+OVPv68T5hq2XU9KXoQNup8e/LzB7mLcwpIgABjjhrxwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANpvW+44AhS6H7Rr4/Ql9npnLt7eMpR7LXb5mmfn3DantuT7P3D/ALzd+972k1DzTaLAwSS0vJGrPAzlNhc4dYmXRTrryj6s2mu3mfNutXvbNPc9HoViK+HMEbW9epJRLOXGUd9kY5z7BRz3Hq9HW5RizJG3H4kttEa6VrzU/M74M04rxaHPNji1eFJuRY2eIylS0qRcfiejzzev2guHKEJZezouai/icV5bNFfrNeq8z6b0vdjYww8vtYfjsIkiPfuiS1QwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZRikprzI2JvSXcxPrkJNyaUVuTM1qeHOXXFvfHRJpLr8n5djj4T8blyHktHdJyt4yXXL5Fp4Y+hTx6xDpxdt0KLevoeb6j1j8e8VhZaupN6zMqb4HNX2GysLig3CpTl8Rabw55jacnw9PVSKuUltb7mnvGTgVTE3k7/H0HK2b25IwXhfJLrjWYp16FSSpqXxIj7ODH1DD319u2HJbBbhcxvsoNaqLzJMf4XyO05LjKd5RqxlU6fiR70JJvSPFZ8NsVprMLvHeLxy5EMld9/QjRwh1ednsbSymMr2dVbjOLev6ioviHgK2Dz9WKi40pTLl915LZq/x14dHJ4aV/ZUuucFuWvT1PQ9E3pw5O2Z8KzdwRavKtE2k1GK7a3s4ktSh1Upx04Ppe/mQ2kfRaXi1Yl5y1eJ4AF3WwbtQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAh+ZI6W05dh78MekH0t6VS4qRtqcXKdSWlo+T7R20zZ/gZxSpmcqshXop0KD/WIG9tRgxTLvr45vdtrwa4pTwfH6VWpDVxVWzYihqffu9HxoUoRhBU1qMFqKPt1PW/1j5hubE58s2eqw44pR5uXsLXJWdW0u6SlGSaW0Vj8VuDV+M5F3FKm5202+6XkWtajP8aPH5Pg7PPYyrZXUFKPS+htd9k7pnUbYL9s+nDY1+6vMKs+HHLL3jWYg/bSdrOXdb7JFqeM5i1zOMhd204ybW+zKpeInE7zjOSqU50/5PKWoOPfse54P87rYDJU7K9rS+6yel6l/wBQ06beL5Ke0PXz/FPbK00tSSaen6g6uNu7fIWlO7t6inCaTWn5fmdlP4d+aR4q9JpPErelotHhK8zr3ttG6pVLOotwqRaOxJOOtvz8iIp9G5fj9BjtNbRMFqcxxKqHjHxaWB5BVqU4NW85N7S9TBXCKipp7TLa+KXFqXIcBX3CLrwTkmyqOQtJ2F3VsayanGTS+R9D6NvfNjiJec3cPZM8Pg/P6AblvpfoD0k+FdHkABjjgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABsMSBprv8AMjZO3rTTS9GZiY9tuOXdwWPr5XMUbSjFtSf95bbw7wVHA4GjQjTUarguvt6lXvDrOW2DzdG9u6TqQUl5aLW8X5Li8/be3sqkdyW+jfdHjOvXyW/rHhbaMViXtrqilpdiPU4wnJwltpNeS9TnHTj1bX5HiZ8Sv4/lCGR0qWtvUl6E93+FbJ18XU/xCJ4bzXiOGMc/4tZ8lxtWlKlH20YPpevUqpy7A3WCykratGUJQfZ6Lo1Ftpw7S+Zgnilwm15Fi6lWjCMbyKbc9dmeg6T1Kcc9l/Sr2tb7q1d4L+IdSwr08Pf1XKnVfQpSfkWGta8akKdSjJTpTW9opVlcdd4TJzt6icK1OXwS8jdXgn4gqtTjiMlVaqLtFyZP6r02uWvy43HWzTS3bLeb11PT2gfK3mpQUl5PyfzPrJuL1ps8has1niVt3RbzDjUhCcJU5rcZrpZXLx54g8dfPIW1P4ZPbaRY9x64N70/Q8LmuFo5rA1bOrGLrOL6Ztdi06XuTgyx58IW1hi9VMU211Pz8gepynFVsPnK9jVX4ZbUkuz2zzJLpPputl+WkTDzWSnZbhAC/LQJEzy0mOAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5kkST1tLZraeAPY4fgbrkeWhZUYvpXZvR5CjKdWFKmuqU3rSLJeBXFKeKxEMjXp9deut91rpKrqu/GrTwl6uvOSWnec8AynG6rcqM50vPaR5HEeT5bAXyr2lSp0J7lFvyLh5LGW2RtpUr6nGsmtLa8jRfif4WXFq532FfXCXxSpqPkUmt1TDsR2ZE+2pbF5hn3hz4kYvkFGFCvUjC6S0036mwYtLU4tSg++0UlpO8wt91U5TtriL7o3L4WeLCio2GZfd/CptkLqHR/HyYvSRr7nE9tm9+2+qElonZ1Mdc299axr2tSM4S7ppnb1pd33+R5nJjmk8Sta3ix5d2RNqMU1HqjLzJ7Py7v1QXZv1XyNKzMTzBavLVfjN4f08tYVcjj6SVxCHUkl5srrKN1i8xHTnSr0X39Nl3GlJtSSlF+jNK+N3h7C5jLLY2Hs6iW5RivM9V0nqXdHxZJVGzrzE90PX8IOe08zYwsLyoo3EdJbfmbWi3GcZbTi15lIsZkL3DZKNaMpUKtKXePzLQeE/NLbkOKp0qtRRrwjrTfmcurdL7f9mP031tr/AKyz2Xeba8jhPT11eRKfZpLuydLo6ZPX1PNxPZPKzjttHDSXj5xCNW2hk7SnucG3PS+hoGip6m6i1KL1ou1nLCnf2FW0qRUlUjpMqb4lcfr4LkFSmov2Upb8tHuuhdR769kqHqGrxbmGMKXUtgdttIHrInlU29gAMtQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFbnr00YmQJhPpck/LRDlDv3Z9rS2qXt1StbeLlKpLT+iNMtorSbS2pTvniGX+EHF6+ZztO4nTcqUZfItbZ21Gyt6dvRilGEUlow/wj41S49gqb6eupUjt9a8vUzaC1592fNusb058sxHqHp9HXjHXmXKHxeZ860V3ptKUJeaZ9d/TRxSW9lLW01nmEy0ctXeJnhdYZiErqwShcPv2Wu5X3kuDvsBfOjf0KkHF6jNJl0nFeaSRjvLuKYvkdlOld0YuprtNruj0XT+szX+GT0r9jU/7VV38PPETI4C4hSr151Lba7N+SLGcS5Ti+QW6uLO4i5a/C3orZ4geHuS4/cznRoyq229p69DwON8jyHHbqNWynKEU+9PekWmzo4dyndj9omPNkx24sueqnxNyWmzma38OvEfG5+1p0rusqV09LTfbZsOnNPzcZfWL2eS2tPJgtxaFvhzVyen2gtzR86tKlcxnb14qUZLXc5PUo/C2RJeXfv8AMj0tNZ5h0tXnwrv41cAdnc1craUt00+6ivma14pmr3jGZhWpTnGCl8US4+Ss7e+tp0LqCqQkmtNFavFzgtfCZGrdWtOdS2m29teR6/pm/GenxZFLs69qX7qt8cC5XacjxNOdOrFXCjtrZk9OW/gn5+jKfcA5VccdydOcJv2W1GSb8i0/Fs5aZzG0bq2qKculdSTKzqfTbYrTaseE3XzxMRE+3tSlGjONSo/gp92Vw+0LmrK9y/s7ZRcl2ejcviTyK3wmAuKrn+lqQ6acX6sqdkru5y+XdVx6qtSfaPp5k7oOtas99vTh1HLHHEOmlpL5vzB7nJOM5PDW9rc16Mui4g5Pt5dzw3KO1p7Xqe3x5KXj+MqC1ZjzIADq1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZiOQHf0JJS1Fv/oYr7Y558PlNqFPstts214DcSlkcjTylen+ji0u6+RqiE32qKG1F90bj8K/E7GYawhj7m3dLcu8tpFP1acs45jGnasUrfmVgY0+jpp09KEUkfbWn8zxMByLEZeipWV/Sbl+q3tnsqSUujTlr1Pm+fFkrae6HpMd6zXwljZDffT7HOK/pIj+naJQHBb1U+FejQa6X38g31LT7r6mOf0T5dHJ2FvkISoXFKNSm1rbWzSPiZ4TSpxnksLDqprbcEjfb/D067HGelRcZQ2n2afkWWn1HJrz7RcuCLQpFF3+KvvwVLatTltenc3F4W+LCozhj8vNyk+3XJmb+I3hrZ5+3nc29JU6+m49K13/qK6cq49keP3rtruhNSi/xxWj1WPLr9Qx8T7Vc1yYLcwuLjsja3lvGra1Y1IzW+z8jtp7KpcA8Qcnxu4owq3CqWfV+kUlt6/NliuIcsxnIbOFS2uIKbX4Wzzu/0u+vPdEcwsMO5F44ZKoRk9P8zzM7jLbO4utZ3VKO2motr6Hot60ntv6Cq1UikoNNfIq8WS2K0TCXbHW1fKo3iRwy647lKrVKTt5SaT12R2/CnnNbi2WpW9xNytZSW9vsiyPL+OWfIsTVtbqknVcX0OPZ7Kn8643c8dytSyuPw9Tcfme36btU3admT2pNmk4p5hkvi/zZciy3sbeTVvSipLT7NtE+C/E62azcLytTfsoPfdGCY22nkL2lZ0oOVSbST9S2nhjx2GA47Qi6fTWnHctm3UstNLF20aa+O2e/8nDxB45b5fi9W2jRj7W3jqnpemtlT8lY1cZfVbS5g4yjLS2XeklGfVpNa6Xv12V9+0LxB0rv3pjqMlKb3P1XmQei9UmcnbeUjd1YrHhpxPfoCU4uCX6yWpfmcVts9vzFvMKK3hID7eYMsRPIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExa9UARxlKUWpRW2+2iYrUJSl/UZF4dYKtn8/QpQpuVJSXV2Iu3njDTudMOPvsyLi3hblc/gXkqT6NraTRj3IOG57DVZRr2spQivxJFtMJjaeLxlGyoQUIxiupI+t5j7O9i6NzQhODWu6PG269aMvn0uq9Pjt5hTLFZnIYq46rWvVpTT/C5M2Xw3xjv7WcLbIrr6fObM/5j4RYjJdVWzowo1H6o1Fyzwxz2GlU9jS9vRj5NepOrn1Nyv8AL25zXLhnw35x3n+EzPTGVxCEn9TLYToVoRlb1VKL8nspFRlkMZXe4VLWafntmb8V8U87iXThcXMrihDsk/kQdnoUTHOKXfFuzHiy1fU1HT7g1txLxZwmYhGndNW1T1b/AP2bAsr62vIKVtVpTTW01NHndjSy4J4tCfj2a2dknuodMtM+fxxl8aWvozlpp7USLMO3dEx5Qnvs3rR4XLOLYzkNtOjXoR9q1+PR78umX4l3C/B0+h1xZ74p5rLnbHGSOFU/Ejw5v+PXFSpbUpVrd93r0RinH89keOXkatKpOOn3hsube2dtd0J0LmlGpTmtSTXmjSniZ4SxqSqZLERVPXfpR63R6tTPT48yqza1sc81ZN4c+JtjmbWnb3lSNO5a7bZsmFfqpRq0pKcZfIpLXp32Kyn6T2lGrTfaXdG2vC/xXq2nRjMzN1E2lGb9Dlu9Gi/88TbX2557bt8ZW9o2VrUva0+hUouXcqV4oZ98g5LXuotOEZNLX5mzvHDnVGrj6WNxl13qrc3H5GoeJYepms1SsqUHJTnuf12Sumac6uOb5PbntZIy37atl+AXDZXV68veUv0cNOm2vN7LD05J6g46UVpI8fieMpYjC29hSpqHRFN6+qR7Gt92eb6ptznyT+ljqYu2HOajKkkvM8jlmLoZjC1bWUFKfQ9dj1fJ7OOuluS835kDDknHaLQkZMfdExKl3M8FXwWdr2tRNdUnJfkeLDqTLE+PvD1f2jy9pS1cQjpyRXrplt0JLpqwfxM+mdK24z4Ynny8xt4Jx28ob2Avz2C4+uUPgBKIDXnyAAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABD/EiR2h+ll3UfQxM8RyEISr14W8P1pJFnPAziEMNhvv9amva1WnF69NGofB7ik85nad9UpdVCL30tdi0tnRjb0I29OKjCmtKK8keK69vz/Ssrzp+v9y+3ecmv1mFren6diU2pdXr8yNep42Z5XkRERwipFa7bPlVpRq0vZ14dVP5NH28idvWmzat7V8xJalJhhPK/Drj2aptu3UJP1UDUXLPBzJWEalbFbq097jH5L+osmRJbjqEn9UWmt1fNh8TPMIOXSi/pSK+xuSxddwvredFp+emevxvnGbwdVSheVakF5LfoWnz3FsRmouN1j7ecvWUomq+Z+Cq6ZVMdNU990oF/h6rrbMduSEK2tkxeYdriHjTZV4wp5SD6vLbTNp4bkWLykE7K6jUb+TRUfkHDs3g6jUredWKfm1s6uJz+Uw9WM8fe3FJp949WjGbo+DPHdiliNq1fFl14v8AnEpleeIeM9xbRhRzClU8k5SNtca5xgs4koXcacn/AEkUGx0nPi+vCfg3Kz4ZY/nrf0ONSEVF9K60/OJxhOTj1W7hVp+svPRz3rU4yS+aK3ttSUr+NmAc98N8XyG1rVqNKNG41tNL1K38q41k8Ddulf0nCKl+jmXLr1Ia6+613fyK4faE5Nb5TLLH0Yxl7La2vTueq6JtZbz2z5hU7uKtZ5hqucp3Eumc5Tmvhi2WE8AeHxsLFZW6gnUn3jtGpvCzjdXP56jT9l1UqbU5Nrs9FscVZU7K0o29KCjCEV8K8iT1vqHbXsj256WCZtzLtx+v4v7iTk9NdWu/kQeJmeZ5ledvaAEPzMQW8urlLOF9ZVLacepSWtFTvFXjlfj3JalTo6aVR/4st221FyT7+hr3xl4tHkXHqlWFKPt6Sb6tdy/6JvTgy9sz4V27r91eVWOlR7J733B9K9vUtriVKotThJxaf0Pmm505aWmmfSKZa5KxMPOzHbPEgD8wIny0ngABswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7aezM+IA++OtJX9/Rs4/wCskkzrwl0Jt+TPV4xloYPK0772Srae9PvojbNpikxDfH/aOVpPC/jdPAYKjqCUpRXfRmH6zfzNH4fxzt1GNO5s3GCWuzSMsxfi3xm9S9pJ0ZeWnLzPn3UNDYvkm3D0etsY614bFDZ4FjyvCXyTt8hSjv5s9ajdW9ZdVO6pVPqiovq5Ke4S4y1t5iXZJIj1Nd4qS+jDqJfCqcv3nCaWj6dO+EnGPSpNxe36hbl5yUfzRPdPstr5ow2iyZaa+TOMk1+J9S+pyXS/xQf7xoRPDNuJh0L7GY2+i43FtCW1p7SNdcx8IMTkYSnj9UKnmkv/ANG1O3yQaJuvv5sM81lFvr0v7hUblXhtn8NOf8nlVpR2+rp8kYvSr5DFtewqVKcl8mXbr0KNWLjWpQnFrv1R2Ybyvw6wmcpycKUKM35dK1/Yeh1+u1v4ywgZtO1Z5o0fw/xUzWI6I3NSVamn3i++0bi4n4qYDLW0YXFRUa8n5OSNV8r8H8nj/a17LdSnBb157NeX9pksXLouaFWj0v8AEuxMtqam5HNfbh82XF7haXxK5Za4jjFS4t60ZSnHUdP5lWKtatlMrUrVW5VLieo7+vY4XORuq9OMZ3NapSS8pzbX/U2B4HcQlls1DI1obp03vTXb5nemtj6dhmzlOS2xaG3fBjiXuHBU61aH8orRUt69DYdPcN9XqSo9PRCEUoQj0rSOWjxG5sznyTaV7gxxSsI9NBiUuhdfyOhmL6njsVWyFeSjpbSZHx47ZLcQ73tERzLvJg1rwTxDtszlbqyqTSkqiUDZMUlNRb7P1O2xq3wTxZpiyRZPbsn6dzhcQVWnOmluElpn0koxekcThS01nmG9q90cKxeOfE6mI5A8jQh029Xy0u2/U1nJzTbiuzZcLn+BhnsJcW0oRcox3FtFSs3jauJy1WzuE49EnrZ9B6LvRlrFZ9w83vYOyeXUe99yCZvqk5fMg9NHHKt48AADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxyEPWu5JDXVKNNLbm9I1m8VjmW1ffD0+O4atnstQsaCb6pJNpGycj4I5mjSVS1nF9UU2toyfwA4Z9zoe860dN91tfU3Oopx6vTyPGdT63NcvbRda2l3V5lUfL+G/JbOXT7GUkvktngXWFy9rV6K9pXTj5NRaLpVIxk9OKf9R17nF425pNXVrCpL0bj5Ii0/wAg4j+UNr6Ez/VS5Vcnay/zleml+Z6VjyzN2UV7C+qpJ+TZZ/IcA4zfKXtLGHf+iYxlPBXCXMZSs3Giv5vZEvH1bWy/2hzjVy0asxHizyG1SjUryml8zLMV46VKajTu6XU15vR1sx4H30FL7lXX07oxDI+FvI7Cco+wlV6f1l32de3RzfpjnNVuXF+MHG7yC+9ScH+TMoxfNeP3ii6N5TUJfh2yqF9x3MWcnGtj6r18os8+pO8tWk4V6bXp0vscr9G18sfwlv8Al3r4ldqOQs68VKhd0pb+UkdiFSMl2kn+RS+w5FnbOO7XIVaf5vRkWL8VOVWbX8unPXn8RCyf49b/AKy7U3o+1sNnJtfMr3ifHO6pJLIW0qvzemzLcV41cfrtRr03Df8ARZAydF2KfSRXbpLa35dxqLfxrRiWO5/xq96XTvlBvyT0v7z3rfJ2V33o3tGX/wA0Qr6eWk8TDv8AkUtHt3KsYt6ilNfzWvM054+XWGtsa6UrelGvL5eZtbLZKhjMbXvp1KTVGPVtSTKk8+z9XkGeubiq3qEvg+vcu+i62WL90+oQNzJXt7YeLiMdUyORo2lCMn7SW9Jemy2/hpgqHH+O0YdC9rOK32NUfZ94lWuJrOXcNOHaO18zfsaap04xR065vRb/AFRLGjrxEd0ucOqEel+vc5bRx7/rLsKijGPWvNnlfa2iIglpp78l5mk/tAcvlRoe7LaaW+zSZtHmGapYXBVrmrNRn0vpKi8jy1bN5u4uqrfT1PWz03Q9Gb275hV7+x2xxD5caytbE5ujfxnJKMvi+u2W94RnKWfwFG8jJOXSt6ZTLp6m4y/CzbfgHy9Y689zXE9U5vUdsuut9O+TF3V9wg6W3MW4lZBrSWvVbI0cKU9xi97i1uP5H19DwFqzWeJehpbl8qsdwevTzNEeP/EIyisxbU327y6Ub6lFSWjzOSYynlcJXsWk3JaLHpm1ODLEo+5hjJTwpQn1LqJPa5vhKnHs/c2NaDVP2moPR4z81F+UfI+m62auWkTDyuSs0twgEvzIJLmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBrfYxPoPKO35fMyvwy47U5ByCjD2UpUqbUnLXYxS2pzubyNpBb6notH4OcVjhuP07vp1OqullH1jejBi4j2naWCb35lnOIsaeNsaNlR0o9K21+R3E3H9H5pepEY6ijmvI+b5bze0zL1NKxWEdK8x1PeiQc2yNrfqS6VOT6nKSYA5azXlxcul6TloSVWS0+iUPk2cgbxktHqWIpDo18Zj7n/P2lKT/ACPGyXCOMXyl7THU1J+b6DJyGjvTby09S5Tr1mfTV2V8HsFct+whGmn9EYrlfAyrpuxuIRfpuWjfWiNE3F1jPT7cbaVZVbynhJyyy37H2daK+UtmK33EM7ZxbrY2r29VBlzun6HwuLG3rLVe2hNP+iWGL/ILc8WhwvoR9SpNGjd28umVOrSkvpo7VpyDMWU2re/rpx811FuLziXHbmMva4ql1NefQuxr3xK4PxbC4Ktd06cI1ppv0LPW6nh2b9swh5da2OOeWlr3mnIr3G1rOreVZ06semXxHDhWGrchzlC3p05TipLraWzx5wbrSp2z3uT0kWL8BeHrHYxZGtHU59+5M3s+PVwzNHDBjtkv5bI4xiqWJxNC0oJRUYrq0es9bR86f08j6Hz3NknJebS9DjpxHCJy3Lp0cKk4QW5fhj3b+R9N+i835GDeLXJocd47WgppXFWLSWztp4JzZIqZ8nZVqXx65fPIZH3ZaVk6dF93F9n6Gpe7gqa7b82fe9u53tzUr1Pxyk2/3nxPpvTtaMNIiHl9nJ32JR0nT35d9n1x91UtbqldUm4zpyT/ADPkCbkp3VmsuFZ7Z5hbDwo5LHkPHqUpVE61PUHHffsZzTe00u7XmVQ8HeVTwXIoUJS6aM2my01lcRubSneW8lKNRd9HzfrOlODLM/UvTaWf5KeXYcn1R13QlHoqdSfmfRxiu0fLzIKOJ49LCvlqPx64fDK4z3nQpbq0luWl3+ZW+SkpOnJOMovT2XjvbejeWlazrR7VE0v3FUfF/itfA8gqSpxaozk3s9r0Hf7o+Oyh6hr8TzDCwFrXYk9lEzPpST4QADYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9pbXp3B9rKj94u6VHrUVKaTb+WzW1u2OW1Y5mGfeB/Fqmbzsb2dCUraL25+iLQUbenbwha2+nRguzXzMF8PIYPjfH6FKN5SjUqRW/Iyn35h466shT0/kz551icufLPEeHodWKVq9hxelpBRfyPH9+4T9vh/ER7+wn+0IfxFH+Ll/SfXPXj29npfyHS/keP7+wv7fD+Ie/sL+3w/iH4mX9Hz1/b2Ol/IdL+R4/v7C/t8P4h7+wv7fD+Ifi5f0fPX9vY6X8h0v5Hje/sJ/tCH8Q9/YT/aEP4h+Ll/TPz1/b2el/IdL+R43v7Cf7Qh/ET79wn+0IfxD8XL+iM9f29jpfyHS/keN79wn+0IfxE+/8H/tCn+8fiZf0TsV/b2NP5ETWo9SbaPI9/YT/aFP94WexMdR940mvzM/iZefTSdir1HXUabm47iltsrX488qlkcvLHWtTqhTeppPyNq+J3NbOww9ejaXcHKdNxWmVbuZzvL/ANpKUnOrL4pNnp+jdPnH/stCv3NmLeIZd4QcVrZrkdvV6JVLeE9zfoi12Ps42VpStaEdQitPRrjwft8JguOwnVu6UatRd+/f0ZnCz+E/bofxEfrE5ct+Ijw21eyI5l7bio9l3R8/aRb0n3PJ/wAocRHvTvqbl9WTTzmJe6k8hSX9aKGNPJ9wnxnp+3oXdxTtqFS4qzUY0ouTbKq+MfKame5FUjTq9dCnLS15G1vGTndpb8eqULC5jOpOXQ+n5Fb5zqV+utLzlJs9b0Lp3bPfaFXv7MT4gXd9TWm/QkLuk/UHs+Ir6UceQAGJ/bWPCOupSnGpRT9pF77Fl/APlcMnh1jrivF1oLXS/MrV5JaPe4FnK+D5FQrU6jjTcl1FL1jTjZx+I8rDT2PjnhcuC7fMnRjeJ5VhbuwpV5XsIycVtb9dHa/yhwn7fD+I+eZNHLW0xw9Bj2a/t7M4uS3rTj5fUwTxc4zHPYObp0uu5S7JeZkb5BhdL+Xw/iFTN4CrT1K+p/xEjTx58OSJiGmxal4U0vrWpZ3tW0qxcalOTi0/ofFbabXkvM2H434Wyt86rzHXMJwqPqlr6muW1GTUovT+p9J08lrVjl5rPSOfDkACXM8yjx4AAZZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9TxJxP0D1T2009poAx75Z9O28lkJv4ruolFfD3Ijkci4/Fe1U9/M6oI/42OZ5mG8ZbR9u17xyH7dV/ePeGQ/bqp1QPw8X6Z+e/7dr3hkP26qPeGQ/bqp1QPw8f6Pnu7XvDIft1Ue8Mh+3VTqgfiY/wBHzXdr3jkP26qPeOQ/bqp1QPxMX6Pmv+3a945D9uqj3jkP26qdUD8TF+mfnv8At2veOQ/bqv7x7xv/ANuqnVIY/Exfpj5r/t2/eN/r/TqpCv7+MNq+quX5nVJH4uP9MTmt+31u7i4vKaVzcTbX12cIPoitSba9TiDauCsemtsk29u0shfpKMbuoory0yfeWR/bap1AazrUn3DaM149O57yyHre1ThDJX/U+q+q6Ot5jpMfiY/0fLf9udatOvU/S1JTX1OEW0+n9Ua0CRjx1rHiGlrTPtLIAOjUABiPB7ItqT35aGtLs9P5gGsxE+GXYjfXtNKNO8qKK9CXksj+21f3nVfmDhbVx2nnh0jLaPt3I5PIa072r+84SyOR32vquvzOsDH4uPnnhvOa8/b7Vbu7r69vUlU182fN/E9OWl+RC8gd6VikcQ4TMyAAzx55AAG3AAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEB39HpgP1tPsG9PWtkz9nCHVOW5HfxeHyuQpudpaTqL0aRztmpSOby3pS1vToR0/XRG++tM7eSxGTxq9reWs6a36o6rmpKLj6ozTLjyeayxbHavtAAOjUABjkAAYPIADMScyAAzycyAAwBGiQBGiQBzwcAAHexwAAc8s+YB3AHJ5O4AMcnAAByzwAAywAACGhokARoaJBnlsAA15acSAAcnEgAHLIAByAAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABH9vIB+QDelvWzW9oivJEcvvjLF5HJUbWjGU5Skk/oWz8NuMWuF47TjWpU6tWpFNNxXY1T4AcPVeu8td0vhT3Ha+pvLLZK2xVk6lacYRguybPE9Z3b3t8dJXungiKcsa8UuLWua43VdGnTpVYLf4PMqpf207K8qW9WLhKm9JP1LqWV1bZSzVSm1KnJdyv3j/xF2mU952lL9F36tL5s26NvWrf47yxu4I7eatTwSlvuQ00m2tHGL2lrs0+5zn1+01tKOtns6czHMypePpG05whHcpS8kkdueNyEdfySq0/J9J3OITjLk1pGpTjKHWt7LbYq0xDx1BxtbRtwW9uPyKnf351p4iEjBgi8+VPFjsg/wD7Sr/Cw8bkP2Sr/Cy5qtMX+yWX8UROzxe/9Es/3xKv/wA3efpO/Bqpl7uyH7JV/hY93XyW5WtVf/Fly/ueM/ZLP+KJwr0sNb0pVbi1tFTprq7dLOtOsXmeOGltKvHiVMri3rW6Xt6cqbfkmj5U/jqxpx25P00Zf4u563zPJqlKyiqNGm9fDE9bwS4nUzmW+8VqfXQi+zktFpfd+PD32Ra6/dbiGCLG5D4pO0qKEf1teZ1kvh2+0l5oudUwGIjZfc42NJtrW9FZ/GHi1bAckqVaVJxoVZtpLyRG0+r0zZO3l1zac0rywdPb+nqcn2+oSSU47812ITUobX4l2Lvvj2g8fRL4Y7l2PtZ2tzeyStKE635IzXww4Be8muVUrxaop77lhuO8PwmHor+S0otLzeii3er1xT219puHTm8cyq1S4lyGpDqjjauj4XXHczbR6qtjVX9Rb+VbF0J6jUto6+sT6zji72PTOFrV38nErZ63ljzw7/h1UnrQq0ZdFWnKMvk0cZtxim0Wo5t4aYbMW1V21vGlcyj+jaXqVv5XgrnjeZnZ3cW4b7Not9HqlNj+P2i5taaenkRam0oPqbetJHaljcipNKzqtfPpPT8P6cHym2SpxnFzXZ+XmW6p4qy9jSj9wt/wbb0jn1Dqv4luHTBq/JCmSx2Rev5HV7/0Tk8bfLe7ar2/osuM7fDQjpULNVE9NNxCo4f2cnKjZb/3okGOu3t6h3nQhTV2N4odX3appefwnXbUdqb6ZL0aLn1cBh720j7W0t3GTaThp/2GhfHThdrhK6urWmowl37EvT61XPk7JcMup2RzDVMpwjDcpabfZa8ztQsLypSjUpW9ScX8onXpOaq0ulKUeuKe/wAy1/hdjbKpxK3rV7GjOTgu7SJe7vfjxE8uOHX71UrijWt301qcoS+TRwfaOzaH2kbahQ5fbqhQhRi7aL6Y/maufeKRL1tj5qRaGmTF2TwJkkNaZBIyW7I5ce2Znw+9rbXF1Gbt6M6jg9NJC7tbq0pQqXNCdOMpdPdeRvL7OVnb3WOupXFrTqKElpvXyPZ8fLO1o8RVa3sqUJe07Na+RTz1SJzfGmxrTFeZVvW5NKKb29L6na925DrilaVWpevSfTj6nLM27n0uLmtpltcBaYWWFtG7S2lU6Fttr5I22962COYZxYIt7VG93ZD9kq/wj3dkP2Sr/Cy5is8X+yWf8UR9zxf7JZ/xRKqevXj/AKpH4VZ+1M/d2Q/ZKv8ACw8df6/0Sr/Cy5f3PGfsln++JE6GIpRdSrbWcIR7yacXpG9euZLTx2sW0axCmF1b17VxVxSnT6vVo+Uk0+y2vmZ/42cgt8jm52lg4dFN63GCRr9OWkpdz0WvlnLSLK7LSKTwkAElyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/IxM/ZHmCHxVZR/UXqevw/D1c3m6FpCL9nKoouSW+x5HRN040qa3OT0WD8BeJKysVkbql8euqO16lR1LdjFilN1MPfLZXFMVb4bBUrCh5RXxza00aX8fuXSr38MbZVemnT/HKL7+RtPxM5HR49x+tOE0q1WL0tlUcnd1Mhka11Xk5Ocm+/wCZQdK1pz5Zy3WGzkjDHbDfHgJzCN5ae67qUVJdlJvuzY/NMLRzODuLOsu/S5RkltvSKkcZylbC5yhc0JuMFJb0W64fmqGdwVG7hNSelGS/M59T1Z1svy09N9fJGSnEqh8lxlXFZevaVIuEVJ9La8zz2nKLTW+xvf7QvDnWh7ysKXl3k4o0Ok4x6ak+iUezPS9O2oz4Y8+VXs4OLcuVOdSlcUfuvtFW326Y7Mvt77nKWo1b/o0unUH/AIHi8On1cmtNuEoda31Mtxio433bQcY2jl0Le39CN1HZ7PdeXXVpE/as3vDnK/1l/wDwP/A4+8ud70pX7/8Ag/8AAtHKNh/Ms/3nFfcVvULP95U13omP6J0Y/wD7VfWR51/Ovu39B/4Hm5XkvKqalaV7+5gpL4oy7f3Fpcxe4zG4m4uJ07SUlFtJMqtzfMvL8gub1U4wjr2cYx8uzJ+nauaeZrwi5YmJ4iXl4+3r5TJ0LWi5VJzn8c9dy2vhrx+hgePUKNOO6sobqSa00al8AOHqtU953VLtvabX1Nzcvzdtx/D1685KLcNR/cV3Vtmc14w0dtbH8Ve+zuW2RsKl3Ozp3ClXj6djGvFjjKz+AqTa1cUovWlvZorjvOLqjz/79Vqy9hOp6vt6Fn8Ze0MvYU7ulJSp1oba/MrsupfRvXJylRmjNHCk95a1rS6r21eLhVpyaivmfbE2juspbW62lOST0bO8eOJzsco8rbU/0be3pGB8FlFcmtFU13mj1uLcjNrTaqnvg7Mq1HB8TTw2DtqVBuLlBOUtaZr/AMZ+fVcTd1MbY9Mu2uvq0zbdBRePt4w/9r+4qj4yKrHmVWFRPXU/M830/FGxsz3rLLaaYv4vCr8jzVxOdWWQrJN/h2dzA8xzWLuaVWneVai6vwt9jwJRXS0jjJxj0S16nsLaOGazXhWY9i0z5W88MuTy5FgoXFSSVWL1JJ71owv7Q2BtrnFPKKHTVgvReZ1fsyQuI4m9nW30Sb6N/wC8Zf41umuF1VPW9M8dERg3u2sreYi2Lyrf4dJvklnKe+9RLp/rLf3MYwtJ9MZdSpNR7fQqHwJ/+KbNxel7Vf2lxX/moudRaS2+5063fi9Zc9KvtV3lT5as/eSoq6VJVGo9Cb/uPJ6uZxXUoX0l67g/8Cy9znuK0K1WFSvbwqqem5NHCHIuMSjKH320W/6aN8e7aKR/rZt79vI8I537wDlkI1oT1264tGF/aNztCpSpWMPjn67NuYjM4q8ira3u6NXTbUYS2YD4xcCpZPHVstQ/zlNb0R9TLWm1zaOG2WvONW2Lg6tOKXdVI7/eW68LkpcJtUlrUEVH6VC5jBrUo1UpfvLc+FX/AKLtv9xFj128TiiUfQj+UxLXHjtxTMZzkdC4sLf2lONuot/U1wvDnk/pZf8AV/4Fnc5yPE4itG3vbqFKo49STeux58Oc8c1/5hS/iRF1OoZ8WKIrV2y62O1vMq21+A8mgpN2PeK8tv8AwMav7O8x9X2V7QdKW/ky5eGzOIy6k7WpTrp9np7NfeOXD7Gvhp5O2oxVSC29InYOs5L37MkI+TSrWOavP+zRr3VfJrfxr/tPa+0El/kZBJa79X/Q8X7MqbxF65Lv1L/tPd+0Cv8AwdD8v7iBk8b8OsTPxKy0OqPTUoKaqp9ulGY22Q5zCnSdCpfRp67KMH8vyMb45uOXt05x6XNdmy3PHp49YK1j0Wrn0Le39EXO9njHEfx5RMMTMq1vJ873/wD2X/Lf+A9587fZe8t/8N/4Fo92HziR1WG9pwb9NlTHUIn/AONNjFz9que8ue9ap7vut+nQ/wDA6eR5Dyu1lKhfXdzT2vJ+v/QtXeXWLsbSte3NOzcoxbWmVZ8T86s1yCrOjGEacZP8JZaV4zz5oi7M2r6li9WpUq1JVKs3OcvNs4egB6TDWKxxCsmZt7AAbNQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEx7rucralUrXKpQi5N+SXqcE9zSR7fCIRqcmtoSSf6WP8AaiPtX+PHNnTFXunhkHB+C5i+zdCpd2VWlbqSe5R+pZ7HWtDG4yjbUtONOK7LzZ2LejCnS1ClSSivNRSOLvaevhrUU1570fPt7eybN+2I8PQa+GMVeZaC8Zo5/OZd0aFlVdGL0komuf8AJDkKn2x1d79Okt452Tl7WdSzk384IRqWUnvrso/X2aJ+v1DJhpFYq45sFck+1QpcR5H7NxeKuPz6TbXgVXz2Ku44y8sa8bWUXtyXk9djccp2kJL9NYtP/wDGiXOxUk1O2k/PVNKL/eY2t/JnxzSas4MdMcmZx8b/ABVWzqUZOM4vz8yrPNuEZOxz1aFvZVKlu5N+W9FqI3VCc0lXSl6Jz2MlQtKlrWVejTc+jafSiH07cya1+20O2xhrevKlVOlc072nSpU5wrKo4/D2ZldGhzjpTovIdGu2pPR8KCf/ANQpa6FBXUvNdvNlqMVOzWMt47stqC3umvkek3NmYrFu3lW4cPE+1YvYc8frkf4mcPuvPZVOlPJfh3vqei1PXZ/zrL/lo8Tm2bx2HwFxXcrT2zi1FKC8tELDtTe3HYlWpFY55VVyGWz8KlSzv724TXZxlNjiGErZzOULSDcoSqfGzr5+/q5bL1biEUnOb1pG8fAHjVvbWKy17Xown1PSki1z3+PDM1hBpHdk8y2lx/E2+CwFG3pTpwhGCcm/PyNEePXLJX17LD2lWMqcH3afc214jcqtsTx+4lTrQqSlFqOmVPyF5WyN9Vu6yanOT7MqOl6V8macmRK2c9Yp21fJqUHGDf4O6a8zf/2fuXRuLb3Zc3EdwXTFN9zQEF0dUpvbZ6XFsvcYXOWt3axl09S9p3+pedT0YzYvCJrZ+2Vteb4Sln8HVs5w3Np9LRVS8tq3H+Wx+8QlD2VVqO/o2Ws43yG0y2Ht7qN1ShPpXUn+Rqf7QfHaFdwyNhcUZtLb6V66KDplL45nHb0n57VtETDbPBcxQy/H6FaFSLrxilr00a+8aeAVMvdzymPi51X3aXka28NvEK941cRoXMHKlvT8vIsDxzmuBztGMrW4pxbXdTezjl1s2pm+SkN65KZKdsqr3XGM5aVJRrWNZvfpE9Hj/Bs7mLilCdnUpUere3HuWwrQsLiK/R2c/r0ROM7jGY+j7SpVtIRX82KRInrGe0dsV8uFdakTy8fw745HAYOnZwlFVH37+ezBftDcho0cd7qpVIucl8R6XPfFnF422rULFKdx06hKLXZlfOS5q65Bk3d3M2999bNOn6OTLm+XJDbPsVpTtq7fh+1Dk1lGXf8ASr+1Fvr2alY1VCPxOm0v3FQeAuT5RaTjpONRef5ot/SvqM6EJfebdS7JrSM9ax2jJExDGlPMeZVV5hhM7PkV5ONG5lB1m1o8qWHz7e/ut0i27+4TqzclZyk3ttwiT7PH/wDt2X/LiYx9QvFYiaOuTDXn20H4K43O0uUwlVp1oUk119fqjfPJelYC9c21D2fr5eRNW4xNjTderUtaOvJxilv9xrDxf8SrKGFqY2wqRnUqLTcWR7UybOxFojhvbJSlOOWhsworN1XGcEnXWv3lsPCvtwm2fXF/AvIqLbuc69Obj1uVROTfp3LY+GNzThxK2hKvSg+hdmT+s4rTirEIuteO+fLWv2gMdkb3ldCpZ0Kk6atopuK9dms/cGd/ZK/7i3r+5VkpVpWlSS7bcUzg6WN/m2f8ESHh3smLHFez073pE29tN+AOLzFlkqtS7p1Y0GlqLNleKVSlR4fcOpqLcfKR61XI4fFQlWlcW1N67xikjR/jV4hU8nCVhaT6qfk3E0xUy7Wfv44ZvasU4hkH2cZQdhfdDSTqL/tPX+0HOMeHU/ji11af7jHfs2XHssbcqtUp06c5JxcvPyPc8fa1CfEFTt6tOrL2nkvyJFsFvzIs51vHxK1Qi5VYOjN+0Uvh6TMaFPm8o0nT+/ey0unobXoY7x7fve3cqaWp99lu+N17CeAtYR+5qfQvOC+SLTdzTiiPHKNrxFp9q1St/EBLaqZD+JkOlz5R+Kpkf4mWk3Zx852T/wDgjo8hyVhZY2tV/kbcKcpdoR9EV+LdteeOxJvXt+1UMpk+Q0ak7S+u735SjKbPF6pdT+GTT9ZeZ6vLcrPO52vepxpwk20ktHlwcZU+lz+KL/een1K1iOeFTmvaZ9oABLiPLjMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAh/DKMl/We9wHT5XbP09rH+1HhfrdJ38Be+68nTvGt+zkpa+eiJt45yY5rV1xX7bLlZCSWFupdUklB67fQqJy3LX75HdU4X9xGCm9JTaNm3fjs7vG1rX7j0uUdevyNN5S9nfZCrduko+0lvzKTp3Tpw3mbQsc21M18PsstklHX3641/xGS8vk3Hp+/XGv8AiM6ILqupjmfMK/8AIvz4d73vk9d764/5jDzGSafVfXHl6VGdJEd9/DrZn8THbniGsbF+WR8Hy2QfJsep39eXXVipJzb9S28pdeLTW21T7tr0KYYa/njcvb3ns1L2VVPzNwVPHV/d/uTs9fD07SZSb/T7ZMkdsLDBtfx7Zaq5fLfJ7zU3GSrza129WdWGWyab/l1x8v8AOMjKXcMjlKl44OPtKkn/ANTpwTab9N9i4w60Tj4tHlEtl4s7/vjJ/t1x/wAxnyuchfXFP2da6rTi/SU2zrEM2+HFSfTW17z6lx6V0pd+31O5HI38aSpQu68ILtqM2jqgkWxUvDnFrPteXd1d0lSuLmtOC8k5s+S8iCV5Gs1rTxVjmZ9o0t79SU3FTiuym9sEPzN/HHDHM8u1a5G+tqPsqN1WhD5KbIr317XoulWuq04P0c2zqhS7nL8fHWeXTvtw5Rhpa7n1pXFzS/zVepT/AN2TR8lInZm1KWjy0i1ufD0aWdy9KHTC/rpf77PjdZbJXMemte15L/iM6m1o4nKNXBzzDpOW/obk/wAUpS/3nseuyAd61rjhpPdPlMZSg9wlKL3vaemd33tkpPbvrju9/wCcf+J0WInK2GmSebQzW149O/71yW2/v1xv/iP/ABCy+T/brj/mP/E6QNfx8VvEQ3+a0e3dnlcjOLjO8ryT9HUbOnNynUVScpSkvm9gg3pr46fTSclrONaPtXuW+732ejuUslkKVFUad3XjBeSU2dOctNHKL2bzixZP7MVvNfLuwy2US0r64/5j/wASfe2U/b7j/mP/ABOm9IjaOFtfFM/xhv8ALf27VbJZCrDoqXdeS+tRnVpuUW3tyb/ndyGDtTDWn0xOS8w+1rd3dr1/d7irTU3tqM2hc3l7c0VRr3NacE96c2+58eodSMTixxbn7O6/bw4rs1ptNeWmd2OVyUVFRvK6UfLVRnTBtfDS/wDaGK5Jr6d/3xlP264/5j/xPlcZC+uFqreV5L5OozrA1/Hx1/rDPzWt7H3kpPzRPrv5kA7xFa+nPnkABs1AAYZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPXfqH38wBwD7vbD7rT8gBwzzIAAwAAR4YlK7eXbvsh95dT8/mCUYiPHLHmBtvW++vI4tS7Rj2RyPrZ21W7uYW9H8U2kaXyRSvMumOs3lkXhrw+55bkXR6p06cfOSNjZzwSVni61ejeSnOC2vL5GwfCHjVPA8dpudJK4qxT3ruZrKnDpdOr3TXTJP5niNvrN5zcR6XWLT5oo/kKE7O8qWVRP2lOWttHzk4vTj6dmbX8eeIvFZN5O3o6p1HvsjUjlpRetbZ6zQ24z4otCrzYppbhzpxdaUacOzb0bn4z4PW+Zw9pfSvalKVSLcorWjTdqnG6oyj/OLgeHC6+J2Hkn7Nld1PbthhJ1sMXlWLxK4zS4zm3aUripUit9tIxhvqmlFaXqbJ+0BBw5XLpcW9v+1GvrCyucje07O2jurUenolauz3YYvZxy4v9nEOxgsZcZnIxsbWk5Sb11JG4LDwNpzt4VKt9VU3BSa7eejLvCbgVDj1hTu7ykndySa2jZa/SNySUUonn97rNoy/w9LDDpR28ypnzjB0uP552Mas5pfQ9Xwu4fQ5bk6lGdzUpxSfbS7djs+NqT5rNwcX3Ml+zZ8XIK8UorSf9hb22rfi/Ijxhr8nDlzHwhtMJga96sjVlOn8SWl37eRp8tr4vJR4TdtxTbX9zKlepr0jcnNWZu57eDtnwJwi+qf4V5mxfC3w7tuWW1xWneVIdK7dl27mu9fMsB9miLli7trS7f3nbqO38WPuqxq4++eJYT4leGtrxXEUr2ne1ask9OLS79zXWPto3uQo2qlOn1ySbS+pYf7Rq6eL0Ukk2/P+s0Fx5yjyGzT6e81/ajhp7VsuCbt82OK37W4bDwQo3VjSvFkaiTh1OPbRqXmGHhgeQVbL2zqRj2SZcDDQS49Q+L/U+SKp+K8ermdx29f7zl0zqFs2aay6bGrWleWKwSdOVRy8vJHucJ41dcmvo0aSnCO/NI6nGcLc5rKULS1i5Lr+NL5FqPDriVjxm0pzrUYxqyivQ79V6lGCvFfbnqak3nmWt6ngdTp2v3iveTi402+la79jTOdsoYrKXFopzqdEmltF1MhCVW3uZylqPs5dO/yKd882uVXkU49qjIfSuo5NiZ5ddrWrSWT+GHh9b8vs6txVvatCUfhUUl+/udvxK8LqPFsNG8hf1aj29+XyMv8As0pTxtz1abTfkev9oeUo8TjrT7y/sE9QyV2vjhmMFYx8q1dSqx6aScdeb9TnCE61SFChBzm36Eal0dEIpTl8jcXgt4e1LiVPKXtPqpp77ouNvqEYMPM+0TDhnLZ8eFeDlXMYmF7dXE6TqpSSevhPD8U/DylxGjRqxupVE9b8u5aOnSpULX2NvDopRaUdfI0v9pbpp4+37OT0jzmj1XJnz9sp+XVilOWg9p915AiL3FPWiT2dJ5iFLMeQAG7AADIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADeml8+wJXq/kaTPEcExzDjU1NNN60bT8B+JTyeTeSrw3St9OO12ZrzA4yeYytCypJ7qSSei3HBcHQ49g7e1jBKfTub15nn+tbnZT46+5WenijjudzM5CjhsNWu6rUeiPwr5djBvDHxCoZ3JXdlczXU6nwNv6GK/aF5dN1VirSppPs9M1HxbKVcPmqFzTm10yXV3+pU63S/l15vaPKZfa7bRWFsubYSnnsLcWNRKUlFuEmu5UfkmKq4jM1bWtFpQm0t/It7xPK083g6F5Skm+hdemar+0BxGnUp++baGl06lpeqRjpW1bBk+KzXaxxenMNF2r1d0fl1FwfDVJcVsNf+2ynlKL+80Y+qmXD8NYa4pY9/wDVsmdevE0iXDp/PdMNDePFtWu+bOjbxcm5Py/NGe+C3h9HHUY5G8pxlUqrr3NbcTK7nhdG85TLKXEVKMW33/qPp4gcrs+LYd+zcYvp1FJ9yDXbtmwxhxpdsUUtNrOHPeZ2eCpK0pSjKquy+aMoxdZ18ZRrv/WUYz/etlQb/P3We5L99qzk6XX2Wy3OA08Faaf/ANtD/tRG39ONalZn3LOPL3eIVe8Z+3M5/mZX9mhJZ+5nrtp/9pivjP8A+s5/mZT9mt//AM1cR+j/ALC7v/wv/wARacfM3lyTERzWLrW1WWqVT4X9NmtpeCmB3/p//wDp/wCBsfluaWBwlW7cOpQ+LXz0ann480d/+Uv+JFFoV2+J+P0sM84ojy9KHgpgd971zXyU3t/9DNuA8QtOLW1WhZ9epfzpb9TXEfHm313xEn9FNIzrw75jR5fb1LiFlUoKP/5N+p03a7nx/wCz05a84+7+LGPtHvfHIKXnFr+0r/xlt560b7v2i/tRYH7RsYw43FJ95Nf2lfuMf+e2n/Ej/ai36X/xJRtqIjLC5WDT9x2rXpSRV7xGsbjI8+ubW1hKVSpPWl6d2Whwbawlql5ukkY7heFWdvyWvl7qCnVnLcd/mU2ntRgy359peTH31iZeb4UcEo8cxEbm5pwdepHcnJd4rzPryvnNra5i2xtGoqknLXmfHxf51R49jpWtGcfbTjrUX5L0NCcUvbnJ81tLy6m5KVXaTf1J2PWnapbLkc/mrSYpC211N1MXKptrqoyev6invOf/AFXeb/nsuFcaeLnry9g9fuKe88X/AIqvP+IzHRIiuS3Dnux4hub7NHbHXTS7bZ7P2iowXDYpPc3KXb+pHi/ZlbeMuV/SZsHm3Ho520p063eCm9oi7OWuHd7pd8OPvw8NG+D/AAOtmshTyN1Tf3dPspLs9G+srkcfxvDzknTpKlHtFdtk06VhxLAagoQp0o9W/LZXHxT5zX5HkpUrGpKNCL1JJ+ZKrF+oZO76cea4I8N++GvI5cisr26XeE6icV6Ja9DA/tNxksdZ6+h7P2c2v8lq/R5bX9h4/wBpdzWMtJv6HDXxRTe4q3y5O/Dy0EvIBPa2D3dPUPPz7AAdJYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOM3Na6JNNv0WzkcqNV0K9OoqcaiT7pnO8zHpvWYmW8Ps9cPbqPLXSl27rcfqbS57yGjgsFcV5S1JQap77bNNcf8Z54bF08db4+mnrTfxGL+JHiHf8sp0bapTVKnSbb6W++zy+bQy5tjun0tcexWmOYhiWbyNbK3ta8rNtzntbZ1FFt9Po1/1PpJxm1GK0oo4Lckku21s9JhwRXH2quc0zbltzwB5dKwuniLmbUJvUds31lrG3y2Oq2tfv7WGo9truUvsr2taXVK8otxnSkn29Tb2N8cLu1tKFP7qqkqUVuUm9vsea6h0y05ovRZ4NuvZ22a953x+tx3k/3aTnGnOrtPp+uy0Ph3KEeH2KpqU5uHd6K5+IfPf8rIwu3YU4VYP5vZknGPGa5wmHo49WkW4R1vub72nlz4orMMYc1MduYbq5pyW049jJ16lVKrryKt865Jd8mzFa9q1X7CLfQt9tH259zXJ8mu3KaSpSfl1Mxbobiqael6oldK6TGGOZ9ue1ud/h28VKP322cY9+tFy8Go+6bNQhLvbU99v6KKYW1V0K0KlNL9H3NxY3xzurbH0rZ2i3Tpqnvv6LRjq2jbLxwxq54pHlh/jbLp5pNJtd/kZR9mpr39XlTqvun+r9DXPM87V5BmnfSpRTl82en4cczq8QyLqRtactp+TfyNrat51uyCuatcvcsR4upvhV3GVR718voypdSK2bV5d4u187h69m7SMfafD5v1NT92zbpelbFXybmeLz4clGK7yel6m/8A7Mn/AJXcwhOT2/l9TQKTcdJJv5N9jPfDTxJueI0K1KNnTe/k2deqalsuPthy1MsUnmW0vtHdP+TtPqm1rt5fUr7xzpp5u0jGTlupH0+pmniH4k3HLsWrWpawgm972/RmC2F47C6o3UaMZOnJP/qR9LUviwTWXXNmrbJEroYFVHibJQXb2S22Y54ocutuM4uao1Yus15bNYWvjlc0MdC0+79PTT6U1s1lyvkd/wAivpVripLob2k2VOv0a9s/dKTl3Y7e2HU5DmLnN5GrdVqktSfq9nf4DKmuU2XdvU/keEnpKMYp/md7A5GeJyVG8VKMnCW/M9Nl1ezDNYV/zc3iVzqmlipzSenQfp9Cn3OpQ/yrvG5NfpH6G0Knjjc1aX3NWqUVTcd9/kagzeRllMlcXU6MU5SbKfpulfFeZlL2ditohvT7NLjGwrKEpOTqPyRt++vKGPtK1ze1uiMdvuir/hr4jVuGWsqVK0hU6n1b2zuc28XMnyLHToK3jTU9r8TIe30e+bY7nXFuRTHw+3jLzypmsjLG2VZytYeTT1v5mr3qNd9Pn6nBqt19U2tt7ens5yahrS22eh1tOuDHxCtyZ7Xtysl9m9t8VuI9Uk20/L+ieN9piUfdllCpOS01+qYZ4d+J9xxTFVLWFrCfS0k9vb7HS8SfEG45fQoQlaU4615yZU00LxtfImTsVnHxLBlrXby9ANNdmkn9Aeoj0rJAAZYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABKDMe5Y58oABiscTMNpAAbVqxPAABNImTn6AAOInxLMWAAO3j0xMAAM8xMcSxHIABxEQ2448gAMVn6gmeQACfXlj0AAxX0AAERxHMM93gBJBniZ9tY8gAMdsR6bRHPsBJDMxX7It54AAZ8E8wAA1iIsR68gAMsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjYEgjY2BII2NgSCNjYEgjY2BII2NgSCNjYEgjY2BII2NgSCNjYEgjY2BII2NgSCNjYEgjY2BII2NgSCNjYEgjY2BII2NgSCNjYEgjY2BII2NgSCNjYEgjY2BII2NgSCNjYEgjY2BII2NgSCNjYEgjY2BII2NgSCNjYEgjY2BII2NgSCNjYEgjY2BII2NgSCNjYEgjYAl+RBI0BAJ0NAQCdDQEAnQ0BAJ0NAQCdDQEAnQ0BAJ0NAQCdDQEAnQ0BAJ0NAQCdDQEAnQ0BAJ0NAQCdDQEAnQ0BAJ0NAQCdDQEAnQ0BAJ0NAQCdDQEAnQ0BAJ0NAQCdDQEAnQ0BAJ0NAQCdDQEAnQ0BAJ0NAQCdDQEAnQ0BAJ0NAQCdDQEAnQ0BAJ0NAQCdDQEAnQ0BAJ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k="
                    alt="Деловые Линии"
                    className="h-20 w-auto object-contain"
                    style={{filter:'brightness(0) saturate(100%) invert(65%) sepia(60%) saturate(500%) hue-rotate(5deg) brightness(95%)'}}
                  />
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
