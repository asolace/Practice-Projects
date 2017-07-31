/***************************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
a name (string) and a score (number). `countScores(people)` should
return an object that has key-value pairs where each name is a key and
the value is their total score.
***************************************************************************/

function countScores(people) {
  var newObj = {}
  for (var i = 0; i < people.length; i++) {
    if (newObj[people[i].name] === undefined) {
      newObj[people[i].name] = people[i].score;
    }
    else {
      newObj[people[i].name] += people[i].score;
    }
  }
  return newObj;
}

var ppl = [ {name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];
var countPpl = countScores(ppl);
console.log(countPpl); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

var peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
// console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }


/***************************************************************************
Write a function wordYeller(sentence) that takes in a sentence string as
input. It should return the sentence where every word has an exclamation
point behind it, except words that already have punctuation. Punctuation
marks are ". , ! ? ; :"
***************************************************************************/

function wordYeller(sentence) {
  var word = sentence.split(" ");
  for (var i = 0; i < word.length; i++) {
    var lastLetter = word[i][word[i].length -1];
    var puncutation = [".", ",", "!", "?", ":", ";"]
    if (puncutation.includes(lastLetter) === false){
      word[i] = word[i] + "!";
    }
  }
  return word.join(" ")
}

//Example 1
var sent = "Stop it now! Please, wont you stop?";
var yelledWords = wordYeller(sent);
yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true
console.log(yelledWords)
//Example 2
var words = "Go to the store and grab the following: milk, bread, run, and cake";
wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; // => true
console.log(wordYeller(words))
