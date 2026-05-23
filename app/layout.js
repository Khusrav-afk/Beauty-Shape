import './globals.css'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Beauty Shape — Косметологическое оборудование',
  description: 'Профессиональное косметологическое оборудование: HIFU SMAS лифтинг, лазерная эпиляция, RF-лифтинг. Гарантия 1 год, доставка по России.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
