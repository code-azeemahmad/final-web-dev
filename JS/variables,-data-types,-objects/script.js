console.log("Hello World");

var a = 5;
var b = 6;
console.log(a + b);

var c = "azeem";

console.log(typeof a, typeof b, typeof c);

// var is globally scoped
// let and const are block scoped

const _a = 5;
// _a = _a + 1;     assignment to constant variable ain't allowed

let block = 5;
block = block + 1;
{
    let block = 66;
    console.log(block);
}
console.log(block);

let x = 66;
let y = 4.55;
let s = "Code-Azeem";
let u = undefined;
let n = null;

console.log(x, y, s, u, n);
console.log(typeof x, typeof y, typeof s, typeof u, typeof n);

// object is a combination of key: value pairs
let obj = {
    name: "azeem",
    "job role": "Software Engineer"
}
console.log(obj);
obj.salary = "100-crores";
console.log(obj);
console.log(obj["job role"]);