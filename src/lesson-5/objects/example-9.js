'use strict';

console.log(+0 === -0);
console.log(NaN === NaN);
console.log(Number.isNaN(NaN) === Number.isNaN(NaN));
console.log(47 == '47');
console.log(47 === '47');

console.log(`\n************************************\n`)

console.log(+0 === -0, Object.is(+0, -0));
console.log(NaN === NaN, Object.is(NaN, NaN));
console.log(Number.isNaN(NaN) === Number.isNaN(NaN));
console.log(47 == '47', Object.is(47, '47'));
console.log(47 === '47', Object.is(47, '47'));
