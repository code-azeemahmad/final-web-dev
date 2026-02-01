function sum(a, b, c = 3)       // c is optional parameter
{
    // console.log(a + b);
    return a + b + c;
}

result = sum(3, 6);

console.log("The sum of the numbers is:", result);

const func = (x) => {
    console.log("I am an arrow function", x);
}

func(11);
func(22);
func(33);