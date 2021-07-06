'use strict';

f(); // ReferenceError: f is not defined

// function expression
const f = function () {
    console.log(1);
};
