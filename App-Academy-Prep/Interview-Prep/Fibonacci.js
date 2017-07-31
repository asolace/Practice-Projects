/*
The Fibonacci Sequence begins with 0 and 1.

Write a function which takes a single argument describing the number of
Fibonacci numbers to generate:
*/

// iteration
function genFibs(num){
  var array = [0, 1];
  for (var i = 0; num > array.length; i++) {
    array.push(array[i] + array[i+1])
  }
  return array;
}

// recursion
let memo = Array(10).fill(0);
function genFibs(num) {
  if (num === 0 || num === 1) {
    return memo[num] = 1
  } else if (memo[num] != 0) {
    return memo[num]
  } else {
    return memo[num] = genFibs(num - 1) + genFibs(num - 2)
  }
}


console.log(genFibs(6)); // [1, 1, 2, 3, 5, 8, 13]
console.log(memo);
