//isPrime
function isPrime(num) {
  if (num <= 1) {return false};
  for (var x = 2; x < num; x++){
    if (num % x === 0){
      return false;
    }
  }
  return true;
};



//firstNPrimes
function firstNPrimes(n) {
  var array = [];
  var num = 2;
  while(array.length < n) {
    if (isPrime(num)) {
      array.push(num);
    };
    num++;
  };
  return array;
};


//sumOfNPrimes
function sumOfNPrimes(n){
  var ar = firstNPrimes(n);
  var sum = 0;
  for (var i = 0; i < ar.length; i++){
    sum += ar[i];
  }
  return sum;
};


//nthPrimes
function nthPrime(n) {
  var counter = 0;
  for (var i = 0; true; i++) {
    if (isPrime(i)) {
      counter += 1
      if (counter === n) {
        console.log(i);
        return i
      }
    }
  }
  console.log(i);
}
