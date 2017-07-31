function greatestMapCreator(ary, cb1, cb2) {
  var mappedAry = [];

  ary.forEach(function(num, idx, arry) {
    var mappedEle1 = cb1(num, idx, arry);
    var mappedEle2 = cb2(num, idx, arry);

    mappedAry.push(mappedEle1 > mappedEle2 ? mappedEle1 : mappedEle2);
  });
  return mappedAry;
}



let ary1 = [1, 5, 10];
let squareRootRounder = num =>  Math.round(Math.sqrt(num));
let half = num => num / 2;
greatestMapCreator(ary1, squareRootRounder, half); //=> [ 1, 2.5, 5 ]

let ary2 = [10, 20, -100];
let absoluteValue = (num) => Math.abs(num);
let power = (a, b) => Math.pow(a, b);
greatestMapCreator(ary2, absoluteValue, power); //=> [ 10, 20, 10000 ]
