'use strict';
function* createIterator () {
    const first = yield 1;
    let second;

    try {
        second = yield first + 2;
    } catch ({ message }) {
        console.log('Error:', message);
        second = 6;
    }

    yield second + 3;
}

const iterator = createIterator();

console.log(iterator.next());
console.log(iterator.next(4));
console.log(iterator.throw(new Error('generator error')));
