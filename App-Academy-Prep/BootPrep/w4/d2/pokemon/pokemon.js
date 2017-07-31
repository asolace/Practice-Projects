let electricTypeMoves = require('./moves.js').electricTypeMoves,
    leafTypeMoves = require('./moves.js').leafTypeMoves,
    rockTypeMoves = require('./moves.js').rockTypeMoves;
const chalk = require('chalk');
// Pokemon
function Pokemon(name, type, moves, level) {
  this.name = name.toUpperCase();
  this.type = type.slice(0, 1).toUpperCase() + type.slice(1);
  this.level = level || 5;
  this.hp = Math.floor(this.level * 2.25);
  this.moves = moves;
}

// levelUp
Pokemon.prototype.levelUp = function (n) {
  this.level += n;
  this.revive();
  console.log(`${this.name} has leveled up to: lvl ${this.level}!\n\tHP: ${this.hp}`);
  return this;
}

// faint
Pokemon.prototype.faint = function () {
  return this.hp <= 0 ? true : false;
}

// revive
Pokemon.prototype.revive = function () {
  this.hp = Math.floor(this.level * 2.25);
  return this;
}

// call
Pokemon.prototype.call = function () {
  let letters = this.name.split("");
  let vowel = "AEIOU", j = 0;
  for (let i = 0; i < letters.length; i++) {
    if (vowel.includes(letters[i])) {
      j++;
      if (j === 2) {
        let nick = this.name.slice(0, i + 1);
        return (`${nick}-${nick} ${this.name}`);
      }
    }
  }
  return (`${this.name}-${this.name}`);
};

// displaying moves #not required in assignment
Pokemon.prototype.dispMoves = function () {
  for (let i = 0; i < this.moves.length; i++) {
    console.log(`\t${this.moves[i].name} (${this.moves[i].damage})`);
  }
}

// availableMoves
Pokemon.prototype.availableMoves = function () {
  let frac = this.level / 50 * this.moves.length;
  let availMoves = this.moves.slice(0, frac);
  return availMoves.length > 0 ? availMoves : this.moves.slice(0, 1);
};

// attack
Pokemon.prototype.attack = function (opponent, moveName) {
  let availMoves = this.availableMoves();
  if (typeof moveName === "undefined") {
    moveName = availMoves[availMoves.length - 1].name;
  }
  availMoves.forEach( (avaMove) =>
    avaMove.name === moveName ?
    opponent.hp -= avaMove.damage :
    this.printAttack(opponent, avaMove));
};

// printAttack
Pokemon.prototype.printAttack = function (opponent, moves) {
  console.log(`
    ${this.name} attacked with ${moves.name}
    Damage to ${opponent.name}: ( -${moves.damage} )
    ${this.name} hp: ${this.hp}
    ${opponent.name} hp: ${opponent.hp}
    `);
}




// ~~~Tests~~~
// add Pokemon
/******************************************/
// let pikachu = new Pokemon('PIKACHU', 'Electric', electricTypeMoves, 10);
// let bulbasaur = new Pokemon('bulbasaur', 'leaf', leafTypeMoves, 11);
// let onyx = new Pokemon('onyx', 'rock', rockTypeMoves);
/******************************************/

// Stats
/******************************************/
// console.log(chalk.yellow(`Name: ${pikachu.name} \t
//   Type: ${pikachu.type} \t
//   Level: ${pikachu.level} \t
//   HP: ${pikachu.hp} \t
//   Moves: `)),pikachu.dispMoves();
//   console.log('\n');
// console.log(chalk.green(`Name: ${bulbasaur.name} \t
//   Type: ${bulbasaur.type} \t
//   Level: ${bulbasaur.level} \t
//   HP: ${bulbasaur.hp} \t
//   Moves: `)),bulbasaur.dispMoves();
//   console.log('\n');
// console.log(chalk.gray(`Name: ${onyx.name} \t
//   Type: ${onyx.type} \t
//   Level: ${onyx.level} \t
//   HP: ${onyx.hp} \t
//   Moves: `)),onyx.dispMoves();
//   console.log('\n');
/******************************************/

// Calls
/******************************************/
// console.log(pikachu.call()) // "PIKA-PIKA"
// console.log(bulbasaur.call()) // "BULBA-BULBA"
// console.log(onyx.call()) // "ONYX-ONYX"
/******************************************/

// Available Moves
/******************************************/
// pikachu.levelUp(10)
// console.log(pikachu.availableMoves());
// console.log(bulbasaur.availableMoves());
// console.log(onyx.availableMoves());
/******************************************/

// Attacks
/******************************************/
// pikachu.levelUp()
// pikachu.attack(bulbasaur, "Thunder Shock");
// PIKACHU attacked with Thunder Shock!
// Damage to BULBASAUR: -4
// PIKACHU hp: 24
// BULBASAUR hp: 20
// pikachu.attack(onyx);
// PIKACHU attacked with Thunder Shock!
// Damage to ONYX: -4
// PIKACHU hp: 24
// ONYX hp: 7
/******************************************/

// Other
/******************************************/
// pikachu.hp -= 5; // Pikachu got attacked!
// pikachu.faint() //false
// pikachu.revive()
// pikachu.levelUp(1)
/******************************************/



module.exports = Pokemon;
