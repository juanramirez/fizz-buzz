let chai = require('chai')
let expect = chai.expect
let app = require('src/app')

describe('app', () => {
  describe('.translate', () => {
    it('will return the input as a string if it is a 1', () =>
      expect(app.translate(1)).to.be.eq('1'))

    it('will return the input as a string if it is a 2', () =>
      expect(app.translate(2)).to.be.eq('2'))

    it('will return the input as a string if it is a 4', () =>
      expect(app.translate(4)).to.be.eq('4'))

    it('will return the input as a string if it is a 7', () =>
      expect(app.translate(7)).to.be.eq('7'))

    it('will return Fizz if the input is 3', () =>
      expect(app.translate(3)).to.be.eq('Fizz'))

    it('will return Fizz if the input is 6', () =>
      expect(app.translate(6)).to.be.eq('Fizz'))

    it('will return Fizz if the input is 9', () =>
      expect(app.translate(9)).to.be.eq('Fizz'))

    it('will return Buzz if the input is 5', () =>
      expect(app.translate(5)).to.be.eq('Buzz'))

    it('will return Buzz if the input is 10', () =>
      expect(app.translate(10)).to.be.eq('Buzz'))

    it('will return Buzz if the input is 20', () =>
      expect(app.translate(20)).to.be.eq('Buzz'))

    it('will return FizzBuzz if the input is 15', () =>
      expect(app.translate(15)).to.be.eq('FizzBuzz'))

    it('will return FizzBuzz if the input is 30', () =>
      expect(app.translate(30)).to.be.eq('FizzBuzz'))
  })

  describe('getSequence', () => {
    it('will return an array of 100 elements for arguments (1,100)', () =>
      expect(app.getSequence(1, 100).length).to.be.eq(100))
  })
})