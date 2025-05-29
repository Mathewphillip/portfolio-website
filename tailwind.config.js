/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}', 
    './src/app/components/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0a', // Solid dark gray (replacing #0003 for usability)
        secondary: '#10B981', // Vibrant green, kept as is
        accent: '#F3F4F6', // Light gray, great for text or backgrounds
        dark: '#090a0c', // Deep black, perfect for backgrounds
        simple: '#ffffff', // Pure white, good for highlights
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        balgeri: ['Balgeri', 'serif'],
      },
      boxShadow: {
        custom: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)', // Unchanged
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideUp: 'slideUp 0.8s ease-out',
        scaleHover: 'scaleHover 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        scaleHover: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
