import './style.css';
import {_render} from "./renderGame";
import {listeners} from "./events";

listeners.p1Button();
listeners.p2Button();
listeners.boardSquares();
listeners.resetButton();

_render();