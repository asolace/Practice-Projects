/*
Sorting a list is a common task. Write a function mySort(array) which,
given an array of numbers, sorts its elements in ascending order.
The function will return undefined; it directly modifies its argument.

Do not use Array.prototype.sort
*/

function sort(array) {
  for (var i = 0; i < array.length; i++) {
    console.log("array A " + array)
    for (var j = 0; j < array.length; j++) {
      console.log("array J " + array)
      if (array[j] > array[j + 1])  {
        var temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
};

console.log(sort([2, 5, 3, 10, -1]))
