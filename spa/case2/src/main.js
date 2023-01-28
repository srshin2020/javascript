const nav = document.querySelector('.nav');
const main = document.querySelector('.main');

const pages = {
    home: 'pages/home.html',
    about: 'pages/about.html',
    service: 'pages/service.html',
    contact: 'pages/contact.html',
};

nav.addEventListener('click', async (e) => {
    console.log(e.target.id);
    const data = await fetch(pages[e.target.id]);
    const html = await data.text();
    main.innerHTML = html;
    // main.innerHTML = pages[e.target.id];
});
