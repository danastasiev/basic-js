'use strict';

const values = ['fi', 'ﬁ', 'fi'];

values.sort(function (first, second) {
    const firstNormalized = first.normalize('NFKD');
    const secondNormalized = second.normalize('NFKD');

    if (firstNormalized < secondNormalized) {
        return -1;
    } else if (firstNormalized === secondNormalized) {
        return 0;
    } else {
        return 1;
    }
});

console.log(values); // [ 'fi', 'ﬁ', 'fi' ]

values.sort(function (first, second) {
    const firstNormalized = first.normalize();
    const secondNormalized = second.normalize();

    if (firstNormalized < secondNormalized) {
        return -1;
    } else if (firstNormalized === secondNormalized) {
        return 0;
    } else {
        return 1;
    }
});

console.log(values); // [ 'fi', 'fi', 'ﬁ' ]

