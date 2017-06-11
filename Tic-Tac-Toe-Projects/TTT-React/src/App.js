import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import refresh from './refresh.png';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Title: "Tic-Tac-Toe: ",
      PLAYER_ONE_SYMBOL: "X",
      PLAYER_TWO_SYMBOL: "O",
      currentTurn: "X",
      board: [
        "","","","","","","","",""
      ],
      winner: null,
    }
  }

  handleClick(index) {
    if (this.state.board[index] === "" && !this.state.winner) {
      this.state.board[index] = this.state.currentTurn
      this.setState({
        board: this.state.board,
        currentTurn: this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL ? this.state.PLAYER_TWO_SYMBOL : this.state.PLAYER_ONE_SYMBOL,
        winner: this.checkForWinner(),
      })
    }
  }

  checkForWinner() {
    let currBoard = this.state.board
    let winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for (let i = 0; i < winningCombos.length; i++) {
      const [a,b,c] = winningCombos[i]
      if (currBoard[a] && currBoard[a] === currBoard[b] && currBoard[a] === currBoard[c]) {
        return currBoard[a]
      }
    }
    return null
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img onClick={() => this.setState({Title: this.state.Title + 'XO '})} src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.Title}</h2> 
        </div>

        <div className="app-counter">
          {this.state.winner ? <h1>{`The winner is ${this.state.winner}`}</h1> : null}
        </div>

        <div className="board">
          {this.state.board.map((cell, index) => {
            return <div onClick={() => this.handleClick(index)} className="square">{cell}</div>;
            })}
        </div>

        <div className="reset-game">
            <img src={refresh} onClick={() => this.setState({
              board: ["","","","","","","","",""],
              currentTurn: this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL ? this.state.PLAYER_TWO_SYMBOL : this.state.PLAYER_ONE_SYMBOL,
              winner: null
            })} />
        </div>

      </div>
    );
  }
}

export default App;
