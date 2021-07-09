'use strict';
const people = ['Jon', 'Joe', 'Jim'];
const tracking = new Set([123, 456, 789]);
const data = new Map();

data.set('title', 'eastern wisdom');
data.set('format', 'story');

for (const entry of people.values()) { // works only in firefox nightly
    console.log(entry);
}

for (const entry of tracking.values()) {
    console.log(entry);
}

for (const entry of data.values()) {
    console.log(entry);
}
