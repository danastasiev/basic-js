'use strict';

const f = function() {
    const t = {
        0: 'sdf',
        1: 1,
        length: 2
    }

    const array = Array.from(t);

    console.log(array); // [ 1, 2, 3 ]
};

f(1, 2, 3);
