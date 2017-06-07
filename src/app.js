let _ = require('lodash')

let translate = input => {
  let fizz = input % 3 === 0 || _.includes(input.toString(), '3')
  let buzz = input % 5 === 0 || _.includes(input.toString(), '5')

  if (!fizz && !buzz)
    return input.toString()
  else
    return (fizz ? 'Fizz' : '') + (buzz ? 'Buzz' : '')
}

module.exports = {
  getSequence: () => {
    let result = []
    for (let counter = 1; counter <= 100; counter++)
      result.push(translate(counter))
    return result
  },
}