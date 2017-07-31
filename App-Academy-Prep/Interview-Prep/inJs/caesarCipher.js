// Caesar Guesser
//
// Caesar's cipher takes a word and encrypts it by offsetting each letter in
// the word by a fixed number, the key. For a key of 3, for example:
// a -> d, p -> s, and y -> b.
//
// Given that the most common letter in english is 'E', build a decrypter that
// takes an encrypted word, determines the key, and returns the decrypted word.
//
// Strategy: find the most common letter in the encrypted string and assume that it
// should be the letter "e" in the decrypted string. Use this information to
// calculate the key.  Use helper functions to declutter your code.
//
// We're giving you the alphabet as an array if you need it.

function caesarShift(letter, shift, alphabet) {
  let letterIndex = alphabet.indexOf(letter)
  let shifted = letterIndex + shift
  return alphabet[shifted > alphabet.length ? shifted % alphabet.length : shifted]
}

function caesarDeshift(letter, alphabet) {
  let letterIndex = alphabet.indexOf(letter)
  let target = alphabet.indexOf('e')
  return target - letterIndex < 0 ? target - letterIndex + alphabet.length : target - letterIndex
}

function caesarGuesser(string, alphabet) {
  let count = string.split('').reduce((count, letter) => {
    letter in count ? count[letter]++ : count[letter] = 1
    return count
  }, {})

  let max = -Infinity
  let maxLetter = ''
  for (let letter in count)
    if (count[letter] > max) {
      max = count[letter]
      maxLetter = letter
    }
  let shift = caesarDeshift(maxLetter, alphabet)

  return string.split('').map(letter => {
    return caesarShift(letter, shift, alphabet)
  }).join('')
}

alphabet = [
  "a", "b", "c", "d", "e", "f",
  "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r",
  "s", "t", "u", "v", "w", "x", "y", "z"
]

console.log(caesarGuesser("a", alphabet)) // == "e"
console.log(caesarGuesser("b", alphabet)) // == "e"
console.log(caesarGuesser("ruuauufuh", alphabet))) // == "beekeeper"
console.log(caesarGuesser("mnonwmcqntnny", alphabet)) // == "defendthekeep"
console.log(caesarGuesser("happdaiawpywga", alphabet)) // == "letthemeatcake"
