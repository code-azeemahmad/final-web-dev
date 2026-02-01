console.log("I am a loop");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let obj = {
    name: "Azeem",
    university: "UET",
    jobRole: "Developer"
}

for (const key in obj) {        // for in loop for objects
    const element = obj[key];
    console.log(key, element);
}

for (const i of "AZEEM") {      // for of loop for iterating arrays or strings
    console.log(i);
}

let i = 5;
while(i < 11) {     // while loop
    console.log(i);
    i++;
}

let j = 0;
do {                    // do while loop
    console.log(j);
    j++;
} while (j < 5);
