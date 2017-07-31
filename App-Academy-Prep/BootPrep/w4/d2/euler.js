// find the sum of all the multiples of 3 or 5 below 1000.
console.log("Multiples of 3 & 5\n-------------------");
function sumTiples(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  console.log(sum);
  return sum;
}
sumTiples(1000) // 233168
console.log('\n');

// Find the largest palindrome made from the product of two 3-digit numbers.
console.log("Largest Palidrome Product\n-------------------------");
let paliCheck = function(num) {
  let num = String(num)
  let sNum = num.split('').reverse().join("")
  return sNum === num ? true : false
}

function lpp() {
  let max = 0
  for (let i = 999; i > 99; i--) {
    for (let j = 999; j > 99; j--) {
      let product = j * i
      if (paliCheck(product)) {
        if (product > max) {
          max = product;
        }
      }
    }
  }
  return max
}
console.log(lpp()); // 906609
console.log('\n');

// Fibonacci sequence whose values do not exceed 4 million,
// find the sum of the even-valued terms
console.log('Sum of Even Fibs\n------------');
function genFibs(num){
  let fibArray = [0, 1], sum = 0;
  for (let i = 1;  fibArray[fibArray.length - 1] < num; i++) {
    fibArray.push(fibArray[i] + fibArray[i - 1]);
  }
  fibArray.forEach(i => {
    if (i % 2 === 0) {
      sum += i
    }
  })
  return sum;
}
console.log(genFibs(4000000)); //4613732
console.log('\n');

// What is the smallest positive number that is evenly divisible
// (no remainders) by all of the numbers from 1 to 20?
console.log('Smallest Multiples\n-----------------');
function sm(){
  let i = 1, j = 1;
  while (i <= 20) {
    if (j % i === 0) {
      i++
    } else {
      j++;
      i = 1;
    }
  }
  return j;
}
console.log(sm()); //232792560
console.log('\n');
