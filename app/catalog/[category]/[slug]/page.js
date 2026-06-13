import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BuyButton from '@/components/BuyButton'
import ProductGallery from '@/components/ProductGallery'
import { fetchProductBySlug, fetchCategoryBySlug, fetchRelatedConsumables, formatPrice, needsPaidTraining, COUNTRY_FLAG_SRC, COUNTRY_NAMES } from '@/lib/catalog'

export const dynamic = 'force-dynamic'

export default async function ProductPage({ params }) {
  const product = await fetchProductBySlug(params.slug)

  if (!product) return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Товар не найден</h1>
        <Link href="/catalog" className="text-teal-500 hover:underline font-medium">Вернуться в каталог</Link>
      </div>
      <Footer />
    </>
  )

  const [category, related] = await Promise.all([
    fetchCategoryBySlug(product.categorySlug),
    fetchRelatedConsumables(product),
  ])

  const isPaidTraining = needsPaidTraining(product)
  const flagSrc = COUNTRY_FLAG_SRC[product.country]
  const countryName = COUNTRY_NAMES[product.country]

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
          <Link href={`/catalog/${product.categorySlug}`} className="hover:text-teal-500">{category?.name}</Link>
          <span>/</span>
          <span className="text-gray-700 line-clamp-1">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">

          {/* Фото (клиентская галерея) */}
          <ProductGallery
            images={product.images || []}
            name={product.name}
            isHit={product.isHit}
            stock={product.stock}
            flagSrc={flagSrc}
            country={product.country}
            countryName={countryName}
          />

          {/* Инфо */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{color:'#3ECAB4'}}>{category?.name}</p>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">{product.name}</h1>
            <div className="text-3xl font-bold mb-6 text-gray-900">{formatPrice(product.price, product.priceFrom)}</div>
            <p className="text-gray-600 leading-relaxed mb-6">{product.desc}</p>

            {/* Характеристики */}
            {product.specs && Object.keys(product.specs).length > 0 && (
              <div className="mb-6 p-4 rounded-2xl bg-gray-50">
                <h3 className="font-semibold text-sm text-gray-900 mb-3">Характеристики</h3>
                <div className="space-y-2">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-gray-500">{key}</span>
                      <span className="font-medium text-gray-900">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Обучение — Вариант А или Б */}
            {isPaidTraining ? (
              <div className="mb-5 p-4 rounded-2xl border border-amber-100 bg-amber-50">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-amber-800 mb-1">Обучение приобретается отдельно</p>
                    <p className="text-xs text-amber-700 mb-2">Для работы на этом аппарате требуется специализированный курс. Проходится до начала работы.</p>
                    <Link href="/training"
                      className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors hover:opacity-90"
                      style={{background:'#c05621', color:'white'}}>
                      Посмотреть прайс Учебного центра →
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mb-5 p-4 rounded-2xl border border-teal-100 bg-teal-50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{background:'#3ECAB4'}}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-teal-800">Полноценное бесплатное обучение после покупки</p>
                    <p className="text-xs text-teal-600 mt-0.5">Онлайн или оффлайн — на выбор клиента</p>
                  </div>
                </div>
              </div>
            )}

            {/* Кнопка */}
            {product.stock > 0
              ? <BuyButton productName={product.name} />
              : (
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 text-sm text-gray-600">
                  Аппарат доступен под заказ. Оставьте заявку — уточним сроки и стоимость.
                  <Link href="/contacts" className="block mt-2 font-semibold text-teal-600 hover:underline">Оставить заявку</Link>
                </div>
              )
            }
          </div>
        </div>

        {/* ===== Блок сопутствующих расходников ===== */}
        {related.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{color:'#3ECAB4'}}>Расходные материалы</p>
                <h2 className="text-xl font-bold text-gray-900">Подходящие картриджи и расходники</h2>
              </div>
              <Link href="/catalog/consumables"
                className="text-sm font-medium hover:underline hidden sm:block"
                style={{color:'#3ECAB4'}}>
                Все расходники →
              </Link>
            </div>

            {/* Горизонтальная карусель */}
            <div className="flex gap-4 overflow-x-auto pb-2 -mx-1 px-1 snap-x snap-mandatory scrollbar-hide">
              {related.map(item => (
                <div key={item.id}
                  className="flex-shrink-0 w-56 bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md hover:border-teal-100 transition-all duration-200 snap-start">
                  <Link href={`/catalog/${item.categorySlug}/${item.slug}`}>
                    <div className="h-36 flex items-center justify-center relative overflow-hidden" style={{background:'linear-gradient(135deg, #f0fdfb, #e6faf7)'}}>
                      {item.stock > 0
                        ? <span className="absolute top-2 right-2 z-10 px-2 py-0.5 text-xs font-semibold rounded-full bg-green-50 text-green-700">В наличии</span>
                        : <span className="absolute top-2 right-2 z-10 px-2 py-0.5 text-xs font-semibold rounded-full bg-gray-100 text-gray-500">Под заказ</span>
                      }
                      {item.images && item.images.length > 0 ? (
                        <img src={item.images[0]} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
                      ) : (
                        <div className="text-center text-gray-300">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="mx-auto mb-1.5 opacity-30">
                            <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5"/>
                            <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5"/>
                            <polyline points="21 15 16 10 5 21" strokeWidth="1.5"/>
                          </svg>
                          <p className="text-xs">Фото</p>
                        </div>
                      )}
                    </div>
                  </Link>
                  <div className="p-3">
                    <h3 className="font-semibold text-gray-900 text-xs mb-1.5 leading-tight line-clamp-2">
                      <Link href={`/catalog/${item.categorySlug}/${item.slug}`}>{item.name}</Link>
                    </h3>
                    {item.specs?.['Совместимость'] && (
                      <p className="text-xs text-gray-400 mb-2 line-clamp-1">Для: {item.specs['Совместимость']}</p>
                    )}
                    <p className="text-sm font-bold text-gray-900 mb-2">{formatPrice(item.price, item.priceFrom)}</p>
                    <Link href={`/catalog/${item.categorySlug}/${item.slug}`}
                      className="block w-full py-1.5 rounded-xl text-center text-xs font-semibold text-white hover:opacity-90 transition-opacity"
                      style={{background:'#3ECAB4'}}>
                      Подробнее
                    </Link>
                  </div>
                </div>
              ))}

              <div className="flex-shrink-0 w-44 rounded-2xl border border-dashed border-teal-200 flex items-center justify-center snap-start">
                <Link href="/catalog/consumables" className="text-center p-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2" style={{background:'#f0fdfb'}}>
                    <svg className="w-5 h-5" style={{color:'#3ECAB4'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </div>
                  <p className="text-xs font-semibold" style={{color:'#3ECAB4'}}>Все расходные<br/>материалы</p>
                </Link>
              </div>
            </div>
          </div>
        )}

      </main>
      <Footer />
    </>
  )
}
