//logBetween
console.log("logBetween\n----------");
function logBetween(lowNum, highNum) {
  while (lowNum <= highNum){
      console.log(lowNum);
      lowNum += 1;
  }
}
console.log(logBetween(-1, 2));
console.log(logBetween(14, 6));
console.log(logBetween(4, 6));
console.log("\n");

//isFactorOf
console.log("isFactorOf\n----------");
function isFactorOf(number, factor){
  return (number % factor === 0);
}
console.log(isFactorOf(6, 2)); //true
console.log(isFactorOf(-6, 2)); //true
console.log(isFactorOf(5, 0)); //false
console.log("\n");

//isPrime
console.log("isPrime\n-------")
function isPrime(num) {
  if (num <= 1) {return false};
  for (var x = 2; x < num; x++){
    if (num % x === 0){
      return false;
    };
  };
  return true;
}
console.log(isPrime(-22)); //false
console.log(isPrime(0)); //false
console.log(isPrime(1)); //false
console.log(isPrime(2)); //true
console.log(isPrime(10)); //false
console.log(isPrime(15485863)); //true
console.log(isPrime(3548563)); //false
