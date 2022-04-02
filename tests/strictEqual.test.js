const { expect } = require('chai')

const strictEqual = require('../strictEqual')

const describe = require('mocha').describe

const it = require('mocha').it

describe('strictEqual.js test suite', () => {
  describe('strictEqual test', () => {
    it('testing a number with a string', () => {
      const mockData1 = 5
      const mockData2 = '5'
      const expectedResult = false

      const actualResult = strictEqual(mockData1, mockData2)

      expect(actualResult).to.equal(expectedResult)
    })
    it('test a number with number', () => {
      const mockData1 = 10
      const mockData2 = 10000000
      const expectedResult = false

      const actualResult = strictEqual(mockData1, mockData2)

      expect(actualResult).to.equal(expectedResult)
    })
    it('test a string with a string', () => {
      const string1 = 'Hi Paul'
      const string2 = 'Hi Paul'
      const expectedResult = true
      const actualResult = strictEqual(string1, string2)

      expect(actualResult).to.equal(expectedResult)
    })
    it('')
  })
})
