// pending 대기
function sayHello() {
    return new Promise((resolve, reject) => {
        const hello = "Hello Hello";
        resolve(hello);
        // reject(new Error());
        // resolve("hello!!");
    });
}

// sayHello()
//     .then((resolvedData) => {
//         console.log(resolvedData);
//         return resolvedData;
//     })
//     .then((resolvedData) => {
//         console.log(resolvedData);
//         return resolvedData;
//     })
//     .then((resolvedData) => {
//         console.log(resolvedData);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// pullfilled 이행
// rejected 실패

async function test() {
    const hello1 = await sayHello();
    console.log(hello1);
}
test();