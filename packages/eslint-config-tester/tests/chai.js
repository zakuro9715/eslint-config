const path = require('path')
const chai = require('chai')
const expect = chai.expect
const { Tester } = require('../dist/tester')

chai.use(require('../dist/chai'))

describe('chai', () => {
  const config = {
    config: path.join(__dirname, 'eslintrc-fixture.js'),
    baseConfig: {
      rules: {
      semi: ['error', 'never'],
        'no-var': 'error',
      },
    },
  }

  describe('valid', () => {
    it('should be pass valid code', () => {
      expect('const i = 0').lint(config).valid
    })

    it('should not be pass invalid code', () => {
      expect('var i = 0').lint(config).not.valid
    })
  })
 describe('invalid', () => {
    it('should be pass invalid code', () => {
      expect('var i = 0').lint(config).invalid
    })

    it('should not be pass valid code', () => {
      expect('const i = 0').lint(config).not.invalid
    })

    it('should reports message', () => {
      const message = new Tester(config).verify(true, 'var i = 0;')
      expect(message.split('\n')).to.have.lengthOf(4)
      expect(message).to.have.string('Unexpected var')
      expect(message).to.have.string('Extra semicolon')
    })
  })
})
