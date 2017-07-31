// Write a function factorial(n), that returns the factorial of the number n.
// Example: factorial(4) => 4 * 3 * 2 * 1 => 24

function factorial(n){
  for (var num = 1; n > 0; n--) {
    num = num * n
  }
  return num;
};


console.log(factorial(1)); // 1
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
console.log(factorial(10)); // 3628800
