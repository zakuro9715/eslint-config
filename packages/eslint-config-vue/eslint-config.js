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
    'vue/singleline-html-element-content-newline': ['error', {
      ignores: ['pre', 'textarea', 'nuxt-link', 'router-link'].concat(INLINE_ELEMENTS),
    }],
  },
}
