'use strict';
function* createNumberIterator () {
    yield 1;
    yield 2;
}

function* createUserIterator () {
    yield 'Jon';
    yield 'Joe';
}

function* createCombinedIterator () {
    yield* createNumberIterator();
    yield* createUserIterator();
    yield true;
}

const iterator = createCombinedIterator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
