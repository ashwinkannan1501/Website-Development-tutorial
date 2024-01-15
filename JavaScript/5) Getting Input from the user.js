"use strict";
const ps = require("prompt-sync");
const prompt = ps();

let first_name = prompt('Enter Your First Name :- ');
let last_name = prompt('Enter Your Last Name :- ');
let age = parseInt(prompt('Enter Your Age :- '));
let email = prompt('Enter Your Email :- ');
let phone_no = BigInt(prompt('Enter Your Phone Number :- '));
let address = prompt('Enter Your Address :- ');
let semester_cgpa = parseFloat(prompt('Enter Your Semester CGPA :- '));

console.log(`\nFirst Name :- ${first_name}`);
console.log(`Last Name :- ${last_name}`);
console.log(`Age :- ${age}`);
console.log(`Email Address :- ${email}`);
console.log(`Phone Number :- ${phone_no}`);
console.log(`Address :- ${address}`);
console.log(`Semester CGPA :- ${semester_cgpa}`);

console.log(`\nDatatype of "${first_name}" :- ${typeof(first_name)}`);
console.log(`Datatype of "${last_name}" :- ${typeof(last_name)}`);
console.log(`Datatype of "${age}" :- ${typeof(age)}`);
console.log(`Datatype of "${email}" :- ${typeof(email)}`);
console.log(`Datatype of "${phone_no}" :- ${typeof(phone_no)}`);
console.log(`Datatype of "${address}" :- ${typeof(address)}`);
console.log(`Datatype of "${semester_cgpa}" :- ${typeof(semester_cgpa)}`);