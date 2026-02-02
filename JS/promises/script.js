/*
Promises
Promise is for "eventual" completion of task. It is an object in JS.
It is a solution to callback hell.

let promise = new Promise((resolve, reject) => {....})
                        Function with 2 handlers

*resolve & reject are callbacks provided by JS
*/

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
// })

/*
A JavaScript Promise object can be:

o Pending : the result is undefined
o Resolved : the result is a value (fulfilled)    resolve( result )
o Rejected : the result is an error object      reject( error )

*Promise has state (pending, fulfilled) & some
result (result for resolve & error for reject).
*/

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("success");
//     reject("some error occurred");
// })

// in general programming, we don't create promises. 
// If we send a request to some API, that API returns 
// a promise to us and then we deal with that promise.

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            resolve("Success");
            // reject("Error");
            if (getNextData) {
                getNextData();
            }
        }, 5000);
    });
};

/* let promise = getData(123); 
getData API returns some data but 
returns data after 5s and immediately 
returns a promise of sending data 
exactly after 5s.
We save its promise. promise is pending until it sends data.
After sending data, promise is fulfilled
*/