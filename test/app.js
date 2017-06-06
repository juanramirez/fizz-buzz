let chai = require('chai')
let expect = chai.expect
let app = require('src/app')

describe('app', () => {
  it('will not change the input if it is a 1', () => {
    expect(app.translate(1)).to.be.eq(1)
  })

  it('will not change the input if it is a 2', () => {
    expect(app.translate(2)).to.be.eq(2)
  })

  it('will not change the input if it is a 4', () => {
    expect(app.translate(4)).to.be.eq(4)
  })

  it('will not change the input if it is a 7', () => {
    expect(app.translate(7)).to.be.eq(7)
  })
})