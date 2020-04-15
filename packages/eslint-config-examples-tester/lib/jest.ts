import pkg from '../package.json'

describe(pkg.name, () => {
  test('ok', () => expect(1 + 1).toEqual(2))
})
