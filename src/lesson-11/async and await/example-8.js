'use strict';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const getOne = async() => {
    await delay(2000);
    console.log(1);
};

const getTwo = async() => {
    await delay(2000);
    console.log(2);
};

const f = async() => {
    await Promise.all([getOne(), getTwo()]);
}

f();