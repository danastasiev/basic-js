'use strict';

{
    f(); // 1

    // function declaration
    function f() {
        console.log(1);
    };
}

f(); // ReferenceError: f is not defined
