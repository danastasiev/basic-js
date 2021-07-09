'use strict';

class FetchError extends Error {
    constructor (message) {
        super(message);
        this.name = this.constructor.name;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }
    }
}

try {
    throw new FetchError('error message');
} catch (e) {
    console.log(e);
}
