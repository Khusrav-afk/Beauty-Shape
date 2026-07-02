import './globals.css'
import BottomNav from '@/components/BottomNav'
import { CartProvider } from '@/components/CartContext'
import { AuthProvider } from '@/components/AuthContext'

export const dynamic = 'force-dynamic'

export const metadata = {
  metadataBase: new URL('https://beautyi-shape.ru'),
  title: 'Beauty Shape — Косметологическое оборудование',
  description: 'Профессиональное косметологическое оборудование: HIFU SMAS лифтинг, лазерная эпиляция, RF-лифтинг. Гарантия 1 год, доставка по России и СНГ, бесплатное обучение.',
  keywords: ['косметологическое оборудование', 'HIFU', 'SMAS лифтинг', 'лазерная эпиляция', 'RF лифтинг', 'аппараты для косметологии'],
  openGraph: {
    title: 'Beauty Shape — Косметологическое оборудование',
    description: 'Профессиональное косметологическое оборудование с гарантией 1 год. Доставка по России и СНГ, бесплатное обучение.',
    url: 'https://beautyi-shape.ru',
    siteName: 'Beauty Shape',
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beauty Shape — Косметологическое оборудование',
    description: 'Профессиональное косметологическое оборудование с гарантией 1 год.',
  },
  verification: {
    yandex: '4016455ac3452052',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <AuthProvider>
          <CartProvider>
            {children}
            <BottomNav />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
