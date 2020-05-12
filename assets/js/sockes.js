import { handleNewUser } from "./notifications";

let socket = null;

// 언제든지 이 함수만 불러오면, socket을 가져올수 있음
export const getSocket = () => socket;

// 글로번 variabale, socket에 할당된 aSocket을 리텀함.
export const updateSocket = (aSocket) => (socket = aSocket);

export const initSockets = (aSocket) => {
  const { events } = window;
  //   현재 socket을 글로벌 변수로 업데이트 해줌
  updateSocket(aSocket);
  aSocket.on(events.newUser, handleNewUser);
};
