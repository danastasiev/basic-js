'use strict';

const user = {
    name: 'Jon',
    age:  21
};

// ES6 syntax
const { name, age, sex = 'male' } = user;

console.log('Name:', name); // Name: Jon
console.log('Age:', age); // Age: 21
console.log('Sex:', sex); // Sex: undefined
