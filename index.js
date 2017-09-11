const sumThree = require('./src/sum-three')

const array = process.argv[2].split(',').map(number => +number)
const sum = +process.argv[3]
console.log('Start at', new Date())
console.log('========== input ==========')
console.log(array)
console.log('========== output ==========')
console.log(sumThree(array, sum))
console.log('Finish at', new Date())
