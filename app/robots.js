const BASE = 'https://beautyi-shape.ru'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/account', '/cart', '/login', '/reset-password', '/api/'],
    },
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  }
}
