let chai = require('chai')
let expect = chai.expect
let app = require('src/app')

describe('app', () => {
  it('will not change the input if it is a 1', () => {
    expect(app.translate(1)).to.be.eq(1)
  })
})