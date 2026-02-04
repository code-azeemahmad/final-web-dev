/*
Inheritance in JS
inheritance is passing down properties & methods from parent class to child class.
class Parent {

}
class Child extends Parent {

}
*If Child & Parent have same method, child's
method will be used. [Method Overriding]
*/

class Parent {
    hello() {
        console.log("hello all");
    }
}

class Child extends Parent {

}

let obj = new Child();

class Person {
    constructor() {
        console.log("Enter Parent Constructor");
        this.species = "homo sapiens"
    }
    eat() {
        console.log("I am eating");
    }
    sleep() {
        console.log("I am sleeping");
    }
    work() {        // child class overrides this method
        console.log("I am working");    
    }
}

class Engineer extends Person {
    constructor(branch) {
        console.log("Enter Child Constructor");
        super();            // to invoke parent class constructor
        this.branch = branch;
        console.log("Exit Child Constructor");
    }
    work() {
        console.log("solve problems! Build something.");
    }
}


class Doctor extends Person {
    work() {
        console.log("I treat Patients");
    }
}

// let azeem = new Engineer();
// let bilal = new Doctor();

/*
super Keyword:
The super keyword is used to call the constructor 
of its parent class to access the parent's properties and methods.
    super(args)     // calls Parent's constructor
    super.parentMethod(args)
*/

let engObj = new Engineer("Chemical  Engineer");

/*
super(name) keyword is important in passing some 
information from child class to parent class during inheritance
To access parent class method and properties, super.eat();
*/