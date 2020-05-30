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
const GAMING = "gaming";

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

const toReady = (classList) => {
  readyBtn.innerText = "ON READY 🔒";
  classList.remove(NOT_READY);
  classList.add(ON_READY);
};

const toNotReady = (classList) => {
  readyBtn.innerText = "NOT READY 🔓";
  classList.remove(ON_READY);
  classList.add(NOT_READY);
};

const toStart = (classList) => {
  readyBtn.innerText = " START🕹 ";
  classList.remove(NOT_READY);
  classList.add(START);
  readyBtn.style.backgroundColor = "#bbff00";
};

const toGame = (classList) => {
  readyBtn.innerText = " Game-ing 🖼 ";
  classList.remove(START);
  classList.add(GAMING);
  readyBtn.style.backgroundColor = "red";
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
  const readyUser = sockets.filter((user) => user.ready === true);
};
export const handleGameStarted = () => {
  setNotif("Guess What ? ");
  disableCanvas();
  hideControls();
  enableChat();
};
export const handleLeaderNotif = ({ word, leader }) => {
  // This is only for leader Browser.
  toStart(readyBtn.classList);
  // readyBtn.removeEventListener("click", handleReadyBtn);
  setNotif("");
  notifs.innerText = `${leader.nickname} are Leader, Paint : ${word}`;
};

export const handleGameEnded = ({ TOTAL_TIME }) => {
  setNotif("Game Ended ! ");
  disableCanvas();
  disableChat();
  hideControls();
  resetCanvas();
  setTimerTime(TOTAL_TIME);
  toNotReady(readyBtn.classList);
};

export const handleGameStarting = () => setNotif("Game will be starting soon.");

export const handleTimerRunning = ({ sendTime }) => {
  setTimerTime(sendTime);
};

const sendReadyStatus = (readyClass) => {
  getSocket().emit(window.events.readyBtn, { readyClass });
};

const readyStatus = (classList) => {
  const len = classList.length;
  let targetClass = classList[len - 1];
  if (targetClass === START) {
    toGame(classList);
  } else if (targetClass === GAMING) {
    toStart(classList);
  } else {
    if (targetClass === NOT_READY) {
      toReady(classList);
    } else if (targetClass === ON_READY) {
      toNotReady(classList);
    }
  }
  targetClass = classList[len - 1];
  sendReadyStatus(targetClass);
};

const handleReadyBtn = (event) => {
  const {
    target: { classList },
  } = event;
  readyStatus(classList);
};

if (readyBtn) {
  readyBtn.addEventListener("click", handleReadyBtn);
}
