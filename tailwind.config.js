/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50:  '#f0fdfb',
          100: '#ccfbf3',
          200: '#99f4e8',
          300: '#5ee8d8',
          400: '#3ecab4',
          500: '#20b09a',
          600: '#168d7d',
          700: '#157165',
          800: '#165a51',
          900: '#164b44',
        },
        dark: '#1C1C1C',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
