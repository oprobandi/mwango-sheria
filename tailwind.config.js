/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Outfit', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
    },
  },
  plugins: [],
}
