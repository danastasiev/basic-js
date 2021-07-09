'use strict';
function* createIterator () {
    yield 1;
    return 24;
}

const iterator = createIterator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
