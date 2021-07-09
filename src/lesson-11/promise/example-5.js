'use strict';
function Async() {
    const promise = new Promise(function (resolve, reject) {
        console.log('Promise init'); // 1) Promise init
        setTimeout(function() {
            console.log('rejecting...'); // 3) rejecting...
            reject();
        }, 2000);
    });
    return promise;
}

const promise = Async();
promise.then(function() {
    console.log('Fulfilled');
}, function() {
    console.log('Rejected'); // 4) Rejected
});
console.log('Next step'); // 2) Next step