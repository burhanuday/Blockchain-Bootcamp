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
        console.log(this.name);
    }

    static sayHello() {
        console.log("Hello");
    }
}

let user = new User("Joh");
user.sayHi();

// static methods in a class
class MathFunctions {
    static sum(a, b) {
        return a + b;
    }
}

let math = new MathFunctions();
console.log(MathFunctions.sum(2, 5));
