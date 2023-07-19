import { data } from '../data.js';

const getTime = () => {
    data.milliseconds += 10;

    if (data.milliseconds === 1000) {
        data.seconds++;
        data.milliseconds = 0;
    }
    if (data.seconds === 60) {
        data.minutes++;
        data.seconds = 0;
    }

    if (data.minutes === 60) {
        data.minutes = 0;
    }
};

export default getTime;
