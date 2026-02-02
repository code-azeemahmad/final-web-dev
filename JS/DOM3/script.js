console.log("Hello World");

// let cont = document.getElementsByClassName("box");       
// console.log(cont);                                    // HTMLCollection
// cont[2].style.backgroundColor = "red";

let box3 = document.getElementById("red");
box3.style.backgroundColor = "blue";

let box = document.querySelector(".box").style.backgroundColor = "beige";     // Selects the FIRST matching element
console.log(box);           // Returns only one element

document.querySelectorAll(".box")                   // Selects ALL matching elements
console.log(document.querySelectorAll(".box"));     // Returns a NodeList (static)

let boxes = document.querySelectorAll(".box");
boxes.forEach(e => {
    console.log(e);
    e.style.backgroundColor = "aqua";
});

console.log(document.getElementsByTagName("div"));

// More DOM methods - Matches, Closest, Contains

element.matches("css-selector")     // Checks: “Does THIS element match a CSS selector?”
element.closest("css-selector")     // Finds the nearest ancestor (or itself) matching a selector
parent.contains(child)              // Checks: “Is this element INSIDE another element?”
/*
________________________________________________________________
| Method       | Direction | Purpose                           |
| ------------ | --------- | --------------------------------- |
| `matches()`  | Self      | Does THIS element match selector? |
| `closest()`  | Upward    | Find nearest matching parent      |
| `contains()` | Downward  | Is element inside another?        |
|______________|___________|___________________________________|

*/



