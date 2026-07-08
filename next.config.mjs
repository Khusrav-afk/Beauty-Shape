/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // Любой заход на технический адрес *.vercel.app → на основной домен
        // (кроме /api/* — этот хост используется как релей для запросов,
        // которым нужен выход за пределы РФ, например Telegram API)
        source: '/((?!api/).*)',
        has: [{ type: 'host', value: 'beauty-shape.vercel.app' }],
        destination: 'https://beautyi-shape.ru/:path*',
        permanent: true,
      },
    ]
  },
}
export default nextConfig
