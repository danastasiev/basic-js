'use strict';
const createIterator = function* (items) {
    yield 1;
    yield 2;
    yield 3;
}

const iterator = createIterator([1, 2, 3]);

console.log(iterator.next().value);
