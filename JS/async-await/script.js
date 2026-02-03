/*
Async-Await:
    async function always returns a promise automatically.
        async function myFunc( ) {....}
    await pauses the execution of its surrounding 
    async function until the promise is settled.
*/


async function hello() {
    console.log("hello world!");
}

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather Forecast");
            resolve(200);
        }, 2000);
    });
}

// await is only valid in async function.
async function getWeatherData() {
    await api();    // 1st call
    await api();    // 2nd call
    await api();    // 3rd call
}

/* async await provides a suitable syntax to make a task done first and then second */

// HOW TO USE ASYNC - AWAIT

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            resolve("Success");
        }, 2000);
    });
}

async function getAllData() {
    console.log("Getting data 1");
    await getData(1);
    console.log("Getting data 2");
    await getData(2);
    console.log("Getting data 3");
    await getData(3);
}

// this code is the easiest among callback hell and promise chaining.