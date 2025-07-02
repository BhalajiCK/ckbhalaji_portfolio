/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-deep-blue': '#1e3a8a',
        'primary-purple': '#7c3aed',
        'accent-pink': '#f472b6',
        'accent-teal': '#2dd4bf',
        'accent-soft-yellow': '#fde68a',
        'light-gray': '#f3f4f6',
        'dark-gray': '#111827',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards', // Added forwards
        'slide-in-left': 'slideInLeft 1s ease-out forwards', // Added forwards
        'pulse-once': 'pulseOnce 0.6s ease-out forwards',
        // Add other animations as needed
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        pulseOnce: {
          '0%': { transform: 'scale(0.8)', opacity: 0.8 },
          '50%': { transform: 'scale(1.2)', opacity: 1 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        }
      }
    },
  },
  plugins: [],
}
