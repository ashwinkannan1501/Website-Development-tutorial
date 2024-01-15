"use strict";
const prompt = require("prompt-sync")();

function with_arguments_and_with_return_type(first_number, second_number) 
{
    return `${first_number} + ${second_number} = ${first_number + second_number}`;
}

var first_number = parseInt(prompt("Enter the first number : "));
var second_number = parseInt(prompt("Enter the second number : "));
console.log(with_arguments_and_with_return_type(first_number, second_number) + "\n");

function with_arguments_and_without_return_type(first_number, second_number)
{
    console.log(`${first_number} - ${second_number} = ${first_number - second_number} \n`);
}
with_arguments_and_without_return_type(first_number, second_number);

function without_arguments_and_without_return_type()
{
    let first_number = parseInt(prompt("Enter the first number : "));
    let second_number = parseInt(prompt("Enter the second number : "));
    console.log(`${first_number} * ${second_number} = ${first_number * second_number} \n`);
}
without_arguments_and_without_return_type();

function without_arguments_and_with_return_type()
{
    let first_number = parseInt(prompt("Enter the first number : "));
    let second_number = parseInt(prompt("Enter the second number : "));
    return `${first_number} / ${second_number} = ${first_number / second_number} \n`
}
console.log(without_arguments_and_with_return_type());

// Arrow function
var number = Number(prompt("Enter a number : "));
var square_number = (number) => number ** 2;
console.log(`Square of ${number} =  ${square_number(number)}`);

// Anonymous function
var cube_number = function(number)
{
    return number ** 3;
};
console.log(`Cube of ${number} = ${cube_number(number)}`);

// callback function
function greetings(full_name, callbackFunction)
{
    console.log(`Welcome ${full_name}, `);
    callbackFunction();
}

function thankingYou() // The 'thankingYou()' function serves as a callback function here
{
    console.log("Thank You for visiting!. Please Come again. 😀❤️");
}

var full_name = prompt("Enter your full name : ");
greetings(full_name, thankingYou);


