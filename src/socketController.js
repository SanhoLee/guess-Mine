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
let readyUser = [];

const chooseLeader = () => sockets[Math.floor(Math.random() * sockets.length)];

// Subsriber...
const socketController = (socket, io) => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);
  const superBroadcast = (event, data) => io.emit(event, data);
  const sendPlayerUpdate = () =>
    superBroadcast(events.playerUpdate, { sockets, TOTAL_TIME });
  const timeReduce = () => {
    timerTime += 1;
    const sendTime = TOTAL_TIME - timerTime;
    superBroadcast(events.timerRunning, { sendTime });
  };
  const resetReadyStatus = () => sockets.map((item) => (item.ready = false));
  const getReadyUser = () => sockets.filter((item) => item.ready === true);
  const leaderStandby = () =>
    io.to(leader.id).emit(events.leaderNotif, { word, leader });

  const startGameControl = () => {
    // setTimeout(() => {
    //   clearInterval(timerInterval);
    //   superBroadcast(events.gameStarted);
    //   timeout = setTimeout(endGame, 1000 * TOTAL_TIME);
    //   timerTime = 0;
    //   timerInterval = setInterval(timeReduce, 1000);
    // }, 5000);
  };

  const startGame = () => {
    if (sockets.length > 1) {
      if (inProgress === false) {
        inProgress = true;
        readyUser = getReadyUser();
        // check ready status for all User.
        if (sockets.length - 1 === readyUser.length) {
          superBroadcast(events.gameStarting);
          // To do :  activateStart() function for Leader
          io.to(leader.id).emit(events.readyCompleted);
          // startGameControl();
        }
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
    resetReadyStatus();
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
    sockets.push({
      id: socket.id,
      points: 0,
      nickname: socket.nickname,
      ready: false,
    });
    broadcast(events.newUser, { nickname });
    sendPlayerUpdate();
    if (sockets.length > 1) {
      word = chooseWord();
      leader = chooseLeader();
      leaderStandby();
    }
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
  socket.on(events.readyBtn, ({ readyClass }) => {
    sockets = sockets.map((item) => {
      if (item.id === socket.id) {
        if (readyClass === "ready") {
          item.ready = true;
        } else {
          item.ready = false;
        }
      }
      return item;
    });
    sendPlayerUpdate();

    // 여기서, 레디 액션에 따라서 스타트 버튼을 바꿔주는 기능을 추가하는게 좋을 것 같음
    // 즉, io.to를 이용할 것, startgame에 있는걸 여길로내려서 활용할 방법을 찾아....

    console.log(getReadyUser().length);
    startGame();
  });
};

export default socketController;
// It is on Server.js
