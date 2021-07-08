'use strict';

function Temperature(degrees) {
    this.degrees = degrees;
}

const freezing = new Temperature(32);

console.log(freezing + '!'); // [object Object]! → // 32 degrees!
console.log(freezing / 2); // NaN → // 16
console.log(String(freezing)); // [object Object] → // 32°