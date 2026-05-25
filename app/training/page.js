import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export const dynamic = 'force-dynamic'
export const metadata = { title: 'Учебный центр — Beauty Shape' }

const PAID_COURSES_WITH_RU = [
  {
    title: 'HIFU SMAS Лифтинг',
    desc: 'Работа на аппаратах HIFU SMAS. Теория и практика. Сертификат.',
    features: ['Анатомия и показания', 'Работа с манипулами', 'Протоколы процедур', 'Разбор осложнений'],
  },
  {
    title: 'Liposonix / Липосоник',
    desc: 'Коррекция фигуры ультразвуком. Аппараты с регудостоверением.',
    features: ['Показания и противопоказания', 'Настройка параметров', 'Зоны коррекции', 'Комбинирование с другими методиками'],
  },
  {
    title: 'CO2-лазер фракционный',
    desc: 'Фракционная лазерная шлифовка на аппарате CO2.',
    features: ['Работа с лазерным излучением', 'Протоколы для разных зон', 'Постпроцедурный уход', 'Сертификат специалиста'],
  },
]

const PAID_COURSES_NO_RU = [
  {
    title: 'Диодный лазер — эпиляция',
    desc: 'Лазерная эпиляция на диодных аппаратах 808 нм.',
    features: ['Фототипы кожи', 'Техника обработки', 'Работа со сложными зонами', 'Настройка параметров'],
  },
  {
    title: 'Микроигольчатый RF',
    desc: 'RF-лифтинг с микроиглами. Протоколы омоложения.',
    features: ['Анатомия кожи', 'Глубина воздействия', 'Комбинирование с мезотерапией', 'Реабилитация'],
  },
  {
    title: 'YAG / Pico лазер',
    desc: 'Удаление татуировок и пигментации.',
    features: ['Виды пигментации', 'Работа с татуировками', 'Параметры излучения', 'Осложнения и их устранение'],
  },
  {
    title: 'IPL / SHR фотоэпиляция',
    desc: 'Интенсивный импульсный свет — фото-эпиляция и омоложение.',
    features: ['Принцип IPL/SHR', 'Подбор фильтров', 'Протоколы для лица и тела', 'Безопасность'],
  },
  {
    title: 'Холодная плазма',
    desc: 'Плазменное омоложение — коагуляция, лечение акне.',
    features: ['Принцип действия', 'Показания для процедур', 'Техника нанесения', 'Постпроцедурный уход'],
  },
  {
    title: 'Аппаратная косметология',
    desc: 'Гидропилинг, карбокситерапия, кислородный пилинг.',
    features: ['Типы пилинговых систем', 'Протоколы для разных типов кожи', 'Комбинированные программы', 'Сезонность'],
  },
]

function CourseCard({ title, desc, features }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:border-teal-100 transition-all duration-200">
      <h3 className="font-bold text-gray-900 mb-2 text-sm">{title}</h3>
      <p className="text-xs text-gray-500 mb-4 leading-relaxed">{desc}</p>
      <ul className="space-y-1.5 mb-5">
        {features.map(f => (
          <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
            <span className="mt-0.5 flex-shrink-0" style={{color:'#3ECAB4'}}>✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Link href="/contacts"
        className="block w-full py-2.5 rounded-xl text-center text-xs font-semibold text-white hover:opacity-90 transition-opacity"
        style={{background:'#3ECAB4'}}>
        Записаться
      </Link>
    </div>
  )
}

export default function TrainingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <div className="py-16 px-4 sm:px-6 text-center" style={{background:'linear-gradient(135deg, #f0fdfb, #ffffff)'}}>
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{color:'#3ECAB4'}}>Учебный центр</p>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Обучение работе<br/>на оборудовании</h1>
            <p className="text-lg text-gray-500 leading-relaxed">Обучаем онлайн и оффлайн. После покупки большинства аппаратов — базовое обучение в подарок.</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

          {/* Formats */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Форматы обучения</h2>
          <div className="grid md:grid-cols-2 gap-5 mb-16">
            {[
              {
                icon: '💻',
                title: 'Онлайн-обучение',
                desc: 'Обучаем через видеосвязь — Zoom или Telegram. Удобно: занимаетесь из своего кабинета на своём оборудовании.',
                features: ['Индивидуальный формат', 'Удобное время', 'Запись сессии', 'Доступ из любого города'],
                color: '#f0fdfb',
                border: '#99f4e8',
              },
              {
                icon: '🏫',
                title: 'Оффлайн-обучение',
                desc: 'Очные занятия в нашем учебном центре. Практика на реальных аппаратах под руководством опытного специалиста.',
                features: ['Живая практика', 'Материалы в подарок', 'Сертификат', 'Вопросы и ответы'],
                color: '#fff8f0',
                border: '#fcd9a0',
              },
            ].map(({ icon, title, desc, features, color, border }) => (
              <div key={title} className="p-6 rounded-2xl border" style={{background: color, borderColor: border}}>
                <span className="text-4xl mb-4 block">{icon}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{desc}</p>
                <ul className="space-y-1.5">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <span style={{color:'#3ECAB4'}}>✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* SECTION: С РУ */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex-1 h-px bg-gray-100"/>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold" style={{background:'#fff8f0', color:'#c05621', border:'1px solid #fcd9a0'}}>
                Аппараты с Регистрационным Удостоверением (С РУ)
              </span>
              <div className="flex-1 h-px bg-gray-100"/>
            </div>
            <p className="text-center text-sm text-gray-500 mb-8">
              Обучение обязательно приобретается отдельно. Требует специализированной подготовки.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PAID_COURSES_WITH_RU.map(course => (
                <CourseCard key={course.title} {...course} />
              ))}
            </div>
          </div>

          {/* SECTION: Без РУ */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex-1 h-px bg-gray-100"/>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold" style={{background:'#f0fdfb', color:'#168d7d', border:'1px solid #99f4e8'}}>
                Аппараты без Регистрационного Удостоверения (Без РУ)
              </span>
              <div className="flex-1 h-px bg-gray-100"/>
            </div>
            <p className="text-center text-sm text-gray-500 mb-8">
              Базовое обучение включено бесплатно при покупке. Дополнительные курсы — по желанию.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PAID_COURSES_NO_RU.map(course => (
                <CourseCard key={course.title} {...course} />
              ))}
            </div>
          </div>

          {/* Video — coming soon */}
          <div className="p-6 rounded-2xl bg-gray-50 border border-dashed border-gray-200 text-center mb-16">
            <span className="text-3xl mb-3 block">🎬</span>
            <h3 className="font-semibold text-gray-700 mb-1">Видеоуроки — скоро</h3>
            <p className="text-sm text-gray-500">Работаем над созданием обучающих видео по каждому аппарату. Оставьте заявку — сообщим о запуске.</p>
          </div>

          {/* CTA */}
          <div className="rounded-3xl overflow-hidden" style={{background:'linear-gradient(135deg, #3ECAB4, #168d7d)'}}>
            <div className="px-8 py-10 text-center text-white">
              <h2 className="text-2xl font-bold mb-3">Записаться на обучение</h2>
              <p className="text-teal-100 mb-6 max-w-md mx-auto">Оставьте заявку — свяжемся, уточним ваш аппарат и подберём удобное время</p>
              <Link href="/contacts"
                className="inline-block px-8 py-3 bg-white font-semibold text-sm rounded-xl hover:bg-gray-50 transition-colors"
                style={{color:'#168d7d'}}>
                Записаться на обучение
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
