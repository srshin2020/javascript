import { getMyId } from './login.js';
let myId = 'unknown';
let roomNumber = 1;
const socket = io();

async function fetchData() {
    let data;
    await fetch(`/api/rooms`)
        .then((res) => {
            if (res.status != 200) {
                console.log(res.statusText);
                throw new Error(res.statusText);
            }
            return res.json();
        })
        .then((text) => {
            console.log(text);
            data = text;
        });
    return data;
}

function makeStatusWithRoomNumber(element) {
    const chatGroupRoomNumber = document.querySelector(
        '#chat-group-room-number'
    );
    chatGroupRoomNumber.innerHTML = element.roomId;
    roomNumber = element.roomId;
    const roomStatusBox = document.querySelector('.room-status-box');
    const members = document.createElement('div');
    members.innerHTML = `참여인원수 ${element.members.length}`;
    roomStatusBox.appendChild(members);

    const ul = document.createElement('ul');
    element.members.forEach((member) => {
        const li = document.createElement('li');
        li.innerHTML = member;
        ul.appendChild(li);
    });
    roomStatusBox.appendChild(ul);
}

function makeRoomContainer(element) {
    const roomGroup = document.querySelector('.room-group');

    const roomContainer = document.createElement('div');
    roomContainer.className = 'room-container';

    const members = document.createElement('div');
    members.innerHTML = `참여인원수 ${element.members.length}`;
    roomContainer.appendChild(members);

    const roomId = document.createElement('div');
    roomId.innerHTML = `방번호 ${element.roomId}`;
    roomContainer.appendChild(roomId);

    const enter = document.createElement('button');
    enter.className = 'enter';
    enter.innerHTML = '입장';
    enter.addEventListener('click', (e) => {
        console.log('clicked');
        myId = getMyId();
        makeStatusWithRoomNumber(element);
        sendData(`${myId}가 입장하였습니다.`);
    });
    roomContainer.appendChild(enter);
    roomGroup.appendChild(roomContainer);
}

async function getDatafromServer() {
    let data;

    data = await fetchData();
    data.forEach((element) => {
        makeRoomContainer(element);
    });
}

function sendData(message) {
    const param = {
        nickname: myId,
        message: message,
    };
    socket.emit('chatting', param, roomNumber);
}
function makeLi(data) {
    const li = document.createElement('li');
    li.classList.add(data.nickname === myId ? 'sent' : 'received');
    li.innerHTML = `<span class="profile">
                    <span class="user">${data.nickname} : </span></span>
                    <span class="message">${data.message}</span> `;
    return li;
}

export async function roomInit() {
    const chatList = document.querySelector('.chatting-list');
    const chatInput = document.querySelector('.chatting-input');
    const displayContainer = document.querySelector('.chat-container');

    getDatafromServer();
    chatInput.addEventListener('keypress', (e) => {
        if (e.keyCode === 13) {
            sendData(chatInput.value);
            chatInput.value = '';
        }
    });

    socket.on('chatting', (data) => {
        console.log(data);
        const li = makeLi(data);
        chatList.appendChild(li);
        displayContainer.scrollTo(0, displayContainer.scrollHeight);
    });
}
