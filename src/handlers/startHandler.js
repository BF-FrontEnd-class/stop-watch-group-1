import { data } from '../data.js';
import getTime from '../utils/getTime.js';
import updateTimer from '../components/updateTimer.js';

const startHandler = () => {
    if (data.intervalId !== null) {
        clearInterval(data.intervalId);
        data.intervalId = null;
    }

    data.intervalId = setInterval(() => {
        getTime();
        updateTimer();
    }, 10);
};

export default startHandler;
