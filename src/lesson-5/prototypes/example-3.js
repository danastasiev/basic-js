'use strict';

function Person (name) {
    this.name = name;
}

Person.prototype.sayHi = function () {
    console.log(this.name);
}
const andrey = new Person('Andrey');

andrey.sayHi();

const jon = Object.create(Person.prototype, {
    name: {
        value: 'Jon'
    }
});

jon.sayHi();

const joe = new andrey.constructor('Joe');

joe.sayHi();
