const nav = document.querySelector('.nav');
const main = document.querySelector('.main');

const pages = {
    404: 'pages/404.html',
    home: 'pages/home.html',
    about: 'pages/about.html',
    service: 'pages/service.html',
    contact: 'pages/contact.html',
};

nav.addEventListener('click', (e) => {
    window.history.pushState({}, '', e.target.id);
    console.log(window.location);
});

window.addEventListener('popstate', async (e) => {
    console.log(e);
    console.log(location);
    const currentPath = location.pathName.split();
    console.log(currentPath);
    const route = pages[currentPath] || pages['404'];
    const data = await fetch(route);
    const html = await data.text();
    main.innerHTML = html;
});
