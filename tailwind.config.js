module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js'],
  variants: {
    extend: {
      opacity: ['true'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
