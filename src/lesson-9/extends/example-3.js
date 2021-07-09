'use strict';

class Rectangle {
    constructor (length, width) {
        this.length = length;
        this.width = width;
    }

    getArea () {
        return this.length * this.width;
    }
}

class Square extends Rectangle {
    constructor (length) {
        this.length = length;  // ← ReferenceError
    }

    getArea () {
        return `${super.getArea()} units`;
    }
}

const square = new Square();
console.log(square.getArea())
