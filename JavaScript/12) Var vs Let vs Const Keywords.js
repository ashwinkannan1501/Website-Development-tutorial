
"use-strict";
const prompt = require("prompt-sync")();

full_name = "AshwinKannan"
var full_name;
console.log(`Full Name : ${full_name}`);

var number = parseInt(prompt("Enter a number : "));
console.log(`Number : ${number}`);

var number = parseInt(prompt("Enter a number : "));
console.log(`Number : ${number}`);

number = parseInt(prompt("Enter a number : "))
console.log(`Number : ${number}`);

function var_scope()
{
    var new_number = parseInt(prompt("Enter a new number : "));
    

    if (true)
    {
        new_number = parseInt(prompt("Enter a new number : "));
        
    }
    console.log(`New Number : ${new_number} \n`);
}
var_scope();

// Let Keyword
let message = prompt("Write a Message : ");
console.log(`Message : ${message}`);
// let message = prompt("Write a Message : ");
message = prompt("Write a Message : ");
console.log(`Message : ${message}`);

function let_scope()
{
    let new_message = prompt("Write a New Message : ");
    

    if(true)
    {
        let new_message = prompt("Write a New Message : ");
        
    }
    console.log(`New Message : ${new_message} \n`);
}
let_scope();

// const keyword
const PI = 3.14;
console.log(`PI = ${PI}`);

function const_scope()
{
    const MY_NAME = "Ashwin Kannan";
    if (true)
    {
        const MY_NAME = "K. Ashwin";
    }
    console.log(`Your Name : ${MY_NAME} \n`);
}

const_scope();

// Constant (const) arrays :-
const car_brands = ["Volvo", "Audi", "Hyundai", "BMW", "Rolls Royce"];
console.log(`Car Brands : ${car_brands}`);

car_brands[2] = "Tata";
console.log(`Car Brands : ${car_brands}`);

car_brands.push("Maruti");
console.log(`Car Brands : ${car_brands}`);
// car_brands = ["Merecdes", "Mahindra"]; // It will Throw an error message

// Constant (const) Objects :-
const PERSON_DETAILS = {first_name: "Ashwin", last_name: "Kannan"};
console.log(`Person Details : ${PERSON_DETAILS}`);

PERSON_DETAILS.age = 21;
PERSON_DETAILS.college = "Panimalar Engineering College";
console.log(`Person Details : ${PERSON_DETAILS}`);

// PERSON_DETAILS = {first_name: "Ashwin", last_name: "Kannan"}; // It will Throw an error message
