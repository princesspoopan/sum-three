const sumThree = require('../src/sum-three')
const Lab = require('lab')
const lab = exports.lab = Lab.script()

lab.test(
  'sumThree should return all unique triplets in the array which gives the sum of given number',
  (done) => {
    Lab.expect(sumThree([ -4, 0, 1, 2, 1, 1, 5 ], 3))
      .to.equal([[-4, 2, 5], [0, 1, 2], [1, 1, 1]])
    done()
  }
)
