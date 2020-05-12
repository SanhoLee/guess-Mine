import { initSockets } from "./sockes";

const body = document.querySelector("body");
const loginForm = document.getElementById("jsLogin");

const NICKNAME = "nickname";
const LOGGED_OUT = "loggedOut";
const LOGGED_IN = "loggedIn";

const nickname = localStorage.getItem(NICKNAME);

const login = (nickname) => {
  // window를 사용하면, 브라우저에 접근하는 모든 유저에게 해당 오브젝트를 사용할 수 있게 된다.
  // io("/") is now Global Variable.
  // eslint-disable-next-line no-undef
  const socket = io("/");
  socket.emit(window.events.setNickname, { nickname });
  // 원래는 여기다가, newUser에 대한 notification 등 이벤트에대한 커맨드를 입력하려고 했다.
  // 하지만, 다른 이벤트 등 갯수가 많아지고, socket을 컨트롤 하기 위해 따로 sockets.js를 만듬.
  initSockets(socket);
};
// io("/")로 연결을 만들고, setNickname event를 만들어서 nickname값과 같이 전송함.

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  login(nickname);
}

const handleFormSubmit = (e) => {
  e.preventDefault();
  const input = loginForm.querySelector("input");
  const { value } = input;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  login(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
