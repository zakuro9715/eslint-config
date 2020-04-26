module.exports = {
  extends: [
    'eslint:recommended',
  ],
  plugins: [
    'import',
    'promise',
  ],
  parserOptions: {
    ecmaVersion: '2020',
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: '**/*.spec.{j,t}s',
      env: {
        jest: true,
      },
    },
  ],
  rules: {
    /* eslint-disable quote-props */
    'accessor-pairs': ['error'],
    'array-bracket-newline': 'off',
    'array-bracket-spacing': 'off',
    'array-callback-return': ['error'],
    'array-element-newline': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error'],
    'block-scoped-var': ['error'],
    'block-spacing': ['error'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'camelcase': ['error'],
    'capitalized-comments': ['off'],
    'classs-methods-use-this': ['off'],
    'comma-dangle': ['error', 'always-multiline'],
    'complexity': ['off'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-return': ['error'],
    'consistent-this': ['off'],
    'curly': ['error'],
    'default-case': ['off'],
    'default-param-last': ['error'],
    'dot-location': ['error', 'property'],
    'dot-notation': ['error'],
    'eol-last': ['error'],
    'eqeqeq': ['error'],
    'func-call-argument-newline': ['off'],
    'func-call-spacing': ['error'],
    'func-name-matching': ['error'],
    'func-names': ['error', 'never'],
    'func-style': ['off'],
    'function-call-argument-newline': ['off'],
    'function-paren-newline': ['off'],
    'generator-star-spacing': ['error'],
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'guard-for-in': ['error'],
    'id-blacklist': ['off'],
    'id-length': ['off'],
    'id-match': ['off'],
    'no-alert': ['warn'],
    'no-array-constructor': ['error'],
    'no-console': ['warn'],
    'no-debugger': ['warn'],
    'no-extra-boolean-cast': ['off'],
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'no-unused-vars': ['error'],
    'no-var': ['error'],
    'prefer-arrow-callback': ['error'],
    'semi': ['error', 'never'],
    'space-before-function-paren': ['error', {
      'asyncArrow': 'always',
      'anonymous': 'always',
      'named': 'never',
    }],


    'import/no-unresolved': 'off',
    /* eslint-enable */
  },
}
