'use strict';
const Async1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('First promise');
        reject();
    }, 1000);
});

const Async2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Second promise');
        resolve();
    }, 4000);
});

Promise.all([Async1, Async2]).then(
    () => {
        console.log('Ok');
    },
    () => {
        console.log('Nope');
    }
);
