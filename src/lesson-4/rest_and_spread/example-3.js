'use strict';

// ES6 way
const numbers = (num1, ...params) => {
    console.log(num1); // 1
    console.log(params); // [ 2, 3 ]
};

numbers(1, 2, 3);
