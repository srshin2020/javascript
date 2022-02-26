//---------------------------------------------
//promise
const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK');
    }, 1000);
});
console.log(pr);
console.log('start');
pr
    .then((result) => {
        console.log(result);
        console.log(pr);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log('done');
    });