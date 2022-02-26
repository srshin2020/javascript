//---------------------------------------------
//callback hell
const f1 = function (callback) {
    setTimeout(() => {
        console.log('f1 OK');
        callback();
    }, 2000);
}
const f2 = function (callback) {
    setTimeout(() => {
        console.log('f2 OK');
        callback();
    }, 1000);
}
const f3 = function (callback) {
    setTimeout(() => {
        console.log('f3 OK');
        callback();
    }, 1000);
}

f1(() => {
    f2(() => {
        f3(() => {
            console.log('ends')
        })
    })
});