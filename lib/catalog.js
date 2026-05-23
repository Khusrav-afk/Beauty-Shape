export const categories = [
  { id: 1, slug: 'hifu-smas',         name: 'HIFU SMAS Лифтинг',                        count: 7  },
  { id: 2, slug: 'hifu-intim',        name: 'HIFU SMAS + Интимное омоложение',           count: 5  },
  { id: 3, slug: 'hifu-liposonix',    name: 'HIFU SMAS + Liposonix / Комбайны',         count: 6  },
  { id: 4, slug: 'laser-epil',        name: 'Лазерная эпиляция',                        count: 8  },
  { id: 5, slug: 'yag-pico',          name: 'Удаление татуировок (YAG / Pico)',          count: 7  },
  { id: 6, slug: 'vascular-ipl',      name: 'Удаление сосудов и IPL / CO2',             count: 6  },
  { id: 7, slug: 'rf-lifting',        name: 'Микроигольчатый RF-лифтинг',               count: 5  },
  { id: 8, slug: 'cold-plasma',       name: 'Холодная плазма',                          count: 1  },
  { id: 9, slug: 'peelings',          name: 'Аппаратная косметология (пилинги, карбокси)', count: 5 },
  { id: 10, slug: 'indiba',           name: 'INDIBA / RET CET RF',                      count: 2  },
  { id: 11, slug: 'massage',          name: 'Массаж и коррекция фигуры',                count: 4  },
  { id: 12, slug: 'pressotherapy',    name: 'Прессотерапия и миостимуляция',            count: 2  },
  { id: 13, slug: 'consumables',      name: 'Расходные материалы (картриджи)',           count: 2  },
  { id: 14, slug: 'furniture',        name: 'Мебель и подставки',                       count: 4  },
]

