# Beauty Shape — Сайт косметологического оборудования

## Стек
- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Supabase** — база данных PostgreSQL
- **Vercel** — деплой

---

## Шаг 1 — Supabase (база данных)

1. Зайди на [supabase.com](https://supabase.com) → New project
2. Запомни: Project URL и два ключа (anon key и service_role key)
3. Зайди в **SQL Editor** → New Query → вставь содержимое файла `supabase-schema.sql` → Run
4. Категории создадутся автоматически. Товары добавляешь через админку.

---

## Шаг 2 — GitHub

```bash
# 1. Создай новый репозиторий на github.com (New repository)
# 2. В терминале внутри папки beauty-shape:

git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/ТВО_ИМЯ/beauty-shape.git
git push -u origin main
```

---

## Шаг 3 — Vercel (деплой)

1. Зайди на [vercel.com](https://vercel.com) → New Project
2. Import репозитория с GitHub
3. **Environment Variables** — добавь все переменные:

| Переменная | Где взять |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Project Settings → API → Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase → Project Settings → API → anon public |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → Project Settings → API → service_role |
| `TELEGRAM_BOT_TOKEN` | @BotFather в Telegram → /newbot |
| `TELEGRAM_CHAT_ID` | ID группы или канала куда слать уведомления |
| `ADMIN_PASSWORD` | Придумай сложный пароль для входа в /admin |
| `NEXT_PUBLIC_PHONE` | +79002747119 |
| `NEXT_PUBLIC_EMAIL` | b.shape@mail.ru |
| `NEXT_PUBLIC_TELEGRAM` | https://t.me/+aPk5OJJWJoJiYjhi |
| `NEXT_PUBLIC_INSTAGRAM` | https://www.instagram.com/apparat_kosmetolog.bs |

4. Нажми **Deploy** — сайт появится через 2 минуты

---

## Шаг 4 — Админка

Зайди на `твой-сайт.vercel.app/admin` → введи ADMIN_PASSWORD

**Что можно делать в админке:**
- 📋 **Заявки** — видеть все заявки, менять статус (Новая / В работе / Завершена)
- 📦 **Товары** — добавлять, редактировать, скрывать товары, управлять остатками
- 🗂️ **Категории** — добавлять и редактировать категории каталога

---

## Структура проекта

```
beauty-shape/
├── app/
│   ├── page.js              # Главная
│   ├── catalog/             # Каталог
│   ├── training/            # Обучение
│   ├── about/               # О нас
│   ├── contacts/            # Контакты
│   ├── admin/               # Админка (защищена паролем)
│   │   ├── orders/          # Заявки
│   │   ├── products/        # Товары
│   │   └── categories/      # Категории
│   └── api/
│       ├── orders/          # POST /api/orders — принять заявку
│       └── admin/login/     # Авторизация в админку
├── components/
│   ├── Header.js
│   └── Footer.js
├── lib/
│   ├── supabase.js          # Supabase клиент
│   └── catalog.js           # Статические данные (запасной вариант)
├── middleware.js             # Защита маршрутов /admin
├── supabase-schema.sql       # SQL схема — запустить в Supabase
└── .env.example              # Пример переменных окружения
```

---

## Настройка Cloudinary (фото товаров)

1. Зайди на **cloudinary.com** → зарегистрируйся бесплатно
2. На Dashboard скопируй **Cloud name**
3. Зайди в **Settings → Upload → Upload presets** → Add upload preset
   - Preset name: `beauty_shape_upload`
   - Signing mode: **Unsigned**
   - Folder: `beauty-shape/products`
   - Нажми **Save**
4. Добавь в Vercel переменные:
   - `CLOUDINARY_CLOUD_NAME` = твой cloud name
   - `CLOUDINARY_UPLOAD_PRESET` = `beauty_shape_upload`

**Бесплатный план:** 25 ГБ хранилища + 25 ГБ трафика/мес — хватит на сотни фото.
