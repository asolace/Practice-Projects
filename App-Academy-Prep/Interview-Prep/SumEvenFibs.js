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
