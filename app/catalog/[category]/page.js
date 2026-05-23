import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { categories, getProductsByCategory, getCategoryBySlug, formatPrice } from '@/lib/catalog'
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
        <p className="text-gray-500 mb-10">{category.count} товаров — профессиональное оборудование с гарантией 1 год</p>

        {prods.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📦</div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Товары скоро появятся</h2>
            <p className="text-gray-400 mb-6">Эта категория пока пополняется</p>
            <Link href="/contacts" className="inline-block px-6 py-3 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-opacity" style={{background:'#3ECAB4'}}>
              Узнать о наличии
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {prods.map(product => (
              <div key={product.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 group">
                <Link href={`/catalog/${product.categorySlug}/${product.slug}`}>
                  <div className="h-52 flex items-center justify-center relative" style={{background:'linear-gradient(135deg, #f0fdfb, #e6faf7)'}}>
                    {product.isHit && <span className="absolute top-3 left-3 px-2 py-0.5 text-xs font-semibold text-white rounded-full" style={{background:'#3ECAB4'}}>Хит</span>}
                    {product.stock === 0 && <span className="absolute top-3 right-3 px-2 py-0.5 text-xs font-semibold bg-red-100 text-red-600 rounded-full">Нет в наличии</span>}
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
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xl font-bold text-gray-900">{formatPrice(product.price, product.priceFrom)}</p>
                    {product.stock > 0
                      ? <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full font-medium">В наличии</span>
                      : <span className="text-xs text-red-500 bg-red-50 px-2 py-0.5 rounded-full font-medium">Нет в наличии</span>
                    }
                  </div>
                  <Link href={`/catalog/${product.categorySlug}/${product.slug}`}
                    className="block w-full py-2.5 rounded-xl text-center text-sm font-semibold text-white transition-all hover:opacity-90"
                    style={{background: product.stock > 0 ? '#3ECAB4' : '#9CA3AF'}}>
                    {product.stock > 0 ? 'Подробнее' : 'Нет в наличии'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 p-6 rounded-2xl text-center" style={{background:'#f0fdfb'}}>
          <p className="font-semibold text-gray-900 mb-2">Нужна помощь с выбором?</p>
          <p className="text-sm text-gray-500 mb-4">Расскажите о задачах — подберём оптимальный аппарат</p>
          <Link href="/contacts" className="inline-block px-6 py-2.5 rounded-xl text-white text-sm font-semibold hover:opacity-90 transition-opacity" style={{background:'#3ECAB4'}}>
            Получить консультацию
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
