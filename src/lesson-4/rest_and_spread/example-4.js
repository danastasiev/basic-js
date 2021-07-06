'use strict';

// ES6 way
const numbers = (num1, ...params, num4) => {
    console.log(num4); // SyntaxError: Rest parameter must be last formal parameter
};

numbers(1, 2, 3, 4);
