'use strict';

const user = {
    name: {
        en: {
            first: 'Jon',
            last: 'Doe'
        },
        ru: {
            first: 'Джон',
            last: 'До'
        }
    },
    age: 18
};

// ES6 syntax
const { name: {} } = user;

console.log('First name:', name); // ReferenceError: name is not defined
