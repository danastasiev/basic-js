'use strict';

function f(a, b = a * 2) {
    console.log(`${ a }, ${ b }`);
}

f(2); // 2, 4
f(1, 2) // 1, 2
