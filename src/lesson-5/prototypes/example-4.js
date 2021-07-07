'use strict';

const user = {
    sayHi () {
        return 'Hello!';
    }
}

const person = {
    sayHi () {
        return 'Hello my friend!';
    }
}

const andrey = Object.create(user);
const jon = Object.create(person);

console.log('Andrey:', andrey.sayHi());
console.log(Object.getPrototypeOf(andrey) === user);

console.log('Jon:', jon.sayHi());
console.log(Object.getPrototypeOf(jon) === person);
