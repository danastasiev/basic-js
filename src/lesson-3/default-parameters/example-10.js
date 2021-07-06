'use strict';

const getMultiplier = function () {
    const multiplier = 2;

    return multiplier;
};

function f(a, b = a * getMultiplier()) {
    console.log(`${ a }, ${ b }`);
}

f(2); // 2, 4
f(1, 2) // 1, 2
