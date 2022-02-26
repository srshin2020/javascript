

function getBack(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, 5000);
    })
}

async function showName() {
    console.log('begins...')
    const result = await getBack('Kim');
    console.log(result);
    console.log('ends...')
}
showName();