var cookieMonster = {
  name: "Fred",
  hair: "blue",
  favoriteFoods: ["cookies"],
  goodFoods: ["pizza", "skittles"],
  badFoods: ["water", "banana"],
  hatedFoods: ["spinach"]
};

cookieMonster.eat = function(food){
  var score = 0;
  for (var i =0; i < food.length; i++){
    if (this.favoriteFoods.includes(food[i])){
      score += 2;
    } else if (this.goodFoods.includes(food[i])){
      score += 1;
    } else if (this.badFoods.includes(food[i])){
      score -= 1;
    } else if (this.hatedFoods.includes(food[i])){
      score -= 2;
    }
  }
  return score;
};

cookieMonster.isAlrightMeal = function(food){
  if ((this.eat(food) <= 1) && (this.eat(food) >= -1)){return true}
  else {return false}
}


/********/
module.exports = cookieMonster; // Don't touch this line
