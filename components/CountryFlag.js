// Встроенные флаги (SVG) — без обращений к внешним CDN (важно для доступности в РФ)
export default function CountryFlag({ code, className = 'block w-6 h-auto rounded-sm' }) {
  const common = { viewBox: '0 0 30 20', className, xmlns: 'http://www.w3.org/2000/svg' }

  if (code === 'CN') return (
    <svg {...common}>
      <rect width="30" height="20" fill="#DE2910" />
      <polygon points="6,3.5 7,6.4 10,6.4 7.6,8.3 8.5,11.2 6,9.4 3.5,11.2 4.4,8.3 2,6.4 5,6.4" fill="#FFDE00" />
      <polygon points="11.5,2.2 12,3.4 13.2,3.4 12.2,4.2 12.6,5.4 11.5,4.7 10.4,5.4 10.8,4.2 9.8,3.4 11,3.4" fill="#FFDE00" />
      <polygon points="13,5 13.5,6.1 14.6,6.1 13.7,6.8 14,7.9 13,7.2 12,7.9 12.3,6.8 11.4,6.1 12.5,6.1" fill="#FFDE00" />
      <polygon points="13,8.5 13.5,9.6 14.6,9.6 13.7,10.3 14,11.4 13,10.7 12,11.4 12.3,10.3 11.4,9.6 12.5,9.6" fill="#FFDE00" />
      <polygon points="11.5,11 12,12.1 13.1,12.1 12.2,12.8 12.5,13.9 11.5,13.2 10.5,13.9 10.8,12.8 9.9,12.1 11,12.1" fill="#FFDE00" />
    </svg>
  )

  if (code === 'KR') return (
    <svg {...common}>
      <rect width="30" height="20" fill="#fff" />
      <path d="M15,6 a4,4 0 0,1 0,8 a2,2 0 0,1 0,-4 a2,2 0 0,0 0,-4 z" fill="#CD2E3A" />
      <path d="M15,6 a4,4 0 0,0 0,8 a2,2 0 0,0 0,-4 a2,2 0 0,1 0,-4 z" fill="#0047A0" />
    </svg>
  )

  if (code === 'US') return (
    <svg {...common}>
      <rect width="30" height="20" fill="#fff" />
      {[0,2,4,6,8,10,12].map(i => (
        <rect key={i} y={(i * 20) / 13} width="30" height={20/13} fill="#B22234" />
      ))}
      <rect width="13" height={(20/13)*7} fill="#3C3B6E" />
    </svg>
  )

  return null
}
