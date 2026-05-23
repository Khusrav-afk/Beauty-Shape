'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

const EMOJIS = ['⚡','💎','✨','🔴','🔵','🌊','🪡','❄️','💧','⚙️','🤸','💪','🔮','🪑','🌿','💆','🧴','🔬']

export default function AdminCategoriesPage() {
  const [cats, setCats] = useState([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState({ name:'', slug:'', emoji:'⚡', sort_order:0, is_active:true })
  const [saving, setSaving] = useState(false)

  async function load() {
    setLoading(true)
    const { data } = await supabase.from('categories').select('*').order('sort_order')
    setCats(data || [])
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  async function save() {
    setSaving(true)
    const payload = { ...form, sort_order: parseInt(form.sort_order)||0 }
    if (editing === 'new') {
      await supabase.from('categories').insert(payload)
    } else {
      await supabase.from('categories').update(payload).eq('id', editing)
    }
    setSaving(false)
    setEditing(null)
    load()
  }

  function startEdit(cat) {
    setForm({ name: cat.name, slug: cat.slug, emoji: cat.emoji||'⚡', sort_order: cat.sort_order||0, is_active: cat.is_active })
    setEditing(cat.id)
  }

  function startNew() {
    setForm({ name:'', slug:'', emoji:'⚡', sort_order: cats.length+1, is_active:true })
    setEditing('new')
  }

  function autoSlug(name) {
    return name.toLowerCase().replace(/[^a-zа-яё0-9]/gi, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
  }

  return (
    <div className="p-6 max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-gray-900">Категории</h1>
        <button onClick={startNew}
          className="px-4 py-2 rounded-xl text-white text-sm font-semibold hover:opacity-90"
          style={{background:'#3ECAB4'}}>
          + Добавить
        </button>
      </div>

      {loading ? (
        <div className="text-center py-16 text-gray-400">Загрузка...</div>
      ) : (
        <div className="space-y-2">
          {cats.map(cat => (
            <div key={cat.id} className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-4">
              <span className="text-2xl">{cat.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-900">{cat.name}</div>
                <div className="text-xs text-gray-400 font-mono">/catalog/{cat.slug}</div>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${cat.is_active ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                {cat.is_active ? 'Активна' : 'Скрыта'}
              </span>
              <button onClick={() => startEdit(cat)}
                className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 text-xs hover:bg-gray-200 transition-colors">
                Редакт.
              </button>
            </div>
          ))}
        </div>
      )}

      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{background:'rgba(0,0,0,0.5)'}}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-bold text-gray-900">{editing === 'new' ? 'Новая категория' : 'Редактировать'}</h2>
              <button onClick={() => setEditing(null)} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Название</label>
                <input value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value, slug: autoSlug(e.target.value)}))}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400"/>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">URL (slug)</label>
                <input value={form.slug} onChange={e => setForm(f => ({...f, slug: e.target.value}))}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400 font-mono"/>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Иконка</label>
                <div className="flex flex-wrap gap-2">
                  {EMOJIS.map(e => (
                    <button key={e} onClick={() => setForm(f => ({...f, emoji: e}))}
                      className={`w-9 h-9 rounded-lg text-xl transition-all ${form.emoji === e ? 'ring-2 ring-offset-1' : 'hover:bg-gray-100'}`}
                      style={form.emoji === e ? {ringColor:'#3ECAB4'} : {}}>
                      {e}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Порядок сортировки</label>
                  <input type="number" value={form.sort_order} onChange={e => setForm(f => ({...f, sort_order: e.target.value}))}
                    className="w-24 px-3 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-teal-400"/>
                </div>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" checked={form.is_active} onChange={e => setForm(f => ({...f, is_active: e.target.checked}))} className="accent-teal-500"/>
                  Активна
                </label>
              </div>
            </div>
            <div className="flex gap-3 mt-6 justify-end">
              <button onClick={() => setEditing(null)} className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">
                Отмена
              </button>
              <button onClick={save} disabled={saving || !form.name || !form.slug}
                className="px-4 py-2.5 rounded-xl text-white text-sm font-semibold hover:opacity-90 disabled:opacity-60"
                style={{background:'#3ECAB4'}}>
                {saving ? 'Сохранение...' : 'Сохранить'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
