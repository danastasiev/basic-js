'use strict';

let a = 1;
let b = 2;

console.log('a:', a);
console.log('b:', b);

[ a, b ] = [ b, a ];

console.log('a:', a);
console.log('b:', b);
