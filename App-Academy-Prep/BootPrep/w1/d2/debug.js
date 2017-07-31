/*
function sayHiNTimes(n) {
  var i = 0;

  while (i < n) {
    console.log("Hi");
  }
}

function isFive(n) {
  if (n = 5) {
    return true;
  } else {
    return false;
  }
}
*/

function sayHiNTimes(n) {
  var i = 0;

  while (i <= n) {
    console.log("Hi");
    i+=1;
  }
}

function isFive(n) {
  if (n === 5) {
    return true;
  }
  else {
    return false;
  }
}

sayHiNTimes(5);
console.log(isFive(5));
console.log(isFive(1));
