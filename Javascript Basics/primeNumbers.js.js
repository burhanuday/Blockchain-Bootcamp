let i = 0;
while (i < 20) {
    let factors = 0;
    for (let j = 1; j < i; j++) {
        if (i % j == 0) {
            factors++;
        }
    }
    if (factors == 1) {
        console.log(i + " is a prime number");
    } else {
        console.log(i + "is not a prime number");

    }
    i++;
}