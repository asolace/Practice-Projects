let tiles = document.getElementsByClassName("tile");
let buttons = document.getElementsByClassName("button");

let state = [0,0,0,0,0,0,0,0,0];
let game = true;

let visible = false;

let human = false;
let computer = true;

let human_val = -1;
let comp_val = 1;

let currentPlayer = human;

// Possible ways of winning
let winMatrix = [ 
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
]

let reset = () => {
	for(let x = 0; x < 9; x++)
	{
		tiles[x].style.background = "#fff";
		tiles[x].innerHTML = "";
		state[x] = 0;
	}

	game = true;
}

let toggle = () => {
	for(let x = 0; x < 9; x++)
	{
		tiles[x].style.fontSize = visible ? "0px" : "1.5vh";
		document.getElementsById("toggle").innerHTML = visible ? "Show Values" : "Hide Values";
		visible = !visible;		
	}
}

let claim = (clicked) => {
	if(!game)
		return;

	for(var x = 0; x < 9; x++) 
	{
		if(tiles[x] == clicked && state[x] == 0)
		{
			set(x, currentPlayer);
		}
	}
}

let set = (index, player) => {
	if(!game)
		return;

	if(state[index] == 0)
	{
		tiles[index].style.background = player == human ? "#22f" : "#f22"
		state[index] = player == human ? human_val : comp_val;
		currentPlayer = !currentPlayer;
		aiTurn(state, 0, currentPlayer, false);

		if (checkWin(state, player) || checkFull(state))
		{
			for(var x = 0; x < 9; x++)
			{
				tiles[x].innerHTML = "";
				game = false;
			}
		}
	}
}

let checkWin = (board, player) => {
	let value = player == human ? human_val : comp_val;

	for(let x = 0; x < 8; x++)
	{
		let win = true;

		for(let y = 0; y < 3; y++)
		{
			if(board[winMatrix[x][y]] != value)
			{
				win = false;
				break;
			}
		}

		if(win)
			return true;
	}

	return false;
}

let checkFull = (board) => {
	for(var x = 0; x < 9; x++)
	{
		if(board[x] == 0)
			return false;
	}
	return true;
}


// Minimax Algorithm
let aiTurn = (board, depth, player, turn) => {
	if(checkWin(board, !player))
		return -10 + depth;

	if(checkFull(board))
		return 0;

	let value = player == human ? human_val : comp_val;


	// This checks all possible solution (the AI)
	let max = -Infinity;
	let index = 0;

	for(var x = 0; x < 9; x++)
	{
		if(depth == 0)
		{
			tiles[x].innerHTML = "";
		}

		if(board[x] == 0)
		{
			let newBoard = board.slice();
			newBoard[x] = value;

			var moveVal = -aiTurn(newBoard, depth + 1, !player, false);

			if (depth == 0) 
			{
				tiles[x].innerHTML = moveVal;
			}

			if(moveVal > max)
			{
				max = moveVal;
				index = x;
			}
		}
	}

	if(turn)
		set(index, player)

	return max;
}