import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file')

    if (!file) {
      return NextResponse.json({ error: 'Файл не найден' }, { status: 400 })
    }

    const cloudName = process.env.CLOUDINARY_CLOUD_NAME
    const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET

    if (!cloudName || !uploadPreset) {
      return NextResponse.json({ error: 'Cloudinary не настроен' }, { status: 500 })
    }

    // Upload to Cloudinary via unsigned upload preset
    const uploadData = new FormData()
    uploadData.append('file', file)
    uploadData.append('upload_preset', uploadPreset)
    uploadData.append('folder', 'beauty-shape/products')

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      { method: 'POST', body: uploadData }
    )

    if (!res.ok) {
      const err = await res.json()
      console.error('Cloudinary error:', err)
      return NextResponse.json({ error: 'Ошибка загрузки' }, { status: 500 })
    }

    const data = await res.json()
    return NextResponse.json({ url: data.secure_url, publicId: data.public_id })

  } catch (err) {
    console.error('Upload error:', err)
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
  }
}
