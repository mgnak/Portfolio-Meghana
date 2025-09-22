/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'text-primary': {
          light: '#171717',
          dark: '#f1f5f9'
        }
      }
    }
  },
  darkMode: 'class',
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-body': {
          '@apply text-primary dark:text-primary-dark': {}
        }
      })
    }
  ]
}