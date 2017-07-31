/*****************************************************************************
            Refer to the day's problem set markdown file for
            all problems' instructions and example output.
*****************************************************************************/
// isPrime
function isPrime(n) {
  if (n < 2) {return false;}

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
/*****************************************************************************/
}// myMap
let myMap = (arr, cb) => {
  let array = [];
  arr.forEach(e => array.push(cb(e)))
  return array;
};

let mapped = myMap([1, 2, 3], e => e * 2);
/*****************************************************************************/
// myInject
let myInject = (arr, cb, accum) => {
  accum = accum === undefined ? 0 : accum
  arr.forEach(e => ( accum = cb(accum, e, arr.indexOf(e))) )
  return accum
};

// Test #1:
let result1 = myInject([1,2,3], (accum, ele, i, arr) => accum + (ele * 2), 1);
let result2 = myInject([1,2,3], (accum, ele, i, arr) => accum + ele + i);

let result3 = myInject(["I like", "dogs and", "also cats!"],
(accum, ele, i, arr) => accum + " " + ele.split(" ")[Math.floor(Math.random() * 2)], "Maybe If");

console.log(result1);
console.log(result2);
console.log(result3);


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  myInject: myInject,
  isPrime:  isPrime,
  myMap:    myMap
};
