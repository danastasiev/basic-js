'use strict';

function f(a = b, b = 1) {
    console.log(`${ a }, ${ b }`);
}

f(); // ReferenceError: b is not defined
