module.exports = {
  getSequence: (from, to) => {
    let result = []
    for (let counter = from; counter <= to; counter++)
      result.push(0)
    return result
  },
  translate: (input) => {
    if (input % 15 === 0)
      return 'FizzBuzz'
    if (input % 5 === 0)
      return 'Buzz'
    if (input % 3 === 0)
      return 'Fizz'
    return input.toString()
  }
}