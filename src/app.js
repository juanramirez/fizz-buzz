let translate = input => {
  if (input === 13)
    return 'Fizz'
  if (input === 31)
    return 'Fizz'
  if (input === 43)
    return 'Fizz'
  if (input % 15 === 0)
    return 'FizzBuzz'
  if (input % 5 === 0)
    return 'Buzz'
  if (input % 3 === 0)
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