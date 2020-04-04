const path = require('path')
const glob = require('glob')
const configTester = require('eslint-config-rule-tester')


/* rule
 * module.exports = {
 *   valid: [
 *     ` function f() {  // 1 spaces
 *         code  // 6 spaces + 1 indent
 *       }
 *     ` // 4 spaces
 *   ],
 *   invalid: [{
 *     code:
 *       ` function f() {  // 1 spaces
 *           code  // 8 spaces + 1 indent
 *         }
 *        ` // 4 spaces
 *     errors: []
 *   }]
 * }
 */

const deindent = (s, n) => s
  .replace(/^ /, '')
  .replace(new RegExp(` {${n}}`, 'g'), '')
  .replace(/ {4}$/g, '')

const wrapTest = (rule) => ({
  valid: rule.valid.map((s) => deindent(s, 6)),
  invalid: rule.invalid.map((v) => ({ ...v, code: deindent(v.code, 8) })),
})

module.exports.testRules = (config, pattern) => {
  const disables = [
    'no-unused-expressions',
    'no-unused-vars',
    'eol-last',
  ]

  disables.forEach((key) => { config.rules[key] = 'off' })

  glob.sync(pattern).forEach((file) => {
    describe('rules', () => {
      const test = require(file)
      configTester(path.basename(file), config, wrapTest(test))
    })
  })
}
