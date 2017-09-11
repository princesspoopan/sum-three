function mergeSort (items, comparator) {
  if (items.length < 2) return items
  const left = items.slice(0, items.length / 2)
  const right = items.slice(items.length / 2)
  return merge(
    mergeSort(left, comparator),
    mergeSort(right, comparator),
    comparator
  )
}

function merge (left, right, comparator) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (comparator(left[indexLeft], right[indexRight])) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

module.exports.mergeSort = mergeSort
