console.log("Hello I am a conditional statement");

let age = 45;

// K&R style syntax

if (age > 18) {
  console.log("Yes! You can drive");
} else {
  console.log("No! You can't drive");
}

let grace = 2;

console.log(age + grace);
console.log(age - grace);
console.log(age * grace);
console.log(age / grace);
console.log(age ** grace);
console.log(age % grace);

age += grace;

// if ("3"===3) compares datatype and value

// ternary operator in js

let ab = 5;
let bc = 6;
ac = ab > bc ? (ab - bc) : (bc + ab);
console.log(ac);
