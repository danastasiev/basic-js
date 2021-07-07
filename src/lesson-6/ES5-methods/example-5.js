'use strict';

const data = [1, 3, 5, 7, 8];

const numbersStatus = data.some((item, index, array) => {
    return item % 2 === 0;
});

console.log(numbersStatus); // true
