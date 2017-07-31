/*
Write a function divisibleByThreePairSum(array) that takes an array of numbers.
It should return an array of all the pairs of indices whose sum is a multiple
of three.
*/
console.log("divisibleByThreePairSum\n-----------------------")
function divisibleByThreePairSum(array){
  var arr = []
  for (var i = 0; i < array.length; i++) {
    for (var a = (i+1); a < array.length; a++) {
      var sum = array[i] + array[a];
      if (sum % 3 === 0){
        arr.push([i, a]);
      }
    }
  }
  return arr;
};

console.log(divisibleByThreePairSum([1, 6, 3, 4, 2, 0]));
//[[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]
console.log(divisibleByThreePairSum([8, 3, 5, 9, 2]));
//[[1, 3]]
console.log("\n");


/*
Write a function isValidEmail(email) that takes an email string.
Return true if the email is considered valid. A valid email:

- Contains one and only one "@" symbol
- All the characters before the "@" symbol are alphanumeric, underscores,
  or dots "."
- There is one and only one dot "." after the "@" symbol
- Besides the dot ".", all the characters after the "@" are in the alphabet
  (no numbers or underscores)
*/
console.log("isValidEmail\n-----------")
function alphaCheck(string){
  var alphabet = [
    "a","b","c","d","e",
    "f","g","h","i","j",
    "k","l","m","n","o",
    "p","q","r","s","t",
    "u","v","w","x","y",
    "z"];
    return alphabet.includes(string);
}

function numCheck(string){
  var numbers = [ "1","2","3","4","5","6","7","8","9","0" ];
  return numbers.includes(string);
}

function alphaNumCheck(string){
  return ((alphaCheck(string)) || (numCheck(string)));
}

function isValidEmail(email) {
  var eSplit = email.split("@"); // split email at the @
  if (eSplit.length !== 2){      // should split into 2 parts
    return false;
  }

  var eFirst = eSplit[0];       // before the @
  var eSecond = eSplit[1];      // after the @

  for (var i = 0; i < eFirst.length; i++) { // checker for the first half
    if (!alphaNumCheck(eFirst[i]) && eFirst[i] !== "_" && eFirst[i] !== ".") {
      return false;
    }
  }

  if (eSecond.split(".").length !== 2){ //check if it has more then 2 dots
    return false;
  }

  for (var i = 0; i < eSecond.length; i++) {  // checker for the second half
    if (!alphaCheck(eSecond[i]) && eSecond[i] !== "."){
      return false;
    }
  }
  return true;
};

console.log(isValidEmail("junk@gmail.com")); //true
console.log(isValidEmail("now.what@now.co")); //true
console.log(isValidEmail("i_am_happy@feelings.net")); //true
console.log(isValidEmail("my@website@gmail.com")); //false
console.log(isValidEmail("webby@gmail.co.net")); //false
console.log(isValidEmail("anthony@ira_ladson.com")); //false
console.log(isValidEmail("anthony!@ladson.com")); //false
console.log("\n");


/*
Write a function peakFinder(array) that takes in an array of numbers.
It should return an array containing the indices of all the peaks.
A peak is an element that is greater than both of its neighbors.
If it is the first or last element, it is a peak if it is greater than
its one neighbor. Assume the array has a length of at least 2.
*/

console.log("peakFinder\n---------")
function peakFinder(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    var bothSide = (array[i] > array[i - 1]) && (array[i] > array[i + 1]);
    var first = (array[0] > array[1])
    var last = (array[array.length - 1] > array[array.length - 2])
    if (bothSide){
      arr.push(i);
    } else if (i === 0 && first) {
      arr.push(i)
    } else if (i === array.length - 1 && last) {
      arr.push(i)
    }
  }
  return arr;
};

console.log(peakFinder([1, 2, 3, 2, 1])) //[2]
console.log(peakFinder([2, 1, 2, 3, 4, 5])) //[0, 5]
console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])) //[2, 6, 8]
console.log("\n");
