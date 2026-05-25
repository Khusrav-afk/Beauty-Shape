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
                  <img src="data:image/jpeg;base64,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AooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoooo2FcKKKKBhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAeEfty/8AJrPjf/ty/wDS2CvyV7V+tX7cv/JrPjf/ALcv/S2CvyV7V+48E/8AItl/jf5I+Dz3/eV6fqxKKKK+/PmwooooAcK94/YV/wCTp/BX0vf/AEinrwcV7x+wr/ydP4K+l7/6RT15ma/7hiP8Ev8A0lnZg/8AeKfqvzP1oooor+Yj9UCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoooo8w62AnApSuBntUlvaSXtxFBCu+SQ4AFdX408BzeGrO1ulBZWHz+grqp4WrVpurFXitzmqYiEJqDerOPyPWilAB7cYzSVy9LnRcKKKKBhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB4R+3L/yaz43/wC3L/0tgr8le1frV+3L/wAms+N/+3L/ANLYK/JXtX7jwT/yLZf43+SPg89/3len6sSiiivvz5sKKKKAHCveP2Ff+Tp/BX0vf/SKevBxXvH7Cv8AydP4K+l7/wCkU9eZmv8AuGI/wS/9JZ2YP/eKfqvzP1oooor+Yj9UCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAClHNJSjigA28Ud8UE4Gf0q/4f0SbXdVgs4l3b2yxHataVN1qipx3ZnUqKlFzfQ9A+DXhI3d1/atxHlFP7vIr1jxNoUWvaPPaSIGVxxVjQNHi0bTYbWNAiqMYFaRGOvpX7/leT08PgPYTWr3PzTFYudav7VPY+SdX0ubR9TuLO4G14zwKqfw4r2T4zeEPOhGq20f7yM5fA6140MkkV+LZvgZZfiZU7aH3uAxKxVFS6hRRRXiHpBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFF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" alt="Деловые Линии" className="h-20 w-auto object-contain" style={{borderRadius:'10px'}}/>
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
