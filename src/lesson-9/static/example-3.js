'use strict';

class PersonClass {
    constructor (name) {
        this.name = name;
    }

    sayName () {
        console.log(this.name);
    }

    static create (name) {
        return new PersonClass(name);
    }
}

const joe = new PersonClass('joe');

console.log(PersonClass.create); // [Function: create]
console.log(joe.create); // undefined
