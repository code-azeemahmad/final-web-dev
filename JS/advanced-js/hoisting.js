/*
Hoisting:
    During the memory creation phase, 
    JavaScript moves declarations to the top of their scope.
Important:
--> Only declarations are hoisted
--> Assignments are NOT hoisted
*/

/*
JavaScript Execution Happens in 2 Phases
1) Memory Creation Phase
    --> Variables → allocated memory (undefined)
    --> Functions → stored fully in memory
2) Execution Phase
    --> Code runs line by line
    --> Values are assigned
*/

// Hoisting with var
console.log(a);
var a = 10;

// What JS sees internally
// var a;    // hoisted
// console.log(a);  // output: undefined
// a = 10;  

// Hoisting with let and const
console.log(b);     // ReferenceError: Cannot access 'b' before initialization
let b = 20;


/* let and const are hoisted BUT placed in:
Temporal Dead Zone (TDZ)
    Time between:
    start of scope → variable declaration

During TDZ:
    Variable exists
    Cannot be accessed */


// Function Declaration (Fully hoisted)

hello();

function hello() {
  console.log("Hello! World");
}


// hoisting inside functions is scope based

/*
Declarations go up, assignments stay down
    --> var → unsafe
    --> let / const → safer
    --> Function declarations → best
    --> Function expressions & arrows → not hoisted
*/