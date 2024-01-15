"use strict";
const prompt = require("prompt-sync")();

// Simple IF Statement
let total_cost = parseInt(prompt("Enter the cost : "));
let bill;
if(total_cost >= 5000){
    bill = total_cost - 500;
}
console.log(bill + '\n');

// If - Else Statement
let number = parseInt(prompt("Enter the number : "));
if(number % 2 == 0)
{
    console.log(`The '${number}' is an even number`);
}
else
{
    console.log(`The number '${number} is an odd number`);
}

// If - Else If - Else Statment 
let mark = parseInt(prompt("Enter the mark : "));
if(mark >= 90 && mark <= 100)
{
    console.log("'O' Grade");
}
else if(mark >= 80 && mark <= 89)
{
    console.log("'A+' Grade");
}
else if(mark >= 70 && mark <= 79)
{
    console.log("'A' Grade");
}
else if(mark >= 60 && mark <= 69)
{
    console.log("'B+' Grade");
}
else if(mark >= 50 && mark <= 59)
{
    console.log("'B' Grade");
}
else
{
    console.log("Fail 😶 No Grade 📑");
}

// Nested If Condition
if(number >= 0)
{
    if(number == 0)
    {
        console.log(`'${number}' is a neutrak number'`);
    }
    else
    {
        console.log(`'${number}' is a positive number`);
    }
}
else
{
    console.log(`'${number}' is a negative number`);
}
