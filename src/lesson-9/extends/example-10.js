'use strict';

function MyArray () {
    Array.apply(this, arguments);
}

MyArray.prototype = Object.create(Array.prototype, {
    constructor: {
        value: MyArray,
        writable: true,
        configurable: true,
        enumerable: true
    }
});

const colors = new MyArray();
colors[0] = 'red';

console.log(colors);
