/*------------------------------------------------------------------------------
// In All Strings
//
// Write a function inAllStrings(longStrings, shortString).
// Check if a shortString is a substring of ALL of the strings in longStrings.
------------------------------------------------------------------------------*/
// let checker = (long, short) => {
//   for (var i = 0; i < long.length; i++) {
//     for (var j = i + 1; j < long.length; j++) {
//       if (long.slice(i, j + 1) === short) {
//         return true
//       }
//     }
//   }
//   return false
// }
//
// let inAllStrings = (longStrings, shortString) => {
//   i = 0
//   while (i < longStrings.length) {
//     if (!checker(longStrings[i], shortString)) {
//       return false
//     } else if (checker(longStrings[i], shortString) && i === longStrings.length - 1) {
//       return true
//     } else {
//       i++
//     }
//   }
// }

let inAllStrings = (longStrings, shortString) => {
  return longStrings.reduce((flag, string) => {
    if (!string.includes(shortString))
      flag = false;
      return flag
  }, true)
}

console.log(inAllStrings(["thisisaverylongstring", "thisisanotherverylongstring"], "sisa")) // => true
console.log(inAllStrings(["thisisaverylongstring", "thisisanotherverylongstring"], "isan")) // => false
console.log(inAllStrings(["gandalf", "aragorn", "sauron"], "sam")) // => false
console.log(inAllStrings(["axe", "ajax", "axl rose"], "ax")) // => true

/*------------------------------------------------------------------------------
// Write a function repeatedChars(word) which takes a string
// and returns an array of all the characters in word that
// appear in a streak (i.e. more than once consecutively).
// Case-sensitive.
------------------------------------------------------------------------------*/
function repeatedChars(word) {
  let arr = []
  for (var i = 0; i < word.length; i++) {
    if ((word[i] === word[i + 1]) && word[i + 1] !== word[i + 2]) {
      arr.push(word[i])
    }
  }
  return arr
}

console.log(repeatedChars("aaabaa")) // => ["a", "a"]
console.log(repeatedChars("mississippi")) // => ["s", "s", "p"]
console.log(repeatedChars("SSassSS")) // => ["S", "s", "S"]

/*------------------------------------------------------------------------------
// Biodiversity
//
// Given an array of specimens, write a function biodiversity(ary) which
// returns the biodiversity index of the argument passed in. The biodiversity
// index is defined by the following formula:
//
// biodiversityIndex = numberOfSpecies ^ 2 * smallestPopulationSize / largestPopulationSize
// biodiversity(["cat"]) => 1
// biodiversity(["cat", "cat", "cat"]) => 1 (1 ^ 2 * 3 / 3)
// biodiversity(["cat", "cat", "dog"]) => 2 (2 ^ 2 * 1 / 2)
// biodiversity(["cat", "fly", "dog"]) => 9
// biodiversity(["cat", "fly", "dog", "dog", "cat", "cat"]) => 3
------------------------------------------------------------------------------*/
let keyCount = object => {
  let size = 0, key
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      size++
    }
  }
  return size
}

let sps = object => {
  let smallest = Number.POSITIVE_INFINITY
  for (let key in object) {
    smallest = Math.min(object[key], smallest)
  }
  return smallest
}

let lps = object => {
  let largest = Number.NEGATIVE_INFINITY
  for (let key in object) {
    largest = Math.max(object[key], largest)
  }
  return largest
}

let biodiversity = ary => {
  let obj = {}
  ary.forEach(x => {
    !obj[x] ? obj[x] = 1 : obj[x] += 1
  })

  let numberOfSpecies = keyCount(obj)
  let smallestPopulationSize = sps(obj)
  let largestPopulationSize = lps(obj)
  return Math.pow(numberOfSpecies, 2) * (smallestPopulationSize / largestPopulationSize)
}


console.log(biodiversity(["cat"])) // => 1
console.log(biodiversity(["cat", "cat", "cat"])) // => 1 (1 ^ 2 * 3 / 3)
console.log(biodiversity(["cat", "cat", "dog"])) // => 2 (2 ^ 2 * 1 / 2)
console.log(biodiversity(["cat", "fly", "dog"])) // => 9
console.log(biodiversity(["cat", "fly", "dog", "dog", "cat", "cat"])) // => 3

/*------------------------------------------------------------------------------
// Write a function factorial(n) which takes a number and
// returns the factorial of n. A factorial is the product of
// all whole numbers between 1 and n, inclusive.
//
// Examples:
// factorial(1) => 1 (1 * 1))
// factorial(5) => 120 (5 * 4 * 3 * 2 * 1)
------------------------------------------------------------------------------*/
let factorial = n => {
  if (n <= 1) {return 1}
  return n * factorial(n - 1)
}

console.log(factorial(1)) // => 1 (1 * 1))
console.log(factorial(5)) // => 120 (5 * 4 * 3 * 2 * 1)
/*------------------------------------------------------------------------------
// Vigenere Cipher
//
// Caesar's cipher takes a word and encrypts it by offsetting each letter in
// the word by a fixed number, the key. For a key of 3, for example:
// a -> d, p -> s, and y -> b
//
// Vigenere's Cipher is a Caesar cipher, but instead of a single key, a sequence
// of keys is used. For example, if we encrypt "bananasinpajamas" with the
// key sequence [1, 2, 3], the result would be "ccqbpdtkqqcmbodt":
//
// Word:   b a n a n a s i n p a j a m a s
// Keys:   1 2 3 1 2 3 1 2 3 1 2 3 1 2 3 1
// Cipher: c c q b p d t k q q c m b o d t
//
// Write a method vigenereCipher(string, keySequence, alphabet) that takes a
// string and a key-sequence, returning the encrypted word.
//
// We're giving you the alphabet as an array if you need it.
//
// Examples:
// vigenereCipher("toerrishuman", [1], alphabet) => "upfssjtivnbo"
// vigenereCipher("toerrishuman", [1, 2], alphabet) => "uqftsktjvobp"
// vigenereCipher("toerrishuman", [1, 2, 3], alphabet) => "uqhstltjxncq"
------------------------------------------------------------------------------*/

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let vigenereCipher = (string, keySequence, alphabet) => {
  let nSent = ""
  let i = 0
  while (i < string.length){
    for (var j = 0; j < keySequence.length; j++) {
      nSent += alphabet[alphabet.indexOf(string[i]) + keySequence[j]]
      i++
    }
  }
  return nSent
}

