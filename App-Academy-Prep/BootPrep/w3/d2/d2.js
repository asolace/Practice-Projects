//dog
console.log("dog\n---")
var dog = {
  age : 5,
  live : function() {
    setInterval(function() {
      this.age += 1;
      if (this.age < 15) {
        console.log("Dog lives another day at age " + this.age);
      } else {
       console.log("Dog has been dead for " + (this.age - 15) + " years");
      }
    }.bind(dog), 1000);
  }
}

//What will happen when we run this? Make a prediction, then test.
//Call over an instructor if you need help understanding what happened.
//Now fix it.
dog.live();
console.log("\n")


//annoyingDancer
console.log("annoyingDancer\n------------");
var annoyingDancer = {
  favoriteDances: ["salsa", "waltz", "hip-hop"],

  currentFav : 0,

  askQuestion : function() {
    var currentFavDance = this.favoriteDances[this.currentFav];
    console.log("Do you want to dance " + currentFavDance + " with me?");

    this.currentFav += 1;

    if (this.currentFav === this.favoriteDances.length) {
      this.currentFav = 0;
    }

    setTimeout(this.askQuestion.bind(annoyingDancer), 1000);
  }
}

//What will happen when we run this? Make a prediction, then test.
//Call over an instructor if you need help understanding what happened.
//Now fix it.
annoyingDancer.askQuestion();
console.log("\n");
