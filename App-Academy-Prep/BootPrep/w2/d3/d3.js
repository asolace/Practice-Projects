//Debug the code:

//uniqueArray
console.log("unique\n-------")
function unique(array) {
  var uniqueArray = [];

  for (var i = 0; i < array.length; i += 1) {
    var ele = array[i];

    if (uniqueArray.indexOf(ele) === -1) {
      uniqueArray.push(ele);
    }
  }
  return uniqueArray;
};

console.log(unique([1,23,2,4,5,1,23])) //==> [1, 23, 2, 4, 5];
console.log("\n")


//isHappy
console.log("isHappy\n------");
function isHappy(person) {
  if (person.happiness > 5) {
    return true;
  }
  return false;
}

function isHappyGroup(group) {
  var amount = 0;

  for (var i = 0; i < group.length; i += 1) {
    var person = group[i];

    if (isHappy(person)) {
      amount += 1;
    }
  }

  if (amount > 5) {
    return true;
  }

  return false;
};

var people = [
  { happiness : 15},
  { happiness : 13},
  { happiness : 3},
  { happiness : 20},
  { happiness : 9},
  { happiness : 7},
  { happiness : 17},
  { happiness : 1}
];

console.log(isHappyGroup(people)); //==> true;
console.log("\n");


//magicify
console.log("magicify\n--------")
var magicify = function(number) {
  return (number - 34);
}

var isMagicNumer = function(number) {
  var magicNumb = magicify(number);

  if (magicNumb % 13 === 0 || magicNumb < 0) {
    return true;
  }

  return false;
}

console.log(isMagicNumer(26)) //==> true;
console.log(isMagicNumer(50)) //==> false;
console.log("\n")


//howHigh
console.log("howHigh\n------");
function howHigh(height) {
  return (height + " feet high!");
}

function jump(height) {
  return "I'm jumping " + howHigh(height);
}

console.log(jump(5)) //==> "I'm jumping 5 feet high!";
console.log(jump(12)) //==> "I'm jumping 12 feet high!";
console.log("\n");


//fizzBuzz
console.log("fizzBuzz\n---------");
function fizzBuzz(max) {
  var i = 1;
  var array = [];

  while(i < max) {
    if (((i % 5 === 0) || (i % 3 === 0)) && (i !== 15)) {
      array.push(i);
    }
    i += 1;
  }

  return array;
}

console.log(fizzBuzz(19)) //==> [3, 5, 6, 9, 10, 12, 18];
