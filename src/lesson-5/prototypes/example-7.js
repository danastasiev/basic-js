'use strict';

const user = {
    sayHi () {
        return 'Hello!';
    }
}

const jon = {
    sayHi () {
        return `${Object.getPrototypeOf(this).sayHi.call(this)} Friend!`;
    }
}

const joe = {
    sayHi () {
        return `${super.sayHi()} Friend!`;
    }
}

Object.setPrototypeOf(jon, user);
Object.setPrototypeOf(joe, user);
console.log('Jon:', jon.sayHi());
console.log('Joe:', joe.sayHi());
