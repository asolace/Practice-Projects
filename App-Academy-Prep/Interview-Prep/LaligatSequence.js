let isPrime = num => {
  if (num <= 1) {return false}
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true
}

let primeSum = n => {
  let sum = 0
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

let laligatSequence = (base, n) => {
  let array = [base];
  while (array.length < n) {
    array.push(primeSum(array[array.length - 1]));
  }
  return n === 0 ? [] : array;
}



> laligatSequence(10, 4)
[ 10, 17, 58, 381 ]

> laligatSequence(5, 2)
[ 5, 10 ]
