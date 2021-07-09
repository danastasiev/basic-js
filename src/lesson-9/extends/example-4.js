'use strict';

class Person {
    sayHi () {
        console.log('Hi!');
    }
}

class User extends Person {
    sayHiUser () {
        console.log('Hello there!')
    }
}

const jon = new User();
jon.sayHiUser();
