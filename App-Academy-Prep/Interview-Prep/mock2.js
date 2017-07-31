/*
# Word With Most Repeats
# ------------------------------------------------------------------------------
# Given a sentence, find which word has the greatest amount of repeated letters.
#
# For example, "I took the road less traveled and that has made all the difference"
# should return "difference" because it has two repeated letters (f and e).
#
# All words will be separated by spaces and there will be no punctuation or
# capitalization.  If there is a tie return the first word.  It doesn't matter
# how many times individual letters repeat, just that they repeat (see the third test
# case).
#
# Examples:
# wordWithMostRepeats('good luck') => 'good'
# wordWithMostRepeats('what if there is a tie betwixt words') => 'there'
# wordWithMostRepeats('ooooooooooh tutu') => 'tutu'
*/

function repeatLetterCounter(word){
    let letters = word.split("");
    let counter = 0;
    let seen = [];
    let counted = [];
    letters.forEach(function(char) {
        if (!counted.includes(char) && seen.includes(char)){
            counter++
            counted.push(char)
        } else {
            seen.push(char)
        }
    })
    return counter
}

function wordWithMostRepeats(sentence) {
    let counter = 0;
    let result = '';
    let words = sentence.split(' ')
    words.forEach(function(word) {
        if (repeatLetterCounter(word) > counter) {
            counter = repeatLetterCounter(word);
            result = word;
        }
    })
    console.log(result);
    return result;
}
// wordWithMostRepeats('good luck')// => 'good'
// wordWithMostRepeats('what if there is a tie betwixt words') //=> 'there'
// wordWithMostRepeats('ooooooooooh tutu') //=> 'tutu'

/*
# Even Splitters
# ------------------------------------------------------------------------------
# Return an array of characters on which we can split an input string to produce
# substrings of the same length.
# Don't count empty strings after the split.
# Here's an example for "banana":
#
# "banana".split("a") # => ["b", "n", "n"] (all elements same length)
# "banana".split("b") # => ["", "anana"] (all elements same length - there's only
# one element "anana" because the empty string doesn't count)
# "banana".split("n") # => ["ba", "a", "a"] (all elements NOT same length)
#
# result: ["b", "a"]
#
# Examples:
# evenSplitters("") => []
# evenSplitters("t") => ["t"]
# evenSplitters("jk") => ["j", "k"]
# evenSplitters("xoxo") => ["x", "o"]
# evenSplitters("banana") => ["b","a"]
# evenSplitters("mishmash") => ["m","h"]
# ------------------------------------------------------------------------------
*/
function isEven(array) {
  let i = 0
  while (i < array.length) {
    if (array[i].length !== array[0].length) {
      return false
    }
    i++
  }
  return true
}

function evenSplitters(string) {
    let letters = string.split("");
    let result = [];
    letters.forEach(function(char) {
        let splited = string.split(char).filter(char => char !== "")
        if (isEven(splited) && !result.includes(char)) {
          result.push(char)
        }
    });
    console.log(result);
    return result;
}

// evenSplitters("") //=> []
// evenSplitters("t")// => ["t"]
// evenSplitters("jk") //=> ["j", "k"]
// evenSplitters("xoxo") //=> ["x", "o"]
// evenSplitters("banana") //.=> ["b","a"]
// evenSplitters("mishmash") //=> ["m","h"]

