/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          50:  '#eef3ff',
          100: '#dce6ff',
          200: '#b8cdff',
          300: '#8caeff',
          400: '#5b89ff',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1a3fb8',
          800: '#1e3a8a',
          900: '#172554',
          950: '#0b1437',
        },
        charcoal: {
          50:  '#f4f4f5',
          100: '#e4e4e7',
          900: '#0e0e10',
          950: '#070708',
        },
        steel: {
          400: '#9aa1ad',
          500: '#737884',
          600: '#525663',
          700: '#373a45',
          800: '#1d1f26',
          900: '#13141a',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        tight: ['"Inter Tight"', '"Inter"', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        'eyebrow': '0.22em',
        'mega': '-0.01em',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
    }
  },
  plugins: [],
}
