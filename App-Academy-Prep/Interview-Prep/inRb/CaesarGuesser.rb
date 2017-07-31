# Caesar Guesser
#
# Caesar's cipher takes a word and encrypts it by offsetting each letter in
# the word by a fixed number, the key. For a key of 3, for example:
# a -> d, p -> s, and y -> b.
#
# Given that the most common letter in english is 'E', build a decrypter that
# takes an encrypted word, determines the key, and returns the decrypted word.
#
# Strategy: find the most common letter in the encrypted string and assume that it
# should be the letter "e" in the decrypted string. Use this information to
# calculate the key.  Use helper functions to declutter your code.
#
# We're giving you the alphabet as an array if you need it.


alphabet = [
  "a", "b", "c", "d", "e", "f",
  "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r",
  "s", "t", "u", "v", "w", "x", "y", "z"
]

p caesarGuesser("a", alphabet) == "e"
p caesarGuesser("b", alphabet) == "e"
p caesarGuesser("ruuauufuh", alphabet) == "beekeeper"
p caesarGuesser("mnonwmcqntnny", alphabet) == "defendthekeep"
p caesarGuesser("happdaiawpywga", alphabet) == "letthemeatcake"
