// IMPORT DATA
import { timeStamps } from '../data.js';
import { data } from '../data.js';


export function getTime () {

    let milliseconds =0;
    let seconds =0;
    let minutes = 0;

      data.watchInterval = setInterval(()=> {
      milliseconds += 10
      timeStamps.milliseconds.innerHTML = milliseconds;
       if (milliseconds === 1000){
         seconds++ ;
         milliseconds =0 ;
         timeStamps.seconds.innerHTML = seconds  ;
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
