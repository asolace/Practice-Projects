//logEach
console.log("logEach\n-------");
function logEach(array) {
  for (var i = 0; i < array.length; i++){
    console.log(i + ": " + array[i]);
  }
}
logEach(["Anthony", "John", "Carson"]);
console.log("\n");

//maxValue
console.log("maxValue\n--------");
function maxValue(array){
  var max = 0;
  for (var i = 0; i < array.length; i++){
    if (array[i] > max){
      max = array[i];
    };
  };
  return max;
};
console.log(maxValue([12, 6, 43, 2])); //43
console.log(maxValue([])); //null
console.log(maxValue([-4, -10, 0.43])); //0.43
console.log("\n");

//printRange
console.log("printRange\n----------");
function printRange(start, end){
  if (start >= end){
    console.log("Bad Range");
  };
  while (start <= end){
    console.log(start)
    start++
  };
}
printRange(22, 24);
printRange(5, 1);
console.log("\n")
