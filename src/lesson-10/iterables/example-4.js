'use strict';
const iterable = {
    items: [],
    *[Symbol.iterator] () {
        for (const item of this.items) {
            yield item;
        }
    }
}

iterable.items.push(1);
iterable.items.push(2);
iterable.items.push(3);

for (const item of iterable) {
    console.log(item);
}
