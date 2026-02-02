// Callback is a function which is passed as an argument to another function

function sum(a, b) {
    console.log(a + b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

calculator(2, 3, sum);      // callbacks are passed without any parenthesis

// calculator(2, 3, (a, b) => {
//     console.log(a + b);
// })

// setTimeout takes callback function as an argument

