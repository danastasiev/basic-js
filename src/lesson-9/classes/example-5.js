'use strict';

const createObject = classDef => new classDef();

const obj = createObject(class {
    sayHi () {
        console.log('Hi!');
    }
})

obj.sayHi();
