import {
  disableCanvas,
  hideControls,
  enableCanvas,
  showControls,
  resetCanvas,
} from "./paint";

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
};
export const handleLeaderNotif = ({ word }) => {
  setNotif("");
  enableCanvas();
  showControls();
  notifs.innerText = `You are Leader, Paint : ${word}`;
};

export const handleGameEnded = () => {
  setNotif("Game Ended ! ");
  disableCanvas();
  hideControls();
  resetCanvas();
};
