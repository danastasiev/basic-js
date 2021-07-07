'use strict';

const number = new Number(777);

console.log(number);
number.id =   123;
number.name = 'Jon';

console.log(number);

console.log('*************** FOR **************');
for(const key in number) {
    console.log(`${key}: ${number[key]}`);
}
