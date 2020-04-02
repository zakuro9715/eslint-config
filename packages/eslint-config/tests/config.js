const config = require('../index')

const disables = [
  'no-unused-expressions',
  'no-unused-vars',
  'eol-last',
]

disables.forEach((key) => config.rules[key] = 'off')
module.exports = config
