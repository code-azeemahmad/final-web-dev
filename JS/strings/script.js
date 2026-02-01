console.log("I am a string");

let s = "Azeem";
console.log(s[0]);
console.log(s[1]);
console.log(s[2]);
console.log(s[3]);
console.log(s[4]);
console.log(s[5]);

console.log(s.length);

let real_name = "Azeem";
let friend = "code-azeem";
// template literal - string interpolation
console.log(`His name is ${real_name} and his friend's name is ${friend}`);

console.log(friend.toUpperCase());
console.log(friend.toLocaleLowerCase());
console.log(friend.length);

console.log(real_name.slice(1, 4));     // slice(inclusive, exclusive)
console.log(real_name.slice(1));

console.log(real_name.replace("A", "4"));       // first occurrence will be replaced
console.log(real_name.concat(friend, "code-Azeem"));

let white = "  white";
console.log(white.trim());      // removes white spaces

// strings are immutable in JS but mutable in C++

console.log(real_name.charAt(0));
console.log(real_name.indexOf("m"));
console.log(real_name.startsWith("Az"));
