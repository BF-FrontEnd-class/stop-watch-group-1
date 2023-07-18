// IMPORT 
import { data } from "./data.js";
import { buttons } from "./data.js";
import {getTime} from "./utils/getTime.js";

// import components 
import { createButtons } from "./components/createButtons.js";

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
    
}
)




