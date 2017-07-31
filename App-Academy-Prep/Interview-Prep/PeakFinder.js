function peakFinder(array){
  var peaks = []
  array.forEach(function(ele, i) {
    if (i === 0 && array[i] > array[i + 1]) {
      peaks.push(i)
    } else if (i === array.length - 1 && array[i] > array[i - 1]) {
      peaks.push(i)
    } else if (array[i] > array[i + 1] && array[i] > array[i - 1]) {
      peaks.push(i)
    }
  })
  return peaks
}

peakFinder([ 1, 2, 3, 2, 1 ]); // [2]
peakFinder([ 2, 1, 2, 3, 4, 5 ]); // [0, 5]
peakFinder([-5, 0, 0, -1]); //[]
