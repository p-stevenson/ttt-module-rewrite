import {board, updateBoard} from "./gameBoard";
import {playerList} from "./createPlayer";
import {_render} from "./renderGame";

let _moveCounter = 0;

let _p1WinState = [
  // Rows
  [['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' ']],
  [[' ', ' ', ' '], ['X', 'X', 'X'], [' ', ' ', ' ']],
  [[' ', ' ', ' '], [' ', ' ', ' '], ['X', 'X', 'X']],

  // Columns
  [['X', ' ', ' '], ['X', ' ', ' '], ['X', ' ', ' ']],
  [[' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' ']],
  [[' ', ' ', 'X'], [' ', ' ', 'X'], [' ', ' ', 'X']],

  // Diagonals
  [['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X']],
  [[' ', ' ', 'X'], [' ', 'X', ' '], ['X', ' ', ' ']]
];

let _p2WinState = [
  // Rows
  [['O', 'O', 'O'], [' ', ' ', ' '], [' ', ' ', ' ']],
  [[' ', ' ', ' '], ['O', 'O', 'O'], [' ', ' ', ' ']],
  [[' ', ' ', ' '], [' ', ' ', ' '], ['O', 'O', 'O']],

  // Columns
  [['O', ' ', ' '], ['O', ' ', ' '], ['O', ' ', ' ']],
  [[' ', 'O', ' '], [' ', 'O', ' '], [' ', 'O', ' ']],
  [[' ', ' ', 'O'], [' ', ' ', 'O'], [' ', ' ', 'O']],

  // Diagonals
  [['O', ' ', ' '], [' ', 'O', ' '], [' ', ' ', 'O']],
  [[' ', ' ', 'O'], [' ', 'O', ' '], ['O', ' ', ' ']]
];

let makeMove = (row, col) => {
  let index;
  _moveCounter % 2 === 0 ? index = 0 : index = 1;
  _checkPosAvail(row, col, index) ? _checkWin() : _checkTie();
};

let _checkPosAvail = (row, col, index) => {
  if (board[row][col] === ' ') {
    updateBoard(row, col, playerList[index].playerSymbol);
    _render();
    return true
  } else {
    console.log('This square is already in use, pick again.');
    return false
  }
};
let _checkTie = () => {
  if (_moveCounter === 9) alert("It's a tie");
};

let _checkWin = () => {
  let _sanatizedBoard;
  _incrementMoveCounter();
  if ((_moveCounter >= 5) && (_moveCounter % 2 !== 0)) {
    _sanatizedBoard = JSON.stringify(board).replaceAll(/(?!X)[A-Z]/gm, ' ');
    _checkP1Win(_sanatizedBoard);
  } else if ((_moveCounter >= 5) && (_moveCounter % 2 === 0)) {
    _sanatizedBoard = JSON.stringify(board).replaceAll(/(?!O)[A-Z]/gm, ' ');
    _checkP2Win(_sanatizedBoard);
  }
};

let _checkP1Win = (_sanatizedBoard) => {
  _p1WinState.forEach((element) => {
    if (JSON.stringify(element) === _sanatizedBoard) {
      return alert(`P1 Wins`);
    }
  });
};

let _checkP2Win = (_sanatizedBoard) => {
  _p2WinState.forEach((element) => {
    if (JSON.stringify(element) === _sanatizedBoard) {
      return alert(`P2 Wins`);
    }
  });
};

let _incrementMoveCounter = () => {
  _moveCounter += 1;
};

export {makeMove};