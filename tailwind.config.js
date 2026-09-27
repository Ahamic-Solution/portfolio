/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        card: 'var(--card)',
        border: 'var(--border)',
        muted: 'var(--muted)',
        ink: 'var(--text)',
        accent: {
          DEFAULT: 'var(--accent)',
          soft: '#0052ff',
        },
        cyan: {
          glow: 'var(--accent-2)',
        },
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        glow: '0 12px 40px -10px rgba(0, 82, 255, 0.25)',
        'glow-cyan': '0 12px 40px -10px rgba(0, 153, 255, 0.25)',
        card: '0 20px 40px -15px rgba(15, 23, 42, 0.07), 0 1px 3px rgba(15, 23, 42, 0.04)',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}

