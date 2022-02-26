//-----------------------
//promise chaining 
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
pr1()
    .then((res) => {
        console.log(res);
        return pr2();
    })
    .then((res) => {
        console.log('p2 complete')
        return pr3(res)
    })
    .then((res) => console.log(res)) //한문장인 경우는 return 생략  () => x는 () => {return x;}와 같습니다
    .catch(err => console.log(err))
    .finally(() => console.log('ends!'))
