/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 6s infinite',
        'gradient': 'gradient 15s ease infinite',
        'badge-glow': 'badge-glow 2s infinite',
        'fade-in': 'fade-in 0.8s cubic-bezier(0.4,0,0.2,1) both',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'expand-in': 'expand-in 0.5s cubic-bezier(0.4,0,0.2,1) both',
        'slide-in': 'slide-in 0.5s ease-out',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
};