import {
  disableCanvas,
  hideControls,
  enableCanvas,
  showControls,
  resetCanvas,
} from "./paint";
import { disableChat, enableChat } from "./chat";

const board = document.getElementById("jsPBoard");
const notifs = document.getElementById("jsNotifs");

const setNotif = (text) => {
  notifs.innerText = "";
  notifs.innerText = text;
};

const addPlayers = (players) => {
  board.innerHTML = "";
  players.forEach((player) => {
    const playerElement = document.createElement("span");
    playerElement.innerText = `${player.nickname} : ${player.points}`;
    board.appendChild(playerElement);
  });
};

export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);
export const handleGameStarted = () => {
  setNotif("");
  disableCanvas();
  hideControls();
  enableChat();
};
export const handleLeaderNotif = ({ word }) => {
  // This is only for leader Browser.
  setNotif("");
  enableCanvas();
  showControls();
  disableChat();
  notifs.innerText = `You are Leader, Paint : ${word}`;
};

export const handleGameEnded = () => {
  setNotif("Game Ended ! ");
  disableCanvas();
  hideControls();
  resetCanvas();
};

export const handleGameStarting = () => setNotif("Game will be starting soon.");
