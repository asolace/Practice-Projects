// logEach
console.log("logEach\n-------");
function logEach(array) {
  array.forEach(function(ele, i) {
    console.log(i + ": " + ele);
  })
};

logEach(["Anthony", "John", "Carson"]);
// 0: Anthony
// 1: John
// 2: Carson
console.log("\n");

// maxValue
console.log("maxValue\n---------");
function maxValue(array) {
  var max = null;
  array.forEach(function(i) {
    max = Math.max(i, max)
  })
  return max;
}

console.log(maxValue([12, 6, 43, 2])) //43
console.log(maxValue([])) // null
console.log(maxValue([-4, -10, 0.43])) //0.43
console.log("\n");

// wordYeller
console.log("wordYeller\n--------------");
function wordYeller(sentence) {
  var nSent = [];
  var punc = "!,.:;?";
  var words = sentence.split(" ");

  words.forEach(function(word){
    var lastChar = word.slice(-1);
    if (punc.includes(lastChar)) {
      nSent.push(word)
    } else {
      nSent.push(word + "!");
    }
  });
  return nSent.join(" ");
};


var sent = "Stop it now! Please, wont you stop?";
var yelledWords = wordYeller(sent);
yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true
console.log(yelledWords);
console.log("\n");

// divisibleByNPairSum
console.log("divisibleByNPairSum\n------------------------");
function divisibleByNPairSum(ary, n) {
  var nArr = [];

  ary.forEach(function (n1, i) {
    ary.forEach(function (n2, j) {
      if ((j > i) && ((n1 + n2) % n === 0)) {
        nArr.push([i, j]);
      }
    });
  });
  console.log(nArr);
  return nArr;
};

divisibleByNPairSum([1, 6, 3, 4, 2, 0], 3);
// [ [ 0, 4 ], [ 1, 2 ], [ 1, 5 ], [ 2, 5 ], [ 3, 4 ] ]
divisibleByNPairSum([8, 3, 5, 9, 2], 10);
// [ [ 0, 4 ] ]
console.log("\n");


// peakFinder
console.log("peakFinder\n----------");
function peakFinder(array){
  var peaks = []
  array.forEach(function(ele, i) {
    if (i === 0 && array[i] > array[i + 1]) {
      peaks.push(i)
    } else if (i === array.length - 1 && array[i] > array[i - 1]) {
      peaks.push(i)
    } else if (array[i] > array[i + 1] && array[i] > array[i - 1]) {
      peaks.push(i)
    }
  })
  console.log(peaks);
  return peaks
}

peakFinder([ 1, 2, 3, 2, 1 ]); // [2]
peakFinder([ 2, 1, 2, 3, 4, 5 ]); // [0, 5]
peakFinder([-5, 0, 0, -1]); //[]
console.log("\n");
