/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  theme: {
    extend: {
      fontFamily: {
        // We add 'Inter' and 'Albert Sans' to Tailwind's theme.
        // 'sans' will be our fallback.
        'inter': ['Inter', ...defaultTheme.fontFamily.sans],
        'albert': ['"Albert Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
