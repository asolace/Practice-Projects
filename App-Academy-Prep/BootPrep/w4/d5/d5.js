/******************************************************************************
Write a function censor(sentence, curseWords) that censors the given sentence by
replacing the vowels in curse words with "*". Assume no punctuation.
Use Array.prototype.forEach.
******************************************************************************/
console.log('Censor\n--------');
function vowelCheck(word) {
  let vowels = "aeiou";

  for (let i = 0; i < word.length; i++) {
    word = vowels.includes(word[i]) ? word.slice(0, i) + "*" + word.slice(i+1): word;
  }
  return word;
}

function censor(sentence, curseWords) {
  let words = sentence.split(' ');
  let nSent = [];

  words.forEach(word =>{
    curseWords.includes(word.toLowerCase()) ? nSent.push(vowelCheck(word)) : nSent.push(word)
  })
  return nSent.join(" ");
}

console.log(censor("Darn you Harold you son of a gun", ["darn", "gun"]));
//=> "D*rn you Harold you son of a g*n"
console.log(censor("Schnikeys I dont give a diddly squat", ["schnikeys", "diddly", "squat"]))
//=> "Schn*k*ys I dont give a d*ddly sq**t"
console.log('\n');
/******************************************************************************
Write a function greatestMapCreator(ary, cb1, cb2) which takes as an
argument an array of numbers and two callbacks. It creates a new array
with each element from ary "mapped" to a new element using whichever
callback returns a larger mapped value. Both callbacks take as
arguments the element, index and array.
Use Array.prototype.forEach.
Example 1:
let ary1 = [1, 5, 10];
let squareRootRounder = function(num) {
  return Math.round(Math.sqrt(num));
};
let half = function(num) {
  return num / 2;
};
greatestMapCreator(ary1, squareRootRounder, half); //=> [ 1, 2.5, 5 ]
Hint 1:
squareRootRounder(1); //=> 1
squareRootRounder(5); //=> 2
squareRootRounder(10); //=> 3
half(1); //=> 0.5
half(5); //=> 2.5
half(10); //=> 5
Example 2:
let ary2 = [10, 20, -100];
let absoluteValue = function(num) {
  return Math.abs(num);
};
let power = function(a, b) {
  return Math.pow(a, b);
}
greatestMapCreator(ary2, absoluteValue, power); //=> [ 10, 20, 10000 ]
Hint 2:
absoluteValue(10); //=> 10
absoluteValue(20); //=> 20
absoluteValue(-100); //=> 100
power(10, 0); //=> 1
power(20, 1); //=> 20
power(-100, 2); //=> 10000
******************************************************************************/
console.log('greatestMapCreator\n-----------------------');
// function greatestMapCreator(ary, cb1, cb2){
//   let it1 = ary.map(cb1), it2 = ary.map(cb2)
//   let newIt = []
//   for (var i = 0; i < ary.length; i++) {
//     it1[i] > it2[i] ? newIt.push(it1[i]) : newIt.push(it2[i])
//   }
//   console.log(newIt);
//   return newIt
// }

function greatestMapCreator(ary, cb1, cb2) {
  var mappedAry = [];

  ary.forEach(function(num, idx, arry) {
    var mappedEle1 = cb1(num, idx, arry);
    var mappedEle2 = cb2(num, idx, arry);

    mappedAry.push(mappedEle1 > mappedEle2 ? mappedEle1 : mappedEle2);
  });
  console.log(mappedAry);
  return mappedAry;
}

let ary1 = [1, 5, 10];
let squareRootRounder = num =>  Math.round(Math.sqrt(num));
let half = num => num / 2;
greatestMapCreator(ary1, squareRootRounder, half); //=> [ 1, 2.5, 5 ]

let ary2 = [10, 20, -100];
let absoluteValue = (num) => Math.abs(num);
let power = (a, b) => Math.pow(a, b);
greatestMapCreator(ary2, absoluteValue, power); //=> [ 10, 20, 10000 ]
console.log('\n');
/******************************************************************************
Isogram Matcher
An isogram is a word with only unique, non-repeating letters.
Given two isograms of the same length, return an array with two numbers
indicating matches: the first number is the number of letters matched in both
words at the same position, and the second is the number of letters matched in
both words but not in the same position.
Examples:
isogramMatcher("an", "at"); //=> [1, 0]
isogramMatcher("or", "go"); //=> [0, 1]
isogramMatcher("cat", "tap"); //=> [1, 1]
isogramMatcher("home", "dome"); //=> [3, 0]
isogramMatcher("ultrasonic", "ostracized"); //=> [3, 4]
isogramMatcher("unpredictably", "hydromagnetic"); //=> [1, 8]
******************************************************************************/
console.log('isogramMatcher\n-------------------');
function isogramMatcher(str1, str2) {
  let arr = [], c1 = 0, c2 = 0;
  for (var i = 0; i < str1.length; i++) {
    if (str1[i] === str2[i]) {
      c1++
    } else if (str1.includes(str2[i])) {
      c2++
    }
  }
  arr.push(c1, c2)
  console.log(arr);
  return arr;
}

isogramMatcher("an", "at"); //=> [1, 0]
isogramMatcher("or", "go"); //=> [0, 1]
isogramMatcher("cat", "tap"); //=> [1, 1]
isogramMatcher("home", "dome"); //=> [3, 0]
isogramMatcher("ultrasonic", "ostracized"); //=> [3, 4]
isogramMatcher("unpredictably", "hydromagnetic"); //=> [1, 8]
