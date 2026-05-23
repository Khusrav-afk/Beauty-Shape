import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl

  // Protect /admin/* routes (except /admin login page itself)
  if (pathname.startsWith('/admin') && pathname !== '/admin') {
    const adminAuth = request.cookies.get('admin_auth')
    const adminPassword = process.env.ADMIN_PASSWORD

    if (!adminAuth || adminAuth.value !== adminPassword) {
      return NextResponse.redirect(new URL('/admin', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
