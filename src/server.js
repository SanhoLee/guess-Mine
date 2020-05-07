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

io.on("connection", (socket) => {
  socket.on("helloGuys", () => console.log("the clien said Hello"));
});
