module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'explorerGreen': {
          '100': '#72e86f',
          '200': '#35a84f',
          '300': '#3fb93a',
          '400': '#3b9b1e',
          '500': '#48ad1e'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
