import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export const dynamic = 'force-dynamic'
export const metadata = { title: 'Учебный центр — Beauty Shape' }

// ─── Курсы С РУ (платные, обязательные) ───────────────────────────────────
const COURSES_WITH_RU = [
  {
    id: 1,
    title: 'HIFU SMAS Лифтинг',
    badge: 'С РУ',
    level: 'Специалист',
    duration: '2 дня',
    format: 'Оффлайн / Онлайн',
    features: [
      'Анатомия лица и шеи',
      'Показания и противопоказания',
      'Протоколы процедур лифтинга',
      'Работа с разными зонами',
      'Разбор осложнений',
      'Сертификат специалиста',
    ],
    price: 'Уточнить цену',
  },
  {
    id: 2,
    title: 'Liposonix / Липосоник',
    badge: 'С РУ',
    level: 'Специалист',
    duration: '1–2 дня',
    format: 'Оффлайн / Онлайн',
    features: [
      'Принцип действия ультразвука',
      'Показания и зоны коррекции',
      'Настройка параметров аппарата',
      'Комбинирование с другими методиками',
      'Постпроцедурный уход',
      'Сертификат специалиста',
    ],
    price: 'Уточнить цену',
  },
  {
    id: 3,
    title: 'CO2-лазер фракционный',
    badge: 'С РУ',
    level: 'Специалист',
    duration: '2 дня',
    format: 'Оффлайн',
    features: [
      'Техника безопасности с лазером',
      'Протоколы шлифовки для разных зон',
      'Работа с рубцами и растяжками',
      'Постпроцедурный уход',
      'Противопоказания и осложнения',
      'Сертификат специалиста',
    ],
    price: 'Уточнить цену',
  },
  {
    id: 4,
    title: 'Эрбиевый лазер',
    badge: 'С РУ',
    level: 'Специалист',
    duration: '2 дня',
    format: 'Оффлайн',
    features: [
      'Отличия от CO2-лазера',
      'Показания для омоложения кожи',
      'Протоколы поверхностной шлифовки',
      'Сочетание с другими методиками',
      'Реабилитация пациента',
      'Сертификат специалиста',
    ],
    price: 'Уточнить цену',
  },
  {
    id: 5,
    title: 'Тулиевый лазер',
    badge: 'С РУ',
    level: 'Специалист',
    duration: '2 дня',
    format: 'Оффлайн',
    features: [
      'Принцип действия 1927 нм',
      'Показания и противопоказания',
      'Фракционные протоколы',
      'Работа с пигментацией',
      'Постпроцедурный уход',
      'Сертификат специалиста',
    ],
    price: 'Уточнить цену',
  },
]

// ─── Курсы БЕЗ РУ (бесплатное базовое + платные расширенные) ──────────────
const COURSES_NO_RU = [
  {
    id: 6,
    title: 'Диодный лазер — эпиляция',
    badge: 'Без РУ',
    level: 'Базовый + Расширенный',
    duration: '1 день',
    format: 'Онлайн / Оффлайн',
    features: [
      'Фототипы кожи по Фицпатрику',
      'Техника обработки тела и лица',
      'Работа со сложными зонами',
      'Настройка параметров под тип кожи',
      'Работа с темнокожими клиентами',
    ],
    price: 'Бесплатно при покупке',
    isFree: true,
  },
  {
    id: 7,
    title: 'Микроигольчатый RF',
    badge: 'Без РУ',
    level: 'Базовый + Расширенный',
    duration: '1 день',
    format: 'Онлайн / Оффлайн',
    features: [
      'Анатомия кожи, глубина воздействия',
      'Протоколы омоложения',
      'Комбинирование с мезотерапией',
      'Работа с акне и рубцами',
      'Реабилитация',
    ],
    price: 'Бесплатно при покупке',
    isFree: true,
  },
  {
    id: 8,
    title: 'YAG / Pico лазер',
    badge: 'Без РУ',
    level: 'Базовый + Расширенный',
    duration: '1 день',
    format: 'Онлайн / Оффлайн',
    features: [
      'Виды пигментации и татуировок',
      'Параметры излучения',
      'Работа с цветными татуировками',
      'Осложнения и их устранение',
      'Постпроцедурный уход',
    ],
    price: 'Бесплатно при покупке',
    isFree: true,
  },
  {
    id: 9,
    title: 'IPL / SHR фотоэпиляция',
    badge: 'Без РУ',
    level: 'Базовый + Расширенный',
    duration: '1 день',
    format: 'Онлайн / Оффлайн',
    features: [
      'Принцип IPL/SHR/DPL',
      'Подбор фильтров и параметров',
      'Протоколы для лица и тела',
      'Фотоомоложение и фотоэпиляция',
      'Безопасность и осложнения',
    ],
    price: 'Бесплатно при покупке',
    isFree: true,
  },
  {
    id: 10,
    title: 'Холодная плазма',
    badge: 'Без РУ',
    level: 'Базовый',
    duration: '0.5 дня',
    format: 'Онлайн',
    features: [
      'Принцип плазменного воздействия',
      'Показания: акне, коагуляция, омоложение',
      'Техника нанесения',
      'Постпроцедурный уход',
    ],
    price: 'Бесплатно при покупке',
    isFree: true,
  },
  {
    id: 11,
    title: 'Аппаратная косметология',
    badge: 'Без РУ',
    level: 'Базовый',
    duration: '1 день',
    format: 'Онлайн / Оффлайн',
    features: [
      'Гидропилинг, карбокситерапия',
      'Кислородный и газожидкостный пилинг',
      'Протоколы для разных типов кожи',
      'Комбинированные программы',
      'Сезонность процедур',
    ],
    price: 'Бесплатно при покупке',
    isFree: true,
  },
]

