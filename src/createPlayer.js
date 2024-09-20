let playerList = [];
let _createPlayer = (playerNumber) => {
  let name = prompt('Enter your name.');
  let playerSymbol = playerNumber === 1 ? 'X' : 'O';
  let score = 0;
  return {name, playerNumber, playerSymbol, score};
};

let addPlayer = (playerNumber) => {
  playerList.push(_createPlayer(playerNumber))
};

export {addPlayer, playerList};
