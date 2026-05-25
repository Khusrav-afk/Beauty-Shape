import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { categories, getProductsByCategory, getCategoryBySlug, formatPrice, COUNTRY_FLAGS } from '@/lib/catalog'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default function CategoryPage({ params }) {
  const category = getCategoryBySlug(params.category)
  if (!category) notFound()
  const prods = getProductsByCategory(params.category)

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">

        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8 flex-wrap">
          <Link href="/" className="hover:text-teal-500">Главная</Link>
          <span>/</span>
          <Link href="/catalog" className="hover:text-teal-500">Каталог</Link>
          <span>/</span>
          <span className="text-gray-700">{category.name}</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">{category.name}</h1>
        <p className="text-gray-500 mb-10">{prods.length} товаров — профессиональное оборудование с гарантией 1 год</p>

        {prods.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-gray-100">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Товары скоро появятся</h2>
            <p className="text-gray-400 mb-6">Эта категория пока пополняется</p>
            <Link href="/contacts"
              className="inline-block px-6 py-3 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-opacity"
              style={{background:'#3ECAB4'}}>
              Узнать о наличии
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {prods.map(product => (
              <div key={product.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 group">
                <Link href={`/catalog/${product.categorySlug}/${product.slug}`}>
                  <div className="h-52 flex items-center justify-center relative" style={{background:'linear-gradient(135deg, #f0fdfb, #e6faf7)'}}>
                    {product.isHit && (
                      <span className="absolute top-3 left-3 px-2 py-0.5 text-xs font-semibold text-white rounded-full" style={{background:'#3ECAB4'}}>
                        Хит
                      </span>
                    )}
                    {product.stock > 0 ? (
                      <span className="absolute top-3 right-3 px-2 py-0.5 text-xs font-semibold rounded-full bg-green-50 text-green-700">
                        В наличии
                      </span>
                    ) : (
                      <span className="absolute top-3 right-3 px-2 py-0.5 text-xs font-semibold rounded-full bg-gray-100 text-gray-500">
                        Под заказ
                      </span>
                    )}
                    {product.country && COUNTRY_FLAGS[product.country] && (
                      <span className="absolute bottom-3 right-3 text-base leading-none">
                        {COUNTRY_FLAGS[product.country]}
                      </span>
                    )}
                    <div className="text-center text-gray-300">
                      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="mx-auto mb-2 opacity-30">
                        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5"/>
                        <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5"/>
                        <polyline points="21 15 16 10 5 21" strokeWidth="1.5"/>
                      </svg>
                      <p className="text-xs">Фото аппарата</p>
                    </div>
                  </div>
                </Link>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 text-sm mb-2 leading-tight group-hover:text-teal-700 transition-colors line-clamp-2">
                    <Link href={`/catalog/${product.categorySlug}/${product.slug}`}>{product.name}</Link>
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.desc}</p>
                  <p className="text-xl font-bold text-gray-900 mb-3">{formatPrice(product.price, product.priceFrom)}</p>
                  <Link href={`/catalog/${product.categorySlug}/${product.slug}`}
                    className="block w-full py-2.5 rounded-xl text-center text-sm font-semibold text-white transition-all hover:opacity-90"
                    style={{background:'#3ECAB4'}}>
                    Подробнее
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 p-6 rounded-2xl text-center" style={{background:'#f0fdfb'}}>
          <p className="font-semibold text-gray-900 mb-2">Нужна помощь с выбором?</p>
          <p className="text-sm text-gray-500 mb-4">Расскажите о задачах — подберём оптимальный аппарат</p>
          <Link href="/contacts"
            className="inline-block px-6 py-2.5 rounded-xl text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            style={{background:'#3ECAB4'}}>
            Получить консультацию
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
