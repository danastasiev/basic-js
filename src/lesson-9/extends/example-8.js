'use strict';
const _capacity = new WeakMap();
const _action = new WeakMap();

class Store {
    constructor(capacity, action) {
        _capacity.set(this, capacity);
        _action.set(this, action);
    }

    dec() {
        if (_capacity.get(this) < 1) return;
        let capacity = _capacity.get(this);
        capacity--;
        _capacity.set(this, capacity);
        if (_capacity.get(this) === 0) {
            _action.get(this)();
        } else {
            console.log(`Can take: ${_capacity.get(this)}`);
        }
    }
}

const store = new Store(2, () => console.log('The store is full!'));
store.dec();
store.dec();
