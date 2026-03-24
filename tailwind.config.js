/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Mwango Sheria Design Tokens
        void:   '#060C07',
        forest: '#0C1A0E',
        bark:   '#172419',
        panel:  '#1C2B1E',
        ochre:  '#C47B2A',
        gold:   '#DFA042',
        amber:  '#F0C070',
        cream:  '#F4ECD8',
        sand:   '#B8A880',
        stone:  '#6B6050',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Outfit', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      borderColor: {
        DEFAULT: 'rgba(196,123,42,0.12)',
        bright:  'rgba(196,123,42,0.35)',
      },
      boxShadow: {
        'ochre-sm': '0 4px 20px rgba(196,123,42,0.3)',
        'ochre-md': '0 8px 28px rgba(196,123,42,0.3)',
        'ochre-lg': '0 14px 40px rgba(196,123,42,0.4)',
        'card':     '0 40px 80px rgba(0,0,0,0.5)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)' opacity='0.045'/%3E%3C/svg%3E\")",
        'dot-grid': "radial-gradient(circle, rgba(196,123,42,0.18) 1px, transparent 0)",
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'ticker':    'ticker 32s linear infinite',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 8px #C47B2A' },
          '50%':      { opacity: '0.5', boxShadow: '0 0 16px #C47B2A' },
        },
        'ticker': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
