'use strict';

function f(a, b = 10) {
    console.log(arguments);
}

f(1, 2); // { '0': 1, '1': 2 }
f(1); // { '0': 1 }
