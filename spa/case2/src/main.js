import { loginInit } from './js/login.js';
import { roomInit } from './js/room.js';
const nav = document.querySelector('.nav');
const main = document.querySelector('.main');

const pages = {
    rooms: 'pages/rooms.html',
    about: 'pages/about.html',
    service: 'pages/service.html',
    logout: 'pages/logout.html',
};
async function init() {
    const page = await fetch(pages['logout']);
    const html = await page.text();
    main.innerHTML = html;
    loginInit();
}
init();

nav.addEventListener('click', async (e) => {
    console.log(e.target.id);
    const page = await fetch(pages[e.target.id]);
    const html = await page.text();
    main.innerHTML = html;
    if (e.target.id === 'rooms') {
        roomInit();
    } else if (e.target.id === 'logout') {
        loginInit();
    }
});
