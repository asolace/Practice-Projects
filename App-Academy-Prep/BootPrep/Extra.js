//average
console.log("Average\n-------")
function average(array){
  var sum = 0
  for (var i = 0; i < array.length; i++) {
    sum += array[i]
    average = sum / array.length
  }
  return average
}
console.log(average([1,2,3])+"\n") // => 2

//reverse
console.log("Reversed\n--------")
function reverse(sentence){
  var word = sentence.split(" ")
  var newSent = ""
  for (var i = 0; i < word.length; i++) {
    newSent = word[i] + " " + newSent
  }
  return newSent
}
console.log(reverse("I am a dog")) // => "dog a am I"
console.log("\n")

//array of even
console.log("Array of Even\n---------------")
function even(num){
  var arr = [];
  for (var i = 0; arr.length < num; i++) {
    if(i % 2 === 0){
      arr.push(i)
    }
  }
  return arr
}
console.log(even(5));
console.log("\n");

//contains
console.log("Contains\n----------")
var word = [ "pork", "beef", "tomato", "corn", "rice" ]
function contains(sentence){
  var words = sentence.split(" ")
  var x = false;
  for (var i = 0; i < words.length; i++) {
    if (word.includes(words[i])){
      x = true;
    }
  }
  return x
}
console.log(contains("I had some harsh tomato today")) //true
console.log(contains("I had some bacon today")) //false
console.log(contains("I had some rice today")) //true
console.log(contains("I ate blackberries")) //false
console.log("\n")

//capLow
console.log("capLow\n-------")
// function capLow(sentence){
//   var newSent = ""
//   for (var i = 0; i < sentence.length; i++) {
//     if (i % 2 === 0){
//       newSent = newSent + sentence[i].toUpperCase()
//     }
//     else {
//       sentence[i].toLowerCase()
//       newSent = newSent + sentence[i]
//     }
//   }
//   console.log(newSent)
// }
//
// capLow("Haha, what's up guy?") //"HaHa, wHaT'S Up gUy?"

function cap2nd(sentence) {
  var letters = sentence.split("");
  for (var i = 0; i < letters.length; i += 2){
    letters[i] = letters[i].toUpperCase();
  }
  return letters.join("");
}
console.log(cap2nd("Haha, what's up guy?"))
console.log("\n")


// Given an array, return 1 if more of its items are truthy than falsey,
// 0 if they're tied, and -1 if more items are falsey
// [ 1, 1, 0 ] would yield 1
// [ 1, 1, 0, 0 ] would yield 0
// [1, 0, 0 ] would yield -1
// [] yields 0
