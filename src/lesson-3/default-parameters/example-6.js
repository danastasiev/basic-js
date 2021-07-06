'use strict';

function f(a, ...n, z) {
    console.log(`First argument is ${a}, others: ${ n }`);
}

f(1, 2, 3, 4, 5); // SyntaxError
