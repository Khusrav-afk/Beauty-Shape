import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'

export async function POST(request) {
  try {
    const data = await request.json()
    const { name, phone, comment, productId, productName } = data

    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json({ error: 'Имя и телефон обязательны' }, { status: 400 })
    }

    const supabase = createAdminClient()
    const { error: dbError } = await supabase.from('orders').insert({
      client_name:  name.trim(),
      client_phone: phone.trim(),
      comment:      comment?.trim() || null,
      product_id:   productId || null,
      product_name: productName || null,
      status:       'new',
    })
    if (dbError) console.error('Supabase insert error:', dbError)

    const tgToken  = process.env.TELEGRAM_BOT_TOKEN
    const tgChatId = process.env.TELEGRAM_CHAT_ID
    if (tgToken && tgChatId) {
      const text = ['🆕 *Новая заявка — Beauty Shape*','',`👤 Имя: ${name}`,`📞 Телефон: ${phone}`,productName?`📦 Товар: ${productName}`:'',comment?`💬 ${comment}`:'','',`🕐 ${new Date().toLocaleString('ru-RU',{timeZone:'Europe/Moscow'})}`].filter(Boolean).join('\n')
      await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({chat_id:tgChatId,text,parse_mode:'Markdown'})}).catch(console.error)
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Order API error:', err)
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
  }
}
