/* rule
 * module.exports = {
 *   valid: [
 *     ` code  // 1 spaces
 *       code  // 5 spaces
 *      `
 *   ],
 *   invalid: [{
 *     code: `
 *       code  // 7 spaces
 *     `
 *     errors: []
 *   }]
 * }
 */

const indent = (n) => '  '.repeat(n)

module.exports.wrapTest = (rule) => ({
  valid: rule.valid.map((s) =>
    s.replace(/     /g, '').replace(/^ /, '')
  ),
  invalid: rule.invalid.map((v) => ({
    ...v,
    code: v.code.replace(/       /g, '', ' '),
  })),
})
