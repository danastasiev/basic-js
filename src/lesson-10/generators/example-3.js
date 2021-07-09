'use strict';
function* createIterator (items) {
    items.forEach(item => yield item + 1);
}

const iterator = createIterator([1, 2, 3]);

console.log(iterator.next());
