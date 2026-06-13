import './globals.css'
import BottomNav from '@/components/BottomNav'
import { CartProvider } from '@/components/CartContext'
import { AuthProvider } from '@/components/AuthContext'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Beauty Shape — Косметологическое оборудование',
  description: 'Профессиональное косметологическое оборудование: HIFU SMAS лифтинг, лазерная эпиляция, RF-лифтинг. Гарантия 1 год, доставка по России.',
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
