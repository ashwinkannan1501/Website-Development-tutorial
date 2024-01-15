/*
Default Export :- 
-------------------
    You can only have one default export in a file.
*/

'use strict';

function personDetails()
{
    let firstName = "Ashwin";
    let lastName = "Kannan";
    let age = 21;
    let college = "Panimalar Engineering College";
    let profession = "Software Engineer";
    let email = "ashwinkannan1501@gmail.com";
    let company = "Jio Platforms Limited";

    console.log("------------------------ Persional Details --------------------")
    console.log(`First Name : ${firstName}`);
    console.log(`Last Name : ${lastName}`);
    console.log(`Age : ${age}`);
    console.log(`College : ${college}`);
    console.log(`Profession : ${profession}`);
    console.log(`Email : ${email}`);
    console.log(`Company : ${company}`);

}

export default personDetails; // Default export at the bottom.