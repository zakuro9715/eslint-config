/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'standard',
  ],
  plugins: [
    'import',
  ],
  parserOptions: {
    ecmaVersion: '2020',
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
  rules: {
    /* eslint-disable quote-props */
    'import/no-unresolved': 'off',

    // array
    'array-callback-return': ['error'],
    'array-bracket-newline': 'off',
    'array-bracket-spacing': 'off',
    'array-element-newline': 'off',

    // function
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'always'],
    'func-names': ['error', 'never'],
    'func-style': 'off',
    'prefer-arrow-callback': 'error',
    'space-before-function-paren': ['error', {
      'asyncArrow': 'always',
      'anonymous': 'always',
      'named': 'never',
    }],

    'no-debugger': 'warn',
    'no-console': 'warn',
    'no-extra-boolean-cast': 'off',
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'comma-dangle': ['error', 'always-multiline'],
    'semi': ['error', 'never'],
    /* eslint-enable */
  },
}
