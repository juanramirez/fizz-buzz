module.exports = {
  translate: (input) => {
    if (input % 3 === 0)
      return 'Fizz'
    return input.toString()
  }
}