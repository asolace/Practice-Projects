//myForEach
function myForEach(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
};



//mySelect
function mySelect(arr, cb){
  var nArr = [];
  arr.forEach(function(ele, i){
    if (cb(ele, i)) {
      nArr.push(ele)
    }
  });
  return nArr;
}


//myReject
function myReject(arr, cb){
  var nArr = [];
  arr.forEach(function(ele, i){
    if (!cb(ele, i)) {
      nArr.push(ele)
    }
  })
  return nArr;
}


//myMap
function myMap(arr, cb){
  var newArr = [];
  arr.forEach(function(ele, i){
    newArr.push(cb(ele, i));
  })
  return newArr;
};
