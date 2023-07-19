// IMPORT DATA
import {data} from '../data.js';
import { timeStamps } from '../data.js';


export function getTime () {
    let milliseconds =0;
    let seconds =0;
    let minutes = 0;

    const setTime = setInterval(()=> {
      milliseconds += 10
      timeStamps.milliseconds.innerHTML = ": " + milliseconds;
       //console.log(milliseconds);
       if (milliseconds === 1000){
         seconds++ ;
         milliseconds =0 ;
         timeStamps.seconds.innerHTML =  ": " + seconds  ;
         //console.log(seconds);
       }  
       if (seconds === 60){
         minutes++ ;
         seconds =0;
         timeStamps.minutes.innerHTML =  minutes;
         console.log(minutes);
       }
      }, 
      10
    )
   
}
