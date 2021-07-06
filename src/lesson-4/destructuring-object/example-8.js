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
const { name: { en }, name: { ru }  } = user;

console.log('First name:', en.first); // First name: Jon
console.log('First name:', ru.first); // First name: Джон
