"use strict";
const nickname = document.querySelector("#nickname");
const chatList = document.querySelector(".chatting-list");
const chatInput = document.querySelector(".chatting-input");
const sendButton = document.querySelector(".send-button");
const displayContainer = document.querySelector(".display-container");
const socket = io("http://127.0.0.1:5000");

chatInput.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) sendData();
});

function sendData() {
  const param = {
    nickname: nickname.value,
    message: chatInput.value,
  };
  socket.emit("chatting", param);
  chatInput.value = "";
}

sendButton.addEventListener("click", sendData);

socket.on("chatting", (data) => {
  console.log(data);
  const li = makeLi(data);
  chatList.appendChild(li);
  displayContainer.scrollTo(0, displayContainer.scrollHeight);
});

function makeLi(data) {
  const li = document.createElement("li");
  li.classList.add(data.nickname === nickname.value ? "sent" : "received");
  li.innerHTML = `<span class="profile">
        <span class="user">${data.nickname}</span>
        <img src="http://placeimg.com/50/50/any" alt="">
    </span>
    <span class="message">${data.message}</span>
    <span class="time">${data.time}</span>`;
  return li;
}
