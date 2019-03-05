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

obj.example();