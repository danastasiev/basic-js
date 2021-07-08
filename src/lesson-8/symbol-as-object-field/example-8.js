'use strict';

const name = Symbol('Field name');

const person = {
    [name]: 'Tom'
};
Object.defineProperty(person, name, { writable: false });

person[name] = 'Oscar'; // TypeError: Cannot assign to read only property 'Symbol(Field name)' of object '#<Object>'
