//From functions.js

function firstNPrime(n){
  var array = [];
    for(var i = 2; array.length < n; i++){
        if(isPrime(i)) {
          array.push(i)
        }
    }
    return array;
};

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
