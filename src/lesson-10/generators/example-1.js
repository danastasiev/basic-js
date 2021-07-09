'use strict';
function createIterator (items) {
    let i = 0;

    return {
        next: () => {
            const done = i >= items.length;
            const value = !done ? items[i++] : undefined;

            return {
                value,
                done
            }
        }
    }
}

const iterator = createIterator([1, 2, 3]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
