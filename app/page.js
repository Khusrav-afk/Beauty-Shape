import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { categories, getHitProducts, formatPrice } from '@/lib/catalog'

export const dynamic = 'force-dynamic'

export default function HomePage() {
  const hits = getHitProducts()

  return (
    <>
      <Header />
      <main>

        <section className="relative overflow-hidden" style={{background:'linear-gradient(135deg, #f0fdfb 0%, #ffffff 50%, #f8fffe 100%)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6" style={{background:'#f0fdfb', color:'#168d7d', border:'1px solid #99f4e8'}}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{background:'#3ECAB4'}}/>
                  Гарантия 1 год на всё оборудование
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
                  Профессиональное{' '}
                  <span style={{color:'#3ECAB4'}}>косметологическое</span>{' '}
                  оборудование
                </h1>
                <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-lg">
                  HIFU SMAS лифтинг, лазерная эпиляция, RF-омоложение и многое другое. 64 аппарата в 34 категориях. Доставка по России.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/catalog" className="px-6 py-3 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-opacity" style={{background:'#3ECAB4'}}>
                    Смотреть каталог
                  </Link>
                  <Link href="/contacts" className="px-6 py-3 rounded-xl font-semibold text-sm border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors">
                    Оставить заявку
                  </Link>
                </div>
                <div className="flex gap-8 mt-10">
                  {[['64+','Аппаратов'],['34','Категорий'],['1 год','Гарантия']].map(([num, label]) => (
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

        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title:'Гарантия 1 год', desc:'На всё оборудование без исключений' },
              { title:'Доставка по России', desc:'СДЭК и Деловые Линии' },
              { title:'Документы', desc:'Сертификаты и инструкции' },
              { title:'Обучение', desc:'После покупки бесплатно' },
            ].map(({ title, desc }) => (
              <div key={title} className="p-5 rounded-2xl bg-gray-50 hover:bg-teal-50 transition-colors">
                <div className="font-semibold text-sm text-gray-900 mb-1">{title}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </section>

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
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background: i % 2 === 0 ? '#f0fdfb' : '#fff8f0'}}>
                  <span className="text-lg">{['🔴','💜','🔵','⚡','🟢','🌿','💎','✨','🎯','🪡','📡','💆','🔄','🌊','❄️','💪','💧','🔊','⚡','🌟','🫧','🔬','🩱','🎯','⚡','💉','🫁','💡','💪','🌀','🔥','🔭','🎵','🩲'][i] || '⚡'}</span>
                </div>
                <div className="font-medium text-xs text-gray-800 leading-tight group-hover:text-teal-700 transition-colors line-clamp-2">{cat.name}</div>
                <div className="text-xs text-gray-400 mt-1">{cat.count} тов.</div>
              </Link>
            ))}
          </div>
        </section>

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
                    {product.isHit && <span className="absolute top-3 left-3 px-2 py-0.5 text-xs font-semibold text-white rounded-full" style={{background:'#3ECAB4'}}>Хит</span>}
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
              { n:'04', title:'Получаете аппарат', desc:'Доставка по России + бесплатное обучение.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-teal-50 transition-colors group">
                <div className="w-12 h-12 rounded-full text-white font-bold text-lg flex items-center justify-center mx-auto mb-4" style={{background:'#3ECAB4'}}>{n}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

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
