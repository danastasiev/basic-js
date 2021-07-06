'use strict';

export const generateData = () => {
    const result = {};

    const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    for (let i = 0; i < randomNumber(1, 3); i++) {
        const arr = [];
        for (let j = 0; j < randomNumber(10, 50); j++) {
            arr.push(randomNumber(5, 500));
        }
        result[`arr${i}`] = arr;
    }

    result.created = new Date().toTimeString();

    return result;
};
