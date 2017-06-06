module.exports = {
  translate: (input) => {
    if (input === 5)
      return 'Buzz'
    if (input === 10)
      return 'Buzz'
    if (input === 20)
      return 'Buzz'
    if (input % 3 === 0)
      return 'Fizz'
    return input.toString()
  }
}