/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#05070f',
        surface: '#0a0e1a',
        card: '#0e1424',
        border: '#1d283d',
        muted: '#8c9ab8',
        ink: '#f0f4fc',
        accent: {
          DEFAULT: '#0052ff',
          soft: '#3b82f6',
        },
        cyan: {
          glow: '#00d4ff',
        },
        success: '#34d399',
        warning: '#fbbf24',
        danger: '#f87171',
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
        glow: '0 0 60px -12px rgba(0, 82, 255, 0.55)',
        'glow-cyan': '0 0 50px -14px rgba(0, 212, 255, 0.5)',
        card: '0 24px 60px -30px rgba(0, 0, 0, 0.8)',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}