/*
# Xbonacci
# ------------------------------------------------------------------------------
# Write a Xbonacci function that works similarly to the fibonacci sequence.
# The fibonacci sequence takes the last two numbers in the sequence and adds
# them together to create the next number.
#
# First five fibonacci numbers = [1, 1, 2, 3, 5]
# The fourth fibonacci number (3) is the sum of the two numbers before it
# (1 and 2).
#
# In Xbonacci, the sum of the last X numbers (instead of the last 2 numbers)
# of the sequence becomes the next number in the sequence.
#
# The method will take two in#: the starting sequence with X number of
# elements and an integer N, and return the first N elements in the given
# sequence.  Take a look at the test cases for examples.
#
# In the code, how_many_numbers_to_sum is the same as X (name your variables
# descriptively!).
#
# In the code, number_of_fibonacci_numbers_to_return is the same as N.
# Examples:
# xbonacci([1, 1], 5) => [1, 1, 2, 3, 5]
# xbonacci([1, 1, 1], 6) => [1, 1, 1, 3, 5, 9]
# xbonacci([1, 1, 1, 1], 8) => [1, 1, 1, 1, 4, 7, 13, 25]
# xbonacci([1, 1, 1, 1, 1, 1], 10) => [1, 1, 1, 1, 1, 1, 6, 11, 21, 41]
# xbonacci([0, 0, 0, 0, 1], 10) => [0, 0, 0, 0, 1, 1, 2, 4, 8, 16]
*/

function fibx(array, key) {
  let keyed_array = array.slice(array.length - key)
  return keyed_array.reduce((sum, num) => sum + num, 0)
}

function xbonacci(startingSequence, numberOfXbonacciNumbersToReturn) {
    let length = startingSequence.length;
    let result = startingSequence;

    while (result.length < numberOfXbonacciNumbersToReturn) {
        result.push(fibx(result, length))
    }
    console.log(result);
    return result
}

// xbonacci([1, 1], 5) //=> [1, 1, 2, 3, 5]
// xbonacci([1, 1, 1], 6)// => [1, 1, 1, 3, 5, 9]
// xbonacci([1, 1, 1, 1], 8)// => [1, 1, 1, 1, 4, 7, 13, 25]
// xbonacci([1, 1, 1, 1, 1, 1], 10) //=> [1, 1, 1, 1, 1, 1, 6, 11, 21, 41]
// xbonacci([0, 0, 0, 0, 1], 10)// => [0, 0, 0, 0, 1, 1, 2, 4, 8, 16]

/*
#  Cupcake Solver
#------------------------------------------------------------------------------
# It's Jennifer's birthday today. Jennifer's mom decided to bake different kinds
# of cupcakes for Jennifer's first grade class.  Everybody needs to have an equal
# amount of the different kinds of cupcakes.
# Write a method that takes an array of the counts of the different kinds of
# cupcakes and the number of students in the class, and returns
# the total number of cupcakes that each student in the class
# should get.
# Every student should have equal amounts of the same kind of cupcake.
# No student gets to have more cupcakes than the others.  There can be leftover
# cupcakes.
# An array of [1, 2, 3] means that there's one red velvet cupcake,
# two vanilla cupcakes, and three chocolate cupcakes.
# Example: cupcakeSolver([10, 10, 10], 5) => 6  means that there are five
# students in the class, and each student gets to eat six cupcakes, total.
# Examples:
# cupcakeSolver([10, 10, 10], 5) => 6
# cupcakeSolver([25, 27, 30], 5) => 16
# cupcakeSolver([32, 27, 28], 20) => 3
# cupcakeSolver([32, 27, 28, 24], 20) => 4
*/

function cupcakeSolver(cupcakeCounts, numberOfStudentsInClass) {
  return cupcakeCounts
  .map(cupcakes => cupcakes / numberOfStudentsInClass)
  .reduce((sum, number) => sum + Math.floor(number), 0)
}

// console.log(cupcakeSolver([10, 10, 10], 5)) // => 6
// console.log(cupcakeSolver([25, 27, 30], 5)) // => 16
// console.log(cupcakeSolver([32, 27, 28], 20)) // => 3
// console.log(cupcakeSolver([32, 27, 28, 24], 20)) // => 4


/******************************************************************************
// Write multipyN(num) which takes a number num and returns a function which takes
// an argument and returns that argument multiplied by num.
//
// Example:
// > var multiplyTen = multiplyN(10);
// > multiplyTen;
// [Function]
// > multiplyTen(35)
// 350
******************************************************************************/
let multiplyN = (num) => (n) => num * n
var multiplyTen = multiplyN(10);

// multiplyTen;
// [Function]
//console.log(multiplyTen(35))
// 350

