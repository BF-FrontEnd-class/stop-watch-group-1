import { data } from '../data.js';
import updateTimer from '../components/updateTimer.js';

const resetHandler = () => {
    if (data.intervalId) {
        clearInterval(data.intervalId);
        data.intervalId = null;
    }

    data.minutes = 0;
    data.seconds = 0;
    data.milliseconds = 0;
    updateTimer();
};

export default resetHandler;
