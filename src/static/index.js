// eslint-disable-next-line no-undef
const socket = io("/");

socket.on("hello", () => console.log("Somdbody Joined!"));
setTimeout(() => socket.emit("helloGuys"), 4000);
