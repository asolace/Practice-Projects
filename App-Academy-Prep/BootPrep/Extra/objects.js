var object1 = new Object();
    object1.element = 'water';
    object1.type = 'gold';
    object1.range = 5;

var object2 = {
    element: 'fire',
    type: 'purple',
    range: 3
};

//Object functions ADVANCED

function Bicycle(cadence, speed, gear, tirePressure) {
  this.cadence = cadence;
  this.speed = speed;
  this.gear = gear;
  this.tirePressure = tirePressure;
  this.inflateTires = function(num) {
    this.tirePressure += num;
  }
}

//Calling function
var bike1 = new Bicycle (50, 20, 4, 25);
bike1.inflateTires(20);
console.log(bike1.tirePressure);


function bikeMechanic(name) {
  this.name = name;
}

//var mike is now a new bike mecanic with the name Mike
var mike = new bikeMechanic("Mike");
//I want mike to have access to the inflateTires property
mike.inflateTires = bike1.inflateTires;
console.log(mike.inflateTires.call(bike1.inflateTires(3)));
console.log(bike1.tirePressure);
