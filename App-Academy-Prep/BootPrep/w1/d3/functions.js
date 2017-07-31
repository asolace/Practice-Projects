//isPrime
console.log("isPrime\n-------")
function isPrime(num) {
  if (num <= 1) {return false};
  for (var x = 2; x < num; x++){
    if (num % x === 0){
      return false;
    }
  }
  return true;
};
console.log(isPrime(2)); //true
console.log(isPrime(1693)); //true
console.log(isPrime(15)); //false
console.log(isPrime(303212)); //false
console.log("\n");

//firstNPrimes
console.log("firstNPrimes\n-------")
// Why doesn't this work?

function firstNPrimes(n){
  var array = [];
    for(var i = 2; array.length < n; i++){
        if(isPrime(i)) {
          array.push(i);
        }
    }
    return array;
};

// function firstNPrimes(n) {
//   var array = [];
//   var num = 2;
//   while(array.length < n) {
//     if (isPrime(num)) {
//       array.push(num);
//     };
//     num++;
//   };
//   return array;
// };
console.log(firstNPrimes(0)); //[]
console.log(firstNPrimes(1)); //[2]
console.log(firstNPrimes(4)); //[2, 3, 5, 7]
console.log("\n");

//sumOfNPrimes
console.log("sumOfNPrimes\n-----------");
function sumOfNPrimes(n){
  var ar = firstNPrimes(n);
  var sum = 0;
  for (var i = 0; i < ar.length; i++){
    sum += ar[i];
  }
  return sum;
};
console.log(sumOfNPrimes(0)); //0
console.log(sumOfNPrimes(1)); //2
console.log(sumOfNPrimes(4)); //17
console.log("\n");
