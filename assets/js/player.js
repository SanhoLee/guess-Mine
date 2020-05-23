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
const statusTime = document.getElementById("jsStatusTime");

const setNotif = (text) => {
  notifs.innerText = " ";
  notifs.innerText = text;
};

const setTimerTime = (text) => {
  statusTime.innerText = "";
  statusTime.innerText = text;
};

const addPlayers = (players) => {
  board.innerHTML = "";
  players.forEach((player) => {
    const playerElement = document.createElement("span");
    playerElement.innerText = `${player.nickname} 🤑 ${player.points}`;
    board.appendChild(playerElement);
  });
};

export const handlePlayerUpdate = ({ sockets }) => {
  if (sockets.length === 1) {
    setNotif("Waiting Painters 👨🏻‍🎨👩🏻‍🎨 ");
  }
  hideControls();
  addPlayers(sockets);
};
export const handleGameStarted = () => {
  setNotif("Guess What ? ");
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

export const handleGameEnded = ({ TOTAL_TIME }) => {
  setNotif("Game Ended ! ");
  disableCanvas();
  hideControls();
  resetCanvas();
  setTimerTime(TOTAL_TIME);
};

export const handleGameStarting = () => setNotif("Game will be starting soon.");

export const handleTimerRunning = ({ sendTime }) => {
  setTimerTime(sendTime);
};
