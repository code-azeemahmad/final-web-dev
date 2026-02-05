// destructuring

// let [x, y] = [1, 2];
// console.log(x, y);

// let [x, y] = [1, 2, 3];
// console.log(x, y);

// let [x, y, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(x, y, rest);

let obj = {
    a: 1,
    b: 2,
    c: 3
}

let {a, b} = obj;
console.log(a, b);

// spread operator

function sum(a, b, c) {
    return a + b + c;
}

let arr = [1, 4, 6];
console.log(sum(arr[0], arr[1], arr[2]));
console.log(arr[0] + arr[1] + arr[2]);
console.log(sum(...arr));