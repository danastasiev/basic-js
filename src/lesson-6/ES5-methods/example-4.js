'use strict';

const data = [2, 4, 6, 8, 10];

const numbersStatus = data.every((item, index, array) => {
    return item % 2 === 0;
});

console.log(numbersStatus); // true
