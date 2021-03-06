const body = document.querySelector("body");

const fireNotification = (text, color) => {
  const notification = document.createElement("div");
  notification.innerHTML = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

export const handleNewUser = ({ nickname }) =>
  fireNotification(`${nickname} has just Joined !`, "rgb(0, 122, 255)");

export const handleDisconnected = ({ nickname }) =>
  fireNotification(`${nickname} just left`, "rgb(255, 149, 0)");
// 함수형태가 아니라, 바로 리턴 하는 형태로 구성.
