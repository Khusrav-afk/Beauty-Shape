'use client'
import { useState, useEffect, useRef } from 'react'

export default function AdminProductsPage() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [catFilter, setCatFilter] = useState('all')
  const [editing, setEditing] = useState(null)
  const [saving, setSaving] = useState(false)

  async function load() {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/products')
      const data = await res.json()
      setProducts(data.products || [])
      setCategories(data.categories || [])
    } catch {
      setProducts([])
      setCategories([])
    }
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  async function saveProduct(form) {
    setSaving(true)
    const slug = form.slug || form.name.toLowerCase()
      .replace(/[^a-zа-яё0-9\s]/gi, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .slice(0, 80)

    const payload = {
      category_id:      form.category_id ? parseInt(form.category_id) : null,
      name:             form.name,
      slug,
      price:            form.price_on_request ? null : (form.price ? parseFloat(form.price) : null),
      price_from:       !!form.price_from,
      price_on_request: !!form.price_on_request,
      short_desc:       form.short_desc || '',
      description:      form.description || '',
      stock:            parseInt(form.stock) || 0,
      is_hit:           !!form.is_hit,
      is_new:           !!form.is_new,
      is_active:        form.is_active !== false,
      sort_order:       parseInt(form.sort_order) || 0,
      specs:            parseSpecs(form.specs_text || ''),
      images:           form.images || [],
      country:          form.country || null,
      related_consumables: form.related_consumables || [],
      updated_at:       new Date().toISOString(),
    }

    await fetch('/api/admin/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.id ? { id: form.id, ...payload } : payload),
    })
    setSaving(false)
    setEditing(null)
    load()
  }

  async function deleteProduct(id) {
    if (!confirm('Удалить товар?')) return
    await fetch('/api/admin/products', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    setProducts(products.filter(p => p.id !== id))
  }

  async function toggleActive(p) {
    await fetch('/api/admin/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: p.id, is_active: !p.is_active }),
    })
    setProducts(products.map(x => x.id === p.id ? { ...x, is_active: !p.is_active } : x))
  }

  function parseSpecs(text) {
    const obj = {}
    if (!text) return obj
    text.split('\n').forEach(line => {
      const idx = line.indexOf(':')
      if (idx > 0) {
        obj[line.slice(0, idx).trim()] = line.slice(idx + 1).trim()
      }
    })
    return obj
  }

  function specsToText(specs) {
    if (!specs || typeof specs !== 'object') return ''
    return Object.entries(specs).map(([k, v]) => `${k}: ${v}`).join('\n')
  }

  const filtered = products.filter(p => {
    const matchCat = catFilter === 'all' || String(p.category_id) === catFilter
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="p-6 max-w-6xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Товары</h1>
          <p className="text-sm text-gray-500">{products.length} товаров в базе</p>
        </div>
        <button onClick={() => setEditing({ is_active: true, stock: 0, images: [] })}
          className="px-4 py-2 rounded-xl text-white text-sm font-semibold hover:opacity-90"
          style={{background:'#3ECAB4'}}>
          + Добавить товар
        </button>
      </div>

      <div className="flex gap-3 mb-5 flex-wrap">
        <input value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Поиск по названию..."
          className="px-3 py-2 rounded-lg border border-gray-200 text-sm outline-none focus:border-teal-400 w-56"/>
        <select value={catFilter} onChange={e => setCatFilter(e.target.value)}
          className="px-3 py-2 rounded-lg border border-gray-200 text-sm outline-none focus:border-teal-400 max-w-xs">
          <option value="all">Все категории</option>
          {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
      </div>

      {loading ? (
        <div className="text-center py-16 text-gray-400">Загрузка...</div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500">Фото</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500">Название</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 hidden lg:table-cell">Категория</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500">Цена</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500">Склад</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500">Статус</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(p => (
                <tr key={p.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3">
                    <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                      {p.images?.[0]
                        ? <img src={p.images[0]} alt="" className="w-full h-full object-cover"/>
                        : <span className="text-gray-300 text-lg">📷</span>
                      }
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-medium text-gray-900 line-clamp-1 max-w-xs">{p.name}</div>
                    {p.is_hit && <span className="text-xs px-1.5 py-0.5 rounded" style={{background:'#f0fdfb',color:'#168d7d'}}>Хит</span>}
                    {p.is_new && <span className="text-xs px-1.5 py-0.5 rounded ml-1 bg-blue-50 text-blue-600">Новинка</span>}
                  </td>
                  <td className="px-4 py-3 text-gray-500 hidden lg:table-cell text-xs max-w-32 line-clamp-2">{p.categories?.name || '—'}</td>
                  <td className="px-4 py-3 text-right font-medium text-sm whitespace-nowrap">
                    {p.price_on_request ? 'По запросу' : p.price
                      ? `${p.price_from ? 'от ' : ''}${Number(p.price).toLocaleString('ru')} ₽`
                      : '—'}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${p.stock > 0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
                      {p.stock > 0 ? p.stock : 'Нет'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button onClick={() => toggleActive(p)}
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${p.is_active ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                      {p.is_active ? 'Активен' : 'Скрыт'}
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2 justify-end">
                      <button onClick={() => setEditing({...p, specs_text: specsToText(p.specs), images: p.images || []})}
                        className="text-xs px-2.5 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">Ред.</button>
                      <button onClick={() => deleteProduct(p.id)}
                        className="text-xs px-2.5 py-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100">Уд.</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="text-center py-12 text-gray-400">Ничего не найдено</div>
          )}
        </div>
      )}

      {editing && (
        <ProductModal
          product={editing}
          categories={categories}
          products={products}
          saving={saving}
          onSave={saveProduct}
          onClose={() => setEditing(null)}
        />
      )}
    </div>
  )
}

function ProductModal({ product, categories, products = [], saving, onSave, onClose }) {
  const [form, setForm] = useState(product)
  const [uploading, setUploading] = useState(false)
  const fileRef = useRef()
  const f = (key, val) => setForm(p => ({...p, [key]: val}))

  // Товары из категории «Расходные материалы» — для блока сопутствующих
  const consumableProducts = products.filter(
    p => (p.categories?.slug === 'consumables') && p.slug !== form.slug
  )

  async function handleImageUpload(e) {
    const files = Array.from(e.target.files)
    if (!files.length) return
    setUploading(true)
    const urls = []
    for (const file of files) {
      const fd = new FormData()
      fd.append('file', file)
      try {
        const res = await fetch('/api/upload', { method: 'POST', body: fd })
        const data = await res.json()
        if (data.url) urls.push(data.url)
      } catch (err) {
        console.error('Upload error:', err)
      }
    }
    f('images', [...(form.images || []), ...urls])
    setUploading(false)
  }

  function removeImage(idx) {
    f('images', form.images.filter((_, i) => i !== idx))
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 overflow-y-auto" style={{background:'rgba(0,0,0,0.5)'}}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl my-6">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-lg font-bold">{form.id ? 'Редактировать товар' : 'Новый товар'}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl">✕</button>
        </div>

        <div className="p-6 space-y-4 max-h-[72vh] overflow-y-auto">

          {/* Images */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-2">Фото товара (Cloudinary)</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {(form.images || []).map((url, i) => (
                <div key={i} className="relative w-20 h-20 rounded-xl overflow-hidden border border-gray-200 group">
                  <img src={url} alt="" className="w-full h-full object-cover"/>
                  <button onClick={() => removeImage(i)}
                    className="absolute inset-0 bg-black/50 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    ✕
                  </button>
                  {i === 0 && <span className="absolute bottom-0 left-0 right-0 text-center text-xs bg-teal-500 text-white py-0.5">Главное</span>}
                </div>
              ))}
              <button onClick={() => fileRef.current?.click()}
                disabled={uploading}
                className="w-20 h-20 rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 hover:border-teal-300 hover:text-teal-400 transition-colors text-xs gap-1 disabled:opacity-50">
                {uploading ? '⏳' : <><span className="text-2xl">+</span><span>Фото</span></>}
              </button>
            </div>
            <input ref={fileRef} type="file" accept="image/*" multiple className="hidden" onChange={handleImageUpload}/>
            <p className="text-xs text-gray-400">Первое фото — главное. Поддержка JPG, PNG, WebP до 10 МБ.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-xs font-medium text-gray-600 mb-1">Название *</label>
              <input value={form.name||''} onChange={e => f('name', e.target.value)} required
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400"/>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Категория</label>
              <select value={form.category_id||''} onChange={e => f('category_id', e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400">
                <option value="">Без категории</option>
                {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Страна-производитель</label>
              <select value={form.country||''} onChange={e => f('country', e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400">
                <option value="">— не указана</option>
                <option value="CN">🇨🇳 Китай</option>
                <option value="KR">🇰🇷 Южная Корея</option>
                <option value="US">🇺🇸 США</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Остаток на складе</label>
              <input type="number" min="0" value={form.stock||0} onChange={e => f('stock', e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400"/>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Цена (₽)</label>
              <input type="number" value={form.price||''} onChange={e => f('price', e.target.value)}
                disabled={form.price_on_request}
                placeholder="Например: 75000"
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400 disabled:bg-gray-50 disabled:text-gray-400"/>
            </div>

            <div className="flex flex-col gap-2 pt-4">
              {[['price_from','Показывать «от»'],['price_on_request','Цена по запросу']].map(([k,l]) => (
                <label key={k} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" checked={form[k]||false} onChange={e => f(k, e.target.checked)} className="accent-teal-500"/>
                  {l}
                </label>
              ))}
            </div>

            <div className="col-span-2">
              <label className="block text-xs font-medium text-gray-600 mb-1">Краткое описание (для карточки)</label>
              <textarea value={form.short_desc||''} onChange={e => f('short_desc', e.target.value)} rows={2}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400 resize-none"/>
            </div>

            <div className="col-span-2">
              <label className="block text-xs font-medium text-gray-600 mb-1">Полное описание</label>
              <textarea value={form.description||''} onChange={e => f('description', e.target.value)} rows={4}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400 resize-none"/>
            </div>

            <div className="col-span-2">
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Характеристики (каждая с новой строки: Мощность: 1200 Вт)
              </label>
              <textarea value={form.specs_text||''} onChange={e => f('specs_text', e.target.value)} rows={5}
                placeholder={"Мощность: 1200 Вт\nВес: 10 кг\nГарантия: 1 год\nДлина волны: 808 нм"}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400 resize-none font-mono"/>
            </div>

            <div className="col-span-2">
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Сопутствующие расходники (показываются каруселью в карточке товара)
              </label>
              {consumableProducts.length === 0 ? (
                <p className="text-xs text-gray-400">Сначала добавьте товары в категорию «Расходные материалы»</p>
              ) : (
                <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto p-2 rounded-xl border border-gray-100 bg-gray-50">
                  {consumableProducts.map(c => {
                    const sel = (form.related_consumables || []).includes(c.slug)
                    return (
                      <button type="button" key={c.id}
                        onClick={() => f('related_consumables', sel
                          ? (form.related_consumables || []).filter(s => s !== c.slug)
                          : [...(form.related_consumables || []), c.slug])}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors ${sel ? 'text-white border-transparent' : 'bg-white text-gray-600 border-gray-200 hover:border-teal-300'}`}
                        style={sel ? {background:'#3ECAB4'} : {}}>
                        {c.name}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>

            <div className="col-span-2 flex flex-wrap gap-4 pt-1">
              {[['is_hit','⭐ Хит продаж'],['is_new','🆕 Новинка'],['is_active','✅ Активен (показывать)']].map(([k,l]) => (
                <label key={k} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" checked={form[k] !== false && !!form[k]} onChange={e => f(k, e.target.checked)} className="accent-teal-500"/>
                  {l}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-100 flex gap-3 justify-end">
          <button onClick={onClose} className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
            Отмена
          </button>
          <button onClick={() => onSave(form)} disabled={saving || !form.name}
            className="px-5 py-2.5 rounded-xl text-white text-sm font-semibold hover:opacity-90 disabled:opacity-60"
            style={{background:'#3ECAB4'}}>
            {saving ? 'Сохранение...' : 'Сохранить'}
          </button>
        </div>
      </div>
    </div>
  )
}
