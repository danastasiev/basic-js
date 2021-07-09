'use strict';
const getValue = async() => {
    return 1;
};
const f = async() => {
    const value = await getValue();
    console.log(value);
};
f();
