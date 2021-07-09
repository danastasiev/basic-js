'use strict';
function* createIterator () {
    const first = yield 1;
    const second = yield first + 2;

    yield second + 3;
}

const iterator = createIterator();

console.log(iterator.next());
console.log(iterator.next(4));
console.log(iterator.next(5));
console.log(iterator.next());
