'use strict';
const Async1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('First promise');
        resolve();
    }, 1000);
});

const Async2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Second promise');
        reject();
    }, 4000);
});

Promise.race([Async1, Async2]).then(
    () => {
        console.log('Ok');
    },
    () => {
        console.log('Nope');
    }
);
