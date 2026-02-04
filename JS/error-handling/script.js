// prompt() takes input as string

let a = prompt("Enter First Number: ");

let b = prompt("Enter Second Number: ");

// throwing an error on your own
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry brother! This is not  allowed");
}

let sum = parseInt(a) + parseInt(b);

// handling an error by try, catch

// let x = 1;
// try {
//     console.log("The sum is:", sum * x);
// } catch (error) {
//     console.log("To err is human!");
// }
// finally {
//     console.log("Files are being closed and DB connection is terminated!");
// }

(function() {
    try {
        let x = 1;
        console.log("The sum is:", sum * x);
        return true;
    } catch (error) {
        console.log("To err is human!");
        return false;
    }
    finally {
        console.log("Files are being closed and DB connection is terminated!");
    }
})();

/*
finally is a block that ALWAYS executes after try and catch.
--> Error or no error
--> return or no return
--> Exception thrown or handled
finally still runs
 */

