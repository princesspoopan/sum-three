const _ = require('lodash')
const mergeSort = require('./sort').mergeSort

module.exports = function sumThree (array, sum) {
  const pairs = []
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      pairs.push({
        firstIndex: i,
        secondIndex: j,
        sum: array[i] + array[j]
      })
    }
  }
  const output = []
  _.forEach(pairs, pair => {
    const thirdNumber = sum - pair.sum
    const rest = _.reject(array, (number, index) => {
      return index === pair.firstIndex || index === pair.secondIndex
    })
    if (rest.indexOf(thirdNumber) > -1) {
      const result = [
        array[pair.firstIndex],
        array[pair.secondIndex],
        thirdNumber
      ]
      output.push(mergeSort(result, (a, b) => (a < b)))
    }
  })
  return _.uniqWith(output, _.isEqual)
}
