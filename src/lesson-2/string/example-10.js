'use strict';

function raw (literals, ...substitutions) {
    let result = '';
    for (let i = 0; i < substitutions.length; i++) {
        result += literals.raw[i];
        result += substitutions[i];
    }

    result += literals.raw[literals.length - 1];

    return result;
}

const text = raw`Hello\nAlteryx!`;

console.log(text); // Hello\nAlteryx!
