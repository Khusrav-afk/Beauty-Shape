import './globals.css'

export const metadata = {
  title: 'Beauty Shape — Косметологическое оборудование',
  description: 'Профессиональное косметологическое оборудование: HIFU SMAS лифтинг, лазерная эпиляция, RF-лифтинг. Гарантия 1 год, доставка по России, обучение.',
  keywords: 'косметологическое оборудование, HIFU SMAS, лазерная эпиляция, RF лифтинг, купить аппарат',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
