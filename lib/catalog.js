import { supabase } from '@/lib/supabase'

// Категории и конкретные товары с ПЛАТНЫМ обучением (Вариант Б)
// HIFU SMAS лифтинг, Liposonix, CO2-лазер, Эрбиевый лазер, Тулиевый лазер
export const PAID_TRAINING_CATEGORIES = ['hifu-smas', 'hifu-intim', 'hifu-liposonix']

// Конкретные slug товаров с платным обучением
export const PAID_TRAINING_SLUGS = [
  'co2-laser',
  'erbium-laser',
  'thulium-laser',
]

export const categories = [
  { id: 1,  slug: 'hifu-smas',        name: 'HIFU SMAS Лифтинг',                        count: 7  },
  { id: 2,  slug: 'hifu-intim',       name: 'HIFU SMAS + Интимное омоложение',           count: 5  },
  { id: 3,  slug: 'hifu-liposonix',   name: 'HIFU SMAS + Liposonix / Комбайны',         count: 6  },
  { id: 4,  slug: 'laser-epil',       name: 'Лазерная эпиляция',                        count: 8  },
  { id: 5,  slug: 'yag-pico',         name: 'Удаление татуировок (YAG / Pico)',          count: 7  },
  { id: 6,  slug: 'vascular-ipl',     name: 'Удаление сосудов и IPL / CO2',             count: 6  },
  { id: 7,  slug: 'rf-lifting',       name: 'Микроигольчатый RF-лифтинг',               count: 5  },
  { id: 8,  slug: 'cold-plasma',      name: 'Холодная плазма',                          count: 1  },
  { id: 9,  slug: 'peelings',         name: 'Аппаратная косметология (пилинги, карбокси)', count: 5 },
  { id: 10, slug: 'indiba',           name: 'INDIBA / RET CET RF',                      count: 2  },
  { id: 11, slug: 'massage',          name: 'Массаж и коррекция фигуры',                count: 4  },
  { id: 12, slug: 'pressotherapy',   name: 'Прессотерапия и миостимуляция',            count: 2  },
  { id: 13, slug: 'consumables',     name: 'Расходные материалы (картриджи)',           count: 2  },
  { id: 14, slug: 'furniture',       name: 'Мебель и подставки',                       count: 4  },
]

