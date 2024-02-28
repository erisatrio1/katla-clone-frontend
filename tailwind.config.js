/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-x-0': {
      transform: 'rotateX(0)',
    },
    '.rotate-x-90': {
      transform: 'rotateX(90deg)',
    },
  })
})

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'grei': '#6B7280',
      'grin': '#15803D',
      'yelow': '#CA8A04',

    },
    extend: {
      keyframes:{
        flip: ({theme}) => ({
          '0%': {
            transform: 'rotate-x-0',
            backgroundColor: '#fff',
            borderColor: '#333',
          },
          '45%': {
            transform: 'rotate-x-0',
            backgroundColor: '#fff',
            borderColor: '#333',
          },
          '55%': {
            transform: 'rotate-x-90',
            backgroundColor: 'var(--background)',
            // borderColor: 'var(--border-color)',
            ...theme('colors'),
          },
          '100%': {
            transform: 'rotate-x-90',
            backgroundColor: 'var(--background)',
            // borderColor: 'var(--border-color)',
            ...theme('colors'),
            color: '#eee',
          }
        })
      },
      animation: {
        flip: 'flip 0.5s ease-in'
      } 
    },
  },
  plugins: [rotateX],
}

