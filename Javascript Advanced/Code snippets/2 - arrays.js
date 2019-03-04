// two ways of creating arrays
let arr1 = [];
let arr2 = new Array();

// initialising an array
let fruits = ["Apple", "Orange", "Plum"];

// accessing array elements
console.log(fruits[0]);

// add to end of an array
fruits.push("Banana");
console.log(fruits);

// removing the last element
fruits.pop();
console.log(fruits);

// add an element to the beginning of an array
fruits.unshift("Grapes");
console.log(fruits);

// remove an element from the beginning of an array
fruits.shift();
console.log(fruits);

// print length of array
console.log(fruits.length);