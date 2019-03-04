// if else
if (1 < 2) {
    console.log("2 is greater than 1");
}

if (1 < 2) console.log("1 is less than 2");

if (1 < 2) {
    console.log("1 is less than 2");
} else {
    console.log("1 is greater than 2");
}

// falsy values

if (0) {
    // this will never be executed
    console.log("0 is false in js");
}

if (null) {
    // null is also a "falsy" value
}

if ("") {
    // an empty string is a falsy value
}

// truthy values
if (1) {
    console.log("1 is a truthy value");
}

if ("name") {
    console.log("non empty string is a truthy value");
}

// SWITCH
/* switch (x) {
    case 'value1':  // if (x === 'value1')
      ...
        [break]

    case 'value2':  // if (x === 'value2')
      ...
        [break]

    default:
      ...
        [break]
} */

let a = 2 + 2;

switch (a) {
    case 3:
        console.log('Too small');
        break;
    case 4:
        console.log('Exactly!');
        break;
    case 5:
        console.log('Too large');
        break;
    default:
        console.log("I don't know such values");
}