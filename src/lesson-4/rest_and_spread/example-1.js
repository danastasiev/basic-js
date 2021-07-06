'use strict';

// ES5 way
function numbers () {
    const params = [].slice.call(arguments);
    console.log(params); // [ 1, 2, 3 ]
}

numbers(1, 2, 3);
