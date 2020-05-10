import { handleMessageNotif } from "./chat";

// eslint-disable-next-line no-undef
const socket = io("/");

// console에서 아래 함수를 실행시키면, 서버로 전송되고 메세지를 보내거나 닉네임을 설정한다.
// emit(event, data) 형태로, 백엔드 서버로 데이터도 같이 전송한다.
function sendMessage(message) {
  socket.emit("newMessage", { message });
  console.log(`You : ${message}`);
}

function setNickname(nickname) {
  socket.emit("setNickname", { nickname });
}

socket.on("messageNotif", handleMessageNotif);
