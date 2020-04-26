module.exports = [
  {
    selector: 'default',
    format: ['camelCase'],
  },
  {
    selector: 'variable',
    format: ['camelCase', 'UPPER_CASE', 'PascalCase' /* for Vue */],
    leadingUnderscore: 'allow',
  },
  {
    selector: 'variableLike',
    format: ['camelCase'],
    leadingUnderscore: 'allow',
  },
  {
    selector: 'memberLike',
    modifiers: ['private'],
    format: ['camelCase'],
    leadingUnderscore: 'allow',
  },
  {
    selector: 'typeLike',
    format: ['PascalCase'],
  },
]
