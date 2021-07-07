'use strict';

const user = {
    name: 'Jon',
    age:  25,
    sayName: function () {
        console.log(this.name);
    },
    sayAge () {
        console.log(this.age);
    }
}

user.sayName();
user.sayAge();