function CourseCard({ course }) {
  const isRU = course.badge === 'С РУ'

  return (
    <div className="bg-white rounded-2xl border overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
      style={{borderColor: isRU ? '#fcd9a0' : '#99f4e8'}}>

      {/* Шапка карточки */}
      <div className="p-5 pb-4" style={{background: isRU ? '#fffbeb' : '#f0fdfb'}}>
        <div className="flex items-start justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold"
            style={{
              background: isRU ? '#c05621' : '#3ECAB4',
              color: 'white',
            }}>
            {isRU ? (
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 1l2.928 6.472L20 8.236l-5 4.618 1.18 6.882L10 16.472l-6.18 3.264L5 12.854 0 8.236l7.072-.764L10 1z" clipRule="evenodd"/>
              </svg>
            ) : (
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
              </svg>
            )}
            {course.badge}
          </span>
          {course.isFree && (
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
              Бесплатно
            </span>
          )}
        </div>
        <h3 className="font-bold text-gray-900 text-base leading-tight mb-2">{course.title}</h3>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 text-xs text-gray-500">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            {course.duration}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-gray-500">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2"/>
            </svg>
            {course.format}
          </span>
        </div>
      </div>

      {/* Программа */}
      <div className="px-5 py-4 flex-1">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Программа</p>
        <ul className="space-y-2">
          {course.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5 text-xs font-bold text-white"
                style={{background: isRU ? '#c05621' : '#3ECAB4', fontSize:'9px'}}>
                {i + 1}
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Подвал карточки */}
      <div className="px-5 pb-5 pt-4 border-t border-gray-50">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Стоимость</p>
            <p className="font-bold text-sm"
              style={{color: course.isFree ? '#059669' : '#c05621'}}>
              {course.price}
            </p>
          </div>
          <span className="text-xs text-gray-400">{course.level}</span>
        </div>
        <Link href="/contacts"
          className="block w-full py-2.5 rounded-xl text-center text-sm font-semibold text-white hover:opacity-90 transition-opacity"
          style={{background: isRU ? '#c05621' : '#3ECAB4'}}>
          Записаться на курс
        </Link>
      </div>
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
            <div className="flex justify-center gap-4 mt-8 flex-wrap">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{background:'#fff8f0', color:'#c05621', border:'1px solid #fcd9a0'}}>
                <span className="w-2 h-2 rounded-full" style={{background:'#c05621'}}/>
                Аппараты С РУ — обучение платное
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{background:'#f0fdfb', color:'#168d7d', border:'1px solid #99f4e8'}}>
                <span className="w-2 h-2 rounded-full" style={{background:'#3ECAB4'}}/>
                Аппараты Без РУ — обучение бесплатно
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

          {/* Форматы */}
          <div className="grid md:grid-cols-2 gap-5 mb-16">
            {[
              {
                icon: '💻',
                title: 'Онлайн-обучение',
                desc: 'Zoom или Telegram. Из своего кабинета, на своём оборудовании.',
                features: ['Индивидуальный формат', 'Удобное время', 'Запись сессии', 'Любой город'],
                color: '#f0fdfb', border: '#99f4e8',
              },
              {
                icon: '🏫',
                title: 'Оффлайн-обучение',
                desc: 'Очные занятия в учебном центре. Живая практика на реальных аппаратах.',
                features: ['Живая практика', 'Материалы в подарок', 'Сертификат', 'Вопросы и ответы'],
                color: '#fff8f0', border: '#fcd9a0',
              },
            ].map(({ icon, title, desc, features, color, border }) => (
              <div key={title} className="p-6 rounded-2xl border" style={{background: color, borderColor: border}}>
                <span className="text-3xl mb-3 block">{icon}</span>
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

          {/* ═══ РАЗДЕЛ 1: С РУ ═══ */}
          <div className="mb-16">
            <div className="rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              style={{background:'linear-gradient(135deg, #fffbeb, #fff8f0)', border:'2px solid #fcd9a0'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{background:'#c05621'}}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 1l2.928 6.472L20 8.236l-5 4.618 1.18 6.882L10 16.472l-6.18 3.264L5 12.854 0 8.236l7.072-.764L10 1z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  Аппараты с Регистрационным Удостоверением (С РУ)
                </h2>
                <p className="text-sm text-gray-500">
                  Обучение является <strong>обязательным и платным</strong>. Требует специализированной медицинской подготовки. Проходится до начала работы на аппарате.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {COURSES_WITH_RU.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>

          {/* ═══ РАЗДЕЛ 2: БЕЗ РУ ═══ */}
          <div className="mb-16">
            <div className="rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              style={{background:'linear-gradient(135deg, #f0fdfb, #e6faf7)', border:'2px solid #99f4e8'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{background:'#3ECAB4'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  Аппараты без Регистрационного Удостоверения (Без РУ)
                </h2>
                <p className="text-sm text-gray-500">
                  <strong>Базовое обучение включено бесплатно</strong> при покупке аппарата. Дополнительные курсы и расширенные программы — по желанию.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {COURSES_NO_RU.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>

          {/* Видео — скоро */}
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
