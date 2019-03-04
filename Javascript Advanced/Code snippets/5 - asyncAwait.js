async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject("Error!"), 1000);
    });
    return await promise; // wait till the promise resolves (*)
}

f().then(() => console.log("after")).catch(() => { console.error("error") })

// using arrow functions and returning a promise directly
const scaryClown = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('🤡');
        }, 2000);
    });
}

const msg = async () => {
    const msg = await scaryClown();
    console.log('Message:', msg);
}

msg();