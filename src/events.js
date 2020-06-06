// events라는 오브젝트를 만들어서 템플릿에 전달해줘야함.
// JSON.stringify를 하면, javascript 오브젝트를 JSON string 데이터 형태로 바꿔준다.
const events = {
  setNickname: "setNickname",
  newUser: "newUser",
  disconnect: "disconnect",
  disconnected: "disconnected",
  sendMsg: "sendMsg",
  newMsg: "newMsg",
  beginPath: "beginPath",
  strokePath: "strokePath",
  beganPath: "beganPath",
  strokedPath: "strokedPath",
  fill: "fill",
  filled: "filled",
  playerUpdate: "playerUpdate",
  leaderNotif: "leaderNotif",
  leaderStartSet: "leaderStartSet",
  gameStarted: "gameStarted",
  gameEnded: "gameEnded",
  gameStarting: "gameStarting",
  timerRunning: "timerRunning",
  readyBtn: "readyBtn",
  onReady: "onReady",
  readyChanged: "readyChanged",
  startBtnClicked: "startBtnClicked",
};

export default events;
