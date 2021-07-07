'use strict';

const f = function() {
    const array = Array.from(arguments, n => n * 2);

    console.log(array); // [ 2, 4, 6 ]
};

f(1, 2, 3);
