'use strict';

const person = new class {
    constructor (name) {
        this.name = name;
    }

    sayName () {
        console.log(this.name);
    }
}('Jon');

person.sayName();
