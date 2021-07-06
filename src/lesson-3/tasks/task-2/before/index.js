import Timer from '../after';

const timer = Timer();

timer.init(30, () => {
    console.log('Timer is configured.');
});

timer.start(1, time => {
    const template = `Minutes: ${ time.minutes } Seconds: ${ time.seconds }`;

    console.log(template);
});

setTimeout(() => {
    timer.pause(time => {
        const template = `Last time was Minutes: ${ time.minutes } Seconds: ${ time.seconds }`;

        console.log('Timer is frozen');
        console.log(template);
    });
    timer.start(2, time => {
        const template = `Minutes: ${ time.minutes } Seconds: ${ time.seconds }`;

        console.log(template);
    });
    setTimeout(() => {
        timer.stop(time => {
            const template = `Last time was Minutes: ${ time.minutes } Seconds: ${ time.seconds }`;

            console.log('Timer is stopped');
            console.log(template);
        });
    }, 3000);
}, 3000);

