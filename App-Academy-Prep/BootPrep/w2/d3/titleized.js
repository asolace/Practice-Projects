console.log("titlized\n---------")
function removePunctuation(word) {
  var punctuation = [";", "!", ".", "?", ",", "-"];
  var lWord = word[word.length - 1];

  if (!punctuation.includes(lWord)) {
    return word.slice(0, -1);
  } else {
    return word;
  }
}

function isStopWord(word, stopWords) {
  var rPunc = removePunctuation(word);

  return stopWords.indexOf(rPunc) !== -1;
}

function titleize(title, stopWords) {
  var words = title.split(" ");
  var nTitle = [];

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i].toLowerCase();

    if (isStopWord(word, stopWords)) {
      nTitle.push(word);
    } else {
      word = word[0].toUpperCase() + word.slice(1);
      nTitle.push(word);
    }
  }

  return nTitle.join(" ");
}

console.log(titleize("forest gump, the runner", ["the"]))
//"Forest Gump, the Runner"
console.log(titleize("MASTER AND COMM!ANDER", ["and"]))
//"Master and Commander"
console.log(titleize("i LOVE; lover of mine", ["love", "of"]))
//"I love; Lover of Mine"
console.log(titleize("shall we dance?", ["dance"]))
//"Shall We dance?"
console.log("\n")
