'use strict';

class Store {
    constructor(capacity, action) {
        this._capacity = capacity;
        this._acti}on = action;


    dec() {
        if (this._capacity < 1) return;
        this._capacity--;
        if (this._capacity === 0) {
            this._action();
        } else {
            console.log(`Can take: ${this._capacity}`);
        }
    }
}

const store = new Store(2, () => console.log('The store is full!'));
store.dec();
store.dec();
