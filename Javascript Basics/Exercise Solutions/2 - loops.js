for (let i = 0; i < 50; i++) {
    if (i == 20) {
        console.log("This is 20");
        continue;
    }
    if (i % 2 == 0) {
        console.log(i);
    }
    if (i == 45) {
        console.log("This is 45");
        break;
    }
}

// prime numbers from 1 to 20
for (let j = 1; j <= 20; j++) {
    let factors = 0;
    for (let k = 1; k < j; k++) {
        if (j % k == 0) {
            factors++;
        }
    }
    if(factors == 1){
        console.log(`${j} is a prime number`);
    }
}