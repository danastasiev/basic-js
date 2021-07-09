'use strict';
function Async() {
    const promise = new Promise(function (resolve, reject) {
        console.log('Promise init'); // 1) Promise init
        setTimeout(function() {
            console.log('resolving...'); // 3) resolving...
            reject(new Error('errrrorrrr'));
        }, 2000);
    });
    return promise;
}

const promise = Async();
console.log(promise);

promise.then((dtat) => {
    console.log(promise);
    console.log(dtat);
});
promise.catch((e) => {
    console.log(promise);
    console.log(e);
});

console.log('Next step'); // 2) Next step