console.log(vigenereCipher("toerrishuman", [1], alphabet) === "upfssjtivnbo")
console.log(vigenereCipher("toerrishuman", [1, 2], alphabet) === "uqftsktjvobp")
console.log(vigenereCipher("toerrishuman", [1, 2, 3], alphabet) === "uqhstltjxncq")
/*------------------------------------------------------------------------------
Caesar Guesser

Caesar's cipher takes a word and encrypts it by offsetting each letter in
the word by a fixed number, the key. For a key of 3, for example:
a -> d, p -> s, and y -> b.

Given that the most common letter in english is 'E', build a decrypter that
takes an encrypted word, determines the key, and returns the decrypted word.

Strategy: find the most common letter in the encrypted string and assume that it
should be the letter "e" in the decrypted string. Use this information to
calculate the key.  Use helper functions to declutter your code.

We're giving you the alphabet as an array if you need it.

Examples:
caesarGuesser("a", alphabet) == "e"
caesarGuesser("b", alphabet) == "e"
caesarGuesser("ruuauufuh", alphabet) == "beekeeper"
caesarGuesser("mnonwmcqntnny", alphabet) == "defendthekeep"
caesarGuesser("happdaiawpywga", alphabet) == "letthemeatcake"
// ------------------------------------------------------------------------------*/
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

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
let mlcounter = word => {
  let counter = 0
  let seen = []
  let counted = []
  for (var i = 0; i < word.length; i++) {
    if (seen.includes(word[i]) && !counted.includes(word[i])) {
      counter++
      counted.push(word[i])
    } else {
      seen.push(word[i])
    }
  }
  return counter
}


function wordWithMostRepeats(sentence) {
 let word = sentence.split(' ')
 let mlc = Number.NEGATIVE_INFINITY
 let result = ""
 word.forEach(x => {
   if (mlcounter(x) > mlc) {
     mlc = mlcounter(x)
     result = x
   }
 })
 return result
}

console.log(wordWithMostRepeats('good luck')) // => 'good'
console.log(wordWithMostRepeats('what if there is a tie betwixt words')) // => 'there'
console.log(wordWithMostRepeats('ooooooooooh tutu')) // => 'tutu'
/*
# Even Splitters
# ------------------------------------------------------------------------------
# Return an array of characters on which we can split an input string to produce
# substrings of the same length.
# Don't count empty strings after the split.
# Here's an example for "banana":
#
# "banana".split("a") # => ["b", "n", "n"] (all elements same length)
# "banana".split("b") # => ["", anana"] (all elements same length - there's only
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
function lengthChecker(array) {
  let i = 0;
  while (i < array.length) {
    if (array[i].length !== array[0].length) {
      return false
    }
    i++
  }
  return true
}

function evenSplitters(str) {
  let result = [];
  let i = 0;
  while (i < str.length) {
    let splitedStr = str.split(str[i]).filter(char => char !== '');
    if (!result.includes(str[i]) && lengthChecker(splitedStr)) {
      result.push(str[i]);
    }
    i++
  }
  console.log(result);
  return result;
}

evenSplitters("") // => []
evenSplitters("t") // => ["t"]
evenSplitters("jk") // => ["j", "k"]
evenSplitters("xoxo") // => ["x", "o"]
evenSplitters("banana") // => ["b","a"]
evenSplitters("mishmash") // => ["m","h"]

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
  return array.slice(array.length - key).reduce((acc, num) => acc + num, 0)
}

function xbonacci(startingSequence, numberOfXbonacciNumbersToReturn) {
  let key = startingSequence.length
  while (startingSequence.length < numberOfXbonacciNumbersToReturn) {
    startingSequence.push(fibx(startingSequence, key))
  }
  console.log(startingSequence);
  return startingSequence
}
xbonacci([1, 1], 5) // => [1, 1, 2, 3, 5]
xbonacci([1, 1, 1], 6) // => [1, 1, 1, 3, 5, 9]
xbonacci([1, 1, 1, 1], 8) // => [1, 1, 1, 1, 4, 7, 13, 25]
xbonacci([1, 1, 1, 1, 1, 1], 10) // => [1, 1, 1, 1, 1, 1, 6, 11, 21, 41]
xbonacci([0, 0, 0, 0, 1], 10) // => [0, 0, 0, 0, 1, 1, 2, 4, 8, 16]

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
  let sum = 0
  cupcakeCounts.forEach(x => sum += Math.floor(x / numberOfStudentsInClass))
  console.log(sum);
  return sum
}

cupcakeSolver([10, 10, 10], 5) // => 6
cupcakeSolver([25, 27, 30], 5) // => 16
cupcakeSolver([32, 27, 28], 20) // => 3
cupcakeSolver([32, 27, 28, 24], 20) // => 4
