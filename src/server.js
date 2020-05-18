import express from "express";
import { join } from "path";
import socketIO from "socket.io";
import logger from "morgan";
import socketController from "./socketController";
import events from "./events";

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev")); // http 접속시 유저의 정보를 확인하기 위해 사용한 middleware
app.use(express.static(join(__dirname, "static")));

app.get("/", (req, res) =>
  res.render("home", { events: JSON.stringify(events) })
);

const handleListening = () =>
  console.log(` ✅ Server Running : http://localhost:${PORT}`);

const server = app.listen(PORT, handleListening);

const io = socketIO.listen(server);

io.on("connection", (socket) => socketController(socket, io));
