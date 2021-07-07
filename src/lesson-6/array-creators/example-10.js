'use strict';

const dataCreator = (callback, value) => {
    return callback(value);
};

const array = dataCreator(Array.of, 1);
console.log(array); // [ 1 ]

const object = dataCreator(value => {
    return {
        n: value
    }
}, 1);
console.log(object); // { n: 1 }
