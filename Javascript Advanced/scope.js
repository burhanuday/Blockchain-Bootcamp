let obj = {
    example: function () {
        console.log(this);
        /* function test() {
            console.log(this);
        }
        test(); */

        /* let test2 = () => {
            console.log(this);
        }
        test2(); */
    }
}

//obj.example();





let name = "Burhan";
{
    let name = "Vidit";
    console.log(name);
}
console.log(name);






