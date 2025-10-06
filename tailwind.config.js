/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        primary: {
          50: '#E9FAF6',
          100: '#CFF5EE',
          200: '#A4EADD',
          300: '#74DDC8',
          400: '#44CEB1',
          500: '#1FB89A',
          600: '#109B80',
          700: '#0A7D67',
          800: '#075F4F',
          900: '#04463B',
        },
        accent: {
          blue: '#5B8CFF',
          purple: '#9B5BFF',
        },
        success: '#19B36C',
        warning: '#E6A700',
        danger: '#E05353',
        info: '#3A9AE2',
      },
      boxShadow: {
        card: '0 10px 30px rgba(11,15,20,0.07)',
        'card-hover': '0 20px 50px rgba(11,15,20,0.12)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['2.5rem', { lineHeight: '3rem', fontWeight: '700' }],
        'h2': ['2rem', { lineHeight: '2.5rem', fontWeight: '700' }],
        'h3': ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }],
      },
      animation: {
        'blob-drift': 'blob-drift 20s ease-in-out infinite',
      },
      keyframes: {
        'blob-drift': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
      },
    },
  },
  plugins: [],
}

