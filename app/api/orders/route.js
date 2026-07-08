import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'

export async function POST(request) {
  try {
    const data = await request.json()
    const { name, phone, comment, productId, productName, userId } = data

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
      user_id:      userId || null,
      status:       'new',
    })
    if (dbError) console.error('Supabase insert error:', dbError)

    const relayUrl = process.env.TELEGRAM_RELAY_URL
    const relaySecret = process.env.TELEGRAM_RELAY_SECRET
    if (relayUrl && relaySecret) {
      // Telegram API недоступен напрямую с российских серверов — шлём через релей на Vercel.
      // Не ждём ответа, чтобы не задерживать ответ клиенту.
      fetch(relayUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-relay-secret': relaySecret },
        body: JSON.stringify({ name, phone, comment, productName }),
      }).catch(console.error)
    } else {
      const tgToken  = process.env.TELEGRAM_BOT_TOKEN
      const tgChatId = process.env.TELEGRAM_CHAT_ID
      if (tgToken && tgChatId) {
        const text = ['🆕 *Новая заявка — Beauty Shape*','',`👤 Имя: ${name}`,`📞 Телефон: ${phone}`,productName?`📦 Товар: ${productName}`:'',comment?`💬 ${comment}`:'','',`🕐 ${new Date().toLocaleString('ru-RU',{timeZone:'Europe/Moscow'})}`].filter(Boolean).join('\n')
        const chatIds = tgChatId.split(',').map(id => id.trim()).filter(Boolean)
        await Promise.all(chatIds.map(id =>
          fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({chat_id:id,text,parse_mode:'Markdown'})}).catch(console.error)
        ))
      }
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Order API error:', err)
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
  }
}
