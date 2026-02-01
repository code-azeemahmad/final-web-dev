let arr = [1, 2, 3, 4, 5];

console.log(arr, typeof arr);
console.log(arr.length);        // length is a property, not a function

// arrays are mutable, unlike strings

arr[0] = 8;
console.log(arr);

console.log(arr.toString());

console.log(arr.join(" and "));

arr = [1, 2, 3, 4, 5, 6];

console.log(arr.pop(), arr);
console.log(arr.push("azeem"), arr);
console.log(arr.shift(), arr);
console.log(arr.unshift("jack"), arr);

// delete arr[6];
// console.log(arr[6]);

// a1.concat(a2, a3);

let arr1 = [1, 2, 3, 4, 5, 6];

let result1 = arr1.slice(1, 3);         // does not modify, return a new
console.log(result1);
console.log(arr1);

let result2 = arr1.splice(1, 3, 222, 333);     // modifies the original array
console.log(result2);
console.log(arr1);