/******************************************************************************
// Write a function transpose(array), which will convert between the row-oriented and
// column-oriented representations of a two-dimensional array. Assume square arrays.
//
// Use Array#forEach.
//
// Example:
// var arr1 = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
//   ]
//
// transpose(arr1) => [[0, 3, 6], [1, 4, 7], [2, 5, 8]]
******************************************************************************/
function transpose(array) {
  let result = []

  array.forEach((e1, i) => {
    let column = []
    array.forEach((e2, j) =>{
      column.push(array[j][i])
    })
    result.push(column)
  })
  return result
}

var arr1 = [[0, 1, 2],[3, 4, 5],[6, 7, 8]]

// console.log(transpose(arr1)) // => [[0, 3, 6], [1, 4, 7], [2, 5, 8]]

// Part 1
/*****************************************************************************
// Write a function myInject(arr, cb, accum) which takes an array of numbers,
// a function and an optional initial accumulator value.
// If no value is given for accum, set the initial accumulator value to be 0.
//
// myInject passes the callback function:
//  - the current accumulator value
//  - every element,
//  - its corresponding index,
//  - the array itself
//
// The accumulator value is updated to be the result of calling the
// callback function on each element. When all elements have been processed, the
// accumulator value is returned.
//
// Use Array#forEach.
//
// Examples:
// var result1 = myInject([1,2,3], function(accum, ele, i, arr) {
//    return accum + (ele * 2);
// }, 1);
//
// result1 === 13 // 1 + (1 * 2) + (2 * 2) + (3 * 2)
//
// var result2 = myInject([1,2,3], function(accum, ele, i, arr) {
//   return accum + ele + i;
// });
//
// result2 === 9 // 0 + (1 + 0) + (2 + 1) + (3 + 2)
*****************************************************************************/
let myInject = (arr, cb, accum) => {
  if (accum === undefined){accum = 0}
    arr.forEach((ele, i, arr) => accum = cb(accum, ele, i, arr))
    console.log(accum);
  return accum
}

var result1 = myInject([1,2,3], function(accum, ele, i, arr) {
   return accum + (ele * 2);
}, 1);

result1 === 13 // 1 + (1 * 2) + (2 * 2) + (3 * 2)

var result2 = myInject([1,2,3], function(accum, ele, i, arr) {
  return accum + ele + i;
});

result2 === 9 // 0 + (1 + 0) + (2 + 1) + (3 + 2)

// Part 2
/*****************************************************************************
// Write  function `bestScore(arr)` that expects an array of objects as an argument. See the `people`
// array for an example of how the input data will look. The function should return the person's name
// whose scores sum to the highest number.
//
// Use your #myInject function.
//
// Examples:
// var people1 = [
//   { name: "Bob", scores : [1,2,3,4] },
//   { name: "Jerry", scores : [10,3,2] },
//   { name: "Anthony", scores : [5,7,9] },
//   { name: "Jimmy", scores : [4,4,4,4] }
// ];
//
// var people2 = [
//   { name: "Tim", scores : [10] },
//   { name: "Nat", scores : [4] }
// ];
//
// bestScore(people1) === 'Anthony';
//
// bestScore(people2) === 'Tim';
*****************************************************************************/
function studentScoreSum(array) {
  return array.reduce((sum, score) => sum += score, 0)
}

function bestScore(arr) {
  let topScore = 0;
  let topStudent = '';

  arr.forEach(student => {
    if (studentScoreSum(student.scores) > topScore) {
      topScore = studentScoreSum(student.scores)
      topStudent = student.name
    }
  })
  return topStudent
}

var people1 = [
  { name: "Bob", scores : [1,2,3,4] },
  { name: "Jerry", scores : [10,3,2] },
  { name: "Anthony", scores : [5,7,9] },
  { name: "Jimmy", scores : [4,4,4,4] }
];

var people2 = [
  { name: "Tim", scores : [10] },
  { name: "Nat", scores : [4] }
];

bestScore(people1) === 'Anthony';

bestScore(people2) === 'Tim';
