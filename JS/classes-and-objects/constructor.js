/*
Classes in JS:
Constructor() method is :       class MyClass {
o automatically invoked by new      constructor() {....}
o initializes object.               myMethod() {....}
                                }
*/

class toyotaCar {
    constructor(brand, mileage) {
        console.log("Creating new Objects!");
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("Start!");
    }
    stop() {
        console.log("Stop!");
    }
};

let cultus = new toyotaCar("VXL", 12);
console.log(cultus);
