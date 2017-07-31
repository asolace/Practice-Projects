//isOdd
console.log("isOdd\n-----");
function isOdd(num) {
  return (num % 2 === 1) || (num % 2 === -1);
};
console.log(isOdd(2)); //false
console.log(isOdd(5)); //true
console.log(isOdd(-17)); //true
console.log("\n");

//plusFive
console.log("plusFive\n--------");
function plusFive(num) {
  return num + 5;
};
console.log(plusFive(0)); //5
console.log(plusFive(-2)); //3
console.log(plusFive(21)); //26
console.log("\n");

//threeOrSeven
console.log("threeOrSeven\n------------");
function threeOrSeven(num) {
  return (num % 3 === 0) || (num % 7 ===0);
};
console.log(threeOrSeven(3)); //true
console.log(threeOrSeven(42)); //true
console.log(threeOrSeven(8)); //false
console.log("\n");

//hello
console.log("hello\n-----");
function hello(str) {
  return ("Hello, " + str + ".");
};
console.log(hello("child")); //"Hello, child."
console.log(hello("Anthony")); //"Hello, Anthony."
console.log(hello("fsfvf\n")); //"Hello, fsfvf."

//yell
console.log("yell\n----");
function yell(str){
  return str.toUpperCase() + "!!!";
};
console.log(yell("I want to go to the store")); //"I WANT TO GO TO THE STORE!!!"
console.log(yell("Time to program")); //"TIME TO PROGRAM!!!"
console.log("\n");

//whisper
console.log("whisper\n-------");
function whisper(str) {
  return "..." + str.toLowerCase() + "...";
};
console.log(whisper("Hey Anthony")); //"...hey anthony..."
console.log(whisper("YEA! that was fun")); //"...yea! that was fun..."
console.log("\n");

//isSubstring
console.log("isSubstring\n-----------");
function isSubstring(searchString, subString) {
  var searchString = searchString.toLowerCase();
  var subString = subString.toLowerCase();
    return searchString.includes(subString);
};
console.log(isSubstring("The cat went to the store", "he cat went")); //true
console.log(isSubstring("Time to program", "time")); //true
console.log(isSubstring("Jump for joy", "joys")); //false
console.log("\n")

//echo
console.log("echo\n----");
function echo(str) {
  return str.toUpperCase() + (" ... ") + str + (" ... ") + str.toLowerCase();
};
console.log(echo("Mom!")); //"MOM! ... Mom! ... mom!"
console.log(echo("hey")); //"HEY ... hey ... hey"
console.log(echo("JUMp")); //"JUMP ... JUMp ... jump"
console.log("\n")

//isEven
console.log("isEven\n------");
function isEven(num) {
  return !isOdd(num);
  //return num % 2 === 0;
}
console.log(isEven(2)); //true
console.log(isEven(5)); //false
console.log(isEven(-10)); //true
console.log("\n")
