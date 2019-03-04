// using ==
// type conversion is performed
console.log( 2 > 1 );  // true (correct)
console.log( 2 == 1 ); // false (wrong)
console.log( 2 != 1 ); // true (correct)

console.log( true == 1 ); // true
console.log( false == 0 ); // true

// using ===
// type conversion is not done
console.log( 0 === false ); // false, because the types are different
console.log( null === undefined ); // false
console.log( null == undefined ); // true

console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log( null >= 0 ); // (3) true