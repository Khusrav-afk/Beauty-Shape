'use client'
import { useState } from 'react'
import { useCart } from './CartContext'

export default function AddToCartButton({ product, label = 'В корзину', full = true }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  function handle(e) {
    e.preventDefault()
    addItem(product, 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <button onClick={handle}
      className={`${full ? 'w-full' : ''} py-2.5 px-4 rounded-xl text-center text-sm font-semibold transition-all duration-200 border`}
      style={added
        ? { background:'#168d7d', color:'white', borderColor:'transparent' }
        : { background:'#f0fdfb', color:'#168d7d', borderColor:'#b6f0e6' }}>
      {added ? '✓ Добавлено' : label}
    </button>
  )
}
