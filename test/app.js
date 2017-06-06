let chai = require('chai')
let expect = chai.expect
let app = require('src/app')

describe('app', () => {
  describe('getSequence', () => {
    it('will return an array of 100 elements', () =>
      expect(app.getSequence().length).to.be.eq(100))

    it('will return the input as a string if it is a 1', () =>
      expect(getSequencePosition(1)).to.be.eq('1'))

    it('will return the input as a string if it is a 2', () =>
      expect(getSequencePosition(2)).to.be.eq('2'))

    it('will return the input as a string if it is a 4', () =>
      expect(getSequencePosition(4)).to.be.eq('4'))

    it('will return the input as a string if it is a 7', () =>
      expect(getSequencePosition(7)).to.be.eq('7'))

    it('will return Fizz if the input is 3', () =>
      expect(getSequencePosition(3)).to.be.eq('Fizz'))

    it('will return Fizz if the input is 6', () =>
      expect(getSequencePosition(6)).to.be.eq('Fizz'))

    it('will return Fizz if the input is 9', () =>
      expect(getSequencePosition(9)).to.be.eq('Fizz'))

    it('will return Buzz if the input is 5', () =>
      expect(getSequencePosition(5)).to.be.eq('Buzz'))

    it('will return Buzz if the input is 10', () =>
      expect(getSequencePosition(10)).to.be.eq('Buzz'))

    it('will return Buzz if the input is 20', () =>
      expect(getSequencePosition(20)).to.be.eq('Buzz'))

    it('will return FizzBuzz if the input is 15', () =>
      expect(getSequencePosition(15)).to.be.eq('FizzBuzz'))

    it('will return FizzBuzz if the input is 30', () =>
      expect(getSequencePosition(30)).to.be.eq('FizzBuzz'))
  })
})

function getSequencePosition (number) {
  return app.getSequence()[number - 1]
}
