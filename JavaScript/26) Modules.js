/*
JavaScript Modules :- 
----------------------
    The JavaScript modules allows you to break up your code into separate files.
    This makes it easier to maintain a code base.
    Modules are imported from external files with the "import" statement.
    Modules also rely on "type=module" in teh "<script>" element of the HTML file.
    Modules only work with "HTTPS" protocol.

Export :- 
----------
    Modules with "functions" (or) "variables" can be stored in any external files.
    There are 2 types of exports. They are :- 
    (i) Named Export
    (ii) Default Export
    
Import :- 
----------
    You can import modules into a file in 2 ways, based on if they are named exports (or) default exports.
    Named exports are constructed using curly braces ({}). But default exports are not.
    (i) Import from Named Exports.
    (ii) Import from Default Exports.
*/

'use strict';
// const prompt = require("prompt-sync")();

// import {addition, subtraction, multiplication, division, remainder} from './26) Mathematical Calculations.js'; // Import from Named Export
// import * as math from './26) Mathematical Calculations.js'; // Import all function and variables from another file and giving a namespace(math). This is called as "Namespace Imports"
// import myPersionalDetails from './26) Person Details.js'; // Import from Default Export

// While Importing the combined export file, you don't need to import multiple separate exported files. You only have to import only JS file which contain all the exported files.
import * as combined from './26) Combined Export.js'; 

function modules()
{
    let firstNumber = Number(prompt("Enter the 1st number : "));
    let secondNumber = Number(prompt("Enter the 2nd number : "));

    console.log(combined.math.addition(firstNumber, secondNumber));
    console.log(combined.math.subtraction(firstNumber, secondNumber));
    console.log(combined.math.multiplication(firstNumber, secondNumber));
    console.log(combined.math.division(parseFloat(firstNumber), parseFloat(secondNumber)));
    console.log(combined.math.remainder(firstNumber, secondNumber));

    combined.myPersonDetails();
}



modules();


