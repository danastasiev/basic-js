'use strict';

const rx1 = /ab/i;
const rx2 = new RegExp(rx1); // no errors

// Should be run in environment that does not support ES6,
// old browser for example
const re1 = /ab/i;
const re2 = new RegExp(re1, 'g'); // TypeError: can't supply flags when constructing one RegExp from another

console.log(re1); // /ab/i
console.log(re2); // /ab/g

console.log(re1.test('ab')); // true
console.log(re2.test('ab')); // true

console.log(re1.test('AB')); // true
console.log(re2.test('AB')); // false