export const products = [
  // HIFU SMAS
  { id: 1,  slug: 'hifu-smas-system',     relatedConsumables: ['cart-hifu', 'cart-7d'],     categorySlug: 'hifu-smas',      country: 'CN', name: 'HIFU SMAS SYSTEM',                    price: 100000, priceFrom: true,  stock: 3,  isHit: true,  desc: 'Профессиональный аппарат HIFU SMAS лифтинга. Подтяжка лица и тела без операций. Гарантия 1 год.',  specs: { 'Тип': 'Ультразвуковой лифтинг', 'Картриджи': '4 шт в комплекте', 'Экран': '10 дюймов', 'Гарантия': '1 год' } },
  { id: 2,  slug: 'hifu-smas-system-pro', relatedConsumables: ['cart-hifu'], categorySlug: 'hifu-smas',      country: 'CN', name: 'HIFU SMAS SYSTEM PRO',                price: 150000, priceFrom: true,  stock: 2,  isHit: true,  desc: 'Профессиональная версия с держателями манипулы и гелем.', specs: { 'Тип': 'Ультразвуковой лифтинг', 'Картриджи': '6 шт в комплекте', 'Гарантия': '1 год' } },
  { id: 3,  slug: 'hifu-smas-mini',       relatedConsumables: ['cart-hifu'],       categorySlug: 'hifu-smas',      country: 'CN', name: 'HIFU SMAS Mini',                      price: 75000,  priceFrom: false, stock: 5,  isHit: false, desc: 'Портативный аппарат HIFU SMAS. Удобен для работы на дому и в небольших кабинетах.', specs: { 'Тип': 'Портативный', 'Вес': '3 кг', 'Гарантия': '1 год' } },
  { id: 4,  slug: 'hifu-7d-ultramage',    relatedConsumables: ['cart-7d'],    categorySlug: 'hifu-smas',      country: 'CN', name: 'HIFU SMAS 7D ULTRAMAGE',              price: 160000, priceFrom: false, stock: 2,  isHit: true,  desc: '7D HIFU с двумя манипулами. Мощный аппарат для глубокого лифтинга.', specs: { 'Линии': '7D', 'Манипулы': '2 шт', 'Гарантия': '1 год' } },
  { id: 5,  slug: 'hifu-7d-station',      relatedConsumables: ['cart-7d'],      categorySlug: 'hifu-smas',      country: 'CN', name: 'Стационарный HIFU 7D SYSTEM',         price: 150000, priceFrom: true,  stock: 1,  isHit: false, desc: 'Стационарная версия HIFU 7D.', specs: { 'Тип': 'Стационарный', 'Гарантия': '1 год' } },
  { id: 6,  slug: 'hifu-7d-mpt',          relatedConsumables: ['cart-7d'],          categorySlug: 'hifu-smas',      country: 'CN', name: 'Стационарный HIFU 7D MPT',            price: 250000, priceFrom: true,  stock: 1,  isHit: false, desc: 'Топовая стационарная версия 7D с MPT технологией.', specs: { 'Технология': 'MPT', 'Гарантия': '1 год' } },
  { id: 7,  slug: 'hifu-smas-cartridges', categorySlug: 'hifu-smas',      country: 'CN', name: 'Картриджи для HIFU SMAS',             price: 8000,   priceFrom: true,  stock: 20, isHit: false, desc: 'Сменные картриджи для аппаратов HIFU SMAS.', specs: { 'Совместимость': 'HIFU SMAS SYSTEM', 'Количество линий': 'от 1500' } },

  // HIFU + Intim
  { id: 8,  slug: 'hifu-intim-only',      categorySlug: 'hifu-intim',     country: 'CN', name: 'HIFU SMAS ИНТИМ',                     price: 90000,  priceFrom: false, stock: 2,  isHit: false, desc: 'Аппарат для интимного омоложения HIFU.', specs: { 'Тип': 'Интимное омоложение', 'Гарантия': '1 год' } },
  { id: 9,  slug: 'hifu-intim-2in1',      categorySlug: 'hifu-intim',     country: 'CN', name: 'HIFU SMAS + ИНТИМ 2в1',               price: 120000, priceFrom: false, stock: 2,  isHit: true,  desc: 'Лифтинг + интимное омоложение в одном аппарате.', specs: { 'Функции': 'Лифтинг + Интим', 'Гарантия': '1 год' } },
  { id: 10, slug: 'hifu-intim-pro',       categorySlug: 'hifu-intim',     country: 'CN', name: 'HIFU SMAS + ИНТИМ 2в1 Pro',           price: 140000, priceFrom: false, stock: 1,  isHit: false, desc: 'Pro версия с 15" экраном.', specs: { 'Экран': '15 дюймов', 'Гарантия': '1 год' } },
  { id: 11, slug: 'hifu-7d-intim',        categorySlug: 'hifu-intim',     country: 'CN', name: 'HIFU SMAS 7D + ИНТИМ 2в1',           price: 180000, priceFrom: false, stock: 1,  isHit: false, desc: '7D лифтинг + интим.', specs: { 'Линии': '7D', 'Гарантия': '1 год' } },
  { id: 12, slug: 'hifu-4d-intim',        categorySlug: 'hifu-intim',     country: 'CN', name: 'HIFU SMAS 4D + ИНТИМ 2в1',           price: 200000, priceFrom: false, stock: 1,  isHit: false, desc: '4D HIFU + интимное омоложение.', specs: { 'Линии': '4D', 'Гарантия': '1 год' } },

  // HIFU + Liposonix
  { id: 13, slug: 'liposonix-mini',       categorySlug: 'hifu-liposonix', country: 'CN', name: 'LIPOSONIX MINI',                      price: 90000,  priceFrom: false, stock: 3,  isHit: false, desc: 'Портативный аппарат для коррекции фигуры Liposonix.', specs: { 'Тип': 'Портативный', 'Гарантия': '1 год' } },
  { id: 14, slug: 'hifu-liposonix-2in1',  categorySlug: 'hifu-liposonix', country: 'CN', name: 'HIFU SMAS + LIPOSONIX 2в1',          price: 140000, priceFrom: false, stock: 2,  isHit: true,  desc: 'Лифтинг + коррекция фигуры в одном аппарате.', specs: { 'Функции': 'Лифтинг + Liposonix', 'Гарантия': '1 год' } },
  { id: 15, slug: 'hifu-4d-liposonix',    categorySlug: 'hifu-liposonix', country: 'CN', name: 'HIFU SMAS 4D + LIPOSONIX 2в1',       price: 220000, priceFrom: false, stock: 1,  isHit: false, desc: '4D HIFU + Liposonix.', specs: { 'Гарантия': '1 год' } },
  { id: 16, slug: 'hifu-4d-rf',           categorySlug: 'hifu-liposonix', country: 'CN', name: 'HIFU SMAS 4D + Микроигольч. RF 2в1', price: 200000, priceFrom: false, stock: 1,  isHit: false, desc: '4D HIFU + RF лифтинг.', specs: { 'Гарантия': '1 год' } },
  { id: 17, slug: 'hifu-4in1',            categorySlug: 'hifu-liposonix', country: 'CN', name: 'HIFU + LIPOSONIX + V-MAX + RF (4в1)', price: 330000, priceFrom: false, stock: 1,  isHit: true,  desc: 'Максимальный комбайн 4 в 1.', specs: { 'Функции': '4 в 1', 'Гарантия': '1 год' } },
  { id: 18, slug: 'hifu-5in1',            categorySlug: 'hifu-liposonix', country: 'CN', name: 'HIFU 5в1 (+ ИНТИМ)',                  price: 390000, priceFrom: false, stock: 1,  isHit: false, desc: 'Комбайн 5 в 1 включая интимное омоложение.', specs: { 'Функции': '5 в 1', 'Гарантия': '1 год' } },

  // Laser epilation
  { id: 19, slug: 'diode-basic',          categorySlug: 'laser-epil',     country: 'CN', name: 'Диодный лазер (базовый)',             price: 130000, priceFrom: false, stock: 3,  isHit: true,  desc: 'Диодный лазер 808 нм для эпиляции всех типов кожи.', specs: { 'Длина волны': '808 нм', 'Гарантия': '1 год' } },
  { id: 20, slug: 'diode-v2',             categorySlug: 'laser-epil',     country: 'CN', name: 'Диодный лазер v2',                    price: 135000, priceFrom: true,  stock: 2,  isHit: false, desc: 'Улучшенная версия диодного лазера.', specs: { 'Длина волны': '808 нм', 'Гарантия': '1 год' } },
  { id: 21, slug: 'diode-v3',             categorySlug: 'laser-epil',     country: 'CN', name: 'Диодный лазер v3',                    price: 135000, priceFrom: true,  stock: 2,  isHit: false, desc: 'Третья версия диодного лазера.', specs: { 'Гарантия': '1 год' } },
  { id: 22, slug: 'diode-v4',             categorySlug: 'laser-epil',     country: 'CN', name: 'Диодный лазер v4',                    price: 150000, priceFrom: false, stock: 1,  isHit: false, desc: 'Четвёртое поколение диодного лазера.', specs: { 'Гарантия': '1 год' } },
  { id: 23, slug: 'diode-pro',            categorySlug: 'laser-epil',     country: 'CN', name: 'Диодный лазер PRO',                   price: 255000, priceFrom: false, stock: 1,  isHit: true,  desc: 'Профессиональная версия диодного лазера.', specs: { 'Гарантия': '1 год' } },
  { id: 24, slug: 'diode-triple',         categorySlug: 'laser-epil',     country: 'CN', name: 'Диодный лазер 755/808/1064 нм',       price: 310000, priceFrom: false, stock: 1,  isHit: false, desc: 'Трёхволновой гибридный диодный лазер.', specs: { 'Длины волн': '755/808/1064 нм', 'Гарантия': '1 год' } },
  { id: 25, slug: 'diode-nd-2in1',        categorySlug: 'laser-epil',     country: 'CN', name: 'Диодный + Неодимовый 2в1',            price: 156000, priceFrom: false, stock: 2,  isHit: false, desc: 'Диодный и неодимовый лазер в одном.', specs: { 'Гарантия': '1 год' } },
  { id: 26, slug: 'diode-nd-pro',         categorySlug: 'laser-epil',     country: 'CN', name: 'Диодный + Неодимовый 2в1 Pro',        price: 180000, priceFrom: false, stock: 1,  isHit: false, desc: 'Pro версия диодного + неодимового.', specs: { 'Гарантия': '1 год' } },

  // YAG / Pico
  { id: 27, slug: 'yag-la15',             categorySlug: 'yag-pico',       country: 'CN', name: 'Неодимовый YAG LASER LA-15',          price: 55000,  priceFrom: false, stock: 4,  isHit: true,  desc: 'Неодимовый лазер для удаления татуировок и пигментации.', specs: { 'Тип': 'Nd:YAG', 'Гарантия': '1 год' } },
  { id: 28, slug: 'yag-la15-8',           categorySlug: 'yag-pico',       country: 'CN', name: 'YAG LASER LA-15 с дисплеем 8"',      price: 65000,  priceFrom: false, stock: 3,  isHit: false, desc: 'YAG лазер с 8" дисплеем.', specs: { 'Экран': '8 дюймов', 'Гарантия': '1 год' } },
  { id: 29, slug: 'yag-la15-pro',         categorySlug: 'yag-pico',       country: 'CN', name: 'YAG LASER LA-15 PRO',                 price: 75000,  priceFrom: false, stock: 2,  isHit: false, desc: 'Профессиональная версия YAG лазера.', specs: { 'Гарантия': '1 год' } },
  { id: 30, slug: 'pico-laser',           categorySlug: 'yag-pico',       country: 'KR', name: 'Пико-лазер',                          price: 180000, priceFrom: false, stock: 1,  isHit: true,  desc: 'Пикосекундный лазер для удаления пигментации и татуировок.', specs: { 'Тип': 'Пикосекундный', 'Гарантия': '1 год' } },
  { id: 31, slug: 'pico-nd-yag',          categorySlug: 'yag-pico',       country: 'KR', name: 'Пико-лазер + Nd:YAG 2в1',             price: 220000, priceFrom: false, stock: 1,  isHit: false, desc: 'Комбайн пикосекундного и Nd:YAG лазеров.', specs: { 'Гарантия': '1 год' } },
  { id: 32, slug: 'co2-laser',            categorySlug: 'yag-pico',       country: 'CN', name: 'СО2-лазер фракционный',               price: 200000, priceFrom: false, stock: 1,  isHit: false, desc: 'Фракционный СО2-лазер для омоложения и шлифовки.', specs: { 'Тип': 'Фракционный CO2', 'Гарантия': '1 год' } },
  { id: 33, slug: 'ipl-vascular',         categorySlug: 'vascular-ipl',   country: 'KR', name: 'IPL аппарат',                         price: 85000,  priceFrom: true,  stock: 2,  isHit: false, desc: 'IPL аппарат для фотоомоложения и удаления сосудов.', specs: { 'Гарантия': '1 год' } },
  { id: 34, slug: 'ipl-dpl',              categorySlug: 'vascular-ipl',   country: 'KR', name: 'DPL аппарат',                         price: 120000, priceFrom: false, stock: 2,  isHit: false, desc: 'DPL — улучшенная технология фототерапии.', specs: { 'Гарантия': '1 год' } },
  { id: 35, slug: 'ipl-shr',              categorySlug: 'vascular-ipl',   country: 'CN', name: 'SHR IPL аппарат',                     price: 95000,  priceFrom: false, stock: 1,  isHit: true,  desc: 'SHR IPL — безболезненная фото-эпиляция.', specs: { 'Гарантия': '1 год' } },
  { id: 36, slug: 'ipl-e-light',          categorySlug: 'vascular-ipl',   country: 'CN', name: 'E-Light IPL+RF',                      price: 110000, priceFrom: false, stock: 1,  isHit: false, desc: 'E-Light — комбинация IPL и RF.', specs: { 'Гарантия': '1 год' } },
  { id: 37, slug: 'ipl-m22',              categorySlug: 'vascular-ipl',   country: 'KR', name: 'Аналог M22 IPL',                      price: 180000, priceFrom: false, stock: 1,  isHit: false, desc: 'Аналог M22 — многофункциональная фотоплатформа.', specs: { 'Гарантия': '1 год' } },
  { id: 38, slug: 'ipl-m22-pro',          categorySlug: 'vascular-ipl',   country: 'KR', name: 'Аналог M22 IPL Pro',                  price: 220000, priceFrom: false, stock: 1,  isHit: false, desc: 'Pro версия аналога M22.', specs: { 'Гарантия': '1 год' } },

  // RF lifting
  { id: 39, slug: 'rf-mini',              categorySlug: 'rf-lifting',     country: 'CN', name: 'Микроигольчатый RF Mini',             price: 100000, priceFrom: false, stock: 3,  isHit: true,  desc: 'Портативный микроигольчатый RF-лифтинг.', specs: { 'Тип': 'Портативный', 'Гарантия': '1 год' } },
  { id: 40, slug: 'rf-standard',          categorySlug: 'rf-lifting',     country: 'CN', name: 'Микроигольчатый RF (стандарт)',       price: 130000, priceFrom: false, stock: 2,  isHit: false, desc: 'Стандартный микроигольчатый RF аппарат.', specs: { 'Гарантия': '1 год' } },
  { id: 41, slug: 'rf-fractional',        categorySlug: 'rf-lifting',     country: 'KR', name: 'Фракционный RF',                      price: 145000, priceFrom: false, stock: 2,  isHit: false, desc: 'Фракционный RF для омоложения кожи.', specs: { 'Гарантия': '1 год' } },
  { id: 42, slug: 'rf-morpheus',          categorySlug: 'rf-lifting',     country: 'KR', name: 'RF-лифтинг аналог Morpheus 8',        price: 220000, priceFrom: false, stock: 1,  isHit: false, desc: 'Аналог Morpheus 8 — глубокий RF-лифтинг.', specs: { 'Гарантия': '1 год' } },
  { id: 43, slug: 'rf-station',           categorySlug: 'rf-lifting',     country: 'CN', name: 'Стационарный RF-лифтинг',             price: 167000, priceFrom: false, stock: 1,  isHit: false, desc: 'Стационарный аппарат RF-лифтинга.', specs: { 'Тип': 'Стационарный', 'Гарантия': '1 год' } },
  { id: 44, slug: 'rf-morpheus-pro',      categorySlug: 'rf-lifting',     country: 'KR', name: 'RF-лифтинг аналог Morpheus 8 Pro',   price: 280000, priceFrom: false, stock: 1,  isHit: false, desc: 'Pro версия аналога Morpheus 8.', specs: { 'Гарантия': '1 год' } },

  // Cold Plasma
  { id: 45, slug: 'cold-plasma-device',   categorySlug: 'cold-plasma',    country: 'CN', name: 'Аппарат холодной плазмы',             price: 140000, priceFrom: false, stock: 2,  isHit: true,  desc: 'Аппарат плазменного омоложения. Эффективен для акне, коагуляции.', specs: { 'Гарантия': '1 год' } },

  // Peelings
  { id: 46, slug: 'oxygen-spray',         categorySlug: 'peelings',       country: 'CN', name: 'Кислородный пилинг OXYGEN SPRAY',    price: 10000,  priceFrom: false, stock: 8,  isHit: false, desc: 'Кислородный пилинг. Доступная цена, высокий эффект.', specs: { 'Гарантия': '1 год' } },
  { id: 47, slug: 'gas-liquid',           categorySlug: 'peelings',       country: 'CN', name: 'Газожидкостной пилинг GL',            price: 15000,  priceFrom: false, stock: 5,  isHit: false, desc: 'Аппарат газожидкостного пилинга и барофореза.', specs: { 'Гарантия': '1 год' } },
  { id: 48, slug: 'hydro-6in1',           categorySlug: 'peelings',       country: 'CN', name: 'Гидропилинг 6в1 H2O2',               price: 29000,  priceFrom: false, stock: 4,  isHit: true,  desc: 'Гидропилинг SMALL BUBBLE 6 в 1.', specs: { 'Функции': '6 в 1', 'Гарантия': '1 год' } },
  { id: 49, slug: 'carboxy',              categorySlug: 'peelings',       country: 'CN', name: 'Карбокситерапия OXY GENEO',           price: 40000,  priceFrom: false, stock: 3,  isHit: false, desc: 'Аппарат для карбокситерапии.', specs: { 'Гарантия': '1 год' } },
  { id: 50, slug: 'cosmet-8d',            categorySlug: 'peelings',       country: 'CN', name: 'Косметологический аппарат 6в1 8D WL', price: 45000,  priceFrom: false, stock: 2,  isHit: false, desc: 'Многофункциональный косметологический комбайн.', specs: { 'Функции': '6 в 1', 'Гарантия': '1 год' } },

  // INDIBA
  { id: 51, slug: 'indiba-3in1',          categorySlug: 'indiba',         country: 'KR', name: 'INDIBA RET CET RF 3в1',               price: 93000,  priceFrom: false, stock: 2,  isHit: true,  desc: 'INDIBA RET CET RF — эффективный лифтинг и похудение.', specs: { 'Частота': '448 кГц', 'Гарантия': '1 год' } },
  { id: 52, slug: 'indiba-448',           categorySlug: 'indiba',         country: 'KR', name: 'INDIBA RET CET 448 кГц',              price: 86000,  priceFrom: false, stock: 2,  isHit: false, desc: 'INDIBA 448 кГц.', specs: { 'Частота': '448 кГц', 'Гарантия': '1 год' } },

  // Massage
  { id: 53, slug: 'roller-massage',       categorySlug: 'massage',        country: 'CN', name: 'Роликовый массаж (коррекция фигуры)', price: 150000, priceFrom: true,  stock: 1,  isHit: false, desc: 'Аппарат роликового массажа для коррекции фигуры.', specs: { 'Гарантия': '1 год' } },
  { id: 54, slug: 'compress-massage',     categorySlug: 'massage',        country: 'CN', name: 'Компрессионный массаж с вибрацией',   price: 230000, priceFrom: false, stock: 1,  isHit: false, desc: 'Аппарат компрессионного массажа с микровибрацией.', specs: { 'Гарантия': '1 год' } },
  { id: 55, slug: 'g5-massage',           categorySlug: 'massage',        country: 'CN', name: 'Субдермальный массаж G5',             price: 30000,  priceFrom: false, stock: 4,  isHit: false, desc: 'Аппарат субдермального массажа G5.', specs: { 'Гарантия': '1 год' } },
  { id: 56, slug: 'turbo-g8',             categorySlug: 'massage',        country: 'CN', name: 'Вибромассаж NEW TURBO G8 + термо-вакуум', price: 52000, priceFrom: false, stock: 3, isHit: false, desc: 'Аппарат вибрационного массажа с термовакуумом.', specs: { 'Гарантия': '1 год' } },

  // Pressotherapy
  { id: 57, slug: 'myostim',              categorySlug: 'pressotherapy',  country: 'CN', name: 'Миостимуляция',                       price: 22000,  priceFrom: false, stock: 5,  isHit: false, desc: 'Аппарат миостимуляции.', specs: { 'Гарантия': '1 год' } },
  { id: 58, slug: 'press-myo-ir',         categorySlug: 'pressotherapy',  country: 'CN', name: 'Прессотерапия + Миостимуляция + ИК',  price: 125000, priceFrom: false, stock: 2,  isHit: false, desc: 'Комплекс прессотерапии с миостимуляцией и ИК.', specs: { 'Функции': '3 в 1', 'Гарантия': '1 год' } },

  // Consumables
  { id: 59, slug: 'cart-hifu',            categorySlug: 'consumables',    country: 'CN', name: 'Картриджи для HIFU SMAS',             price: 8000,   priceFrom: true,  stock: 30, isHit: false, desc: 'Сменные картриджи для аппаратов HIFU SMAS.', specs: { 'Совместимость': 'HIFU SMAS SYSTEM' } },
  { id: 60, slug: 'cart-7d',              categorySlug: 'consumables',    country: 'CN', name: 'Картриджи для 7D HIFU SMAS',          price: 25000,  priceFrom: false, stock: 15, isHit: false, desc: 'Картриджи для аппаратов 7D HIFU SMAS.', specs: { 'Совместимость': '7D HIFU SMAS' } },

  // Furniture
  { id: 61, slug: 'trolley',              categorySlug: 'furniture',      country: 'CN', name: 'Подставка-тележка для аппарата',      price: 6000,   priceFrom: false, stock: 10, isHit: false, desc: 'Удобная подставка-тележка на колёсах.', specs: {} },
  { id: 62, slug: 'cabinet-drawers',      categorySlug: 'furniture',      country: 'CN', name: 'Тумба с выдвижными ящиками',          price: 25000,  priceFrom: false, stock: 5,  isHit: false, desc: 'Тумба с выдвижными ящиками для косметолога.', specs: {} },
  { id: 63, slug: 'cabinet-ipl',          categorySlug: 'furniture',      country: 'CN', name: 'Тумба для аппарата IPL М-22',         price: 30000,  priceFrom: false, stock: 3,  isHit: false, desc: 'Специализированная тумба для IPL М-22.', specs: {} },
  { id: 64, slug: 'stand-rf',             categorySlug: 'furniture',      country: 'CN', name: 'Металлическая подставка для RF',      price: 25000,  priceFrom: false, stock: 5,  isHit: false, desc: 'Металлическая подставка для микроигольчатого RF.', specs: {} },
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
export function needsPaidTraining(product) {
  return (
    PAID_TRAINING_CATEGORIES.includes(product.categorySlug) ||
    PAID_TRAINING_SLUGS.includes(product.slug)
  )
}

// Флаги стран
export const COUNTRY_FLAGS = {
  CN: '🇨🇳',
  KR: '🇰🇷',
  US: '🇺🇸',
}
export const COUNTRY_NAMES = {
  CN: 'Китай',
  KR: 'Южная Корея',
  US: 'США',
}
// Флаги-картинки (эмодзи-флаги не рисуются на Windows) — рендерятся через <img>
export const COUNTRY_FLAG_SRC = {
  CN: 'https://flagcdn.com/32x24/cn.png',
  KR: 'https://flagcdn.com/32x24/kr.png',
  US: 'https://flagcdn.com/32x24/us.png',
}

export function getRelatedConsumables(product) {
  if (!product.relatedConsumables || product.relatedConsumables.length === 0) return []
  return product.relatedConsumables
    .map(slug => products.find(p => p.slug === slug))
    .filter(Boolean)
}

// ============================================================
// Supabase data layer (Фаза 1)
// Эти async-функции читают из Supabase. Если БД пуста или недоступна —
// автоматически отдают статические данные выше, чтобы витрина не опустела.
// Серверные компоненты вызывают их через await, клиентские — в useEffect.
// ============================================================

// Приводим строку из Supabase к форме, которую ожидают страницы
function normalizeProduct(row) {
  return {
    id:                 row.id,
    slug:               row.slug,
    name:               row.name,
    price:              row.price != null ? Number(row.price) : null,
    priceFrom:          !!row.price_from,
    priceOnRequest:     !!row.price_on_request,
    stock:              row.stock ?? 0,
    isHit:              !!row.is_hit,
    isNew:              !!row.is_new,
    country:            row.country || null,
    categorySlug:       row.categories?.slug || row.category_slug || null,
    categoryName:       row.categories?.name || null,
    desc:               row.short_desc || row.description || '',
    specs:              row.specs || {},
    images:             Array.isArray(row.images) ? row.images : [],
    relatedConsumables: Array.isArray(row.related_consumables) ? row.related_consumables : [],
  }
}

// Все активные товары из Supabase (или статический фолбэк)
export async function fetchProducts() {
  if (!supabase) return products
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*, categories(slug,name)')
      .eq('is_active', true)
      .order('sort_order', { ascending: true })
    if (error || !data || data.length === 0) return products
    return data.map(normalizeProduct)
  } catch {
    return products
  }
}

