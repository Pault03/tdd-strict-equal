const strictEqual = (a, b) => {
  let result

  if (typeof a == typeof b && a == b) {
    result = true
  }
  else {
    result = false
  }

  return result
}

module.exports = strictEqual
