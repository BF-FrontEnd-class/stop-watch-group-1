// IMPORT 
import { buttons } from "./data.js";
import {getTime} from "./utils/getTime.js";
import { stopHandler } from "./handlers/stopHandler.js";
// import components 
import { createButtons } from "./components/createButtons.js";
import { resetHandler } from "./handlers/resetHandler.js";

// buttons container 

const buttonsContainer = document.getElementById ('buttons');

// create  buttons

buttons.forEach( (element) =>{
    const btn = createButtons (element);
    buttonsContainer.appendChild(btn);
    if (element.id === "start"){
        btn.addEventListener("click", 
        getTime 
        )
    }
    if(element.id=== "stop"){
        btn.addEventListener("click", stopHandler);
    }
    if(element.id === "reset"){
        btn.addEventListener("click", resetHandler);
    }
}
)




