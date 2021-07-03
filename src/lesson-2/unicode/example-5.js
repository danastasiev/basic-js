'use strict';

console.log('S\u0307\u0323'); // Ṩ
console.log('S\u0323\u0307'); // Ṩ

console.log('S\u0307\u0323' === 'S\u0323\u0307'); // false

console.log('S\u0307\u0323'.normalize() === 'S\u0323\u0307'.normalize()); // true
