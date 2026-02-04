/*
Prototypes in JS:
A javaScript object is an entity having state and behavior (properties and method).
JS objects have a special property called prototype.
We can set prototype using __ proto__
*If object & prototype have same method,
object's method will be used.
*/

// prototype is itself an object having its own methods and properties
// js objects  inherit some properties and methods from their prototypes

const student = {
    fullName: "Ahmad",
    marks: 988,
    printMarks: function() {
        console.log("The marks are:", this.marks);
    }
}

// we can make our own prototypes

const employee = {
    calculateTax() {
        console.log("Tax rate is 10%");
    }
};

const omar = {
    salary: 50000,
};

// now, another object can inherit function

omar.__proto__ = employee;

// datatype of prototype is a reference to an object or null

/* when an object and its prototype has same method, 
that method is used which is defined in the object */

const shariq = {
    salary: 60000,
    calculateTax() {
        console.log("Tax rate is 20%");
    },
};

shariq.__proto__ = employee;

