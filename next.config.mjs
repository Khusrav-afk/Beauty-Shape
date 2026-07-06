/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // Любой заход на технический адрес *.vercel.app → на основной домен
        source: '/:path*',
        has: [{ type: 'host', value: 'beauty-shape.vercel.app' }],
        destination: 'https://beautyi-shape.ru/:path*',
        permanent: true,
      },
    ]
  },
}
export default nextConfig
