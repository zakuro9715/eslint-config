module.exports = {
  extends: [
    'plugin:nuxt/recommended',
    '@pianoforte/vue',
  ],
  plugins: [
    'nuxt',
  ],
  overrides: [{
    files: ['**/*.vue'],
    rules: {
      'node/no-missing-import': 'off',
    },
  }],
}
