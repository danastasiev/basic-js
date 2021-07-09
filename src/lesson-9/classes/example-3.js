let PersonType = (function () {
    'use strict';

    const PersonType = function (name) {
        if (typeof new.target === 'undefined') {
            throw new Error('Constructor must be called with \'new\' keyword')
        }

        this.name = name;
    }

    Object.defineProperty(PersonType.prototype, 'sayName', {
        value: function () {
            if (typeof new.target !== 'undefined') {
                throw new Error('Method cannot be called with \'new\' keyword');
            }

            console.log(this.name);
        },
        enumerable: false,
        writable: true,
        configurable: true
    })

    return PersonType;
}())

const person = new PersonType('Jon');
person.sayName();
console.log(person);
