"use strict"
const prompt = require("prompt-sync")();

let number = parseInt(prompt("Enter a integer value :- "));

// for loop
for(let index = 0; index <= number; index++)
{
    console.log(index);
}
console.log("For Loop Execution Completed \n");

// for-each loop
let list = ["BMW", "Audi", "Mercedes Benz", "Hyundai"];
list.forEach(array => {
    console.log(array);
});
console.log("For-Each Loop Execution Completed \n");

// for-in loop
let dictionary = {
    first_name: "Ashwin",
    last_name: "Kannan",
    age: 22,
    school: "New Prince",
    college: "Panimalar Engineering College",
    degree: "B.E CSE"
}
for (const key in dictionary) {
    console.log(`${key} : ${dictionary[key]}`)
}
console.log("For-In Loop Exeution Completed \n");

// while loop
let index = 0;
while(index <= number)
{
    console.log(index);
    index += 1;
}
console.log("While Loop Execution Completed \n");

// do-while loop
do
{
    console.log(index);
    index += 1;
}
while(index <= number);
