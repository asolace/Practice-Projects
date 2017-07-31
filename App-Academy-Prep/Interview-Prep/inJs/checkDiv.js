function check_divisors(divisor_array, low, high){
  while (low < high) {
    if (isAllDiv(low, divisor_array)) {
      console.log(low + ' all_match');
    } else if (isOneDiv(low, divisor_array)) {
      console.log(low + ' one_match');
    } else {
      console.log(low);
    }
    low++
  }
}

let isAllDiv = (low, array) => {
  let i = 0
  while (i < array.length) {
    if (low % array[i] !== 0) {
      return false
    }
    i++
  }
  return true
}

let isOneDiv = (low, array) => {
  let i = 0
  while (i < array.length) {
    if (low % array[i] === 0) {
      return true
    }
    i++
  }
  return false
}

check_divisors([2,3], 1, 7)
