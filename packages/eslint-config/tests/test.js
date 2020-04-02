const path = require('path')
const glob = require('glob')
const config = require('./config')
const configTester = require('eslint-config-rule-tester')

const pattern = path.join(__dirname, 'rules', './**/*.js')
glob.sync(pattern).forEach((file) => {
  describe('rules', () => {
    const test = require(file)
    configTester('test', config, test)
  })
})
