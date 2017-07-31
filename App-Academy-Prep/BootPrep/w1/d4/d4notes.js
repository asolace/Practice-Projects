function printObj(obj){
  for(var k in obj){
    console.log("Current log: ", obj) //note the , instead of + for concat
    console.log("My value is " + obj[k]);
  }
}

var person = {
  name: "Fred",
  age: 29
}
var person2 = {
  height: 12,
  name: "Dave",
  weight: 24
}
// printObj(person)
printObj(person2)
