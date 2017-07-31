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
