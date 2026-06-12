import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { fetchCategories, fetchProducts, formatPrice } from '@/lib/catalog'

export const metadata = { title: 'Каталог — Beauty Shape' }
export const revalidate = 60

export default async function CatalogPage() {
  const [categories, products] = await Promise.all([fetchCategories(), fetchProducts()])

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-teal-500">Главная</Link>
          <span>/</span>
          <span className="text-gray-700">Каталог</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Каталог оборудования</h1>
        <p className="text-gray-500 mb-10">100+ моделей в {categories.length} категориях — профессиональное косметологическое оборудование</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map(cat => {
            const catProducts = products.filter(p => p.categorySlug === cat.slug)
            const hits = catProducts.filter(p => p.isHit).slice(0,2)
            return (
              <Link key={cat.slug} href={`/catalog/${cat.slug}`}
                className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-teal-200 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-semibold text-gray-900 group-hover:text-teal-700 transition-colors">{cat.name}</h2>
                    <span className="text-xs text-gray-400">{cat.count} товаров</span>
                  </div>
                </div>
                {hits.length > 0 && (
                  <div className="space-y-2">
                    {hits.map(p => (
                      <div key={p.id} className="flex items-center justify-between text-xs bg-gray-50 rounded-lg px-3 py-2">
                        <span className="text-gray-700 truncate flex-1 mr-2">{p.name}</span>
                        <span className="font-semibold text-gray-900 flex-shrink-0" style={{color:'#168d7d'}}>{formatPrice(p.price, p.priceFrom)}</span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="mt-4 text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" style={{color:'#3ECAB4'}}>
                  Смотреть все <span>→</span>
                </div>
              </Link>
            )
          })}
        </div>
      </main>
      <Footer />
    </>
  )
}
