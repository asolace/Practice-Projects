function isogramMatcher(str1, str2) {
  let arr = [], c1 = 0, c2 = 0;
  for (var i = 0; i < str1.length; i++) {
    if (str1[i] === str2[i]) {
      c1++
    } else if (str1.includes(str2[i])) {
      c2++
    }
  }
  arr.push(c1, c2)
  return arr;
}



isogramMatcher("an", "at"); //=> [1, 0]
isogramMatcher("or", "go"); //=> [0, 1]
isogramMatcher("cat", "tap"); //=> [1, 1]
isogramMatcher("home", "dome"); //=> [3, 0]
isogramMatcher("ultrasonic", "ostracized"); //=> [3, 4]
isogramMatcher("unpredictably", "hydromagnetic"); //=> [1, 8]
