"use strict";
const prompt = require("prompt-sync")();

console.log("Press 0 for Off and 1 for On")
let state = parseInt(prompt("Enter the state number : "));
switch(state)
{
    case 0:
        console.log("'Off' State");
        break;
    
    case 1:
        console.log("'On' State");
        break;

    default:
        console.log("'Press either '0' or'1' to toggle 'On' or 'Off' State");
}
