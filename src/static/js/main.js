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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNDJlOGNkYjYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIEl0IGlzIGNvbXBpbGVkIHN0YXRpYyBtYWluLmpzIGFuZCBnbyB0byBob21lLnB1Z1xuXG5pbXBvcnQgXCIuL3NvY2tldHNcIjtcbmltcG9ydCBcIi4vbG9naW5cIjtcbmltcG9ydCBcIi4vY2hhdFwiO1xuaW1wb3J0IFwiLi9wYWludFwiO1xuIl19
},{"./chat":1,"./login":3,"./paint":5,"./sockets":7}],3:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY29sb3JzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNvbnRyb2xzIiwicmFuZ2UiLCJtb2RlIiwic2F2ZUJ0biIsInJlZnJlc2hCdG4iLCJDQU5WQVNfU0laRSIsIklOSVRJQUxfQ09MT1IiLCJ3aWR0aCIsImhlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJwYWludGluZyIsImZpbGxpbmciLCJzdG9wUGFpbnRpbmciLCJiZWdpblBhdGgiLCJ4IiwieSIsIm1vdmVUbyIsInN0cm9rZVBhdGgiLCJjb2xvciIsImN1cnJlbnRDb2xvciIsImxpbmVUbyIsInN0cm9rZSIsIm9uTW91c2VNb3ZlIiwiZXZlbnQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJoYW5kbGVDb2xvckNsaWNrIiwiQ29sb3IiLCJ0YXJnZXQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIm9uTW91c2VEb3duIiwic3RhcnRQYWludGluZyIsImhhbmRsZVJhbmdlQ2hhbmdlIiwic2l6ZSIsInZhbHVlIiwiaGFuZGxlTW9kZUNsaWNrIiwiaW5uZXJUZXh0IiwiZmlsbCIsImhhbmRsZUNhbnZhc0NsaWNrIiwiaGFuZGxlQ00iLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVNhdmVDbGljayIsImltYWdlIiwidG9EYXRhVVJMIiwibGluayIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiZG93bmxvYWQiLCJjbGljayIsImhhbmRsZVJlZnJlc2giLCJyZXN1bHQiLCJjb25maXJtIiwiY29uc29sZSIsImxvZyIsImNvbmZpcm1TYXZlRmlsZSIsImNvbmZpcm1TYXZlIiwiZGlzYWJsZUNhbnZhcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbmFibGVDYW52YXMiLCJhZGRFdmVudExpc3RlbmVyIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsInBvdGF0byIsImhhbmRsZUJlZ2FuUGF0aCIsImhhbmRsZVN0cm9rZWRQYXRoIiwiaGFuZGxlRmlsbGVkIiwiaGlkZUNvbnRyb2xzIiwiZGlzcGxheSIsInNob3dDb250cm9scyIsInJlc2V0Q2FudmFzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZjtBQUNBLElBQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFDQSxJQUFNQyxNQUFNLEdBQUdKLFFBQVEsQ0FBQ0ssc0JBQVQsQ0FBZ0MsU0FBaEMsQ0FBZjtBQUNBLElBQU1DLFFBQVEsR0FBR04sUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWpCO0FBQ0EsSUFBTU0sS0FBSyxHQUFHUCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBZDtBQUNBLElBQU1PLElBQUksR0FBR1IsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWI7QUFDQSxJQUFNUSxPQUFPLEdBQUdULFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFoQjtBQUNBLElBQU1TLFVBQVUsR0FBR1YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQW5CO0FBRUEsSUFBTVUsV0FBVyxHQUFHLEdBQXBCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLFNBQXRCLEMsQ0FBaUM7O0FBRWpDYixNQUFNLENBQUNjLEtBQVAsR0FBZSxHQUFmO0FBQ0FkLE1BQU0sQ0FBQ2UsTUFBUCxHQUFnQixHQUFoQjtBQUVBWixHQUFHLENBQUNhLFNBQUosR0FBZ0IsT0FBaEI7QUFDQWIsR0FBRyxDQUFDYyxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQkwsV0FBbkIsRUFBZ0NBLFdBQWhDO0FBRUFULEdBQUcsQ0FBQ2UsV0FBSixHQUFrQkwsYUFBbEI7QUFDQVYsR0FBRyxDQUFDYSxTQUFKLEdBQWdCSCxhQUFoQjtBQUVBVixHQUFHLENBQUNnQixTQUFKLEdBQWdCLEdBQWhCO0FBRUEsSUFBSUMsUUFBUSxHQUFHLEtBQWY7QUFDQSxJQUFJQyxPQUFPLEdBQUcsS0FBZDs7QUFFQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCRixFQUFBQSxRQUFRLEdBQUcsS0FBWDtBQUNELENBRkQ7O0FBSUEsSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDMUJ0QixFQUFBQSxHQUFHLENBQUNvQixTQUFKO0FBQ0FwQixFQUFBQSxHQUFHLENBQUN1QixNQUFKLENBQVdGLENBQVgsRUFBY0MsQ0FBZDtBQUNELENBSEQ7O0FBS0EsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0gsQ0FBRCxFQUFJQyxDQUFKLEVBQXdCO0FBQUEsTUFBakJHLEtBQWlCLHVFQUFULElBQVM7QUFDekMsTUFBSUMsWUFBWSxHQUFHMUIsR0FBRyxDQUFDZSxXQUF2Qjs7QUFDQSxNQUFJVSxLQUFLLElBQUksSUFBYixFQUFtQjtBQUNqQnpCLElBQUFBLEdBQUcsQ0FBQ2UsV0FBSixHQUFrQlUsS0FBbEI7QUFDRDs7QUFDRHpCLEVBQUFBLEdBQUcsQ0FBQzJCLE1BQUosQ0FBV04sQ0FBWCxFQUFjQyxDQUFkO0FBQ0F0QixFQUFBQSxHQUFHLENBQUM0QixNQUFKO0FBQ0E1QixFQUFBQSxHQUFHLENBQUNlLFdBQUosR0FBa0JXLFlBQWxCO0FBQ0QsQ0FSRDs7QUFVQSxJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFDN0IsTUFBTVQsQ0FBQyxHQUFHUyxLQUFLLENBQUNDLE9BQWhCO0FBQ0EsTUFBTVQsQ0FBQyxHQUFHUSxLQUFLLENBQUNFLE9BQWhCOztBQUVBLE1BQUksQ0FBQ2YsUUFBTCxFQUFlO0FBQ2JHLElBQUFBLFNBQVMsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLENBQVQ7QUFDQSw4QkFBWVcsSUFBWixDQUFpQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNmLFNBQS9CLEVBQTBDO0FBQUVDLE1BQUFBLENBQUMsRUFBREEsQ0FBRjtBQUFLQyxNQUFBQSxDQUFDLEVBQURBO0FBQUwsS0FBMUM7QUFDRCxHQUhELE1BR087QUFDTEUsSUFBQUEsVUFBVSxDQUFDSCxDQUFELEVBQUlDLENBQUosQ0FBVjtBQUNBLDhCQUFZVyxJQUFaLENBQWlCQyxNQUFNLENBQUNDLE1BQVAsQ0FBY1gsVUFBL0IsRUFBMkM7QUFDekNILE1BQUFBLENBQUMsRUFBREEsQ0FEeUM7QUFFekNDLE1BQUFBLENBQUMsRUFBREEsQ0FGeUM7QUFHekNHLE1BQUFBLEtBQUssRUFBRXpCLEdBQUcsQ0FBQ2U7QUFIOEIsS0FBM0M7QUFLRDtBQUNGLENBZkQ7O0FBaUJBLElBQU1xQixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNOLEtBQUQsRUFBVztBQUNsQyxNQUFNTyxLQUFLLEdBQUdQLEtBQUssQ0FBQ1EsTUFBTixDQUFhQyxLQUFiLENBQW1CQyxlQUFqQztBQUNBeEMsRUFBQUEsR0FBRyxDQUFDZSxXQUFKLEdBQWtCc0IsS0FBbEI7QUFDQXJDLEVBQUFBLEdBQUcsQ0FBQ2EsU0FBSixHQUFnQndCLEtBQWhCO0FBQ0QsQ0FKRDs7QUFNQSxJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDWCxLQUFELEVBQVc7QUFDN0JiLEVBQUFBLFFBQVEsR0FBRyxJQUFYO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNeUIsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCekIsRUFBQUEsUUFBUSxHQUFHLElBQVg7QUFDRCxDQUZEOztBQUlBLElBQU0wQixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNiLEtBQUQsRUFBVztBQUNuQyxNQUFNYyxJQUFJLEdBQUdkLEtBQUssQ0FBQ1EsTUFBTixDQUFhTyxLQUExQjtBQUNBN0MsRUFBQUEsR0FBRyxDQUFDZ0IsU0FBSixHQUFnQjRCLElBQWhCO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNRSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsTUFBSTVCLE9BQU8sS0FBSyxJQUFoQixFQUFzQjtBQUNwQlosSUFBQUEsSUFBSSxDQUFDeUMsU0FBTCxHQUFpQixNQUFqQjtBQUNBN0IsSUFBQUEsT0FBTyxHQUFHLEtBQVY7QUFDRCxHQUhELE1BR087QUFDTFosSUFBQUEsSUFBSSxDQUFDeUMsU0FBTCxHQUFpQixPQUFqQjtBQUNBN0IsSUFBQUEsT0FBTyxHQUFHLElBQVY7QUFDRDtBQUNGLENBUkQ7O0FBVUEsSUFBTThCLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQWtCO0FBQUEsTUFBakJ2QixLQUFpQix1RUFBVCxJQUFTO0FBQzdCLE1BQUlDLFlBQVksR0FBRzFCLEdBQUcsQ0FBQ2EsU0FBdkI7O0FBQ0EsTUFBSVksS0FBSyxJQUFJLElBQWIsRUFBbUI7QUFDakJ6QixJQUFBQSxHQUFHLENBQUNhLFNBQUosR0FBZ0JZLEtBQWhCO0FBQ0Q7O0FBQ0R6QixFQUFBQSxHQUFHLENBQUNjLFFBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CTCxXQUFuQixFQUFnQ0EsV0FBaEM7QUFDQVQsRUFBQUEsR0FBRyxDQUFDYSxTQUFKLEdBQWdCYSxZQUFoQjtBQUNELENBUEQ7O0FBU0EsSUFBTXVCLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QixNQUFJL0IsT0FBTyxLQUFLLElBQWhCLEVBQXNCO0FBQ3BCOEIsSUFBQUEsSUFBSTtBQUNKLDhCQUFZZixJQUFaLENBQWlCQyxNQUFNLENBQUNDLE1BQVAsQ0FBY2EsSUFBL0IsRUFBcUM7QUFBRXZCLE1BQUFBLEtBQUssRUFBRXpCLEdBQUcsQ0FBQ2E7QUFBYixLQUFyQztBQUNEO0FBQ0YsQ0FMRDs7QUFPQSxJQUFNcUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ3BCLEtBQUQsRUFBVztBQUMxQkEsRUFBQUEsS0FBSyxDQUFDcUIsY0FBTjtBQUNELENBRkQ7O0FBSUEsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLE1BQU1DLEtBQUssR0FBR3hELE1BQU0sQ0FBQ3lELFNBQVAsRUFBZDtBQUNBLE1BQU1DLElBQUksR0FBR3pELFFBQVEsQ0FBQzBELGFBQVQsQ0FBdUIsR0FBdkIsQ0FBYjtBQUNBRCxFQUFBQSxJQUFJLENBQUNFLElBQUwsR0FBWUosS0FBWjtBQUNBRSxFQUFBQSxJQUFJLENBQUNHLFFBQUwsR0FBZ0Isa0JBQWhCO0FBQ0FILEVBQUFBLElBQUksQ0FBQ0ksS0FBTDtBQUNELENBTkQ7O0FBUUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLE1BQU1DLE1BQU0sR0FBRzNCLE1BQU0sQ0FBQzRCLE9BQVAsQ0FBZSxxQ0FBZixDQUFmOztBQUVBLE1BQUlELE1BQUosRUFBWTtBQUNWM0MsSUFBQUEsT0FBTyxHQUFHLElBQVY7QUFDQWxCLElBQUFBLEdBQUcsQ0FBQ2EsU0FBSixHQUFnQixPQUFoQjtBQUNBb0MsSUFBQUEsaUJBQWlCLEdBSFAsQ0FLVjs7QUFDQS9CLElBQUFBLE9BQU8sR0FBRyxLQUFWO0FBQ0FsQixJQUFBQSxHQUFHLENBQUNhLFNBQUosR0FBZ0JILGFBQWhCO0FBQ0FWLElBQUFBLEdBQUcsQ0FBQ2UsV0FBSixHQUFrQkwsYUFBbEI7QUFDQVYsSUFBQUEsR0FBRyxDQUFDZ0IsU0FBSixHQUFnQixHQUFoQjtBQUNBWCxJQUFBQSxLQUFLLENBQUN3QyxLQUFOLEdBQWMsR0FBZDtBQUNELEdBWEQsTUFXTztBQUNMa0IsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksd0JBQVo7QUFDRDtBQUNGLENBakJEOztBQW1CQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsTUFBTUMsV0FBVyxHQUFHaEMsTUFBTSxDQUFDNEIsT0FBUCxDQUFlLHNDQUFmLENBQXBCOztBQUNBLE1BQUlJLFdBQUosRUFBaUI7QUFDZmQsSUFBQUEsZUFBZTtBQUNoQixHQUZELE1BRU8sQ0FDTjtBQUNGLENBTkQ7O0FBUU8sSUFBTWUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQ2pDdEUsRUFBQUEsTUFBTSxDQUFDdUUsbUJBQVAsQ0FBMkIsV0FBM0IsRUFBd0N2QyxXQUF4QztBQUNBaEMsRUFBQUEsTUFBTSxDQUFDdUUsbUJBQVAsQ0FBMkIsV0FBM0IsRUFBd0MxQixhQUF4QztBQUNBN0MsRUFBQUEsTUFBTSxDQUFDdUUsbUJBQVAsQ0FBMkIsWUFBM0IsRUFBeUNqRCxZQUF6QztBQUNBdEIsRUFBQUEsTUFBTSxDQUFDdUUsbUJBQVAsQ0FBMkIsU0FBM0IsRUFBc0NqRCxZQUF0QztBQUNBdEIsRUFBQUEsTUFBTSxDQUFDdUUsbUJBQVAsQ0FBMkIsT0FBM0IsRUFBb0NuQixpQkFBcEM7QUFDRCxDQU5NOzs7O0FBUUEsSUFBTW9CLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDaEN4RSxFQUFBQSxNQUFNLENBQUN5RSxnQkFBUCxDQUF3QixXQUF4QixFQUFxQ3pDLFdBQXJDO0FBQ0FoQyxFQUFBQSxNQUFNLENBQUN5RSxnQkFBUCxDQUF3QixXQUF4QixFQUFxQzVCLGFBQXJDO0FBQ0E3QyxFQUFBQSxNQUFNLENBQUN5RSxnQkFBUCxDQUF3QixZQUF4QixFQUFzQ25ELFlBQXRDO0FBQ0F0QixFQUFBQSxNQUFNLENBQUN5RSxnQkFBUCxDQUF3QixTQUF4QixFQUFtQ25ELFlBQW5DO0FBQ0F0QixFQUFBQSxNQUFNLENBQUN5RSxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ3JCLGlCQUFqQztBQUNELENBTk07OztBQVFQc0IsS0FBSyxDQUFDQyxJQUFOLENBQVd0RSxNQUFYLEVBQW1CdUUsT0FBbkIsQ0FBMkIsVUFBQ0MsTUFBRCxFQUFZO0FBQ3JDQSxFQUFBQSxNQUFNLENBQUNKLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDbEMsZ0JBQWpDO0FBQ0QsQ0FGRDs7QUFJQSxJQUFJL0IsS0FBSixFQUFXO0FBQ1RBLEVBQUFBLEtBQUssQ0FBQ2lFLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDM0IsaUJBQWhDO0FBQ0Q7O0FBRUQsSUFBSXJDLElBQUosRUFBVTtBQUNSQSxFQUFBQSxJQUFJLENBQUNnRSxnQkFBTCxDQUFzQixPQUF0QixFQUErQnhCLGVBQS9CO0FBQ0Q7O0FBRUQsSUFBSXZDLE9BQUosRUFBYTtBQUNYQSxFQUFBQSxPQUFPLENBQUMrRCxnQkFBUixDQUF5QixPQUF6QixFQUFrQ0wsZUFBbEM7QUFDRDs7QUFFRCxJQUFJekQsVUFBSixFQUFnQjtBQUNkQSxFQUFBQSxVQUFVLENBQUM4RCxnQkFBWCxDQUE0QixPQUE1QixFQUFxQ1YsYUFBckM7QUFDRDs7QUFFTSxJQUFNZSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsTUFBR3RELENBQUgsUUFBR0EsQ0FBSDtBQUFBLE1BQU1DLENBQU4sUUFBTUEsQ0FBTjtBQUFBLFNBQWNGLFNBQVMsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLENBQXZCO0FBQUEsQ0FBeEI7Ozs7QUFDQSxJQUFNc0QsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLE1BQUd2RCxDQUFILFNBQUdBLENBQUg7QUFBQSxNQUFNQyxDQUFOLFNBQU1BLENBQU47QUFBQSxNQUFTRyxLQUFULFNBQVNBLEtBQVQ7QUFBQSxTQUFxQkQsVUFBVSxDQUFDSCxDQUFELEVBQUlDLENBQUosRUFBT0csS0FBUCxDQUEvQjtBQUFBLENBQTFCOzs7O0FBQ0EsSUFBTW9ELFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsTUFBR3BELEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWV1QixJQUFJLENBQUN2QixLQUFELENBQW5CO0FBQUEsQ0FBckI7Ozs7QUFFQSxJQUFNcUQsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxTQUFPMUUsUUFBUSxDQUFDbUMsS0FBVCxDQUFld0MsT0FBZixHQUF5QixNQUFoQztBQUFBLENBQXJCOzs7O0FBQ0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxTQUFPNUUsUUFBUSxDQUFDbUMsS0FBVCxDQUFld0MsT0FBZixHQUF5QixNQUFoQztBQUFBLENBQXJCOzs7O0FBQ0EsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxTQUFNakMsSUFBSSxDQUFDLE1BQUQsQ0FBVjtBQUFBLENBQXBCOzs7O0FBRVAsSUFBSW5ELE1BQUosRUFBWTtBQUNWd0UsRUFBQUEsWUFBWSxHQURGLENBRVY7O0FBQ0F4RSxFQUFBQSxNQUFNLENBQUN5RSxnQkFBUCxDQUF3QixhQUF4QixFQUF1Q3BCLFFBQXZDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNDYW52YXNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuY29uc3QgY29sb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImpzQ29sb3JcIik7XG5jb25zdCBjb250cm9scyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNDb250cm9sc1wiKTtcbmNvbnN0IHJhbmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc1JhbmdlXCIpO1xuY29uc3QgbW9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNNb2RlXCIpO1xuY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNTYXZlXCIpO1xuY29uc3QgcmVmcmVzaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNSZWZyZXNoXCIpO1xuXG5jb25zdCBDQU5WQVNfU0laRSA9IDUwMDtcbmNvbnN0IElOSVRJQUxfQ09MT1IgPSBcIiMyYzJjMmNcIjsgLy8g6rKA7KCV7IOJXG5cbmNhbnZhcy53aWR0aCA9IDUwMDtcbmNhbnZhcy5oZWlnaHQgPSA1MDA7XG5cbmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG5jdHguZmlsbFJlY3QoMCwgMCwgQ0FOVkFTX1NJWkUsIENBTlZBU19TSVpFKTtcblxuY3R4LnN0cm9rZVN0eWxlID0gSU5JVElBTF9DT0xPUjtcbmN0eC5maWxsU3R5bGUgPSBJTklUSUFMX0NPTE9SO1xuXG5jdHgubGluZVdpZHRoID0gMi41O1xuXG5sZXQgcGFpbnRpbmcgPSBmYWxzZTtcbmxldCBmaWxsaW5nID0gZmFsc2U7XG5cbmNvbnN0IHN0b3BQYWludGluZyA9ICgpID0+IHtcbiAgcGFpbnRpbmcgPSBmYWxzZTtcbn07XG5cbmNvbnN0IGJlZ2luUGF0aCA9ICh4LCB5KSA9PiB7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbyh4LCB5KTtcbn07XG5cbmNvbnN0IHN0cm9rZVBhdGggPSAoeCwgeSwgY29sb3IgPSBudWxsKSA9PiB7XG4gIGxldCBjdXJyZW50Q29sb3IgPSBjdHguc3Ryb2tlU3R5bGU7XG4gIGlmIChjb2xvciAhPSBudWxsKSB7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gIH1cbiAgY3R4LmxpbmVUbyh4LCB5KTtcbiAgY3R4LnN0cm9rZSgpO1xuICBjdHguc3Ryb2tlU3R5bGUgPSBjdXJyZW50Q29sb3I7XG59O1xuXG5jb25zdCBvbk1vdXNlTW92ZSA9IChldmVudCkgPT4ge1xuICBjb25zdCB4ID0gZXZlbnQub2Zmc2V0WDtcbiAgY29uc3QgeSA9IGV2ZW50Lm9mZnNldFk7XG5cbiAgaWYgKCFwYWludGluZykge1xuICAgIGJlZ2luUGF0aCh4LCB5KTtcbiAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuYmVnaW5QYXRoLCB7IHgsIHkgfSk7XG4gIH0gZWxzZSB7XG4gICAgc3Ryb2tlUGF0aCh4LCB5KTtcbiAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuc3Ryb2tlUGF0aCwge1xuICAgICAgeCxcbiAgICAgIHksXG4gICAgICBjb2xvcjogY3R4LnN0cm9rZVN0eWxlLFxuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVDb2xvckNsaWNrID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IENvbG9yID0gZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgY3R4LnN0cm9rZVN0eWxlID0gQ29sb3I7XG4gIGN0eC5maWxsU3R5bGUgPSBDb2xvcjtcbn07XG5cbmNvbnN0IG9uTW91c2VEb3duID0gKGV2ZW50KSA9PiB7XG4gIHBhaW50aW5nID0gdHJ1ZTtcbn07XG5cbmNvbnN0IHN0YXJ0UGFpbnRpbmcgPSAoKSA9PiB7XG4gIHBhaW50aW5nID0gdHJ1ZTtcbn07XG5cbmNvbnN0IGhhbmRsZVJhbmdlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHNpemUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gIGN0eC5saW5lV2lkdGggPSBzaXplO1xufTtcblxuY29uc3QgaGFuZGxlTW9kZUNsaWNrID0gKCkgPT4ge1xuICBpZiAoZmlsbGluZyA9PT0gdHJ1ZSkge1xuICAgIG1vZGUuaW5uZXJUZXh0ID0gXCJGaWxsXCI7XG4gICAgZmlsbGluZyA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIG1vZGUuaW5uZXJUZXh0ID0gXCJQYWludFwiO1xuICAgIGZpbGxpbmcgPSB0cnVlO1xuICB9XG59O1xuXG5jb25zdCBmaWxsID0gKGNvbG9yID0gbnVsbCkgPT4ge1xuICBsZXQgY3VycmVudENvbG9yID0gY3R4LmZpbGxTdHlsZTtcbiAgaWYgKGNvbG9yICE9IG51bGwpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIH1cbiAgY3R4LmZpbGxSZWN0KDAsIDAsIENBTlZBU19TSVpFLCBDQU5WQVNfU0laRSk7XG4gIGN0eC5maWxsU3R5bGUgPSBjdXJyZW50Q29sb3I7XG59O1xuXG5jb25zdCBoYW5kbGVDYW52YXNDbGljayA9ICgpID0+IHtcbiAgaWYgKGZpbGxpbmcgPT09IHRydWUpIHtcbiAgICBmaWxsKCk7XG4gICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLmZpbGwsIHsgY29sb3I6IGN0eC5maWxsU3R5bGUgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGhhbmRsZUNNID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59O1xuXG5jb25zdCBoYW5kbGVTYXZlQ2xpY2sgPSAoKSA9PiB7XG4gIGNvbnN0IGltYWdlID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGxpbmsuaHJlZiA9IGltYWdlO1xuICBsaW5rLmRvd25sb2FkID0gXCJQYWludEpTX2Z3YW5nZ3VzXCI7XG4gIGxpbmsuY2xpY2soKTtcbn07XG5cbmNvbnN0IGhhbmRsZVJlZnJlc2ggPSAoKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IHdpbmRvdy5jb25maXJtKFwiQVJFIFlPVSBTVVJFIFJFRlJFU0hJTkcgQUxMIFNUVUZGPyBcIik7XG5cbiAgaWYgKHJlc3VsdCkge1xuICAgIGZpbGxpbmcgPSB0cnVlO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgaGFuZGxlQ2FudmFzQ2xpY2soKTtcblxuICAgIC8vIGluaXRpYWxpemluZyBhbGwgc2V0IVxuICAgIGZpbGxpbmcgPSBmYWxzZTtcbiAgICBjdHguZmlsbFN0eWxlID0gSU5JVElBTF9DT0xPUjtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBJTklUSUFMX0NPTE9SO1xuICAgIGN0eC5saW5lV2lkdGggPSAyLjU7XG4gICAgcmFuZ2UudmFsdWUgPSAyLjU7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJ5b3UgY2xpY2tlZCAnY2FuY2VsJyAhXCIpO1xuICB9XG59O1xuXG5jb25zdCBjb25maXJtU2F2ZUZpbGUgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbmZpcm1TYXZlID0gd2luZG93LmNvbmZpcm0oXCJBUkUgWU9VIFNVUkUgU0FWSU5HIFRISVMgUEFJTlRJTkcgPyBcIik7XG4gIGlmIChjb25maXJtU2F2ZSkge1xuICAgIGhhbmRsZVNhdmVDbGljaygpO1xuICB9IGVsc2Uge1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZUNhbnZhcyA9ICgpID0+IHtcbiAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBzdGFydFBhaW50aW5nKTtcbiAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHN0b3BQYWludGluZyk7XG4gIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFpbnRpbmcpO1xuICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNhbnZhc0NsaWNrKTtcbn07XG5cbmV4cG9ydCBjb25zdCBlbmFibGVDYW52YXMgPSAoKSA9PiB7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgc3RhcnRQYWludGluZyk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBzdG9wUGFpbnRpbmcpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFBhaW50aW5nKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDYW52YXNDbGljayk7XG59O1xuXG5BcnJheS5mcm9tKGNvbG9ycykuZm9yRWFjaCgocG90YXRvKSA9PiB7XG4gIHBvdGF0by5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ29sb3JDbGljayk7XG59KTtcblxuaWYgKHJhbmdlKSB7XG4gIHJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBoYW5kbGVSYW5nZUNoYW5nZSk7XG59XG5cbmlmIChtb2RlKSB7XG4gIG1vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU1vZGVDbGljayk7XG59XG5cbmlmIChzYXZlQnRuKSB7XG4gIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbmZpcm1TYXZlRmlsZSk7XG59XG5cbmlmIChyZWZyZXNoQnRuKSB7XG4gIHJlZnJlc2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVJlZnJlc2gpO1xufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlQmVnYW5QYXRoID0gKHsgeCwgeSB9KSA9PiBiZWdpblBhdGgoeCwgeSk7XG5leHBvcnQgY29uc3QgaGFuZGxlU3Ryb2tlZFBhdGggPSAoeyB4LCB5LCBjb2xvciB9KSA9PiBzdHJva2VQYXRoKHgsIHksIGNvbG9yKTtcbmV4cG9ydCBjb25zdCBoYW5kbGVGaWxsZWQgPSAoeyBjb2xvciB9KSA9PiBmaWxsKGNvbG9yKTtcblxuZXhwb3J0IGNvbnN0IGhpZGVDb250cm9scyA9ICgpID0+IChjb250cm9scy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpO1xuZXhwb3J0IGNvbnN0IHNob3dDb250cm9scyA9ICgpID0+IChjb250cm9scy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCIpO1xuZXhwb3J0IGNvbnN0IHJlc2V0Q2FudmFzID0gKCkgPT4gZmlsbChcIiNmZmZcIik7XG5cbmlmIChjYW52YXMpIHtcbiAgZW5hYmxlQ2FudmFzKCk7XG4gIC8vIGhpZGVDb250cm9scygpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIGhhbmRsZUNNKTtcbn1cbiJdfQ==
},{"./sockets":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendReadyBtn = exports.handleTimerRunning = exports.handleGameStarting = exports.handleGameEnded = exports.handleLeaderNotif = exports.handleGameStarted = exports.handlePlayerUpdate = void 0;

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
};

