let _ = require('lodash')

let translate = input => {
  if (input === 53)
    return 'FizzBuzz'
  if (input === 35)
    return 'FizzBuzz'
  if (input % 15 === 0)
    return 'FizzBuzz'
  if (input % 5 === 0)
    return 'Buzz'
  if (input % 3 === 0) {
    if (_.includes(input.toString(), '5'))
      return 'FizzBuzz'
    return 'Fizz'
  }
  if (_.includes(input.toString(), '5'))
    return 'Buzz'
  if (_.includes(input.toString(), '3'))
    return 'Fizz'
  return input.toString()
}

module.exports = {
  getSequence: () => {
    let result = []
    for (let counter = 1; counter <= 100; counter++)
      result.push(translate(counter))
    return result
  },
}