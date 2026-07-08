import { NextResponse } from 'next/server'

export async function POST(request) {
  const secret = request.headers.get('x-relay-secret')
  if (!process.env.TELEGRAM_RELAY_SECRET || secret !== process.env.TELEGRAM_RELAY_SECRET) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const { name, phone, comment, productName } = await request.json()

  const tgToken  = process.env.TELEGRAM_BOT_TOKEN
  const tgChatId = process.env.TELEGRAM_CHAT_ID
  if (!tgToken || !tgChatId) {
    return NextResponse.json({ ok: false })
  }

  const text = ['🆕 *Новая заявка — Beauty Shape*','',`👤 Имя: ${name}`,`📞 Телефон: ${phone}`,productName?`📦 Товар: ${productName}`:'',comment?`💬 ${comment}`:'','',`🕐 ${new Date().toLocaleString('ru-RU',{timeZone:'Europe/Moscow'})}`].filter(Boolean).join('\n')
  const chatIds = tgChatId.split(',').map(id => id.trim()).filter(Boolean)
  await Promise.all(chatIds.map(id =>
    fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({chat_id:id,text,parse_mode:'Markdown'})}).catch(console.error)
  ))

  return NextResponse.json({ ok: true })
}
