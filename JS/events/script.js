/*
Events in JS:
    The change in the state of an object is known as an Event
    Events are fired to notify code of "interesting changes" that may affect code execution.
--> Mouse events (click, double click etc.)
--> Keyboard events (keypress, keyup, keydown)
--> Form events (submit etc.)
--> Print event & many more
 */

// node.event = () => {
     // handle here
// }

let btn1 = document.getElementById("btn1");
btn1.onclick = () => {
    console.log("Button was clicked!");
    let a = 5;
    a++;
    console.log(a);
}

let box = document.querySelector(".box");
box.onmouseover = () => {
    console.log("You are inside div!");
}

// js file event handling > inline event handling
// one event can't be handled again
// last event handler overwrites the previous handler

/*
Event Object:
It is a special object that has details about the event.
All event handlers have access to the Event Object's properties and methods.
*/

let btn2 = document.querySelector("#btn2");
btn2.onclick = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
}

// Event Listener
// node.addEventListener( event, callback )
// node.removeEventListener( event, callback )
// callback is event handler
// callback is a function which is passed as an argument to another function
// when the event occurs, the callback is executed

let btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
    console.log("hello world! - Handler1");
});

btn3.addEventListener("click", (e) => {
    console.log("hello world! - Handler2");
    // console.log(e.type, e.target);
});

// *Note : the callback reference should be same to remove
// both functions work same but are different in memory. So, 
// we store the function in a variable to give it a single name in memory

const handler3 = () => {
    console.log("hello world! - Handler3");
}

btn3.addEventListener("click", handler3);

btn3.addEventListener("click", () => {
    console.log("hello world! - Handler4");
});

btn3.removeEventListener("click", handler3)

// practice - toggle between light and dark mode

const mod = () => {
    document.body.classList.toggle("dark");
}

let modBtn = document.querySelector("#togMode");
modBtn.addEventListener("click", mod);
