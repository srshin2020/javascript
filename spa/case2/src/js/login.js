let myId = 'unknown';
const header = document.querySelector('.header');
const main = document.querySelector('.main');

export function loginInit() {
    const login = document.querySelector('#login');
    const id = document.querySelector('#id');
    const pw = document.querySelector('#pw');
    login.addEventListener('click', (e) => {
        myId = id.value;
        fetch(`/api/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id.value,
                pw: pw.value,
            }),
        })
            .then((res) => {
                if (res.status != 200) {
                    console.log(res.statusText);
                    throw new Error(res.statusText);
                }
                return res.json();
            })
            .then(async (data) => {
                // 성공시 생성된 아이디가 반환됨
                console.log(data);
                header.style.display = 'block';
                main.innerHTML = '';
            });
    });
}

export function getMyId() {
    return myId;
}
