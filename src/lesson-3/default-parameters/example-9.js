'use strict';

const multiplier = 2;

function f(a, b = a * multiplier) {
    console.log(`${ a }, ${ b }`);
}

f(2); // 2, 4
f(1, 2) // 1, 2
