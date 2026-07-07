'use client'
import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { fetchProductsByCategory, formatPrice, cldOptimize } from '@/lib/catalog'

// Все расходные материалы из каталога
const CONSUMABLE_SLUGS = ['consumables']

// Фильтры совместимости — расширяйте по мере роста ассортимента
const COMPATIBILITY_FILTERS = [
  { id: 'all',       label: 'Все' },
  { id: 'hifu',      label: 'HIFU SMAS' },
  { id: 'laser',     label: 'Лазеры' },
  { id: 'rf',        label: 'RF-лифтинг' },
  { id: 'ipl',       label: 'IPL / SHR' },
  { id: 'other',     label: 'Прочее' },
]

export default function ConsumablesPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [consumables, setConsumables] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let alive = true
    fetchProductsByCategory('consumables').then(list => {
      if (alive) { setConsumables(list); setLoading(false) }
    })
    return () => { alive = false }
  }, [])

  // Фильтрация по совместимости и поиску
  const filtered = useMemo(() => {
    let result = consumables
    if (activeFilter !== 'all') {
      result = result.filter(p => {
        const name = p.name.toLowerCase()
        const desc = (p.desc || '').toLowerCase()
        const compat = (p.specs?.['Совместимость'] || '').toLowerCase()
        const combined = name + desc + compat
        if (activeFilter === 'hifu')  return combined.includes('hifu')
        if (activeFilter === 'laser') return combined.includes('лазер') || combined.includes('yag') || combined.includes('co2')
        if (activeFilter === 'rf')    return combined.includes('rf')
        if (activeFilter === 'ipl')   return combined.includes('ipl') || combined.includes('shr')
        return true
      })
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        (p.desc || '').toLowerCase().includes(q) ||
        (p.specs?.['Совместимость'] || '').toLowerCase().includes(q)
      )
    }
    return result
  }, [consumables, activeFilter, search])

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8 flex-wrap">
          <Link href="/" className="hover:text-teal-500">Главная</Link>
          <span>/</span>
          <Link href="/catalog" className="hover:text-teal-500">Каталог</Link>
          <span>/</span>
          <span className="text-gray-700">Расходные материалы</span>
        </nav>

        {/* Hero раздела */}
        <div className="rounded-2xl p-6 sm:p-8 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{background:'linear-gradient(135deg, #f0fdfb, #e6faf7)'}}>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3" style={{background:'#3ECAB4', color:'white'}}>
              Расходные материалы
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Картриджи и расходники</h1>
            <p className="text-gray-500 text-sm max-w-lg">Оригинальные расходные материалы для всего оборудования Beauty Shape. Доставка по России и СНГ. Ассортимент постоянно пополняется.</p>
          </div>
          <div className="flex-shrink-0 text-center">
            <div className="text-3xl font-bold" style={{color:'#3ECAB4'}}>{consumables.length}</div>
            <div className="text-xs text-gray-400">позиций сейчас</div>
          </div>
        </div>

        {/* Фильтры + поиск */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          {/* Фильтры совместимости */}
          <div className="flex flex-wrap gap-2">
            {COMPATIBILITY_FILTERS.map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 ${
                  activeFilter === f.id
                    ? 'text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                style={activeFilter === f.id ? {background:'#3ECAB4'} : {}}>
                {f.label}
              </button>
            ))}
          </div>
          {/* Поиск */}
          <div className="sm:ml-auto relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Поиск по названию..."
              className="pl-9 pr-4 py-1.5 rounded-xl border border-gray-200 text-xs outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all w-full sm:w-52"
            />
          </div>
        </div>

        {/* Результат фильтрации */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <div className="w-9 h-9 rounded-full border-4 border-gray-200 border-t-teal-400 animate-spin mb-3" />
            <p className="text-sm">Загрузка…</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-gray-100">
              <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
            <p className="font-semibold text-gray-700 mb-1">Ничего не найдено</p>
            <p className="text-sm text-gray-400 mb-4">Попробуйте изменить фильтр или поисковый запрос</p>
            <button onClick={() => { setActiveFilter('all'); setSearch('') }}
              className="text-sm font-medium hover:underline" style={{color:'#3ECAB4'}}>
              Сбросить фильтры
            </button>
          </div>
        ) : (
          <>
            <p className="text-xs text-gray-400 mb-5">{filtered.length} позиций</p>
            {/* Сетка — рассчитана на большой ассортимент */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filtered.map(product => (
                <div key={product.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md hover:border-teal-100 transition-all duration-200 group">
                  <Link href={`/catalog/${product.categorySlug}/${product.slug}`}>
                    <div className="h-40 flex items-center justify-center relative overflow-hidden" style={{background:'linear-gradient(135deg, #f0fdfb, #e6faf7)'}}>
                      {product.stock > 0
                        ? <span className="absolute top-2.5 right-2.5 z-10 px-2 py-0.5 text-xs font-semibold rounded-full bg-green-50 text-green-700">В наличии</span>
                        : <span className="absolute top-2.5 right-2.5 z-10 px-2 py-0.5 text-xs font-semibold rounded-full bg-gray-100 text-gray-500">Под заказ</span>
                      }
                      {product.images && product.images.length > 0 ? (
                        <img src={cldOptimize(product.images[0], 500)} alt={product.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                      ) : (
                        <div className="text-center text-gray-300">
                          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="mx-auto mb-1.5 opacity-30">
                            <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5"/>
                            <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5"/>
                            <polyline points="21 15 16 10 5 21" strokeWidth="1.5"/>
                          </svg>
                          <p className="text-xs">Фото</p>
                        </div>
                      )}
                    </div>
                  </Link>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1.5 leading-tight line-clamp-2 group-hover:text-teal-700 transition-colors">
                      <Link href={`/catalog/${product.categorySlug}/${product.slug}`}>{product.name}</Link>
                    </h3>
                    {product.specs?.['Совместимость'] && (
                      <p className="text-xs text-gray-400 mb-2 line-clamp-1">
                        Для: {product.specs['Совместимость']}
                      </p>
                    )}
                    <p className="text-lg font-bold text-gray-900 mb-3">{formatPrice(product.price, product.priceFrom)}</p>
                    <Link href={`/catalog/${product.categorySlug}/${product.slug}`}
                      className="block w-full py-2 rounded-xl text-center text-xs font-semibold text-white hover:opacity-90 transition-opacity"
                      style={{background:'#3ECAB4'}}>
                      Подробнее
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Не нашли нужный расходник */}
        <div className="mt-12 p-6 rounded-2xl text-center" style={{background:'#f0fdfb'}}>
          <p className="font-semibold text-gray-900 mb-1">Не нашли нужный расходник?</p>
          <p className="text-sm text-gray-500 mb-4">Ассортимент постоянно пополняется. Оставьте заявку — подберём нужный картридж или материал.</p>
          <Link href="/contacts"
            className="inline-block px-6 py-2.5 rounded-xl text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            style={{background:'#3ECAB4'}}>
            Уточнить наличие
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
