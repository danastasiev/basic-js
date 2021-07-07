'use strict';

const user = {
    name: 'Jon'
};

console.log(user);

const user1 = new Object({
    name: 'Jon1'
});

console.log(user1);

const user2 = Object.create(null, {
    name: {
        configurable: true,
        enumerable:   true,
        value:       'Jon2',
        writable:     true
    }
});

console.log(user2);
