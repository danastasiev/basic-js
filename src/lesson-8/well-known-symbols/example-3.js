'use strict';

const array = [1, 2, 3];

const object = {
    length: 2,
    0: 'a',
    1: 'b'
}

console.log(array.concat(object)); // [ 1, 2, 3, { '0': 'a', '1': 'b', length: 2 } ]