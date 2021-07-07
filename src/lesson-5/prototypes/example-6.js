'use strict';

const user = {
    sayHi () {
        return 'Hello!';
    }
}

const person = {
    sayHi () {
        return `${Object.getPrototypeOf(this).sayHi.call(this)} Friend!`;
    }
}

Object.setPrototypeOf(person, user);
const jon = Object.create(person);

console.log('Jon:', jon.sayHi());
