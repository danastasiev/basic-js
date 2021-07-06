'use strict';


const f1 = function (n) {
    return n;
};

// arrow function
const f2 = n => n;

console.log(f1.hasOwnProperty('prototype')); // true
console.log(f2.hasOwnProperty('prototype')); // false