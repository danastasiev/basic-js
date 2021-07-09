'use strict';

class Store {
    constructor(capacity, action) {
        Object.assign(this, {
            dec() {
                if (capacity < 1) return;
                capacity--;
                if (capacity === 0) {
                    action();
                } else {
                    console.log(`Can take: ${capacity}`);
                }
            }
        });
    }
}

const store = new Store(2, () => console.log('The store is full!'));
store.dec();
store.dec();
