let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let updateBoard = (row, col, playerSymbol) => {
  board[row].splice(col, 1, playerSymbol);
};

export {board, updateBoard};