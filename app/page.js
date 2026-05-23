import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { categories, getHitProducts, formatPrice } from '@/lib/catalog'

export default function HomePage() {
  const hits = getHitProducts()

  return (
    <>
      <Header />
      <main>

        {/* HERO */}
        <section className="relative overflow-hidden" style={{background:'linear-gradient(135deg, #f0fdfb 0%, #ffffff 50%, #f8fffe 100%)'}}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{background:'#3ECAB4', transform:'translate(30%, -30%)'}}/>
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5" style={{background:'#3ECAB4', transform:'translate(-30%, 30%)'}}/>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6" style={{background:'#f0fdfb', color:'#168d7d', border:'1px solid #99f4e8'}}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{background:'#3ECAB4'}}/>
                  Гарантия 1 год на всё оборудование
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
                  Профессиональное<br/>
                  <span style={{color:'#3ECAB4'}}>косметологическое</span><br/>
                  оборудование
                </h1>
                <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-lg">
                  HIFU SMAS лифтинг, лазерная эпиляция, RF-омоложение и многое другое. 64 аппарата в 14 категориях. Доставка по России.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/catalog"
                    className="px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
                    style={{background:'#3ECAB4'}}>
                    Смотреть каталог →
                  </Link>
                  <Link href="/contacts"
                    className="px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:bg-gray-50 border border-gray-200 text-gray-700">
                    Оставить заявку
                  </Link>
                </div>
                <div className="flex gap-8 mt-10">
                  {[['64+','Аппаратов'],['14','Категорий'],['1 год','Гарантия']].map(([num, label]) => (
                    <div key={label}>
                      <div className="text-2xl font-bold text-gray-900">{num}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <div className="relative">
                  <div className="w-72 h-80 rounded-3xl flex items-center justify-center" style={{background:'linear-gradient(145deg, #3ECAB4, #20b09a)'}}>
                    <div className="text-center text-white">
                      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="mx-auto mb-4 opacity-90">
                        <circle cx="28" cy="28" r="14" stroke="white" strokeWidth="3"/>
                        <circle cx="52" cy="28" r="14" stroke="white" strokeWidth="3"/>
                        <circle cx="28" cy="52" r="14" stroke="white" strokeWidth="3"/>
                        <circle cx="52" cy="52" r="14" stroke="white" strokeWidth="3"/>
                      </svg>
                      <p className="font-bold text-xl tracking-wide">BEAUTY SHAPE</p>
                      <p className="text-sm opacity-80 mt-1">Место для фото аппарата</p>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg bg-white">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">64+</div>
                      <div className="text-xs text-gray-400">аппаратов</div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-16 rounded-2xl flex items-center justify-center shadow-lg bg-white px-3">
                    <div className="text-center">
                      <div className="text-xs font-bold text-gray-900">Гарантия</div>
                      <div className="text-xl font-bold" style={{color:'#3ECAB4'}}>1 год</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🛡️', title: 'Гарантия 1 год', desc: 'На всё оборудование без исключений' },
              { icon: '🚚', title: 'Доставка по России', desc: 'СДЭК и Деловые Линии' },
              { icon: '📋', title: 'Документы', desc: 'Сертификаты и инструкции' },
              { icon: '🎓', title: 'Обучение', desc: 'После покупки бесплатно' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3 p-5 rounded-2xl bg-gray-50 hover:bg-teal-50 transition-colors group">
                <span className="text-2xl flex-shrink-0">{icon}</span>
                <div>
                  <div className="font-semibold text-sm text-gray-900 group-hover:text-teal-700">{title}</div>
                  <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{color:'#3ECAB4'}}>Ассортимент</p>
              <h2 className="text-3xl font-bold text-gray-900">Категории оборудования</h2>
            </div>
            <Link href="/catalog" className="text-sm font-medium hidden sm:block hover:underline" style={{color:'#3ECAB4'}}>
              Весь каталог →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {categories.map((cat, i) => (
              <Link key={cat.slug} href={`/catalog/${cat.slug}`}
                className="group p-4 rounded-2xl border border-gray-100 bg-white hover:border-teal-200 hover:shadow-md transition-all hover:-translate-y-0.5">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 transition-colors"
                  style={{background: i % 2 === 0 ? '#f0fdfb' : '#fff8f0'}}>
                  <span className="text-lg">
                    {['⚡','💎','✨','🔴','🔵','🌊','🪡','❄️','💧','⚙️','🤸','💪','🔮','🪑'][i]}
                  </span>
                </div>
                <div className="font-medium text-xs text-gray-800 leading-tight group-hover:text-teal-700 transition-colors">
                  {cat.name}
                </div>
                <div className="text-xs text-gray-400 mt-1">{cat.count} товаров</div>
              </Link>
            ))}
          </div>
        </section>

        {/* HITS */}
        <section style={{background:'#f8fffe'}} className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{color:'#3ECAB4'}}>Популярное</p>
                <h2 className="text-3xl font-bold text-gray-900">Хиты продаж</h2>
              </div>
              <Link href="/catalog" className="text-sm font-medium hidden sm:block hover:underline" style={{color:'#3ECAB4'}}>
                Все товары →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {hits.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{color:'#3ECAB4'}}>Просто</p>
            <h2 className="text-3xl font-bold text-gray-900">Как сделать заказ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {[
              { n:'01', title:'Выбираете аппарат', desc:'Изучите каталог. Позвоните или напишите — поможем с выбором под ваши задачи.' },
              { n:'02', title:'Оставляете заявку', desc:'Нажмите «Купить в 1 клик» — введите имя и телефон. Форма займёт 10 секунд.' },
              { n:'03', title:'Менеджер звонит', desc:'Свяжемся в течение 30 минут, уточним детали, обсудим доставку и оплату.' },
              { n:'04', title:'Получаете аппарат', desc:'Доставка по России. После получения — бесплатное обучение по работе на оборудовании.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="relative text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-12 h-12 rounded-full text-white font-bold text-lg flex items-center justify-center mx-auto mb-4"
                  style={{background:'#3ECAB4'}}>
                  {n}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-4 sm:mx-6 lg:mx-auto max-w-5xl mb-16 rounded-3xl overflow-hidden" style={{background:'linear-gradient(135deg, #3ECAB4, #168d7d)'}}>
          <div className="px-8 py-12 md:py-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Нужна помощь с выбором?</h2>
            <p className="text-teal-100 mb-8 text-lg max-w-xl mx-auto">Оставьте номер телефона — перезвоним и подберём оборудование под ваши задачи и бюджет</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="tel" placeholder="+7 (___) ___-__-__"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 text-sm outline-none focus:ring-2 ring-white/50"/>
              <button className="px-6 py-3 bg-white font-semibold text-sm rounded-xl hover:bg-gray-50 transition-colors" style={{color:'#168d7d'}}>
                Жду звонка
              </button>
            </div>
            <p className="text-teal-200 text-xs mt-4">Перезвоним в течение 30 минут в рабочее время</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-0.5 group">
      <div className="h-48 flex items-center justify-center relative" style={{background:'linear-gradient(135deg, #f0fdfb, #e6faf7)'}}>
        {product.isHit && (
          <span className="absolute top-3 left-3 px-2 py-0.5 text-xs font-semibold text-white rounded-full" style={{background:'#3ECAB4'}}>Хит</span>
        )}
        {product.stock === 0 && (
          <span className="absolute top-3 right-3 px-2 py-0.5 text-xs font-semibold bg-red-100 text-red-600 rounded-full">Нет в наличии</span>
        )}
        <div className="text-center text-gray-300">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="mx-auto mb-2 opacity-40">
            <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5"/>
            <circle cx="12" cy="10" r="3" strokeWidth="1.5"/>
            <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" strokeWidth="1.5"/>
          </svg>
          <p className="text-xs">Фото аппарата</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{color:'#3ECAB4'}}>
          {product.categorySlug.replace(/-/g,' ')}
        </p>
        <h3 className="font-semibold text-gray-900 text-sm mb-2 leading-tight line-clamp-2 group-hover:text-teal-700 transition-colors">
          {product.name}
        </h3>
        <p className="text-xl font-bold text-gray-900 mb-3">{formatPrice(product.price, product.priceFrom)}</p>
        <Link href={`/catalog/${product.categorySlug}/${product.slug}`}
          className="block w-full py-2.5 rounded-xl text-center text-sm font-semibold text-white transition-all hover:opacity-90"
          style={{background: product.stock > 0 ? '#3ECAB4' : '#9CA3AF'}}>
          {product.stock > 0 ? 'Купить в 1 клик' : 'Нет в наличии'}
        </Link>
      </div>
    </div>
  )
}
