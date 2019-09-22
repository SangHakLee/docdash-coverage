const mocha = require('mocha')
const should = require('should')

const modules = require('./modules')

describe('modules', () => {
  describe('sum', () => {
    it('sum(1,2) == 3', () => {
      const result = modules.sum(1,2)
      result.should.equal(3)
    })
  })
})