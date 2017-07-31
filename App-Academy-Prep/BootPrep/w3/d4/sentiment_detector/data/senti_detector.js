const fs = require('fs');

function getRecordsFromFile(filename, cb) {
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) {
      console.log("---Error---");
      console.log(err);
      return;
    }
    var records = data.split("\n");
    cb(records);
  });
}

function detectSentiment(filename, sentence, cb) {
  getRecordsFromFile(filename, function(records) {
    var dictionary = [],
        score = 0;
    records.forEach((record) => {
      var newEntry = {};
      record = record.split(" ");
      record.forEach((e) => { //word1=love priorpolarity=positive
        e = e.split("=");
        if (e[0] == 'word1' || e[0] == 'priorpolarity') {
          newEntry[e[0]] = e[1];
          //word1         love
        }
      })
      dictionary.push(newEntry);
    })
    sentence.split(' ').forEach((word) => {
      for (var i in dictionary) {
        var r = dictionary[i]
        if (r.word1 == word.toLowerCase()) {
          if (r.priorpolarity == 'positive') {
            score += 1;
          } else if (r.priorpolarity == 'negative'){
            score -= 1;
          }
        }
      }
    })
    cb(sentence, score);
  });
}

detectSentiment("sentimentDict.txt", "I love you", function(sentence, score) {
  console.log("~~~~Example 1~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});
detectSentiment("sentimentDict.txt", "I LOVE you so much", function(sentence, score) {
  console.log("~~~~Example 2~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});
detectSentiment("sentimentDict.txt", "You are a loveless fool", function(sentence, score) {
  console.log("~~~~Example 3~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});
detectSentiment("sentimentDict.txt", "I cherish your smile", function(sentence, score) {
  console.log("~~~~Example 4~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});
var sentence = "I despise your hateful attitude";
detectSentiment("sentimentDict.txt", sentence, function(sentence, score) {
  console.log("~~~~Example 5~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});
