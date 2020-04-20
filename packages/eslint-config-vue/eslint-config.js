const INLINE_ELEMENTS = require('eslint-plugin-vue/lib/utils/inline-non-void-elements.json')
module.exports = {
  extends: [
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    '@vue/standard',
    '@pianoforte',
  ],
  rules: {
    'node/no-unsupported-features/es-syntax': 'off',
    'vue/singleline-html-element-content-newline': ['error', {
      ignores: [
        'pre',
        'textarea',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'tr',
        'td',
        'th',
        'nuxt-link',
        'router-link',
      ].concat(INLINE_ELEMENTS),
    }],
  },
}
