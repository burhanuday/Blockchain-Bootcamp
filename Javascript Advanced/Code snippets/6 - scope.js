// a variable defined outside can be accessed inside a function
let outside = 6;
function outsideFunction() {
    console.log(outside);
}

// a variable defined inside a function cannot be accessed outside
function insideFunction() {
    let inside = 6;
}

console.log(inside); // throws error "ReferenceError: inside is not defined"