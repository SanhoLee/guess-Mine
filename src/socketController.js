import events from "./events";

const socketController = (socket) => {
  socket.on(events.setNickname, ({ nickname }) => {
    socket.nickname = nickname;
    // socket --> object라서 아무거나 추가할수 있음. 즉, nickname field를 추가해서 받아온 nickname value를 할당해주는 구조.
    socket.broadcast.emit(events.newUser, { nickname });
  });
};

export default socketController;
