/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        system: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
          'Raleway'
        ],
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        wordChange: {
          '0%, 15%': { transform: 'translateY(100%)', opacity: 0 },
          '20%, 90%': { transform: 'translateY(0)', opacity: 1 },
          '95%, 100%': { transform: 'translateY(-100%)', opacity: 0 }
        }
      },
      animation: {
        slideDown: 'slideDown 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        wordChange: 'wordChange 3s ease-in-out infinite'
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.animation-delay-100': {
          'animation-delay': '100ms',
        },
        '.animation-delay-200': {
          'animation-delay': '200ms',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}