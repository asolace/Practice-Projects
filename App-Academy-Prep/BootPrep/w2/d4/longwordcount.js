/*
Write a function longWordCount(string) that takes in a string and returns the
number of words longer than 7 characters.
*/
function longWordCount(string) {
  var words = string.split(" ")
  var counter = 0
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 7) {
      counter += 1;
    }
  }
  return counter;
};

console.log(longWordCount("")); //0
console.log(longWordCount("short words only")); //0
console.log(longWordCount("one reallylong word")); //1
console.log(longWordCount("two reallylong words inthisstring")); //2
console.log(longWordCount("allwordword longwordword wordswordword")); //3
console.log(longWordCount("seventy schfifty five")); //1
