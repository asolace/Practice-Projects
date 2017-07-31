// Attack needs 2 param
// Utilize the levelUp(), revive()
// Display availMoves()
// Fix Potion function so the max potion it can use is it's max hp

const chalk = require('chalk');
let Pokemon = require("./pokemon");
let electricTypeMoves = require('./moves.js').electricTypeMoves,
    leafTypeMoves = require('./moves.js').leafTypeMoves,
    rockTypeMoves = require('./moves.js').rockTypeMoves;
let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Battle
function Battle(pokemon1, pokemon2, turn) {
  this.pokemon1 = pokemon1,
  this.pokemon2 = pokemon2,
  this.turn = true
}

// fight
Battle.prototype.fight = function () { //add argument (move)
  this.turn ?
  this.pokemon1.attack(this.pokemon2) : //add move argument
  this.pokemon2.attack(this.pokemon1)   ///add move argument
}

// potion
Battle.prototype.potion = function () {
  let currPoke = this.turn ? this.pokemon1 : this.pokemon2
  currPoke.hp += 10;

  console.log(`
    Used potion on ${currPoke.name} ( hp: ${currPoke.hp} )!
  `)
};

// run
Battle.prototype.run = function () {
  let currPoke = this.turn ? this.pokemon1 : this.pokemon2
  currPoke.hp = 0;

  console.log(`
    ${currPoke.name} ran ( hp: ${currPoke.hp} )!
  `)

};

// won
Battle.prototype.won = function () {
  return (this.pokemon1.faint() || this.pokemon2.faint()) ? true : false;
};

// results
Battle.prototype.results = function () {
  let winner = this.pokemon1.hp > this.pokemon2.hp ? this.pokemon1 : this.pokemon2

  console.log(chalk.green('~!Winner!~ ') + winner.name + chalk.green(' ~!Winner!~'));
  console.log(winner.call(),'\n');
};

// promptUser
Battle.prototype.promptUser = function () {
  let currPoke = this.turn ? this.pokemon1 : this.pokemon2

	console.log(`What should ${currPoke.name} do?`);

	rl.question(`${chalk.red('#attack')}, ${chalk.blue('#potion')}, or ${chalk.yellow('#run')}: `, function (userInput) {
		this.makeMove(userInput);
	}.bind(this));

};

// makeMove
Battle.prototype.makeMove = function (choice) {
	if (choice === "attack") {
		this.fight(); //Change this to this.moveName();
	} else if (choice === "potion") {
		this.potion();
	} else if (choice === "run") {
		this.run();
	}

  if (this.won()) {
    this.results();
    rl.close();
  } else {
    this.turn = !this.turn;
    this.promptUser();
  }
};

//Function to choose moves
/*
Battle.prototype.moveName = function () {
  let currPoke = this.turn ? this.pokemon1 : this.pokemon2
  currPoke.availableMoves().forEach(x => console.log(x.name, x.damage))

	rl.question(`Which move should ${currPoke.name} use?`, function (move) {
		this.fight(move);
	}.bind(this));
}
*/

Battle.prototype.play = function () {
  this.promptUser();
};

let pikachu = new Pokemon('PIKACHU', 'Electric', electricTypeMoves, 10);
let bulbasaur = new Pokemon('bulbasaur', 'leaf', leafTypeMoves, 11);
let onyx = new Pokemon('onyx', 'rock', rockTypeMoves);

let battle = new Battle(pikachu, bulbasaur);
battle.play();

// // Pikachu
// console.log(`Name: ${pikachu.name} \t
//   Type: ${pikachu.type} \t
//   Level: ${pikachu.level} \t
//   HP: ${pikachu.hp} \t
//   Moves: `),pikachu.dispMoves();
//   console.log('\n');
// // Bulbasaur
// console.log(`Name: ${bulbasaur.name} \t
//   Type: ${bulbasaur.type} \t
//   Level: ${bulbasaur.level} \t
//   HP: ${bulbasaur.hp} \t
//   Moves: `),bulbasaur.dispMoves();
//   console.log('\n');
// // Onyx
// console.log(`Name: ${onyx.name} \t
//   Type: ${onyx.type} \t
//   Level: ${onyx.level} \t
//   HP: ${onyx.hp} \t
//   Moves: `),onyx.dispMoves();
//   console.log('\n');
