const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      orange: colors.orange,
      teal: colors.teal,
      dark: '#0b0c10',
      grayish: {
        DEFAULT: '#1f2833',
        light: '#c5c6c7'
      },
      turquoise: {
        DEFAULT: '#66fcf1',
        dark: '#45a29e'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
