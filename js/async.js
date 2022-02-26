
//-----------------
// async
// return 이 promise가 됨
// await는 async 안에서만 사용 가능 

async function getName() {
    return 'Shin';
}
console.log(getName);//async function
console.log(getName()); //promise


getName().then((res) => {
    console.log(res);
});
