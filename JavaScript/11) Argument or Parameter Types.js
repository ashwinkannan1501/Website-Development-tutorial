"use-strict";
const prompt = require("prompt-sync")();

// 1) Required Arguments
function student(name, roll_no)
{
    console.log(`Student: ${name}`);
    console.log(`Roll No : ${roll_no} \n`);
}
let student_name = prompt("Enter the student name : ");
let roll_no = parseInt(prompt("Enter Your Roll No : "));
student(student_name, roll_no);

// 2) Keyword Arguments
function person(f_name, l_name)
{
    console.log(`First Name : ${f_name}`);
    console.log(`Last Name : ${l_name} \n`);
}
let first_name = prompt("Enter the first name : ");
let last_name = prompt("Enter the last name : ");
person(l_name=last_name, f_name=first_name);

// 3) Default Arguments
function addition(first_number, second_number=0)
{
    console.log(`${first_number} + ${second_number} = ${first_number + second_number} \n`);
}
let first_number = parseInt(prompt("Enter the first number : "));
addition(first_number)

// 4) Variable Length Arguments
function sum_of_numbers(full_name, ...args)
{
    console.log(`Full Name : ${full_name}`);
    
    let sum = 0;
    for(let index = 0; index < args.length; index++)
    {
        sum += args[index];
    }
    console.log(`Sum of ${args} = ${sum}`);

    console.log(`Data Type : ${typeof(args)} \n`);
}
let full_name = prompt("Enter the full name : ");
sum_of_numbers(full_name, 12, 45, 56, 89, 75)

