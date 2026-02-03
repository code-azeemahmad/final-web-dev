// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("Data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// };

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            resolve("Success");
        }, 2000);
    });
}

// callback hell
getData(1, () => {
    console.log("getting data 2...");
    getData(2, () => {
        console.log("getting data 3...");
        getData(3, () => {
            console.log("getting data 4...");
            getData(4);
        });
    });
});

// promise chaining
getData(1).then((res) => {
    console.log(res);
    return getData(2);
}).then((res) => {
    console.log(res);
    return getData(3);
}).then((res) => {
    console.log(res);
});

// async - await 
async function getAllData() {
    console.log("Getting data 1");
    await getData(1);
    console.log("Getting data 2");
    await getData(2);
    console.log("Getting data 3");
    await getData(3);
}