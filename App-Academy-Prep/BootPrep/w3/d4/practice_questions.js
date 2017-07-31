/******************************************************************************
// Write a function highestScore(students) that takes in an array of student objects
// as a parameter. It should return a string that corresponds to the student with
// the highest score. The string should contain that student's initials
// concatenated with their id. Assume the array contains at least 1 student object and
// the student with the highest score is unique (there are no ties).
//
// Example:
// var students = [
//  {name: 'Alvin Zablan', id: 128, score: -42},
//  {name: 'Eliot Bradshaw', id: 32, score: 57},
//  {name: 'Tommy Duek', id: 2, score: 99},
//  {name: 'Fred Sladkey', id: 256, score: 94}
// ];
//
// highestScore(students) //=> 'TD2'
******************************************************************************/
function highestScore(students) {
  var maxStudent = students[0];
  students.forEach(function(student) {
    if (student.score > maxStudent.score) {
      maxStudent = student;
    }
  });
  var names = maxStudent.name.split(" ");
  var fi = names[0][0];
  var li = names[1][0];
  return fi + li + maxStudent.id
}


var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];

console.log(highestScore(students)) //=> 'TD2'

/******************************************************************************
// Write a function countRepeats(string) that takes in a string and returns the
// number of letters that appear more than once in the string. You may assume
// the string contains only lowercase letters. Count the number of letters that
// repeat, not the number of times they repeat in the string.
//
// Examples:
//
// countRepeats('alvin') => 0
// countRepeats('aaaalvin') => 1
// countRepeats('pops') => 1
// countRepeats('mississippi') => 3
// countRepeats('hellobootcampprep') => 4
/******************************************************************************/
// function countRepeats(string) {
//   var count = charCount(string);
//   var repeatChar = 0
//   for (var char in count) {
//     if (count[char] > 1) {
//       repeatChar += 1;
//     }
//   }
//   return repeatChar
// }
//
// function charCount(string) {
//   var count = {};
//   for (var i = 0; i < string.length; i++) {
//     char = string[i]
//     if (count[char] === undefined) {
//       count[char] = 1;
//     } else {
//       count[char] += 1;
//     }
//   }
//   return count;
// }
function countRepeats(string) {
  var lee = string.split("");
  var alreadySeen = [];
  var alreadyCounted = [];
  var counter = 0
  lee.forEach(function(char) {
    if (alreadySeen.indexOf(char) > -1 && alreadyCounted.indexOf(char) === -1) {
      counter += 1;
      alreadySeen.push(char);
      alreadyCounted.push(char);
    } else {
      alreadySeen.push(char);
    }
  });
  return counter;
}

console.log(countRepeats('alvin')) // => 0
console.log(countRepeats('aaaalvin')) // => 1
console.log(countRepeats('pops')) // => 1
console.log(countRepeats('mississippi')) // => 3
console.log(countRepeats('hellobootcampprep')) // => 4

/******************************************************************************
// Write a function nthPrime(n) that takes in a number, n, and returns the n-th
// prime number.
//
// Examples:
// nthPrime(1); //=> 2
// nthPrime(2); //=> 3
// nthPrime(3); //=> 5
// nthPrime(9); //=> 23
******************************************************************************/
function nthPrime(n) {
  var counter = 0;
  for (var i = 0; true; i++) {
    if (isPrime(i)) {
      counter += 1
      if (counter === n) {
        console.log(i);
        return i
      }
    }
  }
  console.log(i);
}
function isPrime(num) {
  if (num <= 1) {return false};
  for (var x = 2; x < num; x++){
    if (num % x === 0){
      return false;
    }
  }
  return true;
}

nthPrime(1); //=> 2
nthPrime(2); //=> 3
nthPrime(3); //=> 5
nthPrime(9); //=> 23

/******************************************************************************
// Write the function countAdjacentSums(arr, n) which takes an array and number.
// It should count the number of times that two adjacent numbers in an array add up
// to n.
//
// Examples:
// countAdjacentSums([1, 5, 1], 6) //=> 2
//
// countAdjacentSums([7, 2, 4, 6], 7) //=> 0
//
// countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) //=> 3
******************************************************************************/
function countAdjacentSums(arr, n) {
  var counter = 0;
  arr.forEach(function(ele, i) {
    if (arr[i] + arr[i + 1] === n) {
      counter++;
    }
  })
  console.log(counter);
  return counter;
}

countAdjacentSums([1, 5, 1], 6) //=> 2
countAdjacentSums([7, 2, 4, 6], 7) //=> 0
countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) //=> 3
