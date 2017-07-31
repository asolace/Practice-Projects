/***************************************************************************
Write a function arraySumN(ary, n) which takes as ary a 2-dimensional array
and as n a number. ary is an array of arrays of numbers. The function returns
the indices of the inner arrays whose elements sum to n.
***************************************************************************/

function summer(array){
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

function arraySumN(ary, n) {
  var sumsOfN = []
  for (var i = 0; i < ary.length; i++) {
    if (summer(ary[i]) === n) {
      sumsOfN.push(i);
    }
  }
  return sumsOfN;
};

var ary1 = [ [0, 1], [2, 2, 0], [3, -2] ];
console.log(arraySumN(ary1, 1)); // => [0, 2]
var ary2 = [ [3, 2, 1], [100], [0, 1, 2, 3, 100], [6] ];
console.log(arraySumN(ary2, 6)); // => [0, 3]

/***************************************************************************
Write a function concatObjects(obj1, obj2) which "concatenates" two objects.
It returns an object containing all of the keys found in both obj1 and
obj2. If a key appears in both obj1 and obj2, its value is the concatenation
of its values in obj1 and obj2. Otherwise, a key's value is its value
in the original object. Do not modify the arguments.
Example 1:
var cat1 = {name: "hello", bow: "pink"};
var cat2 = {name: "kitty", color: "white"};
var cat3 = concatObjects(cat1, cat2);
cat3; // => { name: "hellokitty", bow: "pink", color: "white"}
Example 2:
var splash = { pointGuard: "Steph", shootingGuard: "Klay", team: "Warriors"};
var brothers = { pointGuard: "Curry", shootingGuard: "Thompson"};
concatObjects(splash, brothers); // => { pointGuard: "StephCurry", shootingGuard: "KlayThompson", team: "Warriors"}
***************************************************************************/

function concatObjects(obj1, obj2) {
  for (var key2 in obj2) {
    if (obj1[key2]) {
      obj1[key2] += obj2[key2];
    } else {
      obj1[key2] = obj2[key2];
    }
  }
  return obj1;
}

console.log("Example 1: ");
var cat1 = {name: "hello", bow: "pink"};
var cat2 = {name: "kitty", color: "white"};
var cat3 = concatObjects(cat1, cat2);
console.log(cat3); // => { name: "hellokitty", bow: "pink", color: "white"}
console.log("Example 2:" );
var splash = { pointGuard: "Steph", shootingGuard: "Klay", team: "Warriors"};
var brothers = { pointGuard: "Curry", shootingGuard: "Thompson"};
console.log(concatObjects(splash, brothers)); // => { pointGuard: "StephCurry", shootingGuard: "KlayThompson", team: "Warriors"}
