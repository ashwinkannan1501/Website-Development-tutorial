/*
(i) Named Export :- 
---------------------
    You can create a named export in 2 ways. They are :- 
    (a) In-line  individually 
                (or)
    (b) All at once at the bottom.

    (a) In-Line individually :- 
    ----------------------------
    export let name = "K. Ashwin";
    export let age = 21;

    (b) All at once at the bottom :- 
    ---------------------------------
    let name = "K. Ashwin";
    let age = 21;
    export {name, age};
*/

'use strict';

function addition(firstNumber, secondNumber)
{
    return `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`;
}

function subtraction(firstNumber, secondNumber)
{
    return `${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`;
}

function multiplication(firstNumber, secondNumber)
{
    return `${firstNumber} x ${secondNumber} = ${firstNumber * secondNumber}`;
}

function division(firstNumber, secondNumber)
{
    return `${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`;
}

function remainder(firstNumber, secondNumber)
{
    return `${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`;
}


export {addition, subtraction, multiplication, division, remainder}; // Exporting all the functions/variables at once at the bottom
