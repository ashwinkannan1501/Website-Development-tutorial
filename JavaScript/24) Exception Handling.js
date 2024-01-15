/*
Exception Handling :- 
-----------------------
    The Exception Handling is also known as error handling.
    The Exception Handling is the process of responding to unwanted (or) unexpected events when a computer program runs.
    The Exception Handling deals with these events to avoid the program (or) system crashing and without these process, exceptions would disrupt the normal operation of a program.
    The Exception Handling is a type of run-time error.

Types of Errors :- 
--------------------
    There are 3 types of errors. They are :- 
    (i) Syntax Error
    (ii) Runtime Error
    (iii) Logical Error

Error Object :- 
-----------------
    When an runtime error occurs, it throws the "Error Object".
    Such an object can be used as a base for the user-defined exception too.
    The error object has 2 properties. They are :
        (i) name - It returns the name of the error.
        (ii) message - It returns the message of the error.
*/

'use strict';
const prompt = require("prompt-sync")();

/*
Exception Handling :-
------------------------
    There are the following statement that handle if any exception occurs. They are :-
        (i) throw statement :-
        (ii) try....catch statement :-
        (iii) try....catch....finally statement :-
*/
function exceptionHandling()
{
    let number = Number(prompt("Enter a number : "));
    try // "try" statement :- It defines the code block to run (try).
    {
        if(isNaN(number))
        {
            throw "Invalid number!. Please enter a valid number"; // "throw" statement :- It throws the custom error message to the user.
        }
        if(number === 0)
        {
            throw "This field cannot be empty and you cannot enter the number '0'";
        }
        console.log(`${number} * ${number} = ${number ** 2}`);
    }
    catch (error) // "catch" statement :- It defibnes the code block to handle any error.
    {
        console.log(error);
    }
    finally // "finally" statement :- It defines the code block to run regardless of the result.
    {
        
        console.log("The Program executed successfully without any interruption.");
    }

    /*
    -------------------------------------------------------------------------------------------------
    | Note :- The "try...catch" block comes in a pair. The "finally" block is a optional statement. |
    -------------------------------------------------------------------------------------------------
    */
}

if (require.main === module)
{
    exceptionHandling();
}