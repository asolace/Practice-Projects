let tiles = document.getElementsByClassName('tile')
let status = document.getElementById('status')
let buttons = document.getElementsByClassName('button')
let visible = false
let state = Array(9).fill(0)
let game = true
const WinCombo = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
]

let human = true
let computer = false
const HumanVal = -1
const CompVal = 1

let currentPlayer = human

let reset = () => {
  for (var i = 0; i < tiles.length; i++) {
    tiles[i].style.background = "#fff"
    tiles[i].innerHTML = ""
  }
	$('#status').empty()
  state.fill(0)
  game = true
}

let claim = clicked => {
  if (!game) return;
  for (var i = 0; i < 9; i++) {
    if (tiles[i] == clicked && state[i] == 0) set(i, currentPlayer)
  }
}

let set = (index, player) => {
  if (!game) return;
  if (state[index] == 0) {
    if (player == human) {
      tiles[index].style.background = "#87cefa"
      tiles[index].innerHTML = "X"
    } else {
      tiles[index].style.background = "#f08080"
      tiles[index].innerHTML = "O"
    }
		// aiTurn(state, 0, currentPlayer, false);
    state[index] = player == human ? HumanVal : CompVal
		currentPlayer = !currentPlayer
		if (checkWin(state, player)) {
			let xo = currentPlayer == true ? "O" : "X"
			$('#status').append(document.createTextNode(xo + ' is the Winner!'))
			game = false
		} else if (checkFull(state)) {
			$('#status').append(document.createTextNode('Draw'))
			game = false
		}
  }
}

let checkWin = (board, player) => {
  let value = player == human ? HumanVal : CompVal
  for (var i = 0; i < 8; i++) {
    let win = true
    for (var j = 0; j < 3; j++) {
      if (board[WinCombo[i][j]] != value) {
        win = false
        break
      }
    }
    if (win) return true
  }
	return false
}

let checkFull = board => {
  if (state.includes(0)) return false
	return true
}

// Minimax Algoritum
let aiTurn = (board, depth, player, turn) => {
  if (checkWin(board, !player)) return -10 + depth
  if (checkFull(board)) return 0

  let value = player == human ? HumanVal : CompVal
  let max = -Infinity
  let index = 0

  for (var i = 0; i < 9; i++) {
    if (board[i] == 0) {
      let newBoard = board.slice()
      newBoard[i] = value

      let moveVal = -aiTurn(newBoard, depth + 1, !player, false)

			// Shows Value
			// if (depth == 0) tiles[i].innerHTML = moveVal

      if (moveVal > max) {
        max = moveVal
        index = i
      }
    }
  }
  if (turn) set(index, player)
  return max
}
