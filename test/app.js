let chai = require('chai')
let expect = chai.expect
let app = require('src/app')

describe('app', () => {
  describe('getSequence', () => {
    it('will return an array of 100 elements', () =>
      expect(app.getSequence().length).to.be.eq(100))

    it('will return the input as a string if it is a 1', () =>
      expect(app.getSequence()[1 - 1]).to.be.eq('1'))

    it('will return the input as a string if it is a 2', () =>
      expect(app.getSequence()[2 - 1]).to.be.eq('2'))

    it('will return the input as a string if it is a 4', () =>
      expect(app.getSequence()[4 - 1]).to.be.eq('4'))

    it('will return the input as a string if it is a 7', () =>
      expect(app.getSequence()[7 - 1]).to.be.eq('7'))

    it('will return Fizz if the input is 3', () =>
      expect(app.getSequence()[3 - 1]).to.be.eq('Fizz'))

    it('will return Fizz if the input is 6', () =>
      expect(app.getSequence()[6 - 1]).to.be.eq('Fizz'))

    it('will return Fizz if the input is 9', () =>
      expect(app.getSequence()[9 - 1]).to.be.eq('Fizz'))

    it('will return Buzz if the input is 5', () =>
      expect(app.getSequence()[5 - 1]).to.be.eq('Buzz'))

    it('will return Buzz if the input is 10', () =>
      expect(app.getSequence()[10 - 1]).to.be.eq('Buzz'))

    it('will return Buzz if the input is 20', () =>
      expect(app.getSequence()[20 - 1]).to.be.eq('Buzz'))

    it('will return FizzBuzz if the input is 15', () =>
      expect(app.getSequence()[15 - 1]).to.be.eq('FizzBuzz'))

    it('will return FizzBuzz if the input is 30', () =>
      expect(app.getSequence()[30 - 1]).to.be.eq('FizzBuzz'))
  })
})