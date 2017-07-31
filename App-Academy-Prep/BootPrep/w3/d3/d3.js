//myForEach
console.log("myForEach\n----------");
function myForEach(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
};

myForEach([1,2,3], function(ele, i, arr) {
  console.log(ele + " is at position " + i + " in array " + arr);
});
// 1 is at position 0 in array [1,2,3]
// 2 is at position 1 in array [1,2,3]
// 3 is at position 2 in array [1,2,3]
console.log("\n");

//mySelect
console.log("mySelect\n-----------");
// Solution 1
// function mySelect(arr, cb){
//   var nArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (cb(arr[i], i)) {
//         nArr.push(arr[i]);
//     }
//   }
//   console.log(nArr);
//   return nArr;
// };
// Solution 2
// function mySelect (arr, cb) {
//   var selected = [];
//   // Litteraly the Array.forEach() -> Translation in Solution 3
//   myForEach(arr, function (ele, i, ar) {
//     if (cb(ele, i, ar)) {
//       selected.push(ele);
//     }
//   });
//   console.log(selected);
//   return selected;
// }
// Solution 3
function mySelect(arr, cb)
{
  var nArr = [];
  arr.forEach(function(ele, i){
    if (cb(ele, i)) {
      nArr.push(ele)
    }
  });
  console.log(nArr);
  return nArr;
}
mySelect([1,2,3,4,5,6], function(ele, i, arr) {
  return (ele % 2 === 0);
});
// [2,4,6]
mySelect([1,2,3,4,5,6], function(ele, i, arr) {
  return (i % 2 === 0);
});
// [1,3,5]
console.log("\n");

//myReject
console.log("myReject\n---------");
function myReject(arr, cb){
  var nArr = [];
  arr.forEach(function(ele, i){
    if (!cb(ele, i)) {
      nArr.push(ele)
    }
  })
  console.log(nArr);
  return nArr;
}

myReject([1,2,3,4,5,6], function(ele, i, arr) {
  return (ele % 2 === 0);
});
// [1,3,5]
myReject([1,2,3,4,5,6], function(ele, i, arr) {
  return (i % 2 === 0);
});
//[2,4,6]
console.log("\n");


//myMap
console.log("myMap\n-----");
function myMap(arr, cb){
  var newArr = [];
  arr.forEach(function(ele, i){
    newArr.push(cb(ele, i));
  })
  console.log(newArr);
  return newArr;
};

myMap([1,2,3], function(ele, i, arr) {
  return ele * 2;
});
//[2, 4, 6]
myMap([1,2,3], function(ele, i, arr) {
  return ele + i;
});
//[1, 3, 5]
myMap(["A", "B", "C"], function(ele, i, arr) {
  return ele + i;
});
//["A0", "B1", "C2"]
console.log("\n");

//createExpFunc
console.log("createExpFunc\n---------------");
function createExpFunc(power){
  return function(num) {
    return Math.pow(num, power)
  }
};

var powerTwo = createExpFunc(2);
console.log(powerTwo(2)); // 4
console.log(powerTwo(6)); // 36
var powerThree = createExpFunc(3);
console.log(powerThree(2)); // 8
console.log(powerThree(6)); // 216
var powerTen = createExpFunc(10);
console.log(powerTen(2)); // 1024
console.log(powerTen(6)); // 60466176