export const products = [
  // HIFU SMAS
  { id: 1, slug: 'hifu-smas-system',    categorySlug: 'hifu-smas',      name: 'HIFU SMAS SYSTEM',                    price: 100000, priceFrom: true,  stock: 3, isHit: true,  desc: 'Профессиональный аппарат HIFU SMAS лифтинга. Подтяжка лица и тела без операций. Гарантия 1 год.',  specs: { 'Тип': 'Ультразвуковой лифтинг', 'Картриджи': '4 шт в комплекте', 'Экран': '10 дюймов', 'Гарантия': '1 год' } },
  { id: 2, slug: 'hifu-smas-system-pro',categorySlug: 'hifu-smas',      name: 'HIFU SMAS SYSTEM PRO',                price: 150000, priceFrom: true,  stock: 2, isHit: true,  desc: 'Профессиональная версия с держателями манипулы и гелем.', specs: { 'Тип': 'Ультразвуковой лифтинг', 'Картриджи': '6 шт в комплекте', 'Гарантия': '1 год' } },
  { id: 3, slug: 'hifu-smas-mini',      categorySlug: 'hifu-smas',      name: 'HIFU SMAS Mini',                      price: 75000,  priceFrom: false, stock: 5, isHit: false, desc: 'Портативный аппарат HIFU SMAS. Удобен для работы на дому и в небольших кабинетах.', specs: { 'Тип': 'Портативный', 'Вес': '3 кг', 'Гарантия': '1 год' } },
  { id: 4, slug: 'hifu-7d-ultramage',   categorySlug: 'hifu-smas',      name: 'HIFU SMAS 7D ULTRAMAGE',              price: 160000, priceFrom: false, stock: 2, isHit: true,  desc: '7D HIFU с двумя манипулами. Мощный аппарат для глубокого лифтинга.', specs: { 'Линии': '7D', 'Манипулы': '2 шт', 'Гарантия': '1 год' } },
  { id: 5, slug: 'hifu-7d-station',     categorySlug: 'hifu-smas',      name: 'Стационарный HIFU 7D SYSTEM',         price: 150000, priceFrom: true,  stock: 1, isHit: false, desc: 'Стационарная версия HIFU 7D.', specs: { 'Тип': 'Стационарный', 'Гарантия': '1 год' } },
  { id: 6, slug: 'hifu-7d-mpt',         categorySlug: 'hifu-smas',      name: 'Стационарный HIFU 7D MPT',            price: 250000, priceFrom: true,  stock: 1, isHit: false, desc: 'Топовая стационарная версия 7D с MPT технологией.', specs: { 'Технология': 'MPT', 'Гарантия': '1 год' } },
  { id: 7, slug: 'hifu-smas-cartridges',categorySlug: 'hifu-smas',      name: 'Картриджи для HIFU SMAS',             price: 8000,   priceFrom: true,  stock: 20,isHit: false, desc: 'Сменные картриджи для аппаратов HIFU SMAS.', specs: { 'Совместимость': 'HIFU SMAS SYSTEM', 'Количество линий': 'от 1500' } },

  // HIFU + Intim
  { id: 8,  slug: 'hifu-intim-only',    categorySlug: 'hifu-intim',     name: 'HIFU SMAS ИНТИМ',                     price: 90000,  priceFrom: false, stock: 2, isHit: false, desc: 'Аппарат для интимного омоложения HIFU.', specs: { 'Тип': 'Интимное омоложение', 'Гарантия': '1 год' } },
  { id: 9,  slug: 'hifu-intim-2in1',    categorySlug: 'hifu-intim',     name: 'HIFU SMAS + ИНТИМ 2в1',               price: 120000, priceFrom: false, stock: 2, isHit: true,  desc: 'Лифтинг + интимное омоложение в одном аппарате.', specs: { 'Функции': 'Лифтинг + Интим', 'Гарантия': '1 год' } },
  { id: 10, slug: 'hifu-intim-pro',     categorySlug: 'hifu-intim',     name: 'HIFU SMAS + ИНТИМ 2в1 Pro',           price: 140000, priceFrom: false, stock: 1, isHit: false, desc: 'Pro версия с 15" экраном.', specs: { 'Экран': '15 дюймов', 'Гарантия': '1 год' } },
  { id: 11, slug: 'hifu-7d-intim',      categorySlug: 'hifu-intim',     name: 'HIFU SMAS 7D + ИНТИМ 2в1',           price: 180000, priceFrom: false, stock: 1, isHit: false, desc: '7D лифтинг + интим.', specs: { 'Линии': '7D', 'Гарантия': '1 год' } },
  { id: 12, slug: 'hifu-4d-intim',      categorySlug: 'hifu-intim',     name: 'HIFU SMAS 4D + ИНТИМ 2в1',           price: 200000, priceFrom: false, stock: 1, isHit: false, desc: '4D HIFU + интимное омоложение.', specs: { 'Линии': '4D', 'Гарантия': '1 год' } },

  // HIFU + Liposonix
  { id: 13, slug: 'liposonix-mini',     categorySlug: 'hifu-liposonix', name: 'LIPOSONIX MINI',                      price: 90000,  priceFrom: false, stock: 3, isHit: false, desc: 'Портативный аппарат для коррекции фигуры Liposonix.', specs: { 'Тип': 'Портативный', 'Гарантия': '1 год' } },
  { id: 14, slug: 'hifu-liposonix-2in1',categorySlug: 'hifu-liposonix', name: 'HIFU SMAS + LIPOSONIX 2в1',          price: 140000, priceFrom: false, stock: 2, isHit: true,  desc: 'Лифтинг + коррекция фигуры в одном аппарате.', specs: { 'Функции': 'Лифтинг + Liposonix', 'Гарантия': '1 год' } },
  { id: 15, slug: 'hifu-4d-liposonix',  categorySlug: 'hifu-liposonix', name: 'HIFU SMAS 4D + LIPOSONIX 2в1',       price: 220000, priceFrom: false, stock: 1, isHit: false, desc: '4D HIFU + Liposonix.', specs: { 'Гарантия': '1 год' } },
  { id: 16, slug: 'hifu-4d-rf',         categorySlug: 'hifu-liposonix', name: 'HIFU SMAS 4D + Микроигольч. RF 2в1', price: 200000, priceFrom: false, stock: 1, isHit: false, desc: '4D HIFU + RF лифтинг.', specs: { 'Гарантия': '1 год' } },
  { id: 17, slug: 'hifu-4in1',          categorySlug: 'hifu-liposonix', name: 'HIFU + LIPOSONIX + V-MAX + RF (4в1)', price: 330000, priceFrom: false, stock: 1, isHit: true,  desc: 'Максимальный комбайн 4 в 1.', specs: { 'Функции': '4 в 1', 'Гарантия': '1 год' } },
  { id: 18, slug: 'hifu-5in1',          categorySlug: 'hifu-liposonix', name: 'HIFU 5в1 (+ ИНТИМ)',                  price: 390000, priceFrom: false, stock: 1, isHit: false, desc: 'Комбайн 5 в 1 включая интимное омоложение.', specs: { 'Функции': '5 в 1', 'Гарантия': '1 год' } },

  // Laser epilation
  { id: 19, slug: 'diode-basic',        categorySlug: 'laser-epil',     name: 'Диодный лазер (базовый)',             price: 130000, priceFrom: false, stock: 3, isHit: true,  desc: 'Диодный лазер 808 нм для эпиляции всех типов кожи.', specs: { 'Длина волны': '808 нм', 'Гарантия': '1 год' } },
  { id: 20, slug: 'diode-v2',           categorySlug: 'laser-epil',     name: 'Диодный лазер v2',                    price: 135000, priceFrom: true,  stock: 2, isHit: false, desc: 'Улучшенная версия диодного лазера.', specs: { 'Длина волны': '808 нм', 'Гарантия': '1 год' } },
  { id: 21, slug: 'diode-v3',           categorySlug: 'laser-epil',     name: 'Диодный лазер v3',                    price: 135000, priceFrom: true,  stock: 2, isHit: false, desc: 'Третья версия диодного лазера.', specs: { 'Гарантия': '1 год' } },
  { id: 22, slug: 'diode-v4',           categorySlug: 'laser-epil',     name: 'Диодный лазер v4',                    price: 150000, priceFrom: false, stock: 1, isHit: false, desc: 'Четвёртое поколение диодного лазера.', specs: { 'Гарантия': '1 год' } },
  { id: 23, slug: 'diode-pro',          categorySlug: 'laser-epil',     name: 'Диодный лазер PRO',                   price: 255000, priceFrom: false, stock: 1, isHit: true,  desc: 'Профессиональная версия диодного лазера.', specs: { 'Гарантия': '1 год' } },
  { id: 24, slug: 'diode-triple',       categorySlug: 'laser-epil',     name: 'Диодный лазер 755/808/1064 нм',       price: 310000, priceFrom: false, stock: 1, isHit: false, desc: 'Трёхволновой гибридный диодный лазер.', specs: { 'Длины волн': '755/808/1064 нм', 'Гарантия': '1 год' } },
  { id: 25, slug: 'diode-nd-2in1',      categorySlug: 'laser-epil',     name: 'Диодный + Неодимовый 2в1',            price: 156000, priceFrom: false, stock: 2, isHit: false, desc: 'Диодный и неодимовый лазер в одном.', specs: { 'Гарантия': '1 год' } },
  { id: 26, slug: 'diode-nd-pro',       categorySlug: 'laser-epil',     name: 'Диодный + Неодимовый 2в1 Pro',        price: 180000, priceFrom: false, stock: 1, isHit: false, desc: 'Pro версия диодного + неодимового.', specs: { 'Гарантия': '1 год' } },

  // YAG / Pico
  { id: 27, slug: 'yag-la15',           categorySlug: 'yag-pico',       name: 'Неодимовый YAG LASER LA-15',          price: 55000,  priceFrom: false, stock: 4, isHit: true,  desc: 'Неодимовый лазер для удаления татуировок и пигментации.', specs: { 'Тип': 'Nd:YAG', 'Гарантия': '1 год' } },
  { id: 28, slug: 'yag-la15-8',         categorySlug: 'yag-pico',       name: 'YAG LASER LA-15 с дисплеем 8"',      price: 65000,  priceFrom: false, stock: 3, isHit: false, desc: 'YAG лазер с 8" дисплеем.', specs: { 'Экран': '8 дюймов', 'Гарантия': '1 год' } },
  { id: 29, slug: 'yag-la15-pro',       categorySlug: 'yag-pico',       name: 'YAG LASER LA-15 PRO',                 price: 80000,  priceFrom: false, stock: 2, isHit: false, desc: 'Pro версия YAG лазера.', specs: { 'Гарантия': '1 год' } },
  { id: 30, slug: 'yag-y8',             categorySlug: 'yag-pico',       name: 'YAG LASER Y-8 с дисплеем 8.4"',      price: 120000, priceFrom: false, stock: 1, isHit: false, desc: 'YAG лазер Y-8 с большим дисплеем.', specs: { 'Экран': '8.4 дюйма', 'Гарантия': '1 год' } },
  { id: 31, slug: 'pico-mini',          categorySlug: 'yag-pico',       name: 'Пикосекундный MINI PICO',             price: 70000,  priceFrom: false, stock: 3, isHit: true,  desc: 'Компактный пикосекундный лазер.', specs: { 'Тип': 'Пикосекундный', 'Гарантия': '1 год' } },
  { id: 32, slug: 'pico-1200',          categorySlug: 'yag-pico',       name: 'Пикосекундный 1200Вт PICOSECOND',     price: 70000,  priceFrom: false, stock: 2, isHit: false, desc: 'Мощный пикосекундный лазер 1200Вт.', specs: { 'Мощность': '1200 Вт', 'Гарантия': '1 год' } },
  { id: 33, slug: 'yag-rf-combo',       categorySlug: 'yag-pico',       name: 'YAG + RF + OPT-E комбайн',            price: 230000, priceFrom: false, stock: 1, isHit: false, desc: 'Многофункциональный комбайн.', specs: { 'Функции': 'YAG + RF + OPT-E', 'Гарантия': '1 год' } },

  // Vascular / IPL
  { id: 34, slug: 'vascular-basic',     categorySlug: 'vascular-ipl',   name: 'Васкулярный лазер (базовый)',         price: 76000,  priceFrom: false, stock: 3, isHit: false, desc: 'Лазер для удаления сосудов.', specs: { 'Гарантия': '1 год' } },
  { id: 35, slug: 'vascular-v2',        categorySlug: 'vascular-ipl',   name: 'Васкулярный лазер v2',                price: 76000,  priceFrom: false, stock: 2, isHit: false, desc: 'Вторая версия васкулярного лазера.', specs: { 'Гарантия': '1 год' } },
  { id: 36, slug: 'vascular-pro',       categorySlug: 'vascular-ipl',   name: 'Васкулярный лазер PRO',               price: 95000,  priceFrom: false, stock: 2, isHit: false, desc: 'Pro версия васкулярного лазера.', specs: { 'Гарантия': '1 год' } },
  { id: 37, slug: 'vascular-screen',    categorySlug: 'vascular-ipl',   name: 'Васкулярный лазер с экраном',         price: 124000, priceFrom: false, stock: 1, isHit: true,  desc: 'Васкулярный лазер с планшетным экраном.', specs: { 'Гарантия': '1 год' } },
  { id: 38, slug: 'ipl-m22',            categorySlug: 'vascular-ipl',   name: 'Платформа IPL М-22',                  price: 175000, priceFrom: true,  stock: 1, isHit: true,  desc: 'Многомодульная платформа IPL М-22.', specs: { 'Тип': 'IPL платформа', 'Гарантия': '1 год' } },
  { id: 39, slug: 'co2-fotona',         categorySlug: 'vascular-ipl',   name: 'CO2 FOTONA',                          price: 399000, priceFrom: false, stock: 1, isHit: false, desc: 'CO2 лазер FOTONA. Премиум оборудование.', specs: { 'Тип': 'CO2', 'Гарантия': '1 год' } },

  // RF Lifting
  { id: 40, slug: 'rf-desk-basic',      categorySlug: 'rf-lifting',     name: 'RF-лифтинг настольный (начальный)',   price: 55000,  priceFrom: true,  stock: 4, isHit: false, desc: 'Настольный аппарат микроигольчатого RF-лифтинга.', specs: { 'Тип': 'Настольный', 'Гарантия': '1 год' } },
  { id: 41, slug: 'rf-desk-mid',        categorySlug: 'rf-lifting',     name: 'RF-лифтинг настольный (средний)',     price: 100000, priceFrom: false, stock: 2, isHit: false, desc: 'Средний класс настольного RF-лифтинга.', specs: { 'Гарантия': '1 год' } },
  { id: 42, slug: 'rf-morpheus',        categorySlug: 'rf-lifting',     name: 'RF-лифтинг аналог Morpheus 8',        price: 230000, priceFrom: false, stock: 1, isHit: true,  desc: 'Аналог Morpheus 8 — топовый микроигольчатый RF-лифтинг.', specs: { 'Аналог': 'Morpheus 8', 'Гарантия': '1 год' } },
  { id: 43, slug: 'rf-station',         categorySlug: 'rf-lifting',     name: 'Стационарный RF-лифтинг',             price: 167000, priceFrom: false, stock: 1, isHit: false, desc: 'Стационарный аппарат RF-лифтинга.', specs: { 'Тип': 'Стационарный', 'Гарантия': '1 год' } },
  { id: 44, slug: 'rf-morpheus-pro',    categorySlug: 'rf-lifting',     name: 'RF-лифтинг аналог Morpheus 8 Pro',   price: 280000, priceFrom: false, stock: 1, isHit: false, desc: 'Pro версия аналога Morpheus 8.', specs: { 'Гарантия': '1 год' } },

  // Cold Plasma
  { id: 45, slug: 'cold-plasma-device', categorySlug: 'cold-plasma',    name: 'Аппарат холодной плазмы',             price: 140000, priceFrom: false, stock: 2, isHit: true,  desc: 'Аппарат плазменного омоложения. Эффективен для акне, коагуляции.', specs: { 'Гарантия': '1 год' } },

  // Peelings
  { id: 46, slug: 'oxygen-spray',       categorySlug: 'peelings',       name: 'Кислородный пилинг OXYGEN SPRAY',    price: 10000,  priceFrom: false, stock: 8, isHit: false, desc: 'Кислородный пилинг. Доступная цена, высокий эффект.', specs: { 'Гарантия': '1 год' } },
  { id: 47, slug: 'gas-liquid',         categorySlug: 'peelings',       name: 'Газожидкостной пилинг GL',            price: 15000,  priceFrom: false, stock: 5, isHit: false, desc: 'Аппарат газожидкостного пилинга и барофореза.', specs: { 'Гарантия': '1 год' } },
  { id: 48, slug: 'hydro-6in1',         categorySlug: 'peelings',       name: 'Гидропилинг 6в1 H2O2',               price: 29000,  priceFrom: false, stock: 4, isHit: true,  desc: 'Гидропилинг SMALL BUBBLE 6 в 1.', specs: { 'Функции': '6 в 1', 'Гарантия': '1 год' } },
  { id: 49, slug: 'carboxy',            categorySlug: 'peelings',       name: 'Карбокситерапия OXY GENEO',           price: 40000,  priceFrom: false, stock: 3, isHit: false, desc: 'Аппарат для карбокситерапии.', specs: { 'Гарантия': '1 год' } },
  { id: 50, slug: 'cosmet-8d',          categorySlug: 'peelings',       name: 'Косметологический аппарат 6в1 8D WL', price: 45000,  priceFrom: false, stock: 2, isHit: false, desc: 'Многофункциональный косметологический комбайн.', specs: { 'Функции': '6 в 1', 'Гарантия': '1 год' } },

  // INDIBA
  { id: 51, slug: 'indiba-3in1',        categorySlug: 'indiba',         name: 'INDIBA RET CET RF 3в1',               price: 93000,  priceFrom: false, stock: 2, isHit: true,  desc: 'INDIBA RET CET RF — эффективный лифтинг и похудение.', specs: { 'Частота': '448 кГц', 'Гарантия': '1 год' } },
  { id: 52, slug: 'indiba-448',         categorySlug: 'indiba',         name: 'INDIBA RET CET 448 кГц',              price: 86000,  priceFrom: false, stock: 2, isHit: false, desc: 'INDIBA 448 кГц.', specs: { 'Частота': '448 кГц', 'Гарантия': '1 год' } },

  // Massage
  { id: 53, slug: 'roller-massage',     categorySlug: 'massage',        name: 'Роликовый массаж (коррекция фигуры)', price: 150000, priceFrom: true,  stock: 1, isHit: false, desc: 'Аппарат роликового массажа для коррекции фигуры.', specs: { 'Гарантия': '1 год' } },
  { id: 54, slug: 'compress-massage',   categorySlug: 'massage',        name: 'Компрессионный массаж с вибрацией',   price: 230000, priceFrom: false, stock: 1, isHit: false, desc: 'Аппарат компрессионного массажа с микровибрацией.', specs: { 'Гарантия': '1 год' } },
  { id: 55, slug: 'g5-massage',         categorySlug: 'massage',        name: 'Субдермальный массаж G5',             price: 30000,  priceFrom: false, stock: 4, isHit: false, desc: 'Аппарат субдермального массажа G5.', specs: { 'Гарантия': '1 год' } },
  { id: 56, slug: 'turbo-g8',           categorySlug: 'massage',        name: 'Вибромассаж NEW TURBO G8 + термо-вакуум', price: 52000, priceFrom: false, stock: 3, isHit: false, desc: 'Аппарат вибрационного массажа с термовакуумом.', specs: { 'Гарантия': '1 год' } },

  // Pressotherapy
  { id: 57, slug: 'myostim',            categorySlug: 'pressotherapy',  name: 'Миостимуляция',                       price: 22000,  priceFrom: false, stock: 5, isHit: false, desc: 'Аппарат миостимуляции.', specs: { 'Гарантия': '1 год' } },
  { id: 58, slug: 'press-myo-ir',       categorySlug: 'pressotherapy',  name: 'Прессотерапия + Миостимуляция + ИК',  price: 125000, priceFrom: false, stock: 2, isHit: false, desc: 'Комплекс прессотерапии с миостимуляцией и ИК.', specs: { 'Функции': '3 в 1', 'Гарантия': '1 год' } },

  // Consumables
  { id: 59, slug: 'cart-hifu',          categorySlug: 'consumables',    name: 'Картриджи для HIFU SMAS',             price: 8000,   priceFrom: true,  stock: 30,isHit: false, desc: 'Сменные картриджи для аппаратов HIFU SMAS.', specs: { 'Совместимость': 'HIFU SMAS SYSTEM' } },
  { id: 60, slug: 'cart-7d',            categorySlug: 'consumables',    name: 'Картриджи для 7D HIFU SMAS',          price: 25000,  priceFrom: false, stock: 15,isHit: false, desc: 'Картриджи для аппаратов 7D HIFU SMAS.', specs: { 'Совместимость': '7D HIFU SMAS' } },

  // Furniture
  { id: 61, slug: 'trolley',            categorySlug: 'furniture',      name: 'Подставка-тележка для аппарата',      price: 6000,   priceFrom: false, stock: 10,isHit: false, desc: 'Удобная подставка-тележка на колёсах.', specs: {} },
  { id: 62, slug: 'cabinet-drawers',    categorySlug: 'furniture',      name: 'Тумба с выдвижными ящиками',          price: 25000,  priceFrom: false, stock: 5, isHit: false, desc: 'Тумба с выдвижными ящиками для косметолога.', specs: {} },
  { id: 63, slug: 'cabinet-ipl',        categorySlug: 'furniture',      name: 'Тумба для аппарата IPL М-22',         price: 30000,  priceFrom: false, stock: 3, isHit: false, desc: 'Специализированная тумба для IPL М-22.', specs: {} },
  { id: 64, slug: 'stand-rf',           categorySlug: 'furniture',      name: 'Металлическая подставка для RF',      price: 25000,  priceFrom: false, stock: 5, isHit: false, desc: 'Металлическая подставка для микроигольчатого RF.', specs: {} },
]

export function getProductsByCategory(slug) {
  return products.filter(p => p.categorySlug === slug)
}
export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug)
}
export function getCategoryBySlug(slug) {
  return categories.find(c => c.slug === slug)
}
export function getHitProducts() {
  return products.filter(p => p.isHit).slice(0, 6)
}
export function formatPrice(price, priceFrom) {
  const formatted = new Intl.NumberFormat('ru-RU').format(price)
  return priceFrom ? `от ${formatted} ₽` : `${formatted} ₽`
}
