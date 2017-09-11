const _ = require('lodash')
const mergeSort = require('./src/sort').mergeSort

function SumThreeToZero () {
  const array = [-1, 0, 1, 2, -1, -4]
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
    const thirdNumber = 0 - pair.sum
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
  console.log('========== input ==========')
  console.log(array)
  console.log('========== output ==========')
  console.log(_.uniqWith(output, _.isEqual))
}

console.log('Start at', new Date())
SumThreeToZero()
console.log('Finish at', new Date())