// Активные категории + количество товаров в каждой
export async function fetchCategories() {
  if (!supabase) return categories
  try {
    const { data, error } = await supabase
      .from('categories')
      .select('id,slug,name')
      .eq('is_active', true)
      .order('sort_order', { ascending: true })
    if (error || !data || data.length === 0) return categories
    const prods = await fetchProducts()
    const countMap = {}
    for (const p of prods) {
      countMap[p.categorySlug] = (countMap[p.categorySlug] || 0) + 1
    }
    return data.map(c => ({ id: c.id, slug: c.slug, name: c.name, count: countMap[c.slug] || 0 }))
  } catch {
    return categories
  }
}

export async function fetchProductsByCategory(slug) {
  const all = await fetchProducts()
  return all.filter(p => p.categorySlug === slug)
}

export async function fetchProductBySlug(slug) {
  const all = await fetchProducts()
  let decoded = slug
  try { decoded = decodeURIComponent(slug) } catch {}
  return all.find(p =>
    p.slug === slug ||
    p.slug === decoded ||
    encodeURIComponent(p.slug) === slug
  ) || null
}

export async function fetchCategoryBySlug(slug) {
  const all = await fetchCategories()
  let decoded = slug
  try { decoded = decodeURIComponent(slug) } catch {}
  return all.find(c => c.slug === slug || c.slug === decoded) || null
}

export async function fetchHitProducts(limit = 6) {
  const all = await fetchProducts()
  return all.filter(p => p.isHit).slice(0, limit)
}

export async function fetchRelatedConsumables(product) {
  if (!product?.relatedConsumables || product.relatedConsumables.length === 0) return []
  const all = await fetchProducts()
  return product.relatedConsumables
    .map(slug => all.find(p => p.slug === slug))
    .filter(Boolean)
}

// Главное фото товара (первая Cloudinary-ссылка) или null под заглушку
export function productImage(product) {
  return product?.images && product.images.length > 0 ? product.images[0] : null
}
