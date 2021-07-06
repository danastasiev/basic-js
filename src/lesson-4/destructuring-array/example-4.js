'use strict';

let a = 1;
let b = 2;
let temporary;

console.log('a:', a);
console.log('b:', b);

// ES5 way
temporary = a;
a = b;
b = temporary;

console.log('a:', a);
console.log('b:', b);
