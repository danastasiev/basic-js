'use strict';

const numbers = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
};

const array = Array.from(numbers, n => n * 2);
console.log(array); // [ 2, 4, 6 ]
