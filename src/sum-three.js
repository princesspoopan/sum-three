const mergeSort = require('./sort').mergeSort
const _ = require('lodash')

module.exports = function sumThree (array, expectedSum) {
  const sortedArray = mergeSort(array, (a, b) => a < b)
  const result = []
  for (let i = 0; i < sortedArray.length - 3; i++) {
    const first = sortedArray[i]
    let start = i + 1
    let end = sortedArray.length - 1

    while (start < end) {
      const second = sortedArray[start]
      const third = sortedArray[end]
      const sum = first + second + third
      if (sum === expectedSum) {
        result.push([ first, second, third ])
        end--
      } else if (sum < expectedSum) {
        start++
      } else {
        end--
      }
    }
  }

  return _.uniqWith(result, _.isEqual)
}
