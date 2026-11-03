/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#101f36',
        'navy-deep': '#0b172a',
        gold: '#c6a568',
        ink: '#182234',
        muted: '#667085',
        cream: '#f7f6f2',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(16, 31, 54, .08)',
      },
    },
  },
  plugins: [],
}
