// 1. WHILE
/* while (condition) {
    // code
    // so-called "loop body"
  } */

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
    console.log(i);
    i++;
}

// 2. DO WHILE
/* do {
    // loop body
} while (condition); */

let i = 0;
do {
    console.log(i);
    i++;
} while (i < 3);

// 3. FOR
/* for (begin; condition; step) {
    // ... loop body ...
} */

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    console.log(i);
}