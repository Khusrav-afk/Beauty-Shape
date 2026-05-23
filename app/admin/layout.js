'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const navItems = [
  { href: '/admin/orders',   label: 'Заявки',   icon: '📋' },
  { href: '/admin/products', label: 'Товары',   icon: '📦' },
  { href: '/admin/categories', label: 'Категории', icon: '🗂️' },
]

export default function AdminLayout({ children }) {
  const pathname = usePathname()
  const router = useRouter()
  if (pathname === '/admin') return children

  async function logout() {
    await fetch('/api/admin/login', { method: 'DELETE' })
    router.push('/admin')
  }

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r border-gray-100 flex flex-col flex-shrink-0">
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'#3ECAB4'}}>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <circle cx="7" cy="7" r="3.5" stroke="white" strokeWidth="1.8"/>
                <circle cx="13" cy="7" r="3.5" stroke="white" strokeWidth="1.8"/>
                <circle cx="7" cy="13" r="3.5" stroke="white" strokeWidth="1.8"/>
                <circle cx="13" cy="13" r="3.5" stroke="white" strokeWidth="1.8"/>
              </svg>
            </div>
            <div>
              <div className="text-xs font-bold text-gray-900">Beauty Shape</div>
              <div className="text-xs text-gray-400">Админка</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {navItems.map(({ href, label, icon }) => (
            <Link key={href} href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                pathname.startsWith(href)
                  ? 'text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              style={pathname.startsWith(href) ? {background:'#3ECAB4'} : {}}>
              <span>{icon}</span>
              {label}
            </Link>
          ))}
        </nav>

        <div className="p-3 border-t border-gray-100 space-y-1">
          <Link href="/" target="_blank"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-500 hover:bg-gray-50 transition-colors">
            <span>🌐</span> Сайт
          </Link>
          <button onClick={logout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-500 hover:bg-gray-50 transition-colors text-left">
            <span>🚪</span> Выйти
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
