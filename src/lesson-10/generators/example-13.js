'use strict';
function* createNumberIterator () {
    yield 1;
    yield 2;
    yield 3;
}

function run(taskDef) {
    let task = taskDef();
    let result = task.next();
    console.log(result);

    function sleep() {
        if (!result.done) {
            result = task.next();
            console.log(result);
            sleep();
        }
    }

    sleep();
}

run ( createNumberIterator );
