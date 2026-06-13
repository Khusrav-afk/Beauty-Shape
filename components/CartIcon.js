'use client'
import Link from 'next/link'
import { useCart } from './CartContext'

export default function CartIcon() {
  const { count } = useCart()
  return (
    <Link href="/cart" aria-label="Корзина"
      className="relative w-9 h-9 rounded-lg flex items-center justify-center hover:bg-teal-50 transition-colors">
      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
      {count > 0 && (
        <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-bold text-white flex items-center justify-center"
          style={{background:'#3ECAB4'}}>
          {count}
        </span>
      )}
    </Link>
  )
}
