import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createAdminClient } from '@/lib/supabase'

// Доступ только при валидной админ-куке (тот же пароль, что и для входа в /admin)
function isAuthed() {
  const cookie = cookies().get('admin_auth')
  return !!cookie && cookie.value === process.env.ADMIN_PASSWORD
}

// Чтение: ВСЕ товары и категории (включая скрытые) — через service role, минуя RLS
export async function GET() {
  if (!isAuthed()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const supabase = createAdminClient()
  const [{ data: products }, { data: categories }] = await Promise.all([
    supabase.from('products').select('*, categories(name,slug)').order('category_id').order('sort_order'),
    supabase.from('categories').select('*').order('sort_order'),
  ])
  return NextResponse.json({ products: products || [], categories: categories || [] })
}

// Создание/обновление товара. Если в теле есть id — обновляем, иначе вставляем.
export async function POST(request) {
  if (!isAuthed()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await request.json()
  const { id, ...fields } = body
  const supabase = createAdminClient()

  let error
  if (id) {
    ({ error } = await supabase.from('products').update(fields).eq('id', id))
  } else {
    ({ error } = await supabase.from('products').insert(fields))
  }
  if (error) return NextResponse.json({ error: error.message }, { status: 400 })
  return NextResponse.json({ ok: true })
}

// Удаление товара
export async function DELETE(request) {
  if (!isAuthed()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await request.json()
  if (!id) return NextResponse.json({ error: 'id обязателен' }, { status: 400 })

  const supabase = createAdminClient()
  const { error } = await supabase.from('products').delete().eq('id', id)
  if (error) return NextResponse.json({ error: error.message }, { status: 400 })
  return NextResponse.json({ ok: true })
}
