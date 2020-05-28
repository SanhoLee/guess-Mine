import { disableChat, enableChat } from "./chat";
import {
  disableCanvas,
  enableCanvas,
  hideControls,
  resetCanvas,
  showControls,
} from "./paint";
import { getSocket } from "./sockets";

const board = document.getElementById("jsPBoard");
const notifs = document.getElementById("jsNotifs");
const statusTime = document.getElementById("jsStatusTime");
const playerNumber = document.getElementById("jsPlayerNumber");
const readyBtn = document.getElementById("jsReadyBtn");

const ON_READY = "ready";
const NOT_READY = "notReady";
const START = "start";

const setNotif = (text) => {
  notifs.innerText = " ";
  notifs.innerText = text;
};

const setTimerTime = (text) => {
  statusTime.innerText = "";
  statusTime.innerText = text;
};

const setPlayerNumber = (sockets) => {
  playerNumber.innerText = "";
  playerNumber.innerText = String(sockets.length);
};

const addPlayers = (players) => {
  board.innerHTML = "";
  players.forEach((player) => {
    const playerElement = document.createElement("div");
    playerElement.className = "player__element";
    const pointElement = document.createElement("span");
    const nicknameElement = document.createElement("span");
    nicknameElement.innerText = `${player.nickname}`;
    pointElement.innerText = `👑  ${player.points}`;
    playerElement.appendChild(nicknameElement);
    playerElement.appendChild(pointElement);
    board.appendChild(playerElement);
  });
};

export const handlePlayerUpdate = ({ sockets, TOTAL_TIME }) => {
  hideControls();
  addPlayers(sockets);
  setPlayerNumber(sockets);
  if (sockets.length === 1) {
    setNotif("Waiting Painters 👨🏻‍🎨👩🏻‍🎨 ");
    disableChat();
  }
  setTimerTime(TOTAL_TIME);
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
  disableChat();
  hideControls();
  resetCanvas();
  setTimerTime(TOTAL_TIME);
};

export const handleGameStarting = () => setNotif("Game will be starting soon.");

export const handleTimerRunning = ({ sendTime }) => {
  setTimerTime(sendTime);
};

export const sendReadyBtn = (readyStatus) => {
  console.log(readyStatus);
};

const sendReadyStatus = (readyClass) => {
  getSocket().emit(window.events.readyBtn, { readyClass });
};

const readyStatus = (classList) => {
  const len = classList.length;
  const targetClass = classList[len - 1];
  if (targetClass === NOT_READY) {
    readyBtn.innerText = "Perfect !";
    classList.remove(NOT_READY);
    classList.add(ON_READY);
  } else if (targetClass === ON_READY) {
    readyBtn.innerText = "Click to Ready !";
    classList.remove(ON_READY);
    classList.add(NOT_READY);
  }
  const currentReadyClass = classList[len - 1];
  sendReadyStatus(currentReadyClass);
};

const handleReadyBtn = (event) => {
  const {
    target: { classList },
  } = event;
  readyStatus(classList);

  // const readyStaus = null;
};

if (readyBtn) {
  readyBtn.addEventListener("click", handleReadyBtn);
}
