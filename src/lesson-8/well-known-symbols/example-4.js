'use strict';

const array = [1, 2, 3];

const object = {
    [Symbol.isConcatSpreadable]: true,
    length: 2,
    0: 'a',
    1: 'b'
}

console.log(array.concat(object)); // [ 1, 2, 3, 'a', 'b' ]