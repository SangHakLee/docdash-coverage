const sum = (a, b) => {
  if (typeof a === 'undefined') throw new Error('a')
  if (typeof b === 'undefined') throw new Error('b')
  const sum = a + b
  return sum
}

module.exports = {
  sum
}