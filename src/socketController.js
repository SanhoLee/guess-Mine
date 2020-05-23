import events from "./events";
import { chooseWord } from "./word";

const TOTAL_TIME = 20;

let sockets = [];
let inProgress = false;
let word = null;
let leader = null;
let timeout = null;
let timerTime = 0;
let timerInterval = null;

const chooseLeader = () => sockets[Math.floor(Math.random() * sockets.length)];

// Subsriber...
const socketController = (socket, io) => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);
  const superBroadcast = (event, data) => io.emit(event, data);
  const sendPlayerUpdate = () =>
    superBroadcast(events.playerUpdate, { sockets });
  const timeReduce = () => {
    timerTime += 1;
    const sendTime = TOTAL_TIME - timerTime;
    superBroadcast(events.timerRunning, { sendTime });
  };
  const startGame = () => {
    if (sockets.length > 1) {
      if (inProgress === false) {
        inProgress = true;
        leader = chooseLeader();
        word = chooseWord();
        superBroadcast(events.gameStarting);
        setTimeout(() => {
          superBroadcast(events.gameStarted);
          io.to(leader.id).emit(events.leaderNotif, { word });
          timeout = setTimeout(endGame, 1000 * TOTAL_TIME);
          // timeout will be has specific id for setTimeout.
          // it could be deleted by clearTimeout(ThatId) method.
          timerTime = 0;
          timerInterval = setInterval(timeReduce, 1000);
        }, 5000);
      }
    }
  };

  const endGame = () => {
    inProgress = false;
    superBroadcast(events.gameEnded, { TOTAL_TIME });
    if (timeout != null) {
      clearTimeout(timeout);
    }
    if (timerInterval != null) {
      clearInterval(timerInterval);
      timerTime = 0;
    }
    setTimeout(startGame, 2000);
  };

  const addPoints = (id) => {
    sockets = sockets.map((socket) => {
      if (socket.id === id) {
        socket.points += 10;
      }
      // return is needed when you use map method for array.
      return socket;
    });
    sendPlayerUpdate();
    endGame();
  };

  socket.on(events.setNickname, ({ nickname }) => {
    socket.nickname = nickname;
    sockets.push({ id: socket.id, points: 0, nickname: socket.nickname });
    broadcast(events.newUser, { nickname });
    sendPlayerUpdate();
    startGame();
  });
  socket.on(events.disconnect, () => {
    sockets = sockets.filter((potato) => potato.id != socket.id);
    if (sockets.length === 1) {
      endGame();
    } else if (leader) {
      if (leader.id === socket.id) {
        // if leader is left, endgame
        endGame();
      }
    }
    broadcast(events.disconnected, { nickname: socket.nickname });
    sendPlayerUpdate();
  });
  socket.on(events.sendMsg, ({ message }) => {
    // Check whether the word is correct or not.
    if (message === word) {
      superBroadcast(events.newMsg, {
        message: `Winner is ${socket.nickname}, The word was..${word}`,
        nickname: "Bot",
      });
      addPoints(socket.id);
    } else {
      broadcast(events.newMsg, { message, nickname: socket.nickname });
    }
  });
  socket.on(events.beginPath, ({ x, y }) => {
    broadcast(events.beganPath, { x, y });
  });
  socket.on(events.strokePath, ({ x, y, color }) => {
    broadcast(events.strokedPath, { x, y, color });
  });
  socket.on(events.fill, ({ color }) => {
    broadcast(events.filled, { color });
  });
};

export default socketController;
// It is on Server.js
