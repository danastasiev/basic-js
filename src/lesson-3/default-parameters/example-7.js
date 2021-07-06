'use strict';

function f(a, b, c) {
    console.log(`${ a }, ${ b }, ${ c }`);
}

const n = [1, 2, 3];
f(...n); // 1, 2, 3
