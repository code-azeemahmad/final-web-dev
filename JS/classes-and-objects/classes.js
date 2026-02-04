/*
Classes in JS:
Class is a program-code template for creating objects.
Those objects will have some state (variables) & some behaviour (functions) inside it.

class MyClass {
    constructor() {....}
    myMethod() {....}
let myObj = new MyClass( ) ;
*/

class toyotaCar {
    start() {
        console.log("Start!");
    }
    stop() {
        console.log("Stop!");
    }
    setBrand(brand) {
        this.brand = brand;
    }
};

let cultus = new toyotaCar();
cultus.setBrand("VXL");