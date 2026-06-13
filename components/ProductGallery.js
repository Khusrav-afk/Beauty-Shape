'use client'
import { useState } from 'react'

export default function ProductGallery({ images = [], name, isHit, stock, flagSrc, country, countryName }) {
  const [active, setActive] = useState(0)
  const main = images[active] || images[0]

  return (
    <div>
      <div className="aspect-square rounded-3xl flex items-center justify-center relative overflow-hidden" style={{background:'linear-gradient(145deg, #f0fdfb, #e0f7f3)'}}>
        {isHit && (
          <span className="absolute top-4 left-4 z-10 px-3 py-1 text-sm font-semibold text-white rounded-full" style={{background:'#3ECAB4'}}>
            Хит продаж
          </span>
        )}
        <span className={`absolute top-4 right-4 z-10 px-3 py-1 text-xs font-semibold rounded-full ${
          stock > 0 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
        }`}>
          {stock > 0 ? 'В наличии' : 'Под заказ'}
        </span>
        {flagSrc && (
          <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm">
            <img src={flagSrc} alt={country} width={20} height={15} className="block w-5 h-auto rounded-sm" />
            <span className="text-xs text-gray-600 font-medium">{countryName}</span>
          </div>
        )}
        {main ? (
          <img src={main} alt={name} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className="text-center text-gray-300">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="mx-auto mb-3 opacity-30">
              <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1"/>
              <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1"/>
              <polyline points="21 15 16 10 5 21" strokeWidth="1"/>
            </svg>
            <p className="text-sm">Фото аппарата</p>
          </div>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 mt-3 flex-wrap">
          {images.map((img, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-colors ${i === active ? 'border-teal-400' : 'border-transparent'}`}>
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-green-50 text-green-700">Гарантия 1 год</span>
        <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-50 text-blue-700">Доставка по России и СНГ</span>
      </div>
    </div>
  )
}
