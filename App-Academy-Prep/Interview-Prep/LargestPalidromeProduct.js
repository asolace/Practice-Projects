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
