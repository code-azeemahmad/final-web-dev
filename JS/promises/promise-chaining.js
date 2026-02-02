function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data 1");
            resolve("success");
        }, 4000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data 2");
            resolve("success");
        }, 4000);
    });
}

// console.log("Fetching data 1");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
// });

// console.log("Fetching data 2");
// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);
// });

// we want data 2 to be fetched after data 1 --> promise chaining

console.log("Fetching data 1");
asyncFunc1().then((res) => {
    console.log("Fetching data 2");
    asyncFunc2().then((res) => {});
});

// the same job is done is by callback but promises syntax is easier

function getData(dataId) {                      // we don't need getNextData now
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            resolve("Success");
        }, 2000);
    });
}

// getData(1, () => {
//     console.log("getting data 2...");
//     getData(2, () => {
//         console.log("getting data 3...");
//         getData(3, () => {
//             console.log("getting data 4...");
//             getData(4);
//         });
//     });
// });

// promise chaining

// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res) => {
//         console.log(res);
//     });
// });

// another better way is

getData(1).then((res) => {
    console.log(res);
    return getData(2);
}).then((res) => {
    console.log(res);
    return getData(3);
}).then((res) => {
    console.log(res);
});

// this code is easier than callback hell but not much easy when we start adding clg
