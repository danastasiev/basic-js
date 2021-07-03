'use strict';

function tag(literals, ...substitutions) {
    console.log(literals); // [ 'Hello ', '' ]
    console.log(substitutions); // [ 'Alteryx' ]
    console.log(substitutions.length === literals.length -1); // true

    let result = '';

    for (let i = 0; i < substitutions.length; i++) {
        result += literals[i];
        result += `${substitutions[i]}!`;
    }

    result += literals[literals.length -1];

    return result;
}

const company = 'Alteryx';

console.log(tag`Hello ${ company }`); // Hello Alteryx!
console.log(`Hello ${ company }`); // Hello Alteryx
