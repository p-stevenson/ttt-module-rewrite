import {_incrementMoveCounter, _moveCounter} from "./gameLogic";
import {board} from "./gameBoard";

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

export {_checkWin, _checkP1Win, _checkP2Win};