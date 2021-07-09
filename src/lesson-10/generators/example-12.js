'use strict';
function* createNumberIterator () {
    yield 1;
    yield 2;
    return 3;
}

function* createRepeatingIterator (count) {
    for (let i = 0; i < count; i++) {
        yield 'pizza';
    }
}

function* createCombinedIterator () {
    const result = yield* createNumberIterator();
    yield* createRepeatingIterator(result);
    yield true;
}

const iterator = createCombinedIterator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
