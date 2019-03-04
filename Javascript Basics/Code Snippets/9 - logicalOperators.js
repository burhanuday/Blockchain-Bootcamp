// There are three logical operators in JavaScript: || (OR), && (AND), ! (NOT)

// 1. OR
let hour = 9;

if (hour < 10 || hour > 18) {
  console.log('The office is closed.');
}

// 2. AND
hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  console.log('The time is 12:30');
}

// 3. NOT
console.log(!true); // false
console.log(!0); // true