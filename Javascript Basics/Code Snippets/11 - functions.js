// A simple function
function showMessage() {
    console.log('Hello everyone!');
}

showMessage();

// Function with parameters
function printName(name = "burhan") {
    console.log(name);
}

printName();

// function that returns a value
function addTwoNumbers(a, b) {
    return a + b;
}

console.log(addTwoNumbers(2, 5));

// function expressions
let sayHi = function () {
    console.log("Hi!");
};

// using arrow functions
/*
let func = function (arg1, arg2, ...argN) {
    return expression;
};
*/
let logMessage = (message) => {
    console.log(message);
}

let sum = (a, b) => a + b;

// passing functions as parameters also called as callbacks
let execFunction = (sum) =>{
    console.log(sum(2, 5));
}