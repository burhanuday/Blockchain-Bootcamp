// To String
let value = true;
let valueInString = String(value);

// To number
console.log(Number("   123   ")); // 123
console.log(Number("123z"));      // NaN (error reading a number at "z")
console.log(Number(true));        // 1
console.log(Number(false));       // 0

// To boolean
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false

console.log(Boolean("hello")); // true
console.log(Boolean("")); // false

console.log( Boolean("0") ); // true
console.log( Boolean(" ") ); // spaces, also true (any non-empty string is true)