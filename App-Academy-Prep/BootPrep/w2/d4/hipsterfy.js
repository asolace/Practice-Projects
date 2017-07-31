/*
Write a function hipsterfy(sentence) that takes takes a string containing
several words as input. Remove the last vowel from each word. 'y' is not a
vowel.
*/

function vowelRemover(word){
  var vowels = ["a", "e", "i", "o", "u"];
  for (var i = word.length -1 ; i >= 0; i--) {
    if (vowels.includes(word[i])) {
      return word.slice(0, i) + word.slice(i + 1)
    }
  }
  return word
}

function hipsterfy(sentence){
  var word = sentence.split(" ");
  var newSent = [];
  for (var i = 0; i < word.length; i++) {
    newSent.push(vowelRemover(word[i]));
  }
  return newSent.join(" ")
};

console.log(hipsterfy("proper")); // "propr"
console.log(hipsterfy("proper tonic panther")); // "propr tonc panthr"
console.log(hipsterfy("towel flicker banana")); // "towl flickr banan"
console.log(hipsterfy("runner anaconda")); // "runnr anacond"
console.log(hipsterfy("turtle cheeseburger fries")); // "turtl cheeseburgr fris"s
