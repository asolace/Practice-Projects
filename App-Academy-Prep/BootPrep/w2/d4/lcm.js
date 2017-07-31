/*
Write a function lcm(num1, num2) that returns the lowest number which is a
multiple of both inputs.
*/
function lcm(num1, num2){
  var i = num1;
  while (true) {
    if (i % num2 === 0) {
      return i;
    }
    i += num1;
  }
};

function lcm(num1, num2){
  for (var i = num1; true; i+= num1) {
    if (i % num2 === 0) {
      return i;
    }
  }
}

console.log(lcm(2, 3)); // 6
console.log(lcm(10, 6)); // 30
console.log(lcm(24, 26)); // 312
