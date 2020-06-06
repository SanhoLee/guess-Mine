import { handleNewUser, handleDisconnected } from "./notifications";
import { handleNewMessage } from "./chat";
import { handleBeganPath, handleStrokedPath, handleFilled } from "./paint";
import {
  handlePlayerUpdate,
  handleGameStarted,
  handleLeaderNotif,
  handleGameEnded,
  handleGameStarting,
  handleTimerRunning,
  handleChangeStart,
  handleLeaderStartSet,
} from "./player";

let socket = null;

// 언제든지 이 함수만 불러오면, socket을 가져올수 있음
export const getSocket = () => socket;

export const initSockets = (aSocket) => {
  const { events } = window;
  socket = aSocket;
  socket.on(events.newUser, handleNewUser);
  socket.on(events.disconnected, handleDisconnected);
  socket.on(events.newMsg, handleNewMessage);
  socket.on(events.beganPath, handleBeganPath);
  socket.on(events.strokedPath, handleStrokedPath);
  socket.on(events.filled, handleFilled);
  socket.on(events.playerUpdate, handlePlayerUpdate);
  socket.on(events.gameStarted, handleGameStarted);
  socket.on(events.leaderNotif, handleLeaderNotif);
  socket.on(events.leaderStartSet, handleLeaderStartSet);
  socket.on(events.readyChanged, handleChangeStart);
  // 리더에게만, leaderNotif 이벤트를 보낼수 있다, 그 이유는 io.to로 리더 Id를 지정해서 이벤트를 emit해주고 있기 때문.
  socket.on(events.gameEnded, handleGameEnded);
  socket.on(events.gameStarting, handleGameStarting);
  socket.on(events.timerRunning, handleTimerRunning);
};
