/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: "class",
  theme: {
    extend: {
      animation:{
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      }
    },
    backgroundSize:
    {
      '50%':'50%'
    }
  },
  keyframes:{
    'infinite-scroll': {
      from: {transform: 'translateX(0)'},
      to: {transform: 'translateX(-100%)'},
    }
  },
  plugins: [],
}

