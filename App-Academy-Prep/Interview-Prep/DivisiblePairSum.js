// divisibleByNPairSum
function divisibleByNPairSum(ary, n) {
  var nArr = [];

  ary.forEach(function (n1, i) {
    ary.forEach(function (n2, j) {
      if ((j > i) && ((n1 + n2) % n === 0)) {
        nArr.push([i, j]);
      }
    });
  });
  return nArr;
};


divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
//[[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]
divisibleByThreePairSum([8, 3, 5, 9, 2]);
//[[1, 3]]
