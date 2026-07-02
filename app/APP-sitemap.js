import { fetchProducts, fetchCategories } from '@/lib/catalog'

const BASE = 'https://beautyi-shape.ru'
export const revalidate = 3600

export default async function sitemap() {
  let products = [], categories = []
  try {
    ;[products, categories] = await Promise.all([fetchProducts(), fetchCategories()])
  } catch {}

  const now = new Date()

  const staticPages = [
    { path: '',                     priority: 1.0 },
    { path: '/catalog',             priority: 0.9 },
    { path: '/catalog/consumables', priority: 0.7 },
    { path: '/training',            priority: 0.7 },
    { path: '/about',               priority: 0.5 },
    { path: '/contacts',            priority: 0.6 },
  ].map(p => ({
    url: `${BASE}${p.path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: p.priority,
  }))

  const categoryPages = categories.map(c => ({
    url: `${BASE}/catalog/${encodeURIComponent(c.slug)}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  const productPages = products.map(p => ({
    url: `${BASE}/catalog/${encodeURIComponent(p.categorySlug)}/${encodeURIComponent(p.slug)}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.5,
  }))

  return [...staticPages, ...categoryPages, ...productPages]
}
