import { handleNewUser, handleDisconnected } from "./notifications";
import { handleNewMessage } from "./chat";
import { handleBeganPath, handleStrokedPath, handleFilled } from "./paint";
import { handlePlayerUpdate, handleGameStarted } from "./player";

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
  // 리더를 제외한 유저에게만 아래 gameStarted를 보내줘야함.
  socket.on(events.gameStarted, handleGameStarted);
};

// 상대방 유저에게 연결해서 뭔가 액션을 표시하기 위해서는, initSockets에서 window.events로 들어오는 이벤트를 통해서 전달되야한다.
