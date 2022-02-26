//-----------------------
//promise를 async, await를 이용하여 동기방식으로 호출
const pr1 = function () {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('p1-func');
            res('p1 OK');
        }, 2000)
    });
}
const pr2 = function () {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('p2-func');
            res('p2 OK');
        }, 2000)
    });
}
const pr3 = function (msg) {
    console.log(msg);
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('p3-func');
            res('p3 OK');
        }, 2000)
    })
}
async function call() {
    try {
        const ret = await pr1();
        console.log(ret);
        const ret2 = await pr2();
        console.log(ret2);
        const ret3 = await pr3(ret2);
        console.log(ret3);
    } catch (e) {
        console.log(e);
    }
}

call();