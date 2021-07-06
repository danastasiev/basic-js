'use strict';

// ES6 way
const numbers = (...params) => {
    console.log(params); // [ 1, 2, 3 ]
};

numbers(1, 2, 3);
