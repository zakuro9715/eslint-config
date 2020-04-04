const path = require('path')
const config = require('../eslint-config')
const { testRules } = require('../../../test-helper')

testRules(config, path.join(__dirname, 'rules', './**/*.js'))
