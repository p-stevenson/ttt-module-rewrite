import {p1Button, p2Button, boardSquares, resetButton} from "./DOM_Cache"
import {addPlayer} from "./createPlayer";
import {makeMove} from "./gameLogic";

export const listeners = {
  p1Button: function () {
    p1Button.addEventListener('click', () => {
      addPlayer(1);
    });
  },
  p2Button: function () {
    p2Button.addEventListener('click', () => {
      addPlayer(2);
    });
  },
  boardSquares: function () {
    boardSquares.forEach((item) => {
      item.addEventListener('click', () => {
        makeMove(item.getAttribute('data-row'), item.getAttribute('data-column'));
      });
    });
  },
  resetButton: function () {
    resetButton.addEventListener('click', () => {
      location.reload();
    });
  }
};