-- ============================================================
-- BEAUTY SHAPE — SQL Schema v2
-- Выполни в Supabase → SQL Editor → New Query → Run
-- ============================================================

-- 1. Категории
create table if not exists categories (
  id          bigserial primary key,
  slug        text unique not null,
  name        text not null,
  emoji       text default '⚡',
  sort_order  integer default 0,
  is_active   boolean default true,
  created_at  timestamptz default now()
);

-- 2. Товары
create table if not exists products (
  id               bigserial primary key,
  category_id      bigint references categories(id) on delete set null,
  slug             text unique not null,
  name             text not null,
  price            numeric(12,2),
  price_from       boolean default false,
  price_on_request boolean default false,
  short_desc       text,
  description      text,
  specs            jsonb default '{}',
  images           text[] default '{}',  -- Cloudinary URLs
  stock            integer default 0,
  is_hit           boolean default false,
  is_new           boolean default false,
  is_active        boolean default true,
  sort_order       integer default 0,
  created_at       timestamptz default now(),
  updated_at       timestamptz default now()
);

-- 3. Заявки
create table if not exists orders (
  id           bigserial primary key,
  client_name  text not null,
  client_phone text not null,
  client_email text,
  comment      text,
  product_id   bigint references products(id) on delete set null,
  product_name text,
  status       text default 'new' check (status in ('new','in_progress','done','cancelled')),
  manager_note text,
  created_at   timestamptz default now()
);

-- 4. Индексы
create index if not exists idx_products_category on products(category_id);
create index if not exists idx_products_active on products(is_active);
create index if not exists idx_orders_status on orders(status);
create index if not exists idx_orders_created on orders(created_at desc);

-- 5. RLS
alter table categories enable row level security;
alter table products enable row level security;
alter table orders enable row level security;

drop policy if exists "Public read categories" on categories;
drop policy if exists "Public read products" on products;
drop policy if exists "Public insert orders" on orders;

create policy "Public read categories" on categories for select using (is_active = true);
create policy "Public read products"   on products   for select using (is_active = true);
create policy "Public insert orders"   on orders     for insert with check (true);

-- 6. Seed — 34 категории
insert into categories (slug, name, emoji, sort_order) values
  ('diode-laser',       'Диодные лазеры',                                          '🔴', 1),
  ('alexandrite-laser', 'Александритовые лазеры',                                  '💜', 2),
  ('nd-yag',            'Неодимовые лазеры (Nd:YAG)',                              '🔵', 3),
  ('pico-laser',        'Пикосекундные лазеры',                                    '⚡', 4),
  ('co2-laser',         'CO2 лазеры (углекислотные)',                              '🟢', 5),
  ('erbium-laser',      'Эрбиевые лазеры (Erbium:YAG)',                           '🌿', 6),
  ('thulium-laser',     'Тулиевые лазеры',                                         '💎', 7),
  ('ipl-shr',           'IPL / E-light / SHR системы',                            '✨', 8),
  ('hifu-smas',         'Аппараты SMAS-лифтинга (HIFU)',                          '🎯', 9),
  ('needle-rf',         'Аппараты игольчатого RF-лифтинга',                        '🪡', 10),
  ('classic-rf',        'Аппараты классического RF-лифтинга',                      '📡', 11),
  ('compress-massage',  'Аппараты компрессионно-вибрационного массажа',            '💆', 12),
  ('lpg-massage',       'Вакуумно-роликовые массажеры (LPG)',                      '🔄', 13),
  ('cavitation',        'Аппараты кавитации',                                      '🌊', 14),
  ('cryolipolysis',     'Аппараты криолиполиза',                                   '❄️', 15),
  ('ems-emsculpt',      'Аппараты EMS / EMSculpt',                                '💪', 16),
  ('hydropeel',         'Аппараты гидропилинга',                                   '💧', 17),
  ('ultrasound-scrub',  'Ультразвуковые скраберы',                                 '🔊', 18),
  ('microcurrent',      'Аппараты микротоковой терапии',                           '⚡', 19),
  ('cold-plasma',       'Аппараты плазменного омоложения (Холодная плазма)',       '🌟', 20),
  ('gas-liquid-peel',   'Аппараты газожидкостного пилинга',                        '🫧', 21),
  ('electroporation',   'Аппараты электропорации',                                 '🔬', 22),
  ('pressotherapy',     'Аппараты прессотерапии',                                  '🩱', 23),
  ('laser-lipolysis',   'Лазерные липолизеры',                                     '🎯', 24),
  ('darsonval',         'Аппараты дарсонвализации',                                '⚡', 25),
  ('dermapen',          'Аппараты фракционной мезотерапии (Дермапены)',            '💉', 26),
  ('carboxytherapy',    'Аппараты карбокситерапии',                               '🫁', 27),
  ('led-therapy',       'Аппараты LED-терапии (фотодинамической терапии)',         '💡', 28),
  ('myostim',           'Аппараты миостимуляции тела',                             '💪', 29),
  ('shock-wave',        'Аппараты ударно-волновой терапии (УВТ)',                 '🌀', 30),
  ('thermage',          'Аппараты термажа (монополярного RF-лифтинга)',            '🔥', 31),
  ('skin-analyzer',     'Аппараты анализаторы кожи',                              '🔭', 32),
  ('vibro-massage',     'Аппараты субдермального вибромассажа (G5 / G8)',          '🎵', 33),
  ('ir-pants',          'Инфракрасные штаны и термоодеяла',                        '🩲', 34)
on conflict (slug) do nothing;
