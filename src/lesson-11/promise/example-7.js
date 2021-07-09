'use strict';
function Async() {
    const promise = new Promise(function (resolve, reject) {
        console.log('Promise init'); // 1) Promise init
        setTimeout(function() {
            console.log('resolving...'); // 3) resolving...
            const n = 1;
            resolve(n);
        }, 2000);
    });
    return promise;
}

const promise = Async();
promise.then(function(value) {
    console.log(value); // 4) 1
    console.log('Fulfilled'); // 5) Fulfilled
}, function(message) {
    console.log('Rejected: ' + message);
});
console.log('Next step'); // 2) Next step