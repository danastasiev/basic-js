'use strict';

class MyArray extends Array {

}

const colors = new MyArray();
colors[0] = 'red';
console.log(colors.length); // 1

colors.length = 0;
console.log(colors[0]);

colors.length = 1;
console.log(colors[0]);
