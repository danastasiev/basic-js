'use strict';
import fs from 'fs';

function run(taskDef) {
    let task = taskDef();
    let result = task.next();

    function sleep() {
        if (!result.done) {
            if (typeof result.value === 'function') {
                result.value(function (err, data) {
                    if (err) {
                        result = task.throw(err);
                        return;
                    }

                    result = task.next(data);
                    sleep();
                });
            } else {
                result = task.next(result.value);
                sleep();
            }
        }
    }
    sleep();
}

function readFile (filename) {
    return function (cb) {
        fs.readFile(`${__dirname}/${filename}`, 'utf8', cb);
    }
}

run (function* () {
    let contents = yield readFile('example-2.js');
    console.log(contents);
});
