import {board} from "./gameBoard";

let _render = () => {
  let counter = 0
  board.forEach((row) => {
    row.forEach((element) => {
      document.getElementById(`#${counter}`).textContent = element;
      counter += 1;
    });
  });
};

export {_render}