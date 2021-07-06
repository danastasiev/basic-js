'use strict';

function f(a, ...n) {
    console.log(`First argument is ${a}, others: ${ n }`);
}

f(1, 2, 3, 4, 5); // First argument is 1, others: 2,3,4,5
