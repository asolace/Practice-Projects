/*Debug this
var cat = {
  sound : "Meowr",
  purr : function() {
    return (sound + "..." + sound);
  }
}

cat.purr() === "Meowr...Meowr";
*/
console.log("Debug this\n----------")
var cat = { sound: "Meowr" }
cat.purr = function() {
  return (this.sound + "..." + this.sound);
}
console.log(cat.purr() === "Meowr...Meowr");
console.log("\n");


//What's the output of this code?
console.log("Predict the Output\n------------------");
var dog1 = { name: 'Rover', age: 2 };
var dog2 = { name: 'Curie', age: 7 };
var dog3 = { name: 'Maxie', age: 15 };

var dogs = [dog1, dog2, dog3];

function howOld(array) {
  var result = [];

  for (var i = 0; i < array.length; i += 1) {
    var element = array[i];

    if (element.age < 7) {
      sentence = element.name + " is " + element.age + " years young.";
    } else {
      sentence = element.name + " is " + element.age + " years old.";
    }
    result.push(sentence);
  }
  return result;
}

console.log(howOld(dogs));
