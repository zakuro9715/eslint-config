module.exports = {
  extends: [
    'plugin:nuxt/recommended',
    '@zakuro9715/vue',
  ],
  plugins: [
    'nuxt',
  ],
  overrides: [
    {
      files: ['**/layouts/**/*.vue', '**/pages/**/*.vue'],
      rules: {
        'vue/require-name-property': 'off',
      },
    },
  ],
}
