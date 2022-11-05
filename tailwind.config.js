/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 3px 10px rgb(0 0 0 / 0.2)',
        'inDark': '2px -3px 0px rgb(255 255 255 / 0.7)',
        'inLight': '2px -3px 0px rgb(0 0 0 / 0.7)'
      },
      colors: {
        //light-mode
        'light-one': "#FFB931",
        'light-two': "#BFBFBF",
        'light-three': "#FFFFFF",
        'light-four': "#D19900",
        //dark-mode
        'dark-one': "#242424",
        'dark-two': "#008970",
        'dark-three': "#ADEFD1",
      },
      animation: {
        'blink': 'blinker 1s linear infinite'
      },
      keyframes: {
        blinker: {
          '50%': {'opacity': '0'}
        }
      }
    },
  },
  plugins: [],
}
