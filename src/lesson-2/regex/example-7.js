'use strict';

function getFlags(re) {
    var text = re.toString();

    return text.substring(text.lastIndexOf('/') + 1, text.length);
}

var re = /ab/g;

console.log(getFlags(re)); // g
