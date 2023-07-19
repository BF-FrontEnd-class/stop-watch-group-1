import { timeStamps } from "../data.js"
import { stopHandler } from "./stopHandler.js";

export const resetHandler = () => {
    stopHandler();
    timeStamps.minutes.innerText = "00 ";
    timeStamps.seconds.innerText = "00 ";
    timeStamps.milliseconds.innerText = "00";
}