exports.handlePlayerUpdate = handlePlayerUpdate;

var handleGameStarted = function handleGameStarted() {
  setNotif("Guess What ? ");
  (0, _paint.disableCanvas)();
  (0, _paint.hideControls)();
  (0, _chat.enableChat)();
};

exports.handleGameStarted = handleGameStarted;

var handleLeaderNotif = function handleLeaderNotif(_ref2) {
  var word = _ref2.word;
  // This is only for leader Browser.
  setNotif("");
  (0, _paint.enableCanvas)();
  (0, _paint.showControls)();
  (0, _chat.disableChat)();
  notifs.innerText = "You are Leader, Paint : ".concat(word);
};

exports.handleLeaderNotif = handleLeaderNotif;

var handleGameEnded = function handleGameEnded(_ref3) {
  var TOTAL_TIME = _ref3.TOTAL_TIME;
  setNotif("Game Ended ! ");
  (0, _paint.disableCanvas)();
  (0, _chat.disableChat)();
  (0, _paint.hideControls)();
  (0, _paint.resetCanvas)();
  setTimerTime(TOTAL_TIME);
};

exports.handleGameEnded = handleGameEnded;

var handleGameStarting = function handleGameStarting() {
  return setNotif("Game will be starting soon.");
};

exports.handleGameStarting = handleGameStarting;

var handleTimerRunning = function handleTimerRunning(_ref4) {
  var sendTime = _ref4.sendTime;
  setTimerTime(sendTime);
};

exports.handleTimerRunning = handleTimerRunning;

var sendReadyBtn = function sendReadyBtn(readyStatus) {
  console.log(readyStatus);
};

exports.sendReadyBtn = sendReadyBtn;

var sendReadyStatus = function sendReadyStatus(readyClass) {
  (0, _sockets.getSocket)().emit(window.events.readyBtn, {
    readyClass: readyClass
  });
};

var readyStatus = function readyStatus(classList) {
  var len = classList.length;
  var targetClass = classList[len - 1];

  if (targetClass === NOT_READY) {
    readyBtn.innerText = "Perfect !";
    classList.remove(NOT_READY);
    classList.add(ON_READY);
  } else if (targetClass === ON_READY) {
    readyBtn.innerText = "Click to Ready !";
    classList.remove(ON_READY);
    classList.add(NOT_READY);
  }

  var currentReadyClass = classList[len - 1];
  sendReadyStatus(currentReadyClass);
};

var handleReadyBtn = function handleReadyBtn(event) {
  var classList = event.target.classList;
  readyStatus(classList); // const readyStaus = null;
};

if (readyBtn) {
  readyBtn.addEventListener("click", handleReadyBtn);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci5qcyJdLCJuYW1lcyI6WyJib2FyZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJub3RpZnMiLCJzdGF0dXNUaW1lIiwicGxheWVyTnVtYmVyIiwicmVhZHlCdG4iLCJPTl9SRUFEWSIsIk5PVF9SRUFEWSIsIlNUQVJUIiwic2V0Tm90aWYiLCJ0ZXh0IiwiaW5uZXJUZXh0Iiwic2V0VGltZXJUaW1lIiwic2V0UGxheWVyTnVtYmVyIiwic29ja2V0cyIsIlN0cmluZyIsImxlbmd0aCIsImFkZFBsYXllcnMiLCJwbGF5ZXJzIiwiaW5uZXJIVE1MIiwiZm9yRWFjaCIsInBsYXllciIsInBsYXllckVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwicG9pbnRFbGVtZW50Iiwibmlja25hbWVFbGVtZW50Iiwibmlja25hbWUiLCJwb2ludHMiLCJhcHBlbmRDaGlsZCIsImhhbmRsZVBsYXllclVwZGF0ZSIsIlRPVEFMX1RJTUUiLCJoYW5kbGVHYW1lU3RhcnRlZCIsImhhbmRsZUxlYWRlck5vdGlmIiwid29yZCIsImhhbmRsZUdhbWVFbmRlZCIsImhhbmRsZUdhbWVTdGFydGluZyIsImhhbmRsZVRpbWVyUnVubmluZyIsInNlbmRUaW1lIiwic2VuZFJlYWR5QnRuIiwicmVhZHlTdGF0dXMiLCJjb25zb2xlIiwibG9nIiwic2VuZFJlYWR5U3RhdHVzIiwicmVhZHlDbGFzcyIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJjbGFzc0xpc3QiLCJsZW4iLCJ0YXJnZXRDbGFzcyIsInJlbW92ZSIsImFkZCIsImN1cnJlbnRSZWFkeUNsYXNzIiwiaGFuZGxlUmVhZHlCdG4iLCJldmVudCIsInRhcmdldCIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFPQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFkO0FBQ0EsSUFBTUMsTUFBTSxH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UyxDQUFDQyxHQUFHLEdBQUcsQ0FBUCxDQUE3Qjs7QUFDQSxNQUFJQyxXQUFXLEtBQUszQyxTQUFwQixFQUErQjtBQUM3QkYsSUFBQUEsUUFBUSxDQUFDTSxTQUFULEdBQXFCLFdBQXJCO0FBQ0FxQyxJQUFBQSxTQUFTLENBQUNHLE1BQVYsQ0FBaUI1QyxTQUFqQjtBQUNBeUMsSUFBQUEsU0FBUyxDQUFDSSxHQUFWLENBQWM5QyxRQUFkO0FBQ0QsR0FKRCxNQUlPLElBQUk0QyxXQUFXLEtBQUs1QyxRQUFwQixFQUE4QjtBQUNuQ0QsSUFBQUEsUUFBUSxDQUFDTSxTQUFULEdBQXFCLGtCQUFyQjtBQUNBcUMsSUFBQUEsU0FBUyxDQUFDRyxNQUFWLENBQWlCN0MsUUFBakI7QUFDQTBDLElBQUFBLFNBQVMsQ0FBQ0ksR0FBVixDQUFjN0MsU0FBZDtBQUNEOztBQUNELE1BQU04QyxpQkFBaUIsR0FBR0wsU0FBUyxDQUFDQyxHQUFHLEdBQUcsQ0FBUCxDQUFuQztBQUNBTixFQUFBQSxlQUFlLENBQUNVLGlCQUFELENBQWY7QUFDRCxDQWREOztBQWdCQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BRXBCUCxTQUZvQixHQUc1Qk8sS0FINEIsQ0FFOUJDLE1BRjhCLENBRXBCUixTQUZvQjtBQUloQ1IsRUFBQUEsV0FBVyxDQUFDUSxTQUFELENBQVgsQ0FKZ0MsQ0FNaEM7QUFDRCxDQVBEOztBQVNBLElBQUkzQyxRQUFKLEVBQWM7QUFDWkEsRUFBQUEsUUFBUSxDQUFDb0QsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUNILGNBQW5DO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkaXNhYmxlQ2hhdCwgZW5hYmxlQ2hhdCB9IGZyb20gXCIuL2NoYXRcIjtcbmltcG9ydCB7XG4gIGRpc2FibGVDYW52YXMsXG4gIGVuYWJsZUNhbnZhcyxcbiAgaGlkZUNvbnRyb2xzLFxuICByZXNldENhbnZhcyxcbiAgc2hvd0NvbnRyb2xzLFxufSBmcm9tIFwiLi9wYWludFwiO1xuaW1wb3J0IHsgZ2V0U29ja2V0IH0gZnJvbSBcIi4vc29ja2V0c1wiO1xuXG5jb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNQQm9hcmRcIik7XG5jb25zdCBub3RpZnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTm90aWZzXCIpO1xuY29uc3Qgc3RhdHVzVGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNTdGF0dXNUaW1lXCIpO1xuY29uc3QgcGxheWVyTnVtYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc1BsYXllck51bWJlclwiKTtcbmNvbnN0IHJlYWR5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc1JlYWR5QnRuXCIpO1xuXG5jb25zdCBPTl9SRUFEWSA9IFwicmVhZHlcIjtcbmNvbnN0IE5PVF9SRUFEWSA9IFwibm90UmVhZHlcIjtcbmNvbnN0IFNUQVJUID0gXCJzdGFydFwiO1xuXG5jb25zdCBzZXROb3RpZiA9ICh0ZXh0KSA9PiB7XG4gIG5vdGlmcy5pbm5lclRleHQgPSBcIiBcIjtcbiAgbm90aWZzLmlubmVyVGV4dCA9IHRleHQ7XG59O1xuXG5jb25zdCBzZXRUaW1lclRpbWUgPSAodGV4dCkgPT4ge1xuICBzdGF0dXNUaW1lLmlubmVyVGV4dCA9IFwiXCI7XG4gIHN0YXR1c1RpbWUuaW5uZXJUZXh0ID0gdGV4dDtcbn07XG5cbmNvbnN0IHNldFBsYXllck51bWJlciA9IChzb2NrZXRzKSA9PiB7XG4gIHBsYXllck51bWJlci5pbm5lclRleHQgPSBcIlwiO1xuICBwbGF5ZXJOdW1iZXIuaW5uZXJUZXh0ID0gU3RyaW5nKHNvY2tldHMubGVuZ3RoKTtcbn07XG5cbmNvbnN0IGFkZFBsYXllcnMgPSAocGxheWVycykgPT4ge1xuICBib2FyZC5pbm5lckhUTUwgPSBcIlwiO1xuICBwbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgIGNvbnN0IHBsYXllckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBsYXllckVsZW1lbnQuY2xhc3NOYW1lID0gXCJwbGF5ZXJfX2VsZW1lbnRcIjtcbiAgICBjb25zdCBwb2ludEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjb25zdCBuaWNrbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBuaWNrbmFtZUVsZW1lbnQuaW5uZXJUZXh0ID0gYCR7cGxheWVyLm5pY2tuYW1lfWA7XG4gICAgcG9pbnRFbGVtZW50LmlubmVyVGV4dCA9IGDwn5GRICAke3BsYXllci5wb2ludHN9YDtcbiAgICBwbGF5ZXJFbGVtZW50LmFwcGVuZENoaWxkKG5pY2tuYW1lRWxlbWVudCk7XG4gICAgcGxheWVyRWxlbWVudC5hcHBlbmRDaGlsZChwb2ludEVsZW1lbnQpO1xuICAgIGJvYXJkLmFwcGVuZENoaWxkKHBsYXllckVsZW1lbnQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVQbGF5ZXJVcGRhdGUgPSAoeyBzb2NrZXRzLCBUT1RBTF9USU1FIH0pID0+IHtcbiAgaGlkZUNvbnRyb2xzKCk7XG4gIGFkZFBsYXllcnMoc29ja2V0cyk7XG4gIHNldFBsYXllck51bWJlcihzb2NrZXRzKTtcbiAgaWYgKHNvY2tldHMubGVuZ3RoID09PSAxKSB7XG4gICAgc2V0Tm90aWYoXCJXYWl0aW5nIFBhaW50ZXJzIPCfkajwn4+74oCN8J+OqPCfkanwn4+74oCN8J+OqCBcIik7XG4gICAgZGlzYWJsZUNoYXQoKTtcbiAgfVxuICBzZXRUaW1lclRpbWUoVE9UQUxfVElNRSk7XG59O1xuZXhwb3J0IGNvbnN0IGhhbmRsZUdhbWVTdGFydGVkID0gKCkgPT4ge1xuICBzZXROb3RpZihcIkd1ZXNzIFdoYXQgPyBcIik7XG4gIGRpc2FibGVDYW52YXMoKTtcbiAgaGlkZUNvbnRyb2xzKCk7XG4gIGVuYWJsZUNoYXQoKTtcbn07XG5leHBvcnQgY29uc3QgaGFuZGxlTGVhZGVyTm90aWYgPSAoeyB3b3JkIH0pID0+IHtcbiAgLy8gVGhpcyBpcyBvbmx5IGZvciBsZWFkZXIgQnJvd3Nlci5cbiAgc2V0Tm90aWYoXCJcIik7XG4gIGVuYWJsZUNhbnZhcygpO1xuICBzaG93Q29udHJvbHMoKTtcbiAgZGlzYWJsZUNoYXQoKTtcbiAgbm90aWZzLmlubmVyVGV4dCA9IGBZb3UgYXJlIExlYWRlciwgUGFpbnQgOiAke3dvcmR9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVHYW1lRW5kZWQgPSAoeyBUT1RBTF9USU1FIH0pID0+IHtcbiAgc2V0Tm90aWYoXCJHYW1lIEVuZGVkICEgXCIpO1xuICBkaXNhYmxlQ2FudmFzKCk7XG4gIGRpc2FibGVDaGF0KCk7XG4gIGhpZGVDb250cm9scygpO1xuICByZXNldENhbnZhcygpO1xuICBzZXRUaW1lclRpbWUoVE9UQUxfVElNRSk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlR2FtZVN0YXJ0aW5nID0gKCkgPT4gc2V0Tm90aWYoXCJHYW1lIHdpbGwgYmUgc3RhcnRpbmcgc29vbi5cIik7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVUaW1lclJ1bm5pbmcgPSAoeyBzZW5kVGltZSB9KSA9PiB7XG4gIHNldFRpbWVyVGltZShzZW5kVGltZSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VuZFJlYWR5QnRuID0gKHJlYWR5U3RhdHVzKSA9PiB7XG4gIGNvbnNvbGUubG9nKHJlYWR5U3RhdHVzKTtcbn07XG5cbmNvbnN0IHNlbmRSZWFkeVN0YXR1cyA9IChyZWFkeUNsYXNzKSA9PiB7XG4gIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5yZWFkeUJ0biwgeyByZWFkeUNsYXNzIH0pO1xufTtcblxuY29uc3QgcmVhZHlTdGF0dXMgPSAoY2xhc3NMaXN0KSA9PiB7XG4gIGNvbnN0IGxlbiA9IGNsYXNzTGlzdC5sZW5ndGg7XG4gIGNvbnN0IHRhcmdldENsYXNzID0gY2xhc3NMaXN0W2xlbiAtIDFdO1xuICBpZiAodGFyZ2V0Q2xhc3MgPT09IE5PVF9SRUFEWSkge1xuICAgIHJlYWR5QnRuLmlubmVyVGV4dCA9IFwiUGVyZmVjdCAhXCI7XG4gICAgY2xhc3NMaXN0LnJlbW92ZShOT1RfUkVBRFkpO1xuICAgIGNsYXNzTGlzdC5hZGQoT05fUkVBRFkpO1xuICB9IGVsc2UgaWYgKHRhcmdldENsYXNzID09PSBPTl9SRUFEWSkge1xuICAgIHJlYWR5QnRuLmlubmVyVGV4dCA9IFwiQ2xpY2sgdG8gUmVhZHkgIVwiO1xuICAgIGNsYXNzTGlzdC5yZW1vdmUoT05fUkVBRFkpO1xuICAgIGNsYXNzTGlzdC5hZGQoTk9UX1JFQURZKTtcbiAgfVxuICBjb25zdCBjdXJyZW50UmVhZHlDbGFzcyA9IGNsYXNzTGlzdFtsZW4gLSAxXTtcbiAgc2VuZFJlYWR5U3RhdHVzKGN1cnJlbnRSZWFkeUNsYXNzKTtcbn07XG5cbmNvbnN0IGhhbmRsZVJlYWR5QnRuID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0YXJnZXQ6IHsgY2xhc3NMaXN0IH0sXG4gIH0gPSBldmVudDtcbiAgcmVhZHlTdGF0dXMoY2xhc3NMaXN0KTtcblxuICAvLyBjb25zdCByZWFkeVN0YXVzID0gbnVsbDtcbn07XG5cbmlmIChyZWFkeUJ0bikge1xuICByZWFkeUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUmVhZHlCdG4pO1xufVxuIl19
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
  socket.on(events.leaderNotif, _player.handleLeaderNotif); // 리더에게만, leaderNotif 이벤트를 보낼수 있다, 그 이유는 io.to로 리더 Id를 지정해서 이벤트를 emit해주고 있기 때문.

  socket.on(events.gameEnded, _player.handleGameEnded);
  socket.on(events.gameStarting, _player.handleGameStarting);
  socket.on(events.timerRunning, _player.handleTimerRunning);
}; // 상대방 유저에게 연결해서 뭔가 액션을 표시하기 위해서는, initSockets에서 window.events로 들어오는 이벤트를 통해서 전달되야한다.


exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwiaW5pdFNvY2tldHMiLCJhU29ja2V0Iiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3RlZCIsIm5ld01zZyIsImhhbmRsZU5ld01lc3NhZ2UiLCJiZWdhblBhdGgiLCJoYW5kbGVCZWdhblBhdGgiLCJzdHJva2VkUGF0aCIsImhhbmRsZVN0cm9rZWRQYXRoIiwiZmlsbGVkIiwiaGFuZGxlRmlsbGVkIiwicGxheWVyVXBkYXRlIiwiaGFuZGxlUGxheWVyVXBkYXRlIiwiZ2FtZVN0YXJ0ZWQiLCJoYW5kbGVHYW1lU3RhcnRlZCIsImxlYWRlck5vdGlmIiwiaGFuZGxlTGVhZGVyTm90aWYiLCJnYW1lRW5kZWQiLCJoYW5kbGVHYW1lRW5kZWQiLCJnYW1lU3RhcnRpbmciLCJoYW5kbGVHYW1lU3RhcnRpbmciLCJ0aW1lclJ1bm5pbmciLCJoYW5kbGVUaW1lclJ1bm5pbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFTQSxJQUFJQSxNQUFNLEdBQUcsSUFBYixDLENBRUE7O0FBQ08sSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxTQUFNRCxNQUFOO0FBQUEsQ0FBbEI7Ozs7QUFFQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxPQUFELEVBQWE7QUFBQSxnQkFDbkJDLE1BRG1CO0FBQUEsTUFDOUJDLE1BRDhCLFdBQzlCQSxNQUQ4QjtBQUV0Q0wsRUFBQUEsTUFBTSxHQUFHRyxPQUFUO0FBQ0FILEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNFLE9BQWpCLEVBQTBCQyw0QkFBMUI7QUFDQVIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ0ksWUFBakIsRUFBK0JDLGlDQUEvQjtBQUNBVixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDTSxNQUFqQixFQUF5QkMsc0JBQXpCO0FBQ0FaLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNRLFNBQWpCLEVBQTRCQyxzQkFBNUI7QUFDQWQsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ1UsV0FBakIsRUFBOEJDLHdCQUE5QjtBQUNBaEIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ1ksTUFBakIsRUFBeUJDLG1CQUF6QjtBQUNBbEIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ2MsWUFBakIsRUFBK0JDLDBCQUEvQjtBQUNBcEIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ2dCLFdBQWpCLEVBQThCQyx5QkFBOUI7QUFDQXRCLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNrQixXQUFqQixFQUE4QkMseUJBQTlCLEVBWHNDLENBWXRDOztBQUNBeEIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ29CLFNBQWpCLEVBQTRCQyx1QkFBNUI7QUFDQTFCLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNzQixZQUFqQixFQUErQkMsMEJBQS9CO0FBQ0E1QixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDd0IsWUFBakIsRUFBK0JDLDBCQUEvQjtBQUNELENBaEJNLEMsQ0FrQlAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVOZXdVc2VyLCBoYW5kbGVEaXNjb25uZWN0ZWQgfSBmcm9tIFwiLi9ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQgeyBoYW5kbGVOZXdNZXNzYWdlIH0gZnJvbSBcIi4vY2hhdFwiO1xuaW1wb3J0IHsgaGFuZGxlQmVnYW5QYXRoLCBoYW5kbGVTdHJva2VkUGF0aCwgaGFuZGxlRmlsbGVkIH0gZnJvbSBcIi4vcGFpbnRcIjtcbmltcG9ydCB7XG4gIGhhbmRsZVBsYXllclVwZGF0ZSxcbiAgaGFuZGxlR2FtZVN0YXJ0ZWQsXG4gIGhhbmRsZUxlYWRlck5vdGlmLFxuICBoYW5kbGVHYW1lRW5kZWQsXG4gIGhhbmRsZUdhbWVTdGFydGluZyxcbiAgaGFuZGxlVGltZXJSdW5uaW5nLFxufSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxubGV0IHNvY2tldCA9IG51bGw7XG5cbi8vIOyWuOygnOuToOyngCDsnbQg7ZWo7IiY66eMIOu2iOufrOyYpOuptCwgc29ja2V07J2EIOqwgOyguOyYrOyImCDsnojsnYxcbmV4cG9ydCBjb25zdCBnZXRTb2NrZXQgPSAoKSA9PiBzb2NrZXQ7XG5cbmV4cG9ydCBjb25zdCBpbml0U29ja2V0cyA9IChhU29ja2V0KSA9PiB7XG4gIGNvbnN0IHsgZXZlbnRzIH0gPSB3aW5kb3c7XG4gIHNvY2tldCA9IGFTb2NrZXQ7XG4gIHNvY2tldC5vbihldmVudHMubmV3VXNlciwgaGFuZGxlTmV3VXNlcik7XG4gIHNvY2tldC5vbihldmVudHMuZGlzY29ubmVjdGVkLCBoYW5kbGVEaXNjb25uZWN0ZWQpO1xuICBzb2NrZXQub24oZXZlbnRzLm5ld01zZywgaGFuZGxlTmV3TWVzc2FnZSk7XG4gIHNvY2tldC5vbihldmVudHMuYmVnYW5QYXRoLCBoYW5kbGVCZWdhblBhdGgpO1xuICBzb2NrZXQub24oZXZlbnRzLnN0cm9rZWRQYXRoLCBoYW5kbGVTdHJva2VkUGF0aCk7XG4gIHNvY2tldC5vbihldmVudHMuZmlsbGVkLCBoYW5kbGVGaWxsZWQpO1xuICBzb2NrZXQub24oZXZlbnRzLnBsYXllclVwZGF0ZSwgaGFuZGxlUGxheWVyVXBkYXRlKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5nYW1lU3RhcnRlZCwgaGFuZGxlR2FtZVN0YXJ0ZWQpO1xuICBzb2NrZXQub24oZXZlbnRzLmxlYWRlck5vdGlmLCBoYW5kbGVMZWFkZXJOb3RpZik7XG4gIC8vIOumrOuNlOyXkOqyjOunjCwgbGVhZGVyTm90aWYg7J2067Kk7Yq466W8IOuztOuCvOyImCDsnojri6QsIOq3uCDsnbTsnKDripQgaW8udG/roZwg66as642UIElk66W8IOyngOygle2VtOyEnCDsnbTrsqTtirjrpbwgZW1pdO2VtOyjvOqzoCDsnojquLAg65WM66y4LlxuICBzb2NrZXQub24oZXZlbnRzLmdhbWVFbmRlZCwgaGFuZGxlR2FtZUVuZGVkKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5nYW1lU3RhcnRpbmcsIGhhbmRsZUdhbWVTdGFydGluZyk7XG4gIHNvY2tldC5vbihldmVudHMudGltZXJSdW5uaW5nLCBoYW5kbGVUaW1lclJ1bm5pbmcpO1xufTtcblxuLy8g7IOB64yA67CpIOycoOyggOyXkOqyjCDsl7DqsrDtlbTshJwg662U6rCAIOyVoeyFmOydhCDtkZzsi5ztlZjquLAg7JyE7ZW07ISc64qULCBpbml0U29ja2V0c+yXkOyEnCB3aW5kb3cuZXZlbnRz66GcIOuTpOyWtOyYpOuKlCDsnbTrsqTtirjrpbwg7Ya17ZW07IScIOyghOuLrOuQmOyVvO2VnOuLpC5cbiJdfQ==
},{"./chat":1,"./notifications":4,"./paint":5,"./player":6}]},{},[2])