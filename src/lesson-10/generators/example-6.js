'use strict';
const object = {
    *createIterator () {
        yield 1;
        yield 2;
        yield 3;
    }
};

const iterator = object.createIterator();

console.log(iterator.next().value);
