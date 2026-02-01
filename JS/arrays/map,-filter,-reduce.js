//  map

let arr = [1, 2, 3, 4, 5, 6];

// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     newArr.push(element ** 2);
// }
// console.log(newArr);

let newArr = arr.map(e => {
    return e ** 2;
})

console.log(newArr);

// filter

const greaterThanFive = (e) => {
    if (e > 5) {
        return true;
    }
    return false;
}
console.log(newArr.filter(greaterThanFive));

let nums = [1, 2, 3, 4, 5, 6];

console.log(nums.filter(n => n % 2 === 0));

// reduce

const red = (a, b) => {
    return a * b;
}

console.log(nums.reduce(red));

console.log(nums.reduce((a, b) => a + b));
