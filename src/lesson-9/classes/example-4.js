'use strict';

const PersonClass = class {
    constructor (name) {
        this.name = name;
    }

    sayName () {
        console.log(this.name);
    }
}

const person = new PersonClass('Jon');
person.sayName();
