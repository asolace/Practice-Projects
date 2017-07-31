function countAdjacentSums(arr, n) {
  var counter = 0;
  arr.forEach(function(ele, i) {
    if (arr[i] + arr[i + 1] === n) {
      counter++;
    }
  })
  return counter;
}

countAdjacentSums([1, 5, 1], 6) //=> 2
countAdjacentSums([7, 2, 4, 6], 7) //=> 0
countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) //=> 3
