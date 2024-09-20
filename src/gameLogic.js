import {board, updateBoard} from "./gameBoard";
import {playerList} from "./createPlayer";
import {_render} from "./renderGame";
import {_checkWin} from "./winLogic";

let _moveCounter = 0;

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

let _incrementMoveCounter = () => {
  _moveCounter += 1;
};

export {makeMove, _incrementMoveCounter, _moveCounter};