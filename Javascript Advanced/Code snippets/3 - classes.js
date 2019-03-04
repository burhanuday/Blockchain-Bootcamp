// Using constructor functions
function Person(fn, ln) {
    this.first_name = fn;
    this.last_name = ln;

    this.displayName = function () {
        console.log(`Name: ${this.first_name} ${this.last_name}`);
    }

    this.displayThis = function(){
        console.log(this);
    }
}

let person = new Person("John", "Doe");
person.displayName(); // Prints Name: John Reed
person.displayThis();

/* class MyClass {
    constructor(...) {
        // ...
    }
    method1(...) { }
    method2(...) { }
    get something(...) { }
    set something(...) { }
    static staticMethod(..) { }
    // ...
} */

class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name + " says Hi");
    }

    displayThis(){
        console.log(this);
    }
}

let user = new User("Joh");
user.sayHi();
user.displayThis();

// static methods in a class
class MathFunctions {
    static sum(a, b) {
        return a + b;
    }
}

let math = new MathFunctions();
console.log(MathFunctions.sum(2, 5));