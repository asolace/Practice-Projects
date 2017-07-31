let greatestCommonFactor = (x, y) => {
for (var i = x; i > 0; i--) {
  if ((x % i === 0) && (y % i === 0)) {
    return i
    }
  }
}

console.log(greatestCommonFactor(6, 10)) // => 2
console.log(greatestCommonFactor(10, 15)) // => 5
console.log(greatestCommonFactor(4, 7)) // => 1
console.log(greatestCommonFactor(4, 8)) // => 4
