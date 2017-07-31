let array = [2,7,4,1,5,3]

/* Selection Sort
[2,7,4,1,5,3]   1 swaps with 2
[1,  7,4,2,5,3]   2 swaps with 7
[1,2,  4,7,5,3]   3 swaps with 4
[1,2,3,  7,5,4]   4 swaps with 7
[1,2,3,4,5,7]   Sorted
*/
console.log('Selection Sort\n-----------------');
let selectionSort = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    let min = i
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    if (min != i) {
      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
  }
  return arr
};
console.log(selectionSort(array));
console.log('\n');

/* Bubble Sort
[2, {7,4} ,1,5,3]     7 swaps with 4
[2,4, {7,1} ,5,3]   7 swaps with 1
[2,4,1, {7,5} ,3]   7 swaps with 5
[2,4,1,5, {7,3}]   7 swaps with 3
[2, {4,1} ,5,3,7]    Start again // 4 swaps with 1
[2,1,4, {5,3} ,7]   5 swaps with 3
[{2,1} ,4,3,5,7]   Start again // 2 swaps with 1
[1,2, {4,3} ,5,7]     3 swaps with 4
[1,2,3,4,5,7]     Sorted
*/
console.log('Bubble Sort \n--------------');
let bubbleSort = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j+1])  {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp
      }
    }
  }
  return arr
};
console.log(bubbleSort(array));
console.log('\n');

/* Insertion Sort

*/
console.log('Insertion Sort \n--------------');
let insertionSort = (arr) => {

};
console.log(insertionSort(array));
console.log('\n');

/* Merge Sort

*/
console.log('Merge Sort \n--------------');
let mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  let mid = Math.floor(arr.length / 2)
  let subLeft = mergeSort(arr.slice(0, mid))
  let subRight = mergeSort(arr.slice(mid))

  return merge(subLeft, subRight)
};

let merge = (a, b) => {
  let result = []
  while (a.length > 0 && b.length > 0)
    result.push(a[0] < b[0]? a.shift() : b.shift())
  return result.concat(a.length? a : b)
}
console.log(mergeSort(array));
console.log('\n');
