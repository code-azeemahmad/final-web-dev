/*
                                Sync in JS
Synchronous:
    Synchronous means the code runs in a particular sequence of instructions given in the program.
    Each instruction waits for the previous instruction to complete its execution.
Asynchronous:
    Due to synchronous programming, sometimes imp instructions get
    blocked due to some previous instructions, which causes a delay in the UI.
    Asynchronous code execution allows to execute next instructions
    immediately and doesn't block the flow.
*/

// function hello() {
//     console.log("Hello to Async Programming!");
// }

console.log("one");
console.log("two");

setTimeout(() => {
    console.log("Hello World!");
}, 2000);      // timeout, 2s = 2000ms

console.log("three");
console.log("four");

// async pro runs setTimeout parallel and runs the remaining instructions