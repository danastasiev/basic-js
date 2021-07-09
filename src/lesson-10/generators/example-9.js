'use strict';
function* createIterator () {
    yield 1;
    return;
    yield 2;
    yield 3;
}

const iterator = createIterator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
