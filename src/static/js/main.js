(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enableChat = exports.disableChat = exports.handleNewMessage = void 0;

var _sockets = require("./sockets");

var message = document.getElementById("jsMessage");
var sendMsg = document.getElementById("jsSendMsg");

var appendMsg = function appendMsg(text, nickname) {
  var li = document.createElement("li");
  li.innerHTML = "<span class=\"author ".concat(nickname ? "out" : "self", "\">").concat(nickname ? nickname : "You ", ":</span> ").concat(text);
  message.appendChild(li);
};

var handleSendMsg = function handleSendMsg(event) {
  event.preventDefault();
  var input = sendMsg.querySelector("input");
  var value = input.value;
  (0, _sockets.getSocket)().emit(window.events.sendMsg, {
    message: value
  });
  input.value = "";
  appendMsg(value);
};

var handleNewMessage = function handleNewMessage(_ref) {
  var message = _ref.message,
      nickname = _ref.nickname;
  appendMsg(message, nickname);
};

exports.handleNewMessage = handleNewMessage;

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}

var disableChat = function disableChat() {
  return sendMsg.style.display = "none";
};

exports.disableChat = disableChat;

var enableChat = function enableChat() {
  return sendMsg.style.display = "flex";
};

exports.enableChat = enableChat;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZW5kTXNnIiwiYXBwZW5kTXNnIiwidGV4dCIsIm5pY2tuYW1lIiwibGkiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJoYW5kbGVTZW5kTXNnIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiZW1pdCIsIndpbmRvdyIsImV2ZW50cyIsImhhbmRsZU5ld01lc3NhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzYWJsZUNoYXQiLCJzdHlsZSIsImRpc3BsYXkiLCJlbmFibGVDaGF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBaEI7QUFDQSxJQUFNQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFoQjs7QUFFQSxJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQU9DLFFBQVAsRUFBb0I7QUFDcEMsTUFBTUMsRUFBRSxHQUFHTixRQUFRLENBQUNPLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBWDtBQUNBRCxFQUFBQSxFQUFFLENBQUNFLFNBQUgsa0NBQXNDSCxRQUFRLEdBQUcsS0FBSCxHQUFXLE1BQXpELGdCQUNFQSxRQUFRLEdBQUdBLFFBQUgsR0FBYyxNQUR4QixzQkFFWUQsSUFGWjtBQUdBTCxFQUFBQSxPQUFPLENBQUNVLFdBQVIsQ0FBb0JILEVBQXBCO0FBQ0QsQ0FORDs7QUFRQSxJQUFNSSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBVztBQUMvQkEsRUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0EsTUFBTUMsS0FBSyxHQUFHWCxPQUFPLENBQUNZLGFBQVIsQ0FBc0IsT0FBdEIsQ0FBZDtBQUYrQixNQUd2QkMsS0FIdUIsR0FHYkYsS0FIYSxDQUd2QkUsS0FIdUI7QUFJL0IsNEJBQVlDLElBQVosQ0FBaUJDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjaEIsT0FBL0IsRUFBd0M7QUFBRUgsSUFBQUEsT0FBTyxFQUFFZ0I7QUFBWCxHQUF4QztBQUNBRixFQUFBQSxLQUFLLENBQUNFLEtBQU4sR0FBYyxFQUFkO0FBQ0FaLEVBQUFBLFNBQVMsQ0FBQ1ksS0FBRCxDQUFUO0FBQ0QsQ0FQRDs7QUFTTyxJQUFNSSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQTJCO0FBQUEsTUFBeEJwQixPQUF3QixRQUF4QkEsT0FBd0I7QUFBQSxNQUFmTSxRQUFlLFFBQWZBLFFBQWU7QUFDekRGLEVBQUFBLFNBQVMsQ0FBQ0osT0FBRCxFQUFVTSxRQUFWLENBQVQ7QUFDRCxDQUZNOzs7O0FBSVAsSUFBSUgsT0FBSixFQUFhO0FBQ1hBLEVBQUFBLE9BQU8sQ0FBQ2tCLGdCQUFSLENBQXlCLFFBQXpCLEVBQW1DVixhQUFuQztBQUNEOztBQUVNLElBQU1XLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsU0FBT25CLE9BQU8sQ0FBQ29CLEtBQVIsQ0FBY0MsT0FBZCxHQUF3QixNQUEvQjtBQUFBLENBQXBCOzs7O0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxTQUFPdEIsT0FBTyxDQUFDb0IsS0FBUixDQUFjQyxPQUFkLEdBQXdCLE1BQS9CO0FBQUEsQ0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTWVzc2FnZVwiKTtcbmNvbnN0IHNlbmRNc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzU2VuZE1zZ1wiKTtcblxuY29uc3QgYXBwZW5kTXNnID0gKHRleHQsIG5pY2tuYW1lKSA9PiB7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJhdXRob3IgJHtuaWNrbmFtZSA/IFwib3V0XCIgOiBcInNlbGZcIn1cIj4ke1xuICAgIG5pY2tuYW1lID8gbmlja25hbWUgOiBcIllvdSBcIlxuICB9Ojwvc3Bhbj4gJHt0ZXh0fWA7XG4gIG1lc3NhZ2UuYXBwZW5kQ2hpbGQobGkpO1xufTtcblxuY29uc3QgaGFuZGxlU2VuZE1zZyA9IChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBpbnB1dCA9IHNlbmRNc2cucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICBjb25zdCB7IHZhbHVlIH0gPSBpbnB1dDtcbiAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLnNlbmRNc2csIHsgbWVzc2FnZTogdmFsdWUgfSk7XG4gIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgYXBwZW5kTXNnKHZhbHVlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVOZXdNZXNzYWdlID0gKHsgbWVzc2FnZSwgbmlja25hbWUgfSkgPT4ge1xuICBhcHBlbmRNc2cobWVzc2FnZSwgbmlja25hbWUpO1xufTtcblxuaWYgKHNlbmRNc2cpIHtcbiAgc2VuZE1zZy5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVNlbmRNc2cpO1xufVxuXG5leHBvcnQgY29uc3QgZGlzYWJsZUNoYXQgPSAoKSA9PiAoc2VuZE1zZy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpO1xuZXhwb3J0IGNvbnN0IGVuYWJsZUNoYXQgPSAoKSA9PiAoc2VuZE1zZy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCIpO1xuIl19
},{"./sockets":7}],2:[function(require,module,exports){
"use strict";

require("./sockets");

require("./login");

require("./chat");

require("./paint");

require("./player");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfOWFlMmMwOGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIEl0IGlzIGNvbXBpbGVkIHN0YXRpYyBtYWluLmpzIGFuZCBnbyB0byBob21lLnB1Z1xuXG5pbXBvcnQgXCIuL3NvY2tldHNcIjtcbmltcG9ydCBcIi4vbG9naW5cIjtcbmltcG9ydCBcIi4vY2hhdFwiO1xuaW1wb3J0IFwiLi9wYWludFwiO1xuaW1wb3J0IFwiLi9wbGF5ZXJcIjtcbiJdfQ==
},{"./chat":1,"./login":3,"./paint":5,"./player":6,"./sockets":7}],3:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";
var nickname = localStorage.getItem(NICKNAME);

var login = function login(nickname) {
  // eslint-disable-next-line no-undef
  var socket = io("/");
  socket.emit(window.events.setNickname, {
    nickname: nickname
  });
  (0, _sockets.initSockets)(socket);
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  login(nickname);
}

