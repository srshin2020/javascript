const nav = document.querySelector('.nav');
const main = document.querySelector('.main');

const contents = {
    home: '<h1 class="title">This is Home page</h1>',
    about: '<h1 class="title">This is About page</h1>',
    service: '<h1 class="title">This is Service page</h1>',
    contact: '<h1 class="title">This is contact page</h1>',
};

nav.addEventListener('click', (e) => {
    console.log(e.target);
    window.location.href = `${location.origin}${location.pathname}#${e.target.id}`;
    console.log(window.location);
});

window.addEventListener('popstate', (e) => {
    console.log(e);
    main.innerHTML = '';
    const content = document.createElement('div');
    const currentPath = location.hash.substring(1);
    content.innerHTML = contents[currentPath];
    main.appendChild(content);
});
