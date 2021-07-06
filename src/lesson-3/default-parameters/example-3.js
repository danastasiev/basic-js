'use strict';

function f(n = 10) {
    console.log(n);
}

f(1); // 1
f(0); // 0
f(null); // null
f(''); // empty string
f(); // 10
f(undefined); // 10
