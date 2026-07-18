/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#05060a',
        surface: '#0a0c14',
        card: '#0e111c',
        border: '#1b2030',
        muted: '#8a90a6',
        ink: '#eef1f8',
        accent: {
          DEFAULT: '#7c5cff',
          soft: '#a58bff',
        },
        cyan: {
          glow: '#22d3ee',
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
        glow: '0 0 60px -12px rgba(124, 92, 255, 0.55)',
        'glow-cyan': '0 0 50px -14px rgba(34, 211, 238, 0.5)',
        card: '0 24px 60px -30px rgba(0, 0, 0, 0.8)',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}
