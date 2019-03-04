//creating an object
let person = {
    name: "burhan",
    age: 19,
    "has own car": false
}

//adding a property
person["profession"] = "student";
// or you can also do
person.height = 170;

console.log(person);

// deleting a property
delete person.height;

console.log(person);

// check for a property
let user = { name: "John", age: 30 };

console.log("age" in user); // true, user.age exists
console.log("blabla" in user); // false, user.blabla doesn't exist

// iterating through all keys in object
for(let key in user){
    console.log(`${key}: ${user[key]}`);
}

//copying by reference for primitives
let message = "Hello!";
let phrase = message;
phrase = "Hola!"
console.log(message);

// copying by reference for objects
// objects differ from primitives
// A variable stores not the object itself, but its “address in memory”, in other words “a reference” to it.
let anotherPerson = user;
anotherPerson["newProperty"] = "This is the new property";
console.log(user);

// cloning an object
user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// or
let newUser = Object.assign({}, user);

// using the rest operator
newUser = {...person}
console.log(newUser);

// objects can also contain methods
let student = {
    printName: function(){
        console.log("burhan");
    }
}

student.printName();