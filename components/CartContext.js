'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'bs_cart_v1'

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [loaded, setLoaded] = useState(false)

  // Загружаем корзину из браузера один раз
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setItems(JSON.parse(raw))
    } catch {}
    setLoaded(true)
  }, [])

  // Сохраняем при изменениях
  useEffect(() => {
    if (!loaded) return
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)) } catch {}
  }, [items, loaded])

  function addItem(product, qty = 1) {
    setItems(prev => {
      const idx = prev.findIndex(x => x.slug === product.slug)
      if (idx >= 0) {
        const copy = [...prev]
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty }
        return copy
      }
      return [...prev, {
        slug:         product.slug,
        categorySlug: product.categorySlug,
        name:         product.name,
        price:        product.price ?? null,
        priceFrom:    !!product.priceFrom,
        image:        (product.images && product.images[0]) || null,
        qty,
      }]
    })
  }

  function removeItem(slug) {
    setItems(prev => prev.filter(x => x.slug !== slug))
  }

  function setQty(slug, qty) {
    setItems(prev => prev.map(x => x.slug === slug ? { ...x, qty: Math.max(1, qty) } : x))
  }

  function clear() {
    setItems([])
  }

  const count = items.reduce((s, x) => s + x.qty, 0)
  const total = items.reduce((s, x) => s + (x.price || 0) * x.qty, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, setQty, clear, count, total, loaded }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    return { items: [], addItem(){}, removeItem(){}, setQty(){}, clear(){}, count: 0, total: 0, loaded: false }
  }
  return ctx
}
