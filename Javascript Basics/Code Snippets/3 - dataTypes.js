// Seven data types

// 1. Number
let age = 19;
let height = 170.5;

// special values - Infinity and NaN
// Infinity is the mathematical infinity value
console.log(Infinity);
 // Infinity

// NaN is the value due to an incorrect operation
console.log("not a number" / 2);

//NaN, such division is erroneous

// 2. String
// character array
let name = "Burhan";
let address = 'Mumbai';
let combined_1 = name + address;
let combined_2 = `${name} ${address}`;

// 3. Boolean
// can take two values, either true or false
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
let isGreater = 4 > 1;
console.log(isGreater);
 // true (the comparison result is "yes")

// 4. null
// In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
// It’s just a special value which represents “nothing”, “empty” or “value unknown”.
let somthing = null;

// 5. undefined
// The meaning of undefined is “value is not assigned”.
// If a variable is declared, but not assigned, then its value is undefined:
let x;

console.log(x);
 // shows "undefined"

// 6. Object
// Collection of other datatypes

let fullName = {
    firstName: "Burhanuddin",
    middleName: "Moiz",
    lastName: "Udaipurwala"
}

// 7. Symbol
// The symbol type is used to create unique identifiers for objects