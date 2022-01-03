// const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    minHeight: {
      90: '90vh',
      80: '80vh',
      75: '75vh',
      50: '50vh',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fill: (theme) => ({
        red: theme('colors.red.500'),
        green: theme('colors.green.500'),
        yellow: theme('colors.yellow.300'),
        'dark-yellow': theme('colors.yellow.500'),
        gray: theme('colors.green.300'),
        blue: theme('colors.blue.500'),
      }),
      colors: {
        site: '#FF6E0A',
      },
    },
  },
  variants: {
    extend: {
      fill: ['hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('daisyui')],
};
