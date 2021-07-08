'use strict';

const c = Symbol('Field c');
const d = Symbol('Field d');

const object = {
    a: 'a',
    b: 'b'
};

object[c] = 'c';
object[d] = 'd';

const keys = Object.getOwnPropertySymbols(object);
console.log(object[keys[0]]); // c
console.log(object[keys[1]]); // d