var handleFormSubmit = function handleFormSubmit(event) {
  event.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;
  login(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIk5JQ0tOQU1FIiwiTE9HR0VEX09VVCIsIkxPR0dFRF9JTiIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ2luIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc05hbWUiLCJoYW5kbGVGb3JtU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwidmFsdWUiLCJzZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsSUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBbEI7QUFFQSxJQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsV0FBbkI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsVUFBbEI7QUFFQSxJQUFNQyxRQUFRLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkwsUUFBckIsQ0FBakI7O0FBRUEsSUFBTU0sS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0gsUUFBRCxFQUFjO0FBQzFCO0FBQ0EsTUFBTUksTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQjtBQUNBRCxFQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWUMsTUFBTSxDQUFDQyxNQUFQLENBQWNDLFdBQTFCLEVBQXVDO0FBQUVULElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUF2QztBQUNBLDRCQUFZSSxNQUFaO0FBQ0QsQ0FMRDs7QUFPQSxJQUFJSixRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDckJSLEVBQUFBLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUJaLFVBQWpCO0FBQ0QsQ0FGRCxNQUVPO0FBQ0xOLEVBQUFBLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUJYLFNBQWpCO0FBQ0FJLEVBQUFBLEtBQUssQ0FBQ0gsUUFBRCxDQUFMO0FBQ0Q7O0FBRUQsSUFBTVcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFELEVBQVc7QUFDbENBLEVBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUNBLE1BQU1DLEtBQUssR0FBR25CLFNBQVMsQ0FBQ0QsYUFBVixDQUF3QixPQUF4QixDQUFkO0FBRmtDLE1BRzFCcUIsS0FIMEIsR0FHaEJELEtBSGdCLENBRzFCQyxLQUgwQjtBQUlsQ0QsRUFBQUEsS0FBSyxDQUFDQyxLQUFOLEdBQWMsRUFBZDtBQUNBZCxFQUFBQSxZQUFZLENBQUNlLE9BQWIsQ0FBcUJuQixRQUFyQixFQUErQmtCLEtBQS9CO0FBQ0F2QixFQUFBQSxJQUFJLENBQUNrQixTQUFMLEdBQWlCWCxTQUFqQjtBQUNBSSxFQUFBQSxLQUFLLENBQUNZLEtBQUQsQ0FBTDtBQUNELENBUkQ7O0FBVUEsSUFBSXBCLFNBQUosRUFBZTtBQUNiQSxFQUFBQSxTQUFTLENBQUNzQixnQkFBVixDQUEyQixRQUEzQixFQUFxQ04sZ0JBQXJDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0U29ja2V0cyB9IGZyb20gXCIuL3NvY2tldHNcIjtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0xvZ2luXCIpO1xuXG5jb25zdCBOSUNLTkFNRSA9IFwibmlja25hbWVcIjtcbmNvbnN0IExPR0dFRF9PVVQgPSBcImxvZ2dlZE91dFwiO1xuY29uc3QgTE9HR0VEX0lOID0gXCJsb2dnZWRJblwiO1xuXG5jb25zdCBuaWNrbmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKE5JQ0tOQU1FKTtcblxuY29uc3QgbG9naW4gPSAobmlja25hbWUpID0+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGNvbnN0IHNvY2tldCA9IGlvKFwiL1wiKTtcbiAgc29ja2V0LmVtaXQod2luZG93LmV2ZW50cy5zZXROaWNrbmFtZSwgeyBuaWNrbmFtZSB9KTtcbiAgaW5pdFNvY2tldHMoc29ja2V0KTtcbn07XG5cbmlmIChuaWNrbmFtZSA9PT0gbnVsbCkge1xuICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9PVVQ7XG59IGVsc2Uge1xuICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcbiAgbG9naW4obmlja25hbWUpO1xufVxuXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGlucHV0ID0gbG9naW5Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgY29uc3QgeyB2YWx1ZSB9ID0gaW5wdXQ7XG4gIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTklDS05BTUUsIHZhbHVlKTtcbiAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XG4gIGxvZ2luKHZhbHVlKTtcbn07XG5cbmlmIChsb2dpbkZvcm0pIHtcbiAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pdCk7XG59XG4iXX0=
},{"./sockets":7}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDisconnected = exports.handleNewUser = void 0;
var body = document.querySelector("body");

var fireNotification = function fireNotification(text, color) {
  var notification = document.createElement("div");
  notification.innerHTML = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  return fireNotification("".concat(nickname, " has just Joined !"), "rgb(0, 122, 255)");
};

exports.handleNewUser = handleNewUser;

var handleDisconnected = function handleDisconnected(_ref2) {
  var nickname = _ref2.nickname;
  return fireNotification("".concat(nickname, " just left"), "rgb(255, 149, 0)");
}; // 함수형태가 아니라, 바로 리턴 하는 형태로 구성.


exports.handleDisconnected = handleDisconnected;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcmVOb3RpZmljYXRpb24iLCJ0ZXh0IiwiY29sb3IiLCJub3RpZmljYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImhhbmRsZU5ld1VzZXIiLCJuaWNrbmFtZSIsImhhbmRsZURpc2Nvbm5lY3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUN4QyxNQUFNQyxZQUFZLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixLQUF2QixDQUFyQjtBQUNBRCxFQUFBQSxZQUFZLENBQUNFLFNBQWIsR0FBeUJKLElBQXpCO0FBQ0FFLEVBQUFBLFlBQVksQ0FBQ0csS0FBYixDQUFtQkMsZUFBbkIsR0FBcUNMLEtBQXJDO0FBQ0FDLEVBQUFBLFlBQVksQ0FBQ0ssU0FBYixHQUF5QixjQUF6QjtBQUNBWCxFQUFBQSxJQUFJLENBQUNZLFdBQUwsQ0FBaUJOLFlBQWpCO0FBQ0QsQ0FORDs7QUFRTyxJQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FDM0JYLGdCQUFnQixXQUFJVyxRQUFKLHlCQUFrQyxrQkFBbEMsQ0FEVztBQUFBLENBQXRCOzs7O0FBR0EsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLE1BQUdELFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQ2hDWCxnQkFBZ0IsV0FBSVcsUUFBSixpQkFBMEIsa0JBQTFCLENBRGdCO0FBQUEsQ0FBM0IsQyxDQUVQIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG5jb25zdCBmaXJlTm90aWZpY2F0aW9uID0gKHRleHQsIGNvbG9yKSA9PiB7XG4gIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5vdGlmaWNhdGlvbi5pbm5lckhUTUwgPSB0ZXh0O1xuICBub3RpZmljYXRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gIG5vdGlmaWNhdGlvbi5jbGFzc05hbWUgPSBcIm5vdGlmaWNhdGlvblwiO1xuICBib2R5LmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlTmV3VXNlciA9ICh7IG5pY2tuYW1lIH0pID0+XG4gIGZpcmVOb3RpZmljYXRpb24oYCR7bmlja25hbWV9IGhhcyBqdXN0IEpvaW5lZCAhYCwgXCJyZ2IoMCwgMTIyLCAyNTUpXCIpO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlRGlzY29ubmVjdGVkID0gKHsgbmlja25hbWUgfSkgPT5cbiAgZmlyZU5vdGlmaWNhdGlvbihgJHtuaWNrbmFtZX0ganVzdCBsZWZ0YCwgXCJyZ2IoMjU1LCAxNDksIDApXCIpO1xuLy8g7ZWo7IiY7ZiV7YOc6rCAIOyVhOuLiOudvCwg67CU66GcIOumrO2EtCDtlZjripQg7ZiV7YOc66GcIOq1rOyEsS5cbiJdfQ==
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetCanvas = exports.showControls = exports.hideControls = exports.handleFilled = exports.handleStrokedPath = exports.handleBeganPath = exports.enableCanvas = exports.disableCanvas = void 0;

var _sockets = require("./sockets");

var canvas = document.getElementById("jsCanvas");
var ctx = canvas.getContext("2d");
var colors = document.getElementsByClassName("jsColor");
var controls = document.getElementById("jsControls");
var range = document.getElementById("jsRange");
var mode = document.getElementById("jsMode");
var saveBtn = document.getElementById("jsSave");
var refreshBtn = document.getElementById("jsRefresh");
var CANVAS_SIZE = 500;
var INITIAL_COLOR = "#2c2c2c"; // 검정색

canvas.width = 500;
canvas.height = 500;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;
var painting = false;
var filling = false;

var stopPainting = function stopPainting() {
  painting = false;
};

var beginPath = function beginPath(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
};

var strokePath = function strokePath(x, y) {
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var currentColor = ctx.strokeStyle;

  if (color != null) {
    ctx.strokeStyle = color;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.strokeStyle = currentColor;
};

var onMouseMove = function onMouseMove(event) {
  var x = event.offsetX;
  var y = event.offsetY;

  if (!painting) {
    beginPath(x, y);
    (0, _sockets.getSocket)().emit(window.events.beginPath, {
      x: x,
      y: y
    });
  } else {
    strokePath(x, y);
    (0, _sockets.getSocket)().emit(window.events.strokePath, {
      x: x,
      y: y,
      color: ctx.strokeStyle
    });
  }
};

var handleColorClick = function handleColorClick(event) {
  var Color = event.target.style.backgroundColor;
  ctx.strokeStyle = Color;
  ctx.fillStyle = Color;
};

var onMouseDown = function onMouseDown(event) {
  painting = true;
};

var startPainting = function startPainting() {
  painting = true;
};

var handleRangeChange = function handleRangeChange(event) {
  var size = event.target.value;
  ctx.lineWidth = size;
};

var handleModeClick = function handleModeClick() {
  if (filling === true) {
    mode.innerText = "Fill";
    filling = false;
  } else {
    mode.innerText = "Paint";
    filling = true;
  }
};

var fill = function fill() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var currentColor = ctx.fillStyle;

  if (color != null) {
    ctx.fillStyle = color;
  }

  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  ctx.fillStyle = currentColor;
};

var handleCanvasClick = function handleCanvasClick() {
  if (filling === true) {
    fill();
    (0, _sockets.getSocket)().emit(window.events.fill, {
      color: ctx.fillStyle
    });
  }
};

var handleCM = function handleCM(event) {
  event.preventDefault();
};

var handleSaveClick = function handleSaveClick() {
  var image = canvas.toDataURL();
  var link = document.createElement("a");
  link.href = image;
  link.download = "PaintJS_fwanggus";
  link.click();
};

var handleRefresh = function handleRefresh() {
  var result = window.confirm("ARE YOU SURE REFRESHING ALL STUFF? ");

  if (result) {
    filling = true;
    ctx.fillStyle = "white";
    handleCanvasClick(); // initializing all set!

    filling = false;
    ctx.fillStyle = INITIAL_COLOR;
    ctx.strokeStyle = INITIAL_COLOR;
    ctx.lineWidth = 2.5;
    range.value = 2.5;
  } else {
    console.log("you clicked 'cancel' !");
  }
};

var confirmSaveFile = function confirmSaveFile() {
  var confirmSave = window.confirm("ARE YOU SURE SAVING THIS PAINTING ? ");

  if (confirmSave) {
    handleSaveClick();
  } else {}
};

var disableCanvas = function disableCanvas() {
  canvas.removeEventListener("mousemove", onMouseMove);
  canvas.removeEventListener("mousedown", startPainting);
  canvas.removeEventListener("mouseleave", stopPainting);
  canvas.removeEventListener("mouseup", stopPainting);
  canvas.removeEventListener("click", handleCanvasClick);
};

exports.disableCanvas = disableCanvas;

var enableCanvas = function enableCanvas() {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
};

exports.enableCanvas = enableCanvas;
Array.from(colors).forEach(function (potato) {
  potato.addEventListener("click", handleColorClick);
});

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

if (saveBtn) {
  saveBtn.addEventListener("click", confirmSaveFile);
}

if (refreshBtn) {
  refreshBtn.addEventListener("click", handleRefresh);
}

var handleBeganPath = function handleBeganPath(_ref) {
  var x = _ref.x,
      y = _ref.y;
  return beginPath(x, y);
};

exports.handleBeganPath = handleBeganPath;

var handleStrokedPath = function handleStrokedPath(_ref2) {
  var x = _ref2.x,
      y = _ref2.y,
      color = _ref2.color;
  return strokePath(x, y, color);
};

exports.handleStrokedPath = handleStrokedPath;

var handleFilled = function handleFilled(_ref3) {
  var color = _ref3.color;
  return fill(color);
};

exports.handleFilled = handleFilled;

var hideControls = function hideControls() {
  return controls.style.display = "none";
};

exports.hideControls = hideControls;

var showControls = function showControls() {
  return controls.style.display = "flex";
};

exports.showControls = showControls;

var resetCanvas = function resetCanvas() {
  return fill("#fff");
};

exports.resetCanvas = resetCanvas;

if (canvas) {
  enableCanvas(); // hideControls();

  canvas.addEventListener("contextmenu", handleCM);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY29sb3JzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNvbnRyb2xzIiwicmFuZ2UiLCJtb2RlIiwic2F2ZUJ0biIsInJlZnJlc2hCdG4iLCJDQU5WQVNfU0laRSIsIklOSVRJQUxfQ09MT1IiLCJ3aWR0aCIsImhlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJwYWludGluZyIsImZpbGxpbmciLCJzdG9wUGFpbnRpbmciLCJiZWdpblBhdGgiLCJ4IiwieSIsIm1vdmVUbyIsInN0cm9rZVBhdGgiLCJjb2xvciIsImN1cnJlbnRDb2xvciIsImxpbmVUbyIsInN0cm9rZSIsIm9uTW91c2VNb3ZlIiwiZXZlbnQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJoYW5kbGVDb2xvckNsaWNrIiwiQ29sb3IiLCJ0YXJnZXQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIm9uTW91c2VEb3duIiwic3RhcnRQYWludGluZyIsImhhbmRsZVJhbmdlQ2hhbmdlIiwic2l6ZSIsInZhbHVlIiwiaGFuZGxlTW9kZUNsaWNrIiwiaW5uZXJUZXh0IiwiZmlsbCIsImhhbmRsZUNhbnZhc0NsaWNrIiwiaGFuZGxlQ00iLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVNhdmVDbGljayIsImltYWdlIiwidG9EYXRhVVJMIiwibGluayIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiZG93bmxvYWQiLCJjbGljayIsImhhbmRsZVJlZnJlc2giLCJyZXN1bHQiLCJjb25maXJtIiwiY29uc29sZSIsImxvZyIsImNvbmZpcm1TYXZlRmlsZSIsImNvbmZpcm1TYXZlIiwiZGlzYWJsZUNhbnZhcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbmFibGVDYW52YXMiLCJhZGRFdmVudExpc3RlbmVyIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsInBvdGF0byIsImhhbmRsZUJlZ2FuUGF0aCIsImhhbmRsZVN0cm9rZWRQYXRoIiwiaGFuZGxlRmlsbGVkIiwiaGlkZUNvbnRyb2xzIiwiZGlzcGxheSIsInNob3dDb250cm9scyIsInJlc2V0Q2FudmFzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZjtBQUNBLElBQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFDQSxJQUFNQyxNQUFNLEdBQUdKLFFBQVEsQ0FBQ0ssc0JBQVQsQ0FBZ0MsU0FBaEMsQ0FBZjtBQUNBLElBQU1DLFFBQVEsR0FBR04sUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWpCO0FBQ0EsSUFBTU0sS0FBSyxHQUFHUCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBZDtBQUNBLElBQU1PLElBQUksR0FBR1IsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWI7QUFDQSxJQUFNUSxPQUFPLEdBQUdULFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFoQjtBQUNBLElBQU1TLFVBQVUsR0FBR1YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQW5CO0FBRUEsSUFBTVUsV0FBVyxHQUFHLEdBQXBCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLFNBQXRCLEMsQ0FBaUM7O0FBRWpDYixNQUFNLENBQUNjLEtBQVAsR0FBZSxHQUFmO0FBQ0FkLE1BQU0sQ0FBQ2UsTUFBUCxHQUFnQixHQUFoQjtBQUVBWixHQUFHLENBQUNhLFNBQUosR0FBZ0IsT0FBaEI7QUFDQWIsR0FBRyxDQUFDYyxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQkwsV0FBbkIsRUFBZ0NBLFdBQWhDO0FBRUFULEdBQUcsQ0FBQ2UsV0FBSixHQUFrQkwsYUFBbEI7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QUFHLFNBQWRBLFdBQWM7QUFBQSxTQUFNakMsSUFBSSxDQUFDLE1BQUQsQ0FBVjtBQUFBLENBQXBCOzs7O0FBRVAsSUFBSW5ELE1BQUosRUFBWTtBQUNWd0UsRUFBQUEsWUFBWSxHQURGLENBRVY7O0FBQ0F4RSxFQUFBQSxNQUFNLENBQUN5RSxnQkFBUCxDQUF3QixhQUF4QixFQUF1Q3BCLFFBQXZDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNDYW52YXNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuY29uc3QgY29sb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImpzQ29sb3JcIik7XG5jb25zdCBjb250cm9scyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNDb250cm9sc1wiKTtcbmNvbnN0IHJhbmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc1JhbmdlXCIpO1xuY29uc3QgbW9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNNb2RlXCIpO1xuY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNTYXZlXCIpO1xuY29uc3QgcmVmcmVzaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNSZWZyZXNoXCIpO1xuXG5jb25zdCBDQU5WQVNfU0laRSA9IDUwMDtcbmNvbnN0IElOSVRJQUxfQ09MT1IgPSBcIiMyYzJjMmNcIjsgLy8g6rKA7KCV7IOJXG5cbmNhbnZhcy53aWR0aCA9IDUwMDtcbmNhbnZhcy5oZWlnaHQgPSA1MDA7XG5cbmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG5jdHguZmlsbFJlY3QoMCwgMCwgQ0FOVkFTX1NJWkUsIENBTlZBU19TSVpFKTtcblxuY3R4LnN0cm9rZVN0eWxlID0gSU5JVElBTF9DT0xPUjtcbmN0eC5maWxsU3R5bGUgPSBJTklUSUFMX0NPTE9SO1xuXG5jdHgubGluZVdpZHRoID0gMi41O1xuXG5sZXQgcGFpbnRpbmcgPSBmYWxzZTtcbmxldCBmaWxsaW5nID0gZmFsc2U7XG5cbmNvbnN0IHN0b3BQYWludGluZyA9ICgpID0+IHtcbiAgcGFpbnRpbmcgPSBmYWxzZTtcbn07XG5cbmNvbnN0IGJlZ2luUGF0aCA9ICh4LCB5KSA9PiB7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbyh4LCB5KTtcbn07XG5cbmNvbnN0IHN0cm9rZVBhdGggPSAoeCwgeSwgY29sb3IgPSBudWxsKSA9PiB7XG4gIGxldCBjdXJyZW50Q29sb3IgPSBjdHguc3Ryb2tlU3R5bGU7XG4gIGlmIChjb2xvciAhPSBudWxsKSB7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gIH1cbiAgY3R4LmxpbmVUbyh4LCB5KTtcbiAgY3R4LnN0cm9rZSgpO1xuICBjdHguc3Ryb2tlU3R5bGUgPSBjdXJyZW50Q29sb3I7XG59O1xuXG5jb25zdCBvbk1vdXNlTW92ZSA9IChldmVudCkgPT4ge1xuICBjb25zdCB4ID0gZXZlbnQub2Zmc2V0WDtcbiAgY29uc3QgeSA9IGV2ZW50Lm9mZnNldFk7XG5cbiAgaWYgKCFwYWludGluZykge1xuICAgIGJlZ2luUGF0aCh4LCB5KTtcbiAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuYmVnaW5QYXRoLCB7IHgsIHkgfSk7XG4gIH0gZWxzZSB7XG4gICAgc3Ryb2tlUGF0aCh4LCB5KTtcbiAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuc3Ryb2tlUGF0aCwge1xuICAgICAgeCxcbiAgICAgIHksXG4gICAgICBjb2xvcjogY3R4LnN0cm9rZVN0eWxlLFxuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVDb2xvckNsaWNrID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IENvbG9yID0gZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgY3R4LnN0cm9rZVN0eWxlID0gQ29sb3I7XG4gIGN0eC5maWxsU3R5bGUgPSBDb2xvcjtcbn07XG5cbmNvbnN0IG9uTW91c2VEb3duID0gKGV2ZW50KSA9PiB7XG4gIHBhaW50aW5nID0gdHJ1ZTtcbn07XG5cbmNvbnN0IHN0YXJ0UGFpbnRpbmcgPSAoKSA9PiB7XG4gIHBhaW50aW5nID0gdHJ1ZTtcbn07XG5cbmNvbnN0IGhhbmRsZVJhbmdlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHNpemUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gIGN0eC5saW5lV2lkdGggPSBzaXplO1xufTtcblxuY29uc3QgaGFuZGxlTW9kZUNsaWNrID0gKCkgPT4ge1xuICBpZiAoZmlsbGluZyA9PT0gdHJ1ZSkge1xuICAgIG1vZGUuaW5uZXJUZXh0ID0gXCJGaWxsXCI7XG4gICAgZmlsbGluZyA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIG1vZGUuaW5uZXJUZXh0ID0gXCJQYWludFwiO1xuICAgIGZpbGxpbmcgPSB0cnVlO1xuICB9XG59O1xuXG5jb25zdCBmaWxsID0gKGNvbG9yID0gbnVsbCkgPT4ge1xuICBsZXQgY3VycmVudENvbG9yID0gY3R4LmZpbGxTdHlsZTtcbiAgaWYgKGNvbG9yICE9IG51bGwpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIH1cbiAgY3R4LmZpbGxSZWN0KDAsIDAsIENBTlZBU19TSVpFLCBDQU5WQVNfU0laRSk7XG4gIGN0eC5maWxsU3R5bGUgPSBjdXJyZW50Q29sb3I7XG59O1xuXG5jb25zdCBoYW5kbGVDYW52YXNDbGljayA9ICgpID0+IHtcbiAgaWYgKGZpbGxpbmcgPT09IHRydWUpIHtcbiAgICBmaWxsKCk7XG4gICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLmZpbGwsIHsgY29sb3I6IGN0eC5maWxsU3R5bGUgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGhhbmRsZUNNID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59O1xuXG5jb25zdCBoYW5kbGVTYXZlQ2xpY2sgPSAoKSA9PiB7XG4gIGNvbnN0IGltYWdlID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGxpbmsuaHJlZiA9IGltYWdlO1xuICBsaW5rLmRvd25sb2FkID0gXCJQYWludEpTX2Z3YW5nZ3VzXCI7XG4gIGxpbmsuY2xpY2soKTtcbn07XG5cbmNvbnN0IGhhbmRsZVJlZnJlc2ggPSAoKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IHdpbmRvdy5jb25maXJtKFwiQVJFIFlPVSBTVVJFIFJFRlJFU0hJTkcgQUxMIFNUVUZGPyBcIik7XG5cbiAgaWYgKHJlc3VsdCkge1xuICAgIGZpbGxpbmcgPSB0cnVlO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgaGFuZGxlQ2FudmFzQ2xpY2soKTtcblxuICAgIC8vIGluaXRpYWxpemluZyBhbGwgc2V0IVxuICAgIGZpbGxpbmcgPSBmYWxzZTtcbiAgICBjdHguZmlsbFN0eWxlID0gSU5JVElBTF9DT0xPUjtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBJTklUSUFMX0NPTE9SO1xuICAgIGN0eC5saW5lV2lkdGggPSAyLjU7XG4gICAgcmFuZ2UudmFsdWUgPSAyLjU7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJ5b3UgY2xpY2tlZCAnY2FuY2VsJyAhXCIpO1xuICB9XG59O1xuXG5jb25zdCBjb25maXJtU2F2ZUZpbGUgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbmZpcm1TYXZlID0gd2luZG93LmNvbmZpcm0oXCJBUkUgWU9VIFNVUkUgU0FWSU5HIFRISVMgUEFJTlRJTkcgPyBcIik7XG4gIGlmIChjb25maXJtU2F2ZSkge1xuICAgIGhhbmRsZVNhdmVDbGljaygpO1xuICB9IGVsc2Uge1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZUNhbnZhcyA9ICgpID0+IHtcbiAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBzdGFydFBhaW50aW5nKTtcbiAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHN0b3BQYWludGluZyk7XG4gIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFpbnRpbmcpO1xuICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNhbnZhc0NsaWNrKTtcbn07XG5cbmV4cG9ydCBjb25zdCBlbmFibGVDYW52YXMgPSAoKSA9PiB7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgc3RhcnRQYWludGluZyk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBzdG9wUGFpbnRpbmcpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFBhaW50aW5nKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDYW52YXNDbGljayk7XG59O1xuXG5BcnJheS5mcm9tKGNvbG9ycykuZm9yRWFjaCgocG90YXRvKSA9PiB7XG4gIHBvdGF0by5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ29sb3JDbGljayk7XG59KTtcblxuaWYgKHJhbmdlKSB7XG4gIHJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBoYW5kbGVSYW5nZUNoYW5nZSk7XG59XG5cbmlmIChtb2RlKSB7XG4gIG1vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU1vZGVDbGljayk7XG59XG5cbmlmIChzYXZlQnRuKSB7XG4gIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbmZpcm1TYXZlRmlsZSk7XG59XG5cbmlmIChyZWZyZXNoQnRuKSB7XG4gIHJlZnJlc2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVJlZnJlc2gpO1xufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlQmVnYW5QYXRoID0gKHsgeCwgeSB9KSA9PiBiZWdpblBhdGgoeCwgeSk7XG5leHBvcnQgY29uc3QgaGFuZGxlU3Ryb2tlZFBhdGggPSAoeyB4LCB5LCBjb2xvciB9KSA9PiBzdHJva2VQYXRoKHgsIHksIGNvbG9yKTtcbmV4cG9ydCBjb25zdCBoYW5kbGVGaWxsZWQgPSAoeyBjb2xvciB9KSA9PiBmaWxsKGNvbG9yKTtcblxuZXhwb3J0IGNvbnN0IGhpZGVDb250cm9scyA9ICgpID0+IChjb250cm9scy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpO1xuZXhwb3J0IGNvbnN0IHNob3dDb250cm9scyA9ICgpID0+IChjb250cm9scy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCIpO1xuZXhwb3J0IGNvbnN0IHJlc2V0Q2FudmFzID0gKCkgPT4gZmlsbChcIiNmZmZcIik7XG5cbmlmIChjYW52YXMpIHtcbiAgZW5hYmxlQ2FudmFzKCk7XG4gIC8vIGhpZGVDb250cm9scygpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIGhhbmRsZUNNKTtcbn1cbiJdfQ==
},{"./sockets":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleChangeStart = exports.handleTimerRunning = exports.handleGameStarting = exports.handleGameEnded = exports.handleLeaderStartSet = exports.handleLeaderNotif = exports.handleGameStarted = exports.handlePlayerUpdate = exports.addReadyBtnEvent = exports.removeReadyBtnEvent = void 0;

var _chat = require("./chat");

var _paint = require("./paint");

var _sockets = require("./sockets");

var board = document.getElementById("jsPBoard");
var notifs = document.getElementById("jsNotifs");
var statusTime = document.getElementById("jsStatusTime");
var playerNumber = document.getElementById("jsPlayerNumber");
var readyBtn = document.getElementById("jsReadyBtn");
var ON_READY = "ready";
var NOT_READY = "notReady";
var START = "start";
var ALLOW_START = "allowStart";
var GAMING = "gaming";

var removeReadyBtnEvent = function removeReadyBtnEvent() {
  return readyBtn.removeEventListener("click", handleReadyBtn);
};

exports.removeReadyBtnEvent = removeReadyBtnEvent;

var addReadyBtnEvent = function addReadyBtnEvent() {
  return readyBtn.addEventListener("click", handleReadyBtn);
};

exports.addReadyBtnEvent = addReadyBtnEvent;

var removeReadyBtnEventLD = function removeReadyBtnEventLD() {
  return readyBtn.removeEventListener("click", handleStartBtn);
};

var addReadyBtnEventLD = function addReadyBtnEventLD() {
  return readyBtn.addEventListener("click", handleStartBtn);
};

var setNotif = function setNotif(text) {
  notifs.innerText = " ";
  notifs.innerText = text;
};

var setTimerTime = function setTimerTime(text) {
  statusTime.innerText = "";
  statusTime.innerText = text;
};

var setPlayerNumber = function setPlayerNumber(sockets) {
  playerNumber.innerText = "";
  playerNumber.innerText = String(sockets.length);
};

var addPlayers = function addPlayers(players) {
  board.innerHTML = "";
  players.forEach(function (player) {
    var playerElement = document.createElement("div");
    playerElement.className = "player__element";
    var pointElement = document.createElement("span");
    var nicknameElement = document.createElement("span");
    nicknameElement.innerText = "".concat(player.nickname);
    pointElement.innerText = "\uD83D\uDC51  ".concat(player.points);
    playerElement.appendChild(nicknameElement);
    playerElement.appendChild(pointElement);
    board.appendChild(playerElement);
  });
};

var toReady = function toReady(classList) {
  readyBtn.innerText = "ON READY 🔒";
  classList.remove(classList[classList.length - 1]);
  classList.add(ON_READY);
};

var toNotReady = function toNotReady(classList) {
  readyBtn.innerText = "NOT READY 🔓";
  classList.remove(classList[classList.length - 1]);
  classList.add(NOT_READY);
  readyBtn.style.backgroundColor = "#bbff00";
};

var toStart = function toStart(classList) {
  readyBtn.innerText = " START 🚫 ";
  classList.remove(classList[classList.length - 1]);
  classList.add(START);
  readyBtn.style.backgroundColor = "#bbff00";
};

var toAllowStart = function toAllowStart(classList) {
  readyBtn.innerText = " START 🕹 ";
  classList.remove(classList[classList.length - 1]);
  classList.add(ALLOW_START);
  readyBtn.style.backgroundColor = "#74b9ff";
};

var toGame = function toGame(classList) {
  readyBtn.innerText = " Game-ing 🖼 ";
  classList.remove(classList[classList.length - 1]);
  classList.add(GAMING);
  readyBtn.style.backgroundColor = "red";
  (0, _sockets.getSocket)().emit(window.events.startBtnClicked);
};

var handlePlayerUpdate = function handlePlayerUpdate(_ref) {
  var sockets = _ref.sockets,
      TOTAL_TIME = _ref.TOTAL_TIME;
  (0, _paint.hideControls)();
  addPlayers(sockets);
  setPlayerNumber(sockets);

  if (sockets.length === 1) {
    setNotif("Waiting Painters 👨🏻‍🎨👩🏻‍🎨 ");
    (0, _chat.disableChat)();
  }

  setTimerTime(TOTAL_TIME);
  var readyUser = sockets.filter(function (user) {
    return user.ready === true;
  });
};

exports.handlePlayerUpdate = handlePlayerUpdate;

var handleGameStarted = function handleGameStarted() {
  setNotif("Guess What ? ");
  (0, _paint.disableCanvas)();
  (0, _paint.hideControls)();
  (0, _chat.enableChat)();
  removeReadyBtnEvent();
};

exports.handleGameStarted = handleGameStarted;

var handleLeaderNotif = function handleLeaderNotif(_ref2) {
  var word = _ref2.word,
      leader = _ref2.leader;
  toStart(readyBtn.classList);
  (0, _chat.enableChat)();
  removeReadyBtnEvent();
  setNotif("");
  notifs.innerText = "".concat(leader.nickname, " are Painter ! \uD83D\uDD8C ");
};

exports.handleLeaderNotif = handleLeaderNotif;

var handleLeaderStartSet = function handleLeaderStartSet(_ref3) {
  var word = _ref3.word,
      leader = _ref3.leader;
  setNotif("DRAW THIS WORD \uD83D\uDDBC : ".concat(word));
  (0, _chat.disableChat)();
  (0, _paint.showControls)();
  (0, _paint.enableCanvas)();
}; // This is for normal User


exports.handleLeaderStartSet = handleLeaderStartSet;

var handleGameEnded = function handleGameEnded(_ref4) {
  var TOTAL_TIME = _ref4.TOTAL_TIME;
  setNotif("Game Ended ! ");
  (0, _paint.disableCanvas)();
  (0, _chat.disableChat)();
  (0, _paint.hideControls)();
  (0, _paint.resetCanvas)();
  setTimerTime(TOTAL_TIME);
  toNotReady(readyBtn.classList);
  addReadyBtnEvent();
};

exports.handleGameEnded = handleGameEnded;

var handleGameStarting = function handleGameStarting() {
  removeReadyBtnEvent();
  setNotif("Game will be starting soon.");
};

exports.handleGameStarting = handleGameStarting;

var handleTimerRunning = function handleTimerRunning(_ref5) {
  var sendTime = _ref5.sendTime;
  setTimerTime(sendTime);
};

exports.handleTimerRunning = handleTimerRunning;

var sendReadyStatus = function sendReadyStatus(readyClass) {
  (0, _sockets.getSocket)().emit(window.events.readyBtn, {
    readyClass: readyClass
  });
};

var readyStatus = function readyStatus(classList) {
  var len = classList.length;
  var targetClass = classList[len - 1];

  if (targetClass === NOT_READY) {
    toReady(classList);
  } else if (targetClass === ON_READY) {
    toNotReady(classList);
  }

  targetClass = classList[len - 1];
  sendReadyStatus(targetClass);
};

var startStatus = function startStatus(classList) {
  var len = classList.length;
  var targetClass = classList[len - 1];

  if (targetClass === ALLOW_START) {
    toGame(classList);
  } else if (targetClass === GAMING) {
    removeReadyBtnEvent();
  }
};

var handleReadyBtn = function handleReadyBtn(event) {
  var classList = event.target.classList;
  readyStatus(classList);
};

var handleStartBtn = function handleStartBtn(event) {
  var classList = event.target.classList;
  startStatus(classList);
};

var handleChangeStart = function handleChangeStart(readyUser) {
  if (board.childElementCount - 1 === readyUser.length) {
    toAllowStart(readyBtn.classList);
    addReadyBtnEventLD();
  } else {
    toStart(readyBtn.classList);
    removeReadyBtnEventLD();
  }
};

exports.handleChangeStart = handleChangeStart;

if (readyBtn) {
  addReadyBtnEvent();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci5qcyJdLCJuYW1lcyI6WyJib2FyZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJub3RpZnMiLCJzdGF0dXNUaW1lIiwicGxheWVyTnVtYmVyIiwicmVhZHlCdG4iLCJPTl9SRUFEWSIsIk5PVF9SRUFEWSIsIlNUQVJUIiwiQUxMT1dfU1RBUlQiLCJHQU1JTkciLCJyZW1vdmVSZWFkeUJ0bkV2ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZVJlYWR5QnRuIiwiYWRkUmVhZHlCdG5FdmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVSZWFkeUJ0bkV2ZW50TEQiLCJoYW5kbGVTdGFydEJ0biIsImFkZFJlYWR5QnRuRXZlbnRMRCIsInNldE5vdGlmIiwidGV4dCIsImlubmVyVGV4dCIsInNldFRpbWVyVGltZSIsInNldFBsYXllck51bWJlciIsInNvY2tldHMiLCJTdHJpbmciLCJsZW5ndGgiLCJhZGRQbGF5ZXJzIiwicGxheWVycyIsImlubmVySFRNTCIsImZvckVhY2giLCJwbGF5ZXIiLCJwbGF5ZXJFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInBvaW50RWxlbWVudCIsIm5pY2tuYW1lRWxlbWVudCIsIm5pY2tuYW1lIiwicG9pbnRzIiwiYXBwZW5kQ2hpbGQiLCJ0b1JlYWR5IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwidG9Ob3RSZWFkeSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidG9TdGFydCIsInRvQWxsb3dTdGFydCIsInRvR2FtZSIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJzdGFydEJ0bkNsaWNrZWQiLCJoYW5kbGVQbGF5ZXJVcGRhdGUiLCJUT1RBTF9USU1FIiwicmVhZHlVc2VyIiwiZmlsdGVyIiwidXNlciIsInJlYWR5IiwiaGFuZGxlR2FtZVN0YXJ0ZWQiLCJoYW5kbGVMZWFkZXJOb3RpZiIsIndvcmQiLCJsZWFkZXIiLCJoYW5kbGVMZWFkZXJTdGFydFNldCIsImhhbmRsZUdhbWVFbmRlZCIsImhhbmRsZUdhbWVTdGFydGluZyIsImhhbmRsZVRpbWVyUnVubmluZyIsInNlbmRUaW1lIiwic2VuZFJlYWR5U3RhdHVzIiwicmVhZHlDbGFzcyIsInJlYWR5U3RhdHVzIiwibGVuIiwidGFyZ2V0Q2xhc3MiLCJzdGFydFN0YXR1cyIsImV2ZW50IiwidGFyZ2V0IiwiaGFuZGxlQ2hhbmdlU3RhcnQiLCJjaGlsZEVsZW1lbnRDb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQU9BOztBQUVBLElBQU1BLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWQ7QUFDQSxJQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFmO0FBQ0EsSUFBTUUsVUFBVSxHQUFHSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBbkI7QUFDQSxJQUFNRyxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixnQkFBeEIsQ0FBckI7QUFDQSxJQUFNSSxRQUFRLEdBQUdMLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFqQjtBQUVBLElBQU1LLFFBQVEsR0FBRyxPQUFqQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxVQUFsQjtBQUNBLElBQU1DLEtBQUssR0FBRyxPQUFkO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLFlBQXBCO0FBQ0EsSUFBTUMsTUFBTSxHQUFHLFFBQWY7O0FBRU8sSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQjtBQUFBLFNBQ2pDTixRQUFRLENBQUNPLG1CQUFULENBQTZCLE9BQTdCLEVBQXNDQyxjQUF0QyxDQURpQztBQUFBLENBQTVCOzs7O0FBR0EsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLFNBQzlCVCxRQUFRLENBQUNVLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DRixjQUFuQyxDQUQ4QjtBQUFBLENBQXpCOzs7O0FBR1AsSUFBTUcscUJBQXFC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MEIsQ0FBMUIsS0FBZ0N0QixTQUFTLENBQUM5QixNQUE5QyxFQUFzRDtBQUNwRHNCLElBQUFBLFlBQVksQ0FBQzNDLFFBQVEsQ0FBQ29DLFNBQVYsQ0FBWjtBQUNBdkIsSUFBQUEsa0JBQWtCO0FBQ25CLEdBSEQsTUFHTztBQUNMNkIsSUFBQUEsT0FBTyxDQUFDMUMsUUFBUSxDQUFDb0MsU0FBVixDQUFQO0FBQ0F6QixJQUFBQSxxQkFBcUI7QUFDdEI7QUFDRixDQVJNOzs7O0FBVVAsSUFBSVgsUUFBSixFQUFjO0FBQ1pTLEVBQUFBLGdCQUFnQjtBQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRpc2FibGVDaGF0LCBlbmFibGVDaGF0IH0gZnJvbSBcIi4vY2hhdFwiO1xuaW1wb3J0IHtcbiAgZGlzYWJsZUNhbnZhcyxcbiAgZW5hYmxlQ2FudmFzLFxuICBoaWRlQ29udHJvbHMsXG4gIHJlc2V0Q2FudmFzLFxuICBzaG93Q29udHJvbHMsXG59IGZyb20gXCIuL3BhaW50XCI7XG5pbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc1BCb2FyZFwiKTtcbmNvbnN0IG5vdGlmcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNOb3RpZnNcIik7XG5jb25zdCBzdGF0dXNUaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc1N0YXR1c1RpbWVcIik7XG5jb25zdCBwbGF5ZXJOdW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzUGxheWVyTnVtYmVyXCIpO1xuY29uc3QgcmVhZHlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzUmVhZHlCdG5cIik7XG5cbmNvbnN0IE9OX1JFQURZID0gXCJyZWFkeVwiO1xuY29uc3QgTk9UX1JFQURZID0gXCJub3RSZWFkeVwiO1xuY29uc3QgU1RBUlQgPSBcInN0YXJ0XCI7XG5jb25zdCBBTExPV19TVEFSVCA9IFwiYWxsb3dTdGFydFwiO1xuY29uc3QgR0FNSU5HID0gXCJnYW1pbmdcIjtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZVJlYWR5QnRuRXZlbnQgPSAoKSA9PlxuICByZWFkeUJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUmVhZHlCdG4pO1xuXG5leHBvcnQgY29uc3QgYWRkUmVhZHlCdG5FdmVudCA9ICgpID0+XG4gIHJlYWR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVSZWFkeUJ0bik7XG5cbmNvbnN0IHJlbW92ZVJlYWR5QnRuRXZlbnRMRCA9ICgpID0+XG4gIHJlYWR5QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVTdGFydEJ0bik7XG5cbmNvbnN0IGFkZFJlYWR5QnRuRXZlbnRMRCA9ICgpID0+XG4gIHJlYWR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVTdGFydEJ0bik7XG5cbmNvbnN0IHNldE5vdGlmID0gKHRleHQpID0+IHtcbiAgbm90aWZzLmlubmVyVGV4dCA9IFwiIFwiO1xuICBub3RpZnMuaW5uZXJUZXh0ID0gdGV4dDtcbn07XG5cbmNvbnN0IHNldFRpbWVyVGltZSA9ICh0ZXh0KSA9PiB7XG4gIHN0YXR1c1RpbWUuaW5uZXJUZXh0ID0gXCJcIjtcbiAgc3RhdHVzVGltZS5pbm5lclRleHQgPSB0ZXh0O1xufTtcblxuY29uc3Qgc2V0UGxheWVyTnVtYmVyID0gKHNvY2tldHMpID0+IHtcbiAgcGxheWVyTnVtYmVyLmlubmVyVGV4dCA9IFwiXCI7XG4gIHBsYXllck51bWJlci5pbm5lclRleHQgPSBTdHJpbmcoc29ja2V0cy5sZW5ndGgpO1xufTtcblxuY29uc3QgYWRkUGxheWVycyA9IChwbGF5ZXJzKSA9PiB7XG4gIGJvYXJkLmlubmVySFRNTCA9IFwiXCI7XG4gIHBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgY29uc3QgcGxheWVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGxheWVyRWxlbWVudC5jbGFzc05hbWUgPSBcInBsYXllcl9fZWxlbWVudFwiO1xuICAgIGNvbnN0IHBvaW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvbnN0IG5pY2tuYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIG5pY2tuYW1lRWxlbWVudC5pbm5lclRleHQgPSBgJHtwbGF5ZXIubmlja25hbWV9YDtcbiAgICBwb2ludEVsZW1lbnQuaW5uZXJUZXh0ID0gYPCfkZEgICR7cGxheWVyLnBvaW50c31gO1xuICAgIHBsYXllckVsZW1lbnQuYXBwZW5kQ2hpbGQobmlja25hbWVFbGVtZW50KTtcbiAgICBwbGF5ZXJFbGVtZW50LmFwcGVuZENoaWxkKHBvaW50RWxlbWVudCk7XG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQocGxheWVyRWxlbWVudCk7XG4gIH0pO1xufTtcblxuY29uc3QgdG9SZWFkeSA9IChjbGFzc0xpc3QpID0+IHtcbiAgcmVhZHlCdG4uaW5uZXJUZXh0ID0gXCJPTiBSRUFEWSDwn5SSXCI7XG4gIGNsYXNzTGlzdC5yZW1vdmUoY2xhc3NMaXN0W2NsYXNzTGlzdC5sZW5ndGggLSAxXSk7XG4gIGNsYXNzTGlzdC5hZGQoT05fUkVBRFkpO1xufTtcblxuY29uc3QgdG9Ob3RSZWFkeSA9IChjbGFzc0xpc3QpID0+IHtcbiAgcmVhZHlCdG4uaW5uZXJUZXh0ID0gXCJOT1QgUkVBRFkg8J+Uk1wiO1xuICBjbGFzc0xpc3QucmVtb3ZlKGNsYXNzTGlzdFtjbGFzc0xpc3QubGVuZ3RoIC0gMV0pO1xuICBjbGFzc0xpc3QuYWRkKE5PVF9SRUFEWSk7XG4gIHJlYWR5QnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2JiZmYwMFwiO1xufTtcblxuY29uc3QgdG9TdGFydCA9IChjbGFzc0xpc3QpID0+IHtcbiAgcmVhZHlCdG4uaW5uZXJUZXh0ID0gXCIgU1RBUlQg8J+aqyBcIjtcbiAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc0xpc3RbY2xhc3NMaXN0Lmxlbmd0aCAtIDFdKTtcbiAgY2xhc3NMaXN0LmFkZChTVEFSVCk7XG4gIHJlYWR5QnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2JiZmYwMFwiO1xufTtcblxuY29uc3QgdG9BbGxvd1N0YXJ0ID0gKGNsYXNzTGlzdCkgPT4ge1xuICByZWFkeUJ0bi5pbm5lclRleHQgPSBcIiBTVEFSVCDwn5W5IFwiO1xuICBjbGFzc0xpc3QucmVtb3ZlKGNsYXNzTGlzdFtjbGFzc0xpc3QubGVuZ3RoIC0gMV0pO1xuICBjbGFzc0xpc3QuYWRkKEFMTE9XX1NUQVJUKTtcbiAgcmVhZHlCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjNzRiOWZmXCI7XG59O1xuXG5jb25zdCB0b0dhbWUgPSAoY2xhc3NMaXN0KSA9PiB7XG4gIHJlYWR5QnRuLmlubmVyVGV4dCA9IFwiIEdhbWUtaW5nIPCflrwgXCI7XG4gIGNsYXNzTGlzdC5yZW1vdmUoY2xhc3NMaXN0W2NsYXNzTGlzdC5sZW5ndGggLSAxXSk7XG4gIGNsYXNzTGlzdC5hZGQoR0FNSU5HKTtcbiAgcmVhZHlCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLnN0YXJ0QnRuQ2xpY2tlZCk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlUGxheWVyVXBkYXRlID0gKHsgc29ja2V0cywgVE9UQUxfVElNRSB9KSA9PiB7XG4gIGhpZGVDb250cm9scygpO1xuICBhZGRQbGF5ZXJzKHNvY2tldHMpO1xuICBzZXRQbGF5ZXJOdW1iZXIoc29ja2V0cyk7XG4gIGlmIChzb2NrZXRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHNldE5vdGlmKFwiV2FpdGluZyBQYWludGVycyDwn5Go8J+Pu+KAjfCfjqjwn5Gp8J+Pu+KAjfCfjqggXCIpO1xuICAgIGRpc2FibGVDaGF0KCk7XG4gIH1cbiAgc2V0VGltZXJUaW1lKFRPVEFMX1RJTUUpO1xuICBjb25zdCByZWFkeVVzZXIgPSBzb2NrZXRzLmZpbHRlcigodXNlcikgPT4gdXNlci5yZWFkeSA9PT0gdHJ1ZSk7XG59O1xuZXhwb3J0IGNvbnN0IGhhbmRsZUdhbWVTdGFydGVkID0gKCkgPT4ge1xuICBzZXROb3RpZihcIkd1ZXNzIFdoYXQgPyBcIik7XG4gIGRpc2FibGVDYW52YXMoKTtcbiAgaGlkZUNvbnRyb2xzKCk7XG4gIGVuYWJsZUNoYXQoKTtcbiAgcmVtb3ZlUmVhZHlCdG5FdmVudCgpO1xufTtcbmV4cG9ydCBjb25zdCBoYW5kbGVMZWFkZXJOb3RpZiA9ICh7IHdvcmQsIGxlYWRlciB9KSA9PiB7XG4gIHRvU3RhcnQocmVhZHlCdG4uY2xhc3NMaXN0KTtcbiAgZW5hYmxlQ2hhdCgpO1xuICByZW1vdmVSZWFkeUJ0bkV2ZW50KCk7XG4gIHNldE5vdGlmKFwiXCIpO1xuICBub3RpZnMuaW5uZXJUZXh0ID0gYCR7bGVhZGVyLm5pY2tuYW1lfSBhcmUgUGFpbnRlciAhIPCflowgYDtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVMZWFkZXJTdGFydFNldCA9ICh7IHdvcmQsIGxlYWRlciB9KSA9PiB7XG4gIHNldE5vdGlmKGBEUkFXIFRISVMgV09SRCDwn5a8IDogJHt3b3JkfWApO1xuICBkaXNhYmxlQ2hhdCgpO1xuICBzaG93Q29udHJvbHMoKTtcbiAgZW5hYmxlQ2FudmFzKCk7XG59O1xuXG4vLyBUaGlzIGlzIGZvciBub3JtYWwgVXNlclxuZXhwb3J0IGNvbnN0IGhhbmRsZUdhbWVFbmRlZCA9ICh7IFRPVEFMX1RJTUUgfSkgPT4ge1xuICBzZXROb3RpZihcIkdhbWUgRW5kZWQgISBcIik7XG4gIGRpc2FibGVDYW52YXMoKTtcbiAgZGlzYWJsZUNoYXQoKTtcbiAgaGlkZUNvbnRyb2xzKCk7XG4gIHJlc2V0Q2FudmFzKCk7XG4gIHNldFRpbWVyVGltZShUT1RBTF9USU1FKTtcbiAgdG9Ob3RSZWFkeShyZWFkeUJ0bi5jbGFzc0xpc3QpO1xuICBhZGRSZWFkeUJ0bkV2ZW50KCk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlR2FtZVN0YXJ0aW5nID0gKCkgPT4ge1xuICByZW1vdmVSZWFkeUJ0bkV2ZW50KCk7XG4gIHNldE5vdGlmKFwiR2FtZSB3aWxsIGJlIHN0YXJ0aW5nIHNvb24uXCIpO1xufTtcbmV4cG9ydCBjb25zdCBoYW5kbGVUaW1lclJ1bm5pbmcgPSAoeyBzZW5kVGltZSB9KSA9PiB7XG4gIHNldFRpbWVyVGltZShzZW5kVGltZSk7XG59O1xuXG5jb25zdCBzZW5kUmVhZHlTdGF0dXMgPSAocmVhZHlDbGFzcykgPT4ge1xuICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMucmVhZHlCdG4sIHsgcmVhZHlDbGFzcyB9KTtcbn07XG5cbmNvbnN0IHJlYWR5U3RhdHVzID0gKGNsYXNzTGlzdCkgPT4ge1xuICBjb25zdCBsZW4gPSBjbGFzc0xpc3QubGVuZ3RoO1xuICBsZXQgdGFyZ2V0Q2xhc3MgPSBjbGFzc0xpc3RbbGVuIC0gMV07XG4gIGlmICh0YXJnZXRDbGFzcyA9PT0gTk9UX1JFQURZKSB7XG4gICAgdG9SZWFkeShjbGFzc0xpc3QpO1xuICB9IGVsc2UgaWYgKHRhcmdldENsYXNzID09PSBPTl9SRUFEWSkge1xuICAgIHRvTm90UmVhZHkoY2xhc3NMaXN0KTtcbiAgfVxuICB0YXJnZXRDbGFzcyA9IGNsYXNzTGlzdFtsZW4gLSAxXTtcbiAgc2VuZFJlYWR5U3RhdHVzKHRhcmdldENsYXNzKTtcbn07XG5cbmNvbnN0IHN0YXJ0U3RhdHVzID0gKGNsYXNzTGlzdCkgPT4ge1xuICBjb25zdCBsZW4gPSBjbGFzc0xpc3QubGVuZ3RoO1xuICBsZXQgdGFyZ2V0Q2xhc3MgPSBjbGFzc0xpc3RbbGVuIC0gMV07XG4gIGlmICh0YXJnZXRDbGFzcyA9PT0gQUxMT1dfU1RBUlQpIHtcbiAgICB0b0dhbWUoY2xhc3NMaXN0KTtcbiAgfSBlbHNlIGlmICh0YXJnZXRDbGFzcyA9PT0gR0FNSU5HKSB7XG4gICAgcmVtb3ZlUmVhZHlCdG5FdmVudCgpO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVSZWFkeUJ0biA9IChldmVudCkgPT4ge1xuICBjb25zdCB7XG4gICAgdGFyZ2V0OiB7IGNsYXNzTGlzdCB9LFxuICB9ID0gZXZlbnQ7XG4gIHJlYWR5U3RhdHVzKGNsYXNzTGlzdCk7XG59O1xuXG5jb25zdCBoYW5kbGVTdGFydEJ0biA9IChldmVudCkgPT4ge1xuICBjb25zdCB7XG4gICAgdGFyZ2V0OiB7IGNsYXNzTGlzdCB9LFxuICB9ID0gZXZlbnQ7XG4gIHN0YXJ0U3RhdHVzKGNsYXNzTGlzdCk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlQ2hhbmdlU3RhcnQgPSAocmVhZHlVc2VyKSA9PiB7XG4gIGlmIChib2FyZC5jaGlsZEVsZW1lbnRDb3VudCAtIDEgPT09IHJlYWR5VXNlci5sZW5ndGgpIHtcbiAgICB0b0FsbG93U3RhcnQocmVhZHlCdG4uY2xhc3NMaXN0KTtcbiAgICBhZGRSZWFkeUJ0bkV2ZW50TEQoKTtcbiAgfSBlbHNlIHtcbiAgICB0b1N0YXJ0KHJlYWR5QnRuLmNsYXNzTGlzdCk7XG4gICAgcmVtb3ZlUmVhZHlCdG5FdmVudExEKCk7XG4gIH1cbn07XG5cbmlmIChyZWFkeUJ0bikge1xuICBhZGRSZWFkeUJ0bkV2ZW50KCk7XG59XG4iXX0=
},{"./chat":1,"./paint":5,"./sockets":7}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.getSocket = void 0;

var _notifications = require("./notifications");

var _chat = require("./chat");

var _paint = require("./paint");

var _player = require("./player");

var socket = null; // 언제든지 이 함수만 불러오면, socket을 가져올수 있음

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var initSockets = function initSockets(aSocket) {
  var _window = window,
      events = _window.events;
  socket = aSocket;
  socket.on(events.newUser, _notifications.handleNewUser);
  socket.on(events.disconnected, _notifications.handleDisconnected);
  socket.on(events.newMsg, _chat.handleNewMessage);
  socket.on(events.beganPath, _paint.handleBeganPath);
  socket.on(events.strokedPath, _paint.handleStrokedPath);
  socket.on(events.filled, _paint.handleFilled);
  socket.on(events.playerUpdate, _player.handlePlayerUpdate);
  socket.on(events.gameStarted, _player.handleGameStarted);
  socket.on(events.leaderNotif, _player.handleLeaderNotif);
  socket.on(events.leaderStartSet, _player.handleLeaderStartSet);
  socket.on(events.readyChanged, _player.handleChangeStart); // 리더에게만, leaderNotif 이벤트를 보낼수 있다, 그 이유는 io.to로 리더 Id를 지정해서 이벤트를 emit해주고 있기 때문.

  socket.on(events.gameEnded, _player.handleGameEnded);
  socket.on(events.gameStarting, _player.handleGameStarting);
  socket.on(events.timerRunning, _player.handleTimerRunning);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwiaW5pdFNvY2tldHMiLCJhU29ja2V0Iiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3RlZCIsIm5ld01zZyIsImhhbmRsZU5ld01lc3NhZ2UiLCJiZWdhblBhdGgiLCJoYW5kbGVCZWdhblBhdGgiLCJzdHJva2VkUGF0aCIsImhhbmRsZVN0cm9rZWRQYXRoIiwiZmlsbGVkIiwiaGFuZGxlRmlsbGVkIiwicGxheWVyVXBkYXRlIiwiaGFuZGxlUGxheWVyVXBkYXRlIiwiZ2FtZVN0YXJ0ZWQiLCJoYW5kbGVHYW1lU3RhcnRlZCIsImxlYWRlck5vdGlmIiwiaGFuZGxlTGVhZGVyTm90aWYiLCJsZWFkZXJTdGFydFNldCIsImhhbmRsZUxlYWRlclN0YXJ0U2V0IiwicmVhZHlDaGFuZ2VkIiwiaGFuZGxlQ2hhbmdlU3RhcnQiLCJnYW1lRW5kZWQiLCJoYW5kbGVHYW1lRW5kZWQiLCJnYW1lU3RhcnRpbmciLCJoYW5kbGVHYW1lU3RhcnRpbmciLCJ0aW1lclJ1bm5pbmciLCJoYW5kbGVUaW1lclJ1bm5pbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFXQSxJQUFJQSxNQUFNLEdBQUcsSUFBYixDLENBRUE7O0FBQ08sSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxTQUFNRCxNQUFOO0FBQUEsQ0FBbEI7Ozs7QUFFQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxPQUFELEVBQWE7QUFBQSxnQkFDbkJDLE1BRG1CO0FBQUEsTUFDOUJDLE1BRDhCLFdBQzlCQSxNQUQ4QjtBQUV0Q0wsRUFBQUEsTUFBTSxHQUFHRyxPQUFUO0FBQ0FILEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNFLE9BQWpCLEVBQTBCQyw0QkFBMUI7QUFDQVIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ0ksWUFBakIsRUFBK0JDLGlDQUEvQjtBQUNBVixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDTSxNQUFqQixFQUF5QkMsc0JBQXpCO0FBQ0FaLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNRLFNBQWpCLEVBQTRCQyxzQkFBNUI7QUFDQWQsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ1UsV0FBakIsRUFBOEJDLHdCQUE5QjtBQUNBaEIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ1ksTUFBakIsRUFBeUJDLG1CQUF6QjtBQUNBbEIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ2MsWUFBakIsRUFBK0JDLDBCQUEvQjtBQUNBcEIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ2dCLFdBQWpCLEVBQThCQyx5QkFBOUI7QUFDQXRCLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNrQixXQUFqQixFQUE4QkMseUJBQTlCO0FBQ0F4QixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDb0IsY0FBakIsRUFBaUNDLDRCQUFqQztBQUNBMUIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ3NCLFlBQWpCLEVBQStCQyx5QkFBL0IsRUFic0MsQ0FjdEM7O0FBQ0E1QixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDd0IsU0FBakIsRUFBNEJDLHVCQUE1QjtBQUNBOUIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQzBCLFlBQWpCLEVBQStCQywwQkFBL0I7QUFDQWhDLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUM0QixZQUFqQixFQUErQkMsMEJBQS9CO0FBQ0QsQ0FsQk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVOZXdVc2VyLCBoYW5kbGVEaXNjb25uZWN0ZWQgfSBmcm9tIFwiLi9ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQgeyBoYW5kbGVOZXdNZXNzYWdlIH0gZnJvbSBcIi4vY2hhdFwiO1xuaW1wb3J0IHsgaGFuZGxlQmVnYW5QYXRoLCBoYW5kbGVTdHJva2VkUGF0aCwgaGFuZGxlRmlsbGVkIH0gZnJvbSBcIi4vcGFpbnRcIjtcbmltcG9ydCB7XG4gIGhhbmRsZVBsYXllclVwZGF0ZSxcbiAgaGFuZGxlR2FtZVN0YXJ0ZWQsXG4gIGhhbmRsZUxlYWRlck5vdGlmLFxuICBoYW5kbGVHYW1lRW5kZWQsXG4gIGhhbmRsZUdhbWVTdGFydGluZyxcbiAgaGFuZGxlVGltZXJSdW5uaW5nLFxuICBoYW5kbGVDaGFuZ2VTdGFydCxcbiAgaGFuZGxlTGVhZGVyU3RhcnRTZXQsXG59IGZyb20gXCIuL3BsYXllclwiO1xuXG5sZXQgc29ja2V0ID0gbnVsbDtcblxuLy8g7Ja47KCc65Og7KeAIOydtCDtlajsiJjrp4wg67aI65+s7Jik66m0LCBzb2NrZXTsnYQg6rCA7KC47Jis7IiYIOyeiOydjFxuZXhwb3J0IGNvbnN0IGdldFNvY2tldCA9ICgpID0+IHNvY2tldDtcblxuZXhwb3J0IGNvbnN0IGluaXRTb2NrZXRzID0gKGFTb2NrZXQpID0+IHtcbiAgY29uc3QgeyBldmVudHMgfSA9IHdpbmRvdztcbiAgc29ja2V0ID0gYVNvY2tldDtcbiAgc29ja2V0Lm9uKGV2ZW50cy5uZXdVc2VyLCBoYW5kbGVOZXdVc2VyKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5kaXNjb25uZWN0ZWQsIGhhbmRsZURpc2Nvbm5lY3RlZCk7XG4gIHNvY2tldC5vbihldmVudHMubmV3TXNnLCBoYW5kbGVOZXdNZXNzYWdlKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5iZWdhblBhdGgsIGhhbmRsZUJlZ2FuUGF0aCk7XG4gIHNvY2tldC5vbihldmVudHMuc3Ryb2tlZFBhdGgsIGhhbmRsZVN0cm9rZWRQYXRoKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5maWxsZWQsIGhhbmRsZUZpbGxlZCk7XG4gIHNvY2tldC5vbihldmVudHMucGxheWVyVXBkYXRlLCBoYW5kbGVQbGF5ZXJVcGRhdGUpO1xuICBzb2NrZXQub24oZXZlbnRzLmdhbWVTdGFydGVkLCBoYW5kbGVHYW1lU3RhcnRlZCk7XG4gIHNvY2tldC5vbihldmVudHMubGVhZGVyTm90aWYsIGhhbmRsZUxlYWRlck5vdGlmKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5sZWFkZXJTdGFydFNldCwgaGFuZGxlTGVhZGVyU3RhcnRTZXQpO1xuICBzb2NrZXQub24oZXZlbnRzLnJlYWR5Q2hhbmdlZCwgaGFuZGxlQ2hhbmdlU3RhcnQpO1xuICAvLyDrpqzrjZTsl5Dqsozrp4wsIGxlYWRlck5vdGlmIOydtOuypO2KuOulvCDrs7TrgrzsiJgg7J6I64ukLCDqt7gg7J207Jyg64qUIGlvLnRv66GcIOumrOuNlCBJZOulvCDsp4DsoJXtlbTshJwg7J2067Kk7Yq466W8IGVtaXTtlbTso7zqs6Ag7J6I6riwIOuVjOusuC5cbiAgc29ja2V0Lm9uKGV2ZW50cy5nYW1lRW5kZWQsIGhhbmRsZUdhbWVFbmRlZCk7XG4gIHNvY2tldC5vbihldmVudHMuZ2FtZVN0YXJ0aW5nLCBoYW5kbGVHYW1lU3RhcnRpbmcpO1xuICBzb2NrZXQub24oZXZlbnRzLnRpbWVyUnVubmluZywgaGFuZGxlVGltZXJSdW5uaW5nKTtcbn07XG4iXX0=
},{"./chat":1,"./notifications":4,"./paint":5,"./player":6}]},{},[2])