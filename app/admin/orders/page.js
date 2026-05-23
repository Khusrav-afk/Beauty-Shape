'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

const STATUS_LABELS = { new: 'Новая', in_progress: 'В работе', done: 'Завершена', cancelled: 'Отменена' }
const STATUS_COLORS = { new: '#fef3c7|#92400e', in_progress: '#dbeafe|#1e40af', done: '#dcfce7|#166534', cancelled: '#fee2e2|#991b1b' }

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  async function load() {
    setLoading(true)
    const { data } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false })
    setOrders(data || [])
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  async function updateStatus(id, status) {
    await supabase.from('orders').update({ status }).eq('id', id)
    setOrders(orders.map(o => o.id === id ? { ...o, status } : o))
  }

  const filtered = filter === 'all' ? orders : orders.filter(o => o.status === filter)
  const newCount = orders.filter(o => o.status === 'new').length

  return (
    <div className="p-6 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Заявки</h1>
          {newCount > 0 && (
            <p className="text-sm text-orange-600 font-medium mt-0.5">
              🔔 {newCount} новых заявок
            </p>
          )}
        </div>
        <button onClick={load} className="px-3 py-2 text-xs font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
          Обновить
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-5">
        {[['all','Все'], ['new','Новые'], ['in_progress','В работе'], ['done','Завершены']].map(([val, label]) => (
          <button key={val} onClick={() => setFilter(val)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${filter === val ? 'text-white' : 'text-gray-600 bg-gray-100 hover:bg-gray-200'}`}
            style={filter === val ? {background:'#3ECAB4'} : {}}>
            {label}
            {val === 'new' && newCount > 0 && (
              <span className="ml-1.5 px-1.5 py-0.5 bg-red-500 text-white rounded-full text-xs">{newCount}</span>
            )}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center py-16 text-gray-400">Загрузка...</div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">Заявок нет</div>
      ) : (
        <div className="space-y-3">
          {filtered.map(order => {
            const [bg, text] = (STATUS_COLORS[order.status] || '#f3f4f6|#374151').split('|')
            return (
              <div key={order.id} className="bg-white rounded-2xl border border-gray-100 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-semibold text-gray-900">{order.client_name}</span>
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{background:bg, color:text}}>
                        {STATUS_LABELS[order.status]}
                      </span>
                    </div>
                    <a href={`tel:${order.client_phone}`} className="text-sm font-medium hover:underline" style={{color:'#3ECAB4'}}>
                      📞 {order.client_phone}
                    </a>
                    {order.product_name && (
                      <p className="text-sm text-gray-600 mt-1">📦 {order.product_name}</p>
                    )}
                    {order.comment && (
                      <p className="text-sm text-gray-500 mt-1">💬 {order.comment}</p>
                    )}
                    <p className="text-xs text-gray-400 mt-2">
                      {new Date(order.created_at).toLocaleString('ru-RU')}
                    </p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    {order.status !== 'in_progress' && order.status !== 'done' && (
                      <button onClick={() => updateStatus(order.id, 'in_progress')}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">
                        В работу
                      </button>
                    )}
                    {order.status !== 'done' && (
                      <button onClick={() => updateStatus(order.id, 'done')}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-green-50 text-green-700 hover:bg-green-100 transition-colors">
                        Завершить
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
