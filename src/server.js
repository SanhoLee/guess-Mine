import express from "express";
import { join } from "path";
import socketIO from "socket.io";
import logger from "morgan";

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev")); // http 접속시 유저의 정보를 확인하기 위해 사용한 middleware
app.use(express.static(join(__dirname, "static")));

app.get("/", (req, res) => res.render("home"));
const handleListening = () =>
  console.log(` ✅ Server Running : http://localhost:${PORT}`);

const server = app.listen(PORT, handleListening);

const io = socketIO.listen(server);

// socketio 서버를 express서버 위에 올리고, 다음 url을 브라우저에서 입력해보면, 프런트엔드 코드가 출력되는 것을 확인가능
// localhost:4000/socket.io/socket.io.js
// 이 코드가, 백엔드와 프런트엔드를 소통하는 역할을 함.

// socket.on 의 개념은 특정 이벤트를 계속 listening하고 있다고 이해하면 쉽다.
// broad method도 event emit 하는것과 같은데, 연결된 socket이외의 client들에게 모두 이벤트를 전송할 때 사용.
// 즉, 한 클라이언트로부터 메세지를 전송받으면 그 메세지를 나머지 클라이언드들한테 바로 new message이벤트로 전송하면, 나머지 클라이언트 들이 new message이벤트를 listen 하고있다면, real-time chat이 가능하게 됨.

io.on("connection", (socket) => {
  socket.on("newMessage", ({ message }) => {
    // receive message and broadcast message to another socket client.
    socket.broadcast.emit("messageNotif", {
      message,
      nickname: socket.nickname || "Anon",
    });
  });
  socket.on("setNickname", ({ nickname }) => {
    socket.nickname = nickname;
  });
});
