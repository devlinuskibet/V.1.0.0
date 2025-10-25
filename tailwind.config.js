/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  theme: {
    extend: {
      // Add the new fonts from the real design
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Manrope', ...defaultTheme.fontFamily.sans],
      },
      // Add the new brand colors
      colors: {
        'brand-primary': {
          DEFAULT: '#5D3DFD', // Main purple
          hover: '#4E31D9',   // Darker purple for hover
          light: '#F3F0FF',   // Light purple background
        },
        'brand-dark': '#111827', // Main dark text
        'brand-gray': '#6B7280', // Body text gray
      },
    },
  },
  plugins: [],
}

