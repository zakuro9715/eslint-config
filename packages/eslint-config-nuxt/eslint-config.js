module.exports = {
  extends: [
    'plugin:nuxt/recommended',
    '@pianoforte/vue',
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
