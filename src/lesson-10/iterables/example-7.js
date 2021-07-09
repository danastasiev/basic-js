'use strict';
const people = ['Jon', 'Joe', 'Jim'];
const tracking = new Set([123, 456, 789]);
const data = new Map();

data.set('title', 'eastern wisdom');
data.set('format', 'story');

for (const entry of people.keys()) {
    console.log(entry);
}

for (const entry of tracking.keys()) {
    console.log(entry);
}

for (const entry of data.keys()) {
    console.log(entry);
}
