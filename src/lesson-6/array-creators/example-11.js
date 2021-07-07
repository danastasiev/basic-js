'use strict';

const f = function() {
    const array = [];

    for (let i = 0; i < arguments.length; i++) {
        array.push(arguments[i]);
    }

    console.log(arguments); // { '0': 1, '1': 2, '2': 3 }
    console.log(array); // [ 1, 2, 3 ]
};

f(1, 2, 3);
