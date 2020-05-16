(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewMessage = void 0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZW5kTXNnIiwiYXBwZW5kTXNnIiwidGV4dCIsIm5pY2tuYW1lIiwibGkiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJoYW5kbGVTZW5kTXNnIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiZW1pdCIsIndpbmRvdyIsImV2ZW50cyIsImhhbmRsZU5ld01lc3NhZ2UiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBaEI7QUFDQSxJQUFNQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFoQjs7QUFFQSxJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQU9DLFFBQVAsRUFBb0I7QUFDcEMsTUFBTUMsRUFBRSxHQUFHTixRQUFRLENBQUNPLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBWDtBQUNBRCxFQUFBQSxFQUFFLENBQUNFLFNBQUgsa0NBQXNDSCxRQUFRLEdBQUcsS0FBSCxHQUFXLE1BQXpELGdCQUNFQSxRQUFRLEdBQUdBLFFBQUgsR0FBYyxNQUR4QixzQkFFWUQsSUFGWjtBQUdBTCxFQUFBQSxPQUFPLENBQUNVLFdBQVIsQ0FBb0JILEVBQXBCO0FBQ0QsQ0FORDs7QUFRQSxJQUFNSSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBVztBQUMvQkEsRUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0EsTUFBTUMsS0FBSyxHQUFHWCxPQUFPLENBQUNZLGFBQVIsQ0FBc0IsT0FBdEIsQ0FBZDtBQUYrQixNQUd2QkMsS0FIdUIsR0FHYkYsS0FIYSxDQUd2QkUsS0FIdUI7QUFJL0IsNEJBQVlDLElBQVosQ0FBaUJDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjaEIsT0FBL0IsRUFBd0M7QUFBRUgsSUFBQUEsT0FBTyxFQUFFZ0I7QUFBWCxHQUF4QztBQUNBRixFQUFBQSxLQUFLLENBQUNFLEtBQU4sR0FBYyxFQUFkO0FBQ0FaLEVBQUFBLFNBQVMsQ0FBQ1ksS0FBRCxDQUFUO0FBQ0QsQ0FQRDs7QUFTTyxJQUFNSSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQTJCO0FBQUEsTUFBeEJwQixPQUF3QixRQUF4QkEsT0FBd0I7QUFBQSxNQUFmTSxRQUFlLFFBQWZBLFFBQWU7QUFDekRGLEVBQUFBLFNBQVMsQ0FBQ0osT0FBRCxFQUFVTSxRQUFWLENBQVQ7QUFDRCxDQUZNOzs7O0FBSVAsSUFBSUgsT0FBSixFQUFhO0FBQ1hBLEVBQUFBLE9BQU8sQ0FBQ2tCLGdCQUFSLENBQXlCLFFBQXpCLEVBQW1DVixhQUFuQztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U29ja2V0IH0gZnJvbSBcIi4vc29ja2V0c1wiO1xuXG5jb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc01lc3NhZ2VcIik7XG5jb25zdCBzZW5kTXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc1NlbmRNc2dcIik7XG5cbmNvbnN0IGFwcGVuZE1zZyA9ICh0ZXh0LCBuaWNrbmFtZSkgPT4ge1xuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGkuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwiYXV0aG9yICR7bmlja25hbWUgPyBcIm91dFwiIDogXCJzZWxmXCJ9XCI+JHtcbiAgICBuaWNrbmFtZSA/IG5pY2tuYW1lIDogXCJZb3UgXCJcbiAgfTo8L3NwYW4+ICR7dGV4dH1gO1xuICBtZXNzYWdlLmFwcGVuZENoaWxkKGxpKTtcbn07XG5cbmNvbnN0IGhhbmRsZVNlbmRNc2cgPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaW5wdXQgPSBzZW5kTXNnLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgY29uc3QgeyB2YWx1ZSB9ID0gaW5wdXQ7XG4gIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5zZW5kTXNnLCB7IG1lc3NhZ2U6IHZhbHVlIH0pO1xuICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gIGFwcGVuZE1zZyh2YWx1ZSk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlTmV3TWVzc2FnZSA9ICh7IG1lc3NhZ2UsIG5pY2tuYW1lIH0pID0+IHtcbiAgYXBwZW5kTXNnKG1lc3NhZ2UsIG5pY2tuYW1lKTtcbn07XG5cbmlmIChzZW5kTXNnKSB7XG4gIHNlbmRNc2cuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVTZW5kTXNnKTtcbn1cbiJdfQ==
},{"./sockets":6}],2:[function(require,module,exports){
"use strict";

require("./sockets");

require("./login");

require("./chat");

require("./paint");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMmVlNTNkZTkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIEl0IGlzIGNvbXBpbGVkIHN0YXRpYyBtYWluLmpzIGFuZCBnbyB0byBob21lLnB1Z1xuXG5pbXBvcnQgXCIuL3NvY2tldHNcIjtcbmltcG9ydCBcIi4vbG9naW5cIjtcbmltcG9ydCBcIi4vY2hhdFwiO1xuaW1wb3J0IFwiLi9wYWludFwiO1xuIl19
},{"./chat":1,"./login":3,"./paint":5,"./sockets":6}],3:[function(require,module,exports){
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
  login(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIk5JQ0tOQU1FIiwiTE9HR0VEX09VVCIsIkxPR0dFRF9JTiIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ2luIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc05hbWUiLCJoYW5kbGVGb3JtU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwidmFsdWUiLCJzZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsSUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBbEI7QUFFQSxJQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsV0FBbkI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsVUFBbEI7QUFFQSxJQUFNQyxRQUFRLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkwsUUFBckIsQ0FBakI7O0FBRUEsSUFBTU0sS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0gsUUFBRCxFQUFjO0FBQzFCO0FBQ0EsTUFBTUksTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQjtBQUNBRCxFQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWUMsTUFBTSxDQUFDQyxNQUFQLENBQWNDLFdBQTFCLEVBQXVDO0FBQUVULElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUF2QztBQUNBLDRCQUFZSSxNQUFaO0FBQ0QsQ0FMRDs7QUFPQSxJQUFJSixRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDckJSLEVBQUFBLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUJaLFVBQWpCO0FBQ0QsQ0FGRCxNQUVPO0FBQ0xOLEVBQUFBLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUJYLFNBQWpCO0FBQ0FJLEVBQUFBLEtBQUssQ0FBQ0gsUUFBRCxDQUFMO0FBQ0Q7O0FBRUQsSUFBTVcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFELEVBQVc7QUFDbENBLEVBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUNBLE1BQU1DLEtBQUssR0FBR25CLFNBQVMsQ0FBQ0QsYUFBVixDQUF3QixPQUF4QixDQUFkO0FBRmtDLE1BRzFCcUIsS0FIMEIsR0FHaEJELEtBSGdCLENBRzFCQyxLQUgwQjtBQUlsQ0QsRUFBQUEsS0FBSyxDQUFDQyxLQUFOLEdBQWMsRUFBZDtBQUNBZCxFQUFBQSxZQUFZLENBQUNlLE9BQWIsQ0FBcUJuQixRQUFyQixFQUErQmtCLEtBQS9CO0FBQ0FaLEVBQUFBLEtBQUssQ0FBQ1ksS0FBRCxDQUFMO0FBQ0QsQ0FQRDs7QUFTQSxJQUFJcEIsU0FBSixFQUFlO0FBQ2JBLEVBQUFBLFNBQVMsQ0FBQ3NCLGdCQUFWLENBQTJCLFFBQTNCLEVBQXFDTixnQkFBckM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRTb2NrZXRzIH0gZnJvbSBcIi4vc29ja2V0c1wiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTG9naW5cIik7XG5cbmNvbnN0IE5JQ0tOQU1FID0gXCJuaWNrbmFtZVwiO1xuY29uc3QgTE9HR0VEX09VVCA9IFwibG9nZ2VkT3V0XCI7XG5jb25zdCBMT0dHRURfSU4gPSBcImxvZ2dlZEluXCI7XG5cbmNvbnN0IG5pY2tuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oTklDS05BTUUpO1xuXG5jb25zdCBsb2dpbiA9IChuaWNrbmFtZSkgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgY29uc3Qgc29ja2V0ID0gaW8oXCIvXCIpO1xuICBzb2NrZXQuZW1pdCh3aW5kb3cuZXZlbnRzLnNldE5pY2tuYW1lLCB7IG5pY2tuYW1lIH0pO1xuICBpbml0U29ja2V0cyhzb2NrZXQpO1xufTtcblxuaWYgKG5pY2tuYW1lID09PSBudWxsKSB7XG4gIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX09VVDtcbn0gZWxzZSB7XG4gIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX0lOO1xuICBsb2dpbihuaWNrbmFtZSk7XG59XG5cbmNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaW5wdXQgPSBsb2dpbkZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICBjb25zdCB7IHZhbHVlIH0gPSBpbnB1dDtcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShOSUNLTkFNRSwgdmFsdWUpO1xuICBsb2dpbih2YWx1ZSk7XG59O1xuXG5pZiAobG9naW5Gb3JtKSB7XG4gIGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUZvcm1TdWJtaXQpO1xufVxuIl19
},{"./sockets":6}],4:[function(require,module,exports){
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
exports.handleStrokedPath = exports.handleBeganPath = void 0;

var _sockets = require("./sockets");

var canvas = document.getElementById("jsCanvas");
var ctx = canvas.getContext("2d");
var colors = document.getElementsByClassName("jsColor");
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

function stopPainting() {
  painting = false;
}

var beginPath = function beginPath(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
};

var strokePath = function strokePath(x, y) {
  ctx.lineTo(x, y);
  ctx.stroke();
};

function onMouseMove(event) {
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
      y: y
    });
  }
}

function handleColorClick(event) {
  var Color = event.target.style.backgroundColor;
  ctx.strokeStyle = Color;
  ctx.fillStyle = Color;
}

function onMouseDown(event) {
  painting = true;
}

function startPainting() {
  painting = true;
}

function handleRangeChange(event) {
  var size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick() {
  if (filling === true) {
    mode.innerText = "Fill";
    filling = false;
  } else {
    mode.innerText = "Paint";
    filling = true;
  }
}

function handleCanvasClick() {
  if (filling === true) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}

function handleCM(event) {
  event.preventDefault();
}

function handleSaveClick() {
  var image = canvas.toDataURL();
  var link = document.createElement("a");
  link.href = image;
  link.download = "PaintJS_fwanggus";
  link.click();
}

function handleRefresh() {
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
}

function confirmSaveFile() {
  var confirmSave = window.confirm("ARE YOU SURE SAVING THIS PAINTING ? ");

  if (confirmSave) {
    handleSaveClick();
  } else {}
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

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
      y = _ref2.y;
  return strokePath(x, y);
};

exports.handleStrokedPath = handleStrokedPath;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY29sb3JzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInJhbmdlIiwibW9kZSIsInNhdmVCdG4iLCJyZWZyZXNoQnRuIiwiQ0FOVkFTX1NJWkUiLCJJTklUSUFMX0NPTE9SIiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwicGFpbnRpbmciLCJmaWxsaW5nIiwic3RvcFBhaW50aW5nIiwiYmVnaW5QYXRoIiwieCIsInkiLCJtb3ZlVG8iLCJzdHJva2VQYXRoIiwibGluZVRvIiwic3Ryb2tlIiwib25Nb3VzZU1vdmUiLCJldmVudCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiZW1pdCIsIndpbmRvdyIsImV2ZW50cyIsImhhbmRsZUNvbG9yQ2xpY2siLCJDb2xvciIsInRhcmdldCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwib25Nb3VzZURvd24iLCJzdGFydFBhaW50aW5nIiwiaGFuZGxlUmFuZ2VDaGFuZ2UiLCJzaXplIiwidmFsdWUiLCJoYW5kbGVNb2RlQ2xpY2siLCJpbm5lclRleHQiLCJoYW5kbGVDYW52YXNDbGljayIsImhhbmRsZUNNIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVTYXZlQ2xpY2siLCJpbWFnZSIsInRvRGF0YVVSTCIsImxpbmsiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImRvd25sb2FkIiwiY2xpY2siLCJoYW5kbGVSZWZyZXNoIiwicmVzdWx0IiwiY29uZmlybSIsImNvbnNvbGUiLCJsb2ciLCJjb25maXJtU2F2ZUZpbGUiLCJjb25maXJtU2F2ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJBcnJheSIsImZyb20iLCJmb3JFYWNoIiwicG90YXRvIiwiaGFuZGxlQmVnYW5QYXRoIiwiaGFuZGxlU3Ryb2tlZFBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFmO0FBQ0EsSUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLElBQU1DLE1BQU0sR0FBR0osUUFBUSxDQUFDSyxzQkFBVCxDQUFnQyxTQUFoQyxDQUFmO0FBQ0EsSUFBTUMsS0FBSyxHQUFHTixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBZDtBQUNBLElBQU1NLElBQUksR0FBR1AsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWI7QUFDQSxJQUFNTyxPQUFPLEdBQUdSLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFoQjtBQUNBLElBQU1RLFVBQVUsR0FBR1QsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQW5CO0FBRUEsSUFBTVMsV0FBVyxHQUFHLEdBQXBCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLFNBQXRCLEMsQ0FBaUM7O0FBRWpDWixNQUFNLENBQUNhLEtBQVAsR0FBZSxHQUFmO0FBQ0FiLE1BQU0sQ0FBQ2MsTUFBUCxHQUFnQixHQUFoQjtBQUVBWCxHQUFHLENBQUNZLFNBQUosR0FBZ0IsT0FBaEI7QUFDQVosR0FBRyxDQUFDYSxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQkwsV0FBbkIsRUFBZ0NBLFdBQWhDO0FBRUFSLEdBQUcsQ0FBQ2MsV0FBSixHQUFrQkwsYUFBbEI7QUFDQVQsR0FBRyxDQUFDWSxTQUFKLEdBQWdCSCxhQUFoQjtBQUVBVCxHQUFHLENBQUNlLFNBQUosR0FBZ0IsR0FBaEI7QUFFQSxJQUFJQyxRQUFRLEdBQUcsS0FBZjtBQUNBLElBQUlDLE9BQU8sR0FBRyxLQUFkOztBQUVBLFNBQVNDLFlBQVQsR0FBd0I7QUFDdEJGLEVBQUFBLFFBQVEsR0FBRyxLQUFYO0FBQ0Q7O0FBRUQsSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDMUJyQixFQUFBQSxHQUFHLENBQUNtQixTQUFKO0FBQ0FuQixFQUFBQSxHQUFHLENBQUNzQixNQUFKLENBQVdGLENBQVgsRUFBY0MsQ0FBZDtBQUNELENBSEQ7O0FBS0EsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0gsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDM0JyQixFQUFBQSxHQUFHLENBQUN3QixNQUFKLENBQVdKLENBQVgsRUFBY0MsQ0FBZDtBQUNBckIsRUFBQUEsR0FBRyxDQUFDeUIsTUFBSjtBQUNELENBSEQ7O0FBS0EsU0FBU0MsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFDMUIsTUFBTVAsQ0FBQyxHQUFHTyxLQUFLLENBQUNDLE9BQWhCO0FBQ0EsTUFBTVAsQ0FBQyxHQUFHTSxLQUFLLENBQUNFLE9BQWhCOztBQUVBLE1BQUksQ0FBQ2IsUUFBTCxFQUFlO0FBQ2JHLElBQUFBLFNBQVMsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLENBQVQ7QUFDQSw4QkFBWVMsSUFBWixDQUFpQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNiLFNBQS9CLEVBQTBDO0FBQUVDLE1BQUFBLENBQUMsRUFBREEsQ0FBRjtBQUFLQyxNQUFBQSxDQUFDLEVBQURBO0FBQUwsS0FBMUM7QUFDRCxHQUhELE1BR087QUFDTEUsSUFBQUEsVUFBVSxDQUFDSCxDQUFELEVBQUlDLENBQUosQ0FBVjtBQUNBLDhCQUFZUyxJQUFaLENBQWlCQyxNQUFNLENBQUNDLE1BQVAsQ0FBY1QsVUFBL0IsRUFBMkM7QUFBRUgsTUFBQUEsQ0FBQyxFQUFEQSxDQUFGO0FBQUtDLE1BQUFBLENBQUMsRUFBREE7QUFBTCxLQUEzQztBQUNEO0FBQ0Y7O0FBRUQsU0FBU1ksZ0JBQVQsQ0FBMEJOLEtBQTFCLEVBQWlDO0FBQy9CLE1BQU1PLEtBQUssR0FBR1AsS0FBSyxDQUFDUSxNQUFOLENBQWFDLEtBQWIsQ0FBbUJDLGVBQWpDO0FBQ0FyQyxFQUFBQSxHQUFHLENBQUNjLFdBQUosR0FBa0JvQixLQUFsQjtBQUNBbEMsRUFBQUEsR0FBRyxDQUFDWSxTQUFKLEdBQWdCc0IsS0FBaEI7QUFDRDs7QUFFRCxTQUFTSSxXQUFULENBQXFCWCxLQUFyQixFQUE0QjtBQUMxQlgsRUFBQUEsUUFBUSxHQUFHLElBQVg7QUFDRDs7QUFFRCxTQUFTdUIsYUFBVCxHQUF5QjtBQUN2QnZCLEVBQUFBLFFBQVEsR0FBRyxJQUFYO0FBQ0Q7O0FBRUQsU0FBU3dCLGlCQUFULENBQTJCYixLQUEzQixFQUFrQztBQUNoQyxNQUFNYyxJQUFJLEdBQUdkLEtBQUssQ0FBQ1EsTUFBTixDQUFhTyxLQUExQjtBQUNBMUMsRUFBQUEsR0FBRyxDQUFDZSxTQUFKLEdBQWdCMEIsSUFBaEI7QUFDRDs7QUFFRCxTQUFTRSxlQUFULEdBQTJCO0FBQ3pCLE1BQUkxQixPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDcEJaLElBQUFBLElBQUksQ0FBQ3VDLFNBQUwsR0FBaUIsTUFBakI7QUFDQTNCLElBQUFBLE9BQU8sR0FBRyxLQUFWO0FBQ0QsR0FIRCxNQUdPO0FBQ0xaLElBQUFBLElBQUksQ0FBQ3VDLFNBQUwsR0FBaUIsT0FBakI7QUFDQTNCLElBQUFBLE9BQU8sR0FBRyxJQUFWO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTNEIsaUJBQVQsR0FBNkI7QUFDM0IsTUFBSTVCLE9BQU8sS0FBSyxJQUFoQixFQUFzQjtBQUNwQmpCLElBQUFBLEdBQUcsQ0FBQ2EsUUFBSixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUJMLFdBQW5CLEVBQWdDQSxXQUFoQztBQUNEO0FBQ0Y7O0FBRUQsU0FBU3NDLFFBQVQsQ0FBa0JuQixLQUFsQixFQUF5QjtBQUN2QkEsRUFBQUEsS0FBSyxDQUFDb0IsY0FBTjtBQUNEOztBQUVELFNBQVNDLGVBQVQsR0FBMkI7QUFDekIsTUFBTUMsS0FBSyxHQUFHcEQsTUFBTSxDQUFDcUQsU0FBUCxFQUFkO0FBQ0EsTUFBTUMsSUFBSSxHQUFHckQsUUFBUSxDQUFDc0QsYUFBVCxDQUF1QixHQUF2QixDQUFiO0FBQ0FELEVBQUFBLElBQUksQ0FBQ0UsSUFBTCxHQUFZSixLQUFaO0FBQ0FFLEVBQUFBLElBQUksQ0FBQ0csUUFBTCxHQUFnQixrQkFBaEI7QUFDQUgsRUFBQUEsSUFBSSxDQUFDSSxLQUFMO0FBQ0Q7O0FBRUQsU0FBU0MsYUFBVCxHQUF5QjtBQUN2QixNQUFNQyxNQUFNLEdBQUcxQixNQUFNLENBQUMyQixPQUFQLENBQWUscUNBQWYsQ0FBZjs7QUFFQSxNQUFJRCxNQUFKLEVBQVk7QUFDVnhDLElBQUFBLE9BQU8sR0FBRyxJQUFWO0FBQ0FqQixJQUFBQSxHQUFHLENBQUNZLFNBQUosR0FBZ0IsT0FBaEI7QUFDQWlDLElBQUFBLGlCQUFpQixHQUhQLENBS1Y7O0FBQ0E1QixJQUFBQSxPQUFPLEdBQUcsS0FBVjtBQUNBakIsSUFBQUEsR0FBRyxDQUFDWSxTQUFKLEdBQWdCSCxhQUFoQjtBQUNBVCxJQUFBQSxHQUFHLENBQUNjLFdBQUosR0FBa0JMLGFBQWxCO0FBQ0FULElBQUFBLEdBQUcsQ0FBQ2UsU0FBSixHQUFnQixHQUFoQjtBQUNBWCxJQUFBQSxLQUFLLENBQUNzQyxLQUFOLEdBQWMsR0FBZDtBQUNELEdBWEQsTUFXTztBQUNMaUIsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksd0JBQVo7QUFDRDtBQUNGOztBQUVELFNBQVNDLGVBQVQsR0FBMkI7QUFDekIsTUFBTUMsV0FBVyxHQUFHL0IsTUFBTSxDQUFDMkIsT0FBUCxDQUFlLHNDQUFmLENBQXBCOztBQUNBLE1BQUlJLFdBQUosRUFBaUI7QUFDZmQsSUFBQUEsZUFBZTtBQUNoQixHQUZELE1BRU8sQ0FDTjtBQUNGOztBQUVELElBQUluRCxNQUFKLEVBQVk7QUFDVkEsRUFBQUEsTUFBTSxDQUFDa0UsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUNyQyxXQUFyQztBQUNBN0IsRUFBQUEsTUFBTSxDQUFDa0UsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUN4QixhQUFyQztBQUNBMUMsRUFBQUEsTUFBTSxDQUFDa0UsZ0JBQVAsQ0FBd0IsWUFBeEIsRUFBc0M3QyxZQUF0QztBQUNBckIsRUFBQUEsTUFBTSxDQUFDa0UsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUM3QyxZQUFuQztBQUNBckIsRUFBQUEsTUFBTSxDQUFDa0UsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNsQixpQkFBakM7QUFDQWhELEVBQUFBLE1BQU0sQ0FBQ2tFLGdCQUFQLENBQXdCLGFBQXhCLEVBQXVDakIsUUFBdkM7QUFDRDs7QUFFRGtCLEtBQUssQ0FBQ0MsSUFBTixDQUFXL0QsTUFBWCxFQUFtQmdFLE9BQW5CLENBQTJCLFVBQUNDLE1BQUQsRUFBWTtBQUNyQ0EsRUFBQUEsTUFBTSxDQUFDSixnQkFBUCxDQUF3QixPQUF4QixFQUFpQzlCLGdCQUFqQztBQUNELENBRkQ7O0FBSUEsSUFBSTdCLEtBQUosRUFBVztBQUNUQSxFQUFBQSxLQUFLLENBQUMyRCxnQkFBTixDQUF1QixPQUF2QixFQUFnQ3ZCLGlCQUFoQztBQUNEOztBQUVELElBQUluQyxJQUFKLEVBQVU7QUFDUkEsRUFBQUEsSUFBSSxDQUFDMEQsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0JwQixlQUEvQjtBQUNEOztBQUVELElBQUlyQyxPQUFKLEVBQWE7QUFDWEEsRUFBQUEsT0FBTyxDQUFDeUQsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0NGLGVBQWxDO0FBQ0Q7O0FBRUQsSUFBSXRELFVBQUosRUFBZ0I7QUFDZEEsRUFBQUEsVUFBVSxDQUFDd0QsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUNQLGFBQXJDO0FBQ0Q7O0FBRU0sSUFBTVksZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLE1BQUdoRCxDQUFILFFBQUdBLENBQUg7QUFBQSxNQUFNQyxDQUFOLFFBQU1BLENBQU47QUFBQSxTQUFjRixTQUFTLENBQUNDLENBQUQsRUFBSUMsQ0FBSixDQUF2QjtBQUFBLENBQXhCOzs7O0FBQ0EsSUFBTWdELGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0I7QUFBQSxNQUFHakQsQ0FBSCxTQUFHQSxDQUFIO0FBQUEsTUFBTUMsQ0FBTixTQUFNQSxDQUFOO0FBQUEsU0FBY0UsVUFBVSxDQUFDSCxDQUFELEVBQUlDLENBQUosQ0FBeEI7QUFBQSxDQUExQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNvY2tldCB9IGZyb20gXCIuL3NvY2tldHNcIjtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0NhbnZhc1wiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5jb25zdCBjb2xvcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwianNDb2xvclwiKTtcbmNvbnN0IHJhbmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc1JhbmdlXCIpO1xuY29uc3QgbW9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNNb2RlXCIpO1xuY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNTYXZlXCIpO1xuY29uc3QgcmVmcmVzaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNSZWZyZXNoXCIpO1xuXG5jb25zdCBDQU5WQVNfU0laRSA9IDUwMDtcbmNvbnN0IElOSVRJQUxfQ09MT1IgPSBcIiMyYzJjMmNcIjsgLy8g6rKA7KCV7IOJXG5cbmNhbnZhcy53aWR0aCA9IDUwMDtcbmNhbnZhcy5oZWlnaHQgPSA1MDA7XG5cbmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG5jdHguZmlsbFJlY3QoMCwgMCwgQ0FOVkFTX1NJWkUsIENBTlZBU19TSVpFKTtcblxuY3R4LnN0cm9rZVN0eWxlID0gSU5JVElBTF9DT0xPUjtcbmN0eC5maWxsU3R5bGUgPSBJTklUSUFMX0NPTE9SO1xuXG5jdHgubGluZVdpZHRoID0gMi41O1xuXG5sZXQgcGFpbnRpbmcgPSBmYWxzZTtcbmxldCBmaWxsaW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHN0b3BQYWludGluZygpIHtcbiAgcGFpbnRpbmcgPSBmYWxzZTtcbn1cblxuY29uc3QgYmVnaW5QYXRoID0gKHgsIHkpID0+IHtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgubW92ZVRvKHgsIHkpO1xufTtcblxuY29uc3Qgc3Ryb2tlUGF0aCA9ICh4LCB5KSA9PiB7XG4gIGN0eC5saW5lVG8oeCwgeSk7XG4gIGN0eC5zdHJva2UoKTtcbn07XG5cbmZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gIGNvbnN0IHggPSBldmVudC5vZmZzZXRYO1xuICBjb25zdCB5ID0gZXZlbnQub2Zmc2V0WTtcblxuICBpZiAoIXBhaW50aW5nKSB7XG4gICAgYmVnaW5QYXRoKHgsIHkpO1xuICAgIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5iZWdpblBhdGgsIHsgeCwgeSB9KTtcbiAgfSBlbHNlIHtcbiAgICBzdHJva2VQYXRoKHgsIHkpO1xuICAgIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5zdHJva2VQYXRoLCB7IHgsIHkgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlQ29sb3JDbGljayhldmVudCkge1xuICBjb25zdCBDb2xvciA9IGV2ZW50LnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG4gIGN0eC5zdHJva2VTdHlsZSA9IENvbG9yO1xuICBjdHguZmlsbFN0eWxlID0gQ29sb3I7XG59XG5cbmZ1bmN0aW9uIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gIHBhaW50aW5nID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gc3RhcnRQYWludGluZygpIHtcbiAgcGFpbnRpbmcgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVSYW5nZUNoYW5nZShldmVudCkge1xuICBjb25zdCBzaXplID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICBjdHgubGluZVdpZHRoID0gc2l6ZTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlTW9kZUNsaWNrKCkge1xuICBpZiAoZmlsbGluZyA9PT0gdHJ1ZSkge1xuICAgIG1vZGUuaW5uZXJUZXh0ID0gXCJGaWxsXCI7XG4gICAgZmlsbGluZyA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIG1vZGUuaW5uZXJUZXh0ID0gXCJQYWludFwiO1xuICAgIGZpbGxpbmcgPSB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNhbnZhc0NsaWNrKCkge1xuICBpZiAoZmlsbGluZyA9PT0gdHJ1ZSkge1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBDQU5WQVNfU0laRSwgQ0FOVkFTX1NJWkUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNNKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNhdmVDbGljaygpIHtcbiAgY29uc3QgaW1hZ2UgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgbGluay5ocmVmID0gaW1hZ2U7XG4gIGxpbmsuZG93bmxvYWQgPSBcIlBhaW50SlNfZndhbmdndXNcIjtcbiAgbGluay5jbGljaygpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVSZWZyZXNoKCkge1xuICBjb25zdCByZXN1bHQgPSB3aW5kb3cuY29uZmlybShcIkFSRSBZT1UgU1VSRSBSRUZSRVNISU5HIEFMTCBTVFVGRj8gXCIpO1xuXG4gIGlmIChyZXN1bHQpIHtcbiAgICBmaWxsaW5nID0gdHJ1ZTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGhhbmRsZUNhbnZhc0NsaWNrKCk7XG5cbiAgICAvLyBpbml0aWFsaXppbmcgYWxsIHNldCFcbiAgICBmaWxsaW5nID0gZmFsc2U7XG4gICAgY3R4LmZpbGxTdHlsZSA9IElOSVRJQUxfQ09MT1I7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gSU5JVElBTF9DT0xPUjtcbiAgICBjdHgubGluZVdpZHRoID0gMi41O1xuICAgIHJhbmdlLnZhbHVlID0gMi41O1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKFwieW91IGNsaWNrZWQgJ2NhbmNlbCcgIVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb25maXJtU2F2ZUZpbGUoKSB7XG4gIGNvbnN0IGNvbmZpcm1TYXZlID0gd2luZG93LmNvbmZpcm0oXCJBUkUgWU9VIFNVUkUgU0FWSU5HIFRISVMgUEFJTlRJTkcgPyBcIik7XG4gIGlmIChjb25maXJtU2F2ZSkge1xuICAgIGhhbmRsZVNhdmVDbGljaygpO1xuICB9IGVsc2Uge1xuICB9XG59XG5cbmlmIChjYW52YXMpIHtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBzdGFydFBhaW50aW5nKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHN0b3BQYWludGluZyk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFpbnRpbmcpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNhbnZhc0NsaWNrKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCBoYW5kbGVDTSk7XG59XG5cbkFycmF5LmZyb20oY29sb3JzKS5mb3JFYWNoKChwb3RhdG8pID0+IHtcbiAgcG90YXRvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDb2xvckNsaWNrKTtcbn0pO1xuXG5pZiAocmFuZ2UpIHtcbiAgcmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGhhbmRsZVJhbmdlQ2hhbmdlKTtcbn1cblxuaWYgKG1vZGUpIHtcbiAgbW9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlTW9kZUNsaWNrKTtcbn1cblxuaWYgKHNhdmVCdG4pIHtcbiAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29uZmlybVNhdmVGaWxlKTtcbn1cblxuaWYgKHJlZnJlc2hCdG4pIHtcbiAgcmVmcmVzaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUmVmcmVzaCk7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVCZWdhblBhdGggPSAoeyB4LCB5IH0pID0+IGJlZ2luUGF0aCh4LCB5KTtcbmV4cG9ydCBjb25zdCBoYW5kbGVTdHJva2VkUGF0aCA9ICh7IHgsIHkgfSkgPT4gc3Ryb2tlUGF0aCh4LCB5KTtcbiJdfQ==
},{"./sockets":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.updateSocket = exports.getSocket = void 0;

var _notifications = require("./notifications");

var _chat = require("./chat");

var _paint = require("./paint");

var socket = null; // 언제든지 이 함수만 불러오면, socket을 가져올수 있음

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var updateSocket = function updateSocket(aSocket) {
  return socket = aSocket;
};

exports.updateSocket = updateSocket;

var initSockets = function initSockets(aSocket) {
  var _window = window,
      events = _window.events; //   현재 socket을 글로벌 변수로 업데이트 해줌

  updateSocket(aSocket);
  aSocket.on(events.newUser, _notifications.handleNewUser);
  aSocket.on(events.disconnected, _notifications.handleDisconnected);
  aSocket.on(events.newMsg, _chat.handleNewMessage);
  aSocket.on(events.beganPath, _paint.handleBeganPath);
  aSocket.on(events.strokedPath, _paint.handleStrokedPath);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwidXBkYXRlU29ja2V0IiwiYVNvY2tldCIsImluaXRTb2NrZXRzIiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3RlZCIsIm5ld01zZyIsImhhbmRsZU5ld01lc3NhZ2UiLCJiZWdhblBhdGgiLCJoYW5kbGVCZWdhblBhdGgiLCJzdHJva2VkUGF0aCIsImhhbmRsZVN0cm9rZWRQYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBSUEsTUFBTSxHQUFHLElBQWIsQyxDQUVBOztBQUNPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FBTUQsTUFBTjtBQUFBLENBQWxCOzs7O0FBQ0EsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsT0FBRDtBQUFBLFNBQWNILE1BQU0sR0FBR0csT0FBdkI7QUFBQSxDQUFyQjs7OztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNELE9BQUQsRUFBYTtBQUFBLGdCQUNuQkUsTUFEbUI7QUFBQSxNQUM5QkMsTUFEOEIsV0FDOUJBLE1BRDhCLEVBRXRDOztBQUNBSixFQUFBQSxZQUFZLENBQUNDLE9BQUQsQ0FBWjtBQUNBQSxFQUFBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDRSxPQUFsQixFQUEyQkMsNEJBQTNCO0FBQ0FOLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNJLFlBQWxCLEVBQWdDQyxpQ0FBaEM7QUFDQVIsRUFBQUEsT0FBTyxDQUFDSSxFQUFSLENBQVdELE1BQU0sQ0FBQ00sTUFBbEIsRUFBMEJDLHNCQUExQjtBQUNBVixFQUFBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDUSxTQUFsQixFQUE2QkMsc0JBQTdCO0FBQ0FaLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNVLFdBQWxCLEVBQStCQyx3QkFBL0I7QUFDRCxDQVRNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlTmV3VXNlciwgaGFuZGxlRGlzY29ubmVjdGVkIH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0IHsgaGFuZGxlTmV3TWVzc2FnZSB9IGZyb20gXCIuL2NoYXRcIjtcbmltcG9ydCB7IGhhbmRsZUJlZ2FuUGF0aCwgaGFuZGxlU3Ryb2tlZFBhdGggfSBmcm9tIFwiLi9wYWludFwiO1xuXG5sZXQgc29ja2V0ID0gbnVsbDtcblxuLy8g7Ja47KCc65Og7KeAIOydtCDtlajsiJjrp4wg67aI65+s7Jik66m0LCBzb2NrZXTsnYQg6rCA7KC47Jis7IiYIOyeiOydjFxuZXhwb3J0IGNvbnN0IGdldFNvY2tldCA9ICgpID0+IHNvY2tldDtcbmV4cG9ydCBjb25zdCB1cGRhdGVTb2NrZXQgPSAoYVNvY2tldCkgPT4gKHNvY2tldCA9IGFTb2NrZXQpO1xuXG5leHBvcnQgY29uc3QgaW5pdFNvY2tldHMgPSAoYVNvY2tldCkgPT4ge1xuICBjb25zdCB7IGV2ZW50cyB9ID0gd2luZG93O1xuICAvLyAgIO2YhOyerCBzb2NrZXTsnYQg6riA66Gc67KMIOuzgOyImOuhnCDsl4XrjbDsnbTtirgg7ZW07KSMXG4gIHVwZGF0ZVNvY2tldChhU29ja2V0KTtcbiAgYVNvY2tldC5vbihldmVudHMubmV3VXNlciwgaGFuZGxlTmV3VXNlcik7XG4gIGFTb2NrZXQub24oZXZlbnRzLmRpc2Nvbm5lY3RlZCwgaGFuZGxlRGlzY29ubmVjdGVkKTtcbiAgYVNvY2tldC5vbihldmVudHMubmV3TXNnLCBoYW5kbGVOZXdNZXNzYWdlKTtcbiAgYVNvY2tldC5vbihldmVudHMuYmVnYW5QYXRoLCBoYW5kbGVCZWdhblBhdGgpO1xuICBhU29ja2V0Lm9uKGV2ZW50cy5zdHJva2VkUGF0aCwgaGFuZGxlU3Ryb2tlZFBhdGgpO1xufTtcbiJdfQ==
},{"./chat":1,"./notifications":4,"./paint":5}]},{},[2])