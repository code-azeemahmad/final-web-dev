function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            resolve("Success");
        }, 2000);
    });
}

// async function getAllData() {
//     console.log("Getting data 1");
//     await getData(1);
//     console.log("Getting data 2");
//     await getData(2);
//     console.log("Getting data 3");
//     await getData(3);
// }

// IIFE: Immediately Invoked Function Expression    (func())();
// IIFE is a function that is called immediately as soon as it is defined.

(async function() {
    console.log("Getting data 1");
    await getData(1);
    console.log("Getting data 2");
    await getData(2);
    console.log("Getting data 3");
    await getData(3);
})();

// remove the name, enclose in () and put () after
// cannot be used again, copied