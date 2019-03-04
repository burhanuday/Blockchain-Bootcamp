// The JavaScript this keyword refers to the object it belongs to.
/*
It has different values depending on where it is used:
In a method, this refers to the owner object.
Alone, this refers to the global object.
In a function, this refers to the global object.
*/

// 
console.log(this === module.exports);

// after adding a property to the global object
this.name = "burhan";
console.log(this);

// in a function, this points to the global object
function example() {
    console.log(this === global);
}
example();

let arr = () => {
    console.log(this);
}
arr();

// in an object, this in a function points to that object
// but arrow function will point to the global object
let obj = {
    objFunction: function () {
        console.log(this);
    },
    arrow: () => {
        console.log(this);
    }
}
obj.objFunction();
obj.arrow();

function Person(fn, ln) {
    this.first_name = fn;
    this.last_name = ln;

    this.displayName = function () {
        console.log(`Name: ${this.first_name} ${this.last_name}`);
    }

    this.usingArrow = () => {
        console.log(`Name: ${this.first_name} ${this.last_name}`);
    }
}

let person = new Person("John", "Reed");
person.displayName(); // Prints Name: John Reed
person.usingArrow(); // Prints Name: John Reed