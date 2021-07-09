'use strict';

class Library {
    constructor () {
        this.books = [];
    }

    *[Symbol.iterator] () {
        yield *this.books;
    }
}

const library = new Library();

library.books.push('ES2015');
library.books.push('JS for beginners');
library.books.push('JS essentials');

for (const book of library) {
    console.log(book);
}

const books = [...library];
console.log(books);
