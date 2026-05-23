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
                  HIFU SMAS лифтинг, лазерная эпиляция, RF-омоложение и многое другое. 64 аппарата в 34 категориях. Доставка по России.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/catalog"
                    className="px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
                    style={{background:'#3ECAB4'}}>
                    Смотреть каталог →
                  </Link>
                  <Link href="/contacts"
                    className="px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:bg-gray-50 border border-gray-200 text-gray-700">
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
                      <p className="text-sm opacity-80 mt-1">Косметологическое оборудование</p>
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
              { icon:'🛡️', title:'Гарантия 1 год', desc:'На всё оборудование без исключений' },
              { icon:'🚚', title:'Доставка по России', desc:'СДЭК и Деловые Линии' },
              { icon:'📋', title:'Документы', desc:'Сертификаты и инструкции' },
              { icon:'🎓', title:'Обучение', desc:'После покупки бесплатно' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3 p-5 rounded-2xl bg-gray-50 hover:bg-teal-50 transition-colors group cursor-default">
                <span className="text-2xl flex-shrink-0">{icon}</span>
                <div>
                  <div className="font-semibold text-sm text-gray-900 group-hover:text-teal-700 transition-colors">{title}</div>
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
          <div className="grid grid-col
