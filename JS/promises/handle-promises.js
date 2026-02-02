//  HOW TO USE RETURNED PROMISES
/*
Handle Promises:
.then( ) & .catch( )
promise.then( ( res ) => {....})        for fulfilled promise
promise.catch( ( err ) ) => {....})     for rejected promise
*/

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise!");
        // resolve("Success");
        reject("Network error");
    });
};

let promise = getPromise();

promise.then((res) => {                     // result (parameter)
    console.log("promise fulfilled!", res);
});

promise.catch((err) => {                    // error (parameter)
    console.log("promise rejected!", err);
})