import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
export const dynamic = 'force-dynamic'
export const metadata = { title: 'О компании — Beauty Shape' }

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <div className="py-16 px-4 sm:px-6" style={{background:'linear-gradient(135deg, #f0fdfb, #ffffff)'}}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{color:'#3ECAB4'}}>О компании</p>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Beauty Shape</h1>
            <p className="text-xl text-gray-500 leading-relaxed font-light">15 лет лидерства и экспертности на рынке профессионального косметологического и массажного оборудования</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-14">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[['15+','Лет на рынке'],['64+','Аппаратов'],['1 год','Гарантия'],['🇷🇺','Доставка по РФ']].map(([n,l]) => (
              <div key={l} className="text-center p-5 rounded-2xl" style={{background:'#f0fdfb'}}>
                <div className="text-3xl font-bold text-gray-900 mb-1">{n}</div>
                <div className="text-sm text-gray-500">{l}</div>
              </div>
            ))}
          </div>

          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Компания <strong>Beauty Shape</strong> — ваш надежный партнер в развитии красивого бизнеса. Мы обеспечиваем клиники эстетической медицины, спа-салоны и бьюти-центры передовыми технологиями напрямую от ведущих мировых производителей.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon:'🔗', title:'Прямые контракты', desc:'Поставляем оборудование без посредников напрямую с заводов США, Южной Кореи и Китая.' },
              { icon:'🔧', title:'Свой сервисный центр', desc:'Быстрая техническая поддержка, гарантийный и постгарантийный ремонт любой сложности.' },
              { icon:'📜', title:'Лицензированное обучение', desc:'Готовим специалистов на базе собственного учебного центра. Дипломы вносятся в реестр ФИС ФРДО.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="p-5 rounded-2xl border border-gray-100 hover:border-teal-200 transition-colors">
                <span className="text-3xl mb-3 block">{icon}</span>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div id="service">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Сервисный центр</h2>
            <div className="p-6 rounded-2xl" style={{background:'#f0fdfb'}}>
              <p className="text-gray-700 leading-relaxed mb-4">Мы знаем, как дорого обходится день простоя премиального оборудования. Наш собственный сервисный центр располагает огромным складом комплектующих и предлагает полный спектр технического обслуживания для аппаратов любых марок.</p>
              <ul className="space-y-2">
                {[
                  'Оригинальные запчасти для Candela, InMode, Cynosure, Lutronic, Alma Lasers, LPG Systems',
                  'Профессиональная замена ламп в лазерных и IPL-системах',
                  'Обслуживание картриджей для SMAS-лифтинга (Ulthera, Ultraformer, Liftera и др.)',
                  'Плановое ТО и срочный ремонт любой сложности',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <span style={{color:'#3ECAB4'}} className="mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div id="warranty">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Гарантия и условия</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon:'🛡️', title:'Гарантия 1 год', desc:'На всё оборудование без исключений.' },
                { icon:'↩️', title:'Возврат', desc:'По условиям законодательства РФ о защите прав потребителей.' },
                { icon:'📦', title:'Документы', desc:'Сертификаты, гарантийные карты, инструкции на русском.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="p-5 rounded-2xl border border-gray-100">
                  <span className="text-2xl mb-3 block">{icon}</span>
                  <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="delivery">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Доставка по России</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon:'📦', name:'СДЭК', desc:'Доставка по всей России. Срок 3–7 рабочих дней в зависимости от региона.' },
                { icon:'🚛', name:'Деловые Линии', desc:'Для крупногабаритного оборудования. Надёжная упаковка, без повреждений.' },
              ].map(({ icon, name, desc }) => (
                <div key={name} className="p-5 rounded-2xl bg-gray-50 flex gap-4">
                  <span className="text-2xl flex-shrink-0">{icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
                    <p className="text-sm text-gray-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden" style={{background:'linear-gradient(135deg, #3ECAB4, #168d7d)'}}>
            <div className="px-8 py-10 text-center text-white">
              <h2 className="text-2xl font-bold mb-3">Остались вопросы?</h2>
              <p className="text-teal-100 mb-6">Свяжитесь с нами — ответим на все вопросы</p>
              <Link href="/contacts" className="inline-block px-8 py-3 bg-white font-semibold text-sm rounded-xl hover:bg-gray-50 transition-colors" style={{color:'#168d7d'}}>
                Написать нам
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
