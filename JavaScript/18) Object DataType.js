
/*
Objects in JavaScript :- 
--------------------------
    The "Objects" in JavaScript is similar to the "dictionary" in python.
    The Object datatype is mutable.(i.e) Changeable after declaration.
    The Object have a (key/name : value) pair separated within colon (:).
    It is created using "{}".
    The "key/name : value" pair in JavaScript objects are called as "properties".

Creating / Accessing Object Properties :- 
-------------------------------------------
    You can create / access object properties in 2 ways.

    ---------------------------
    | objectName.propertyName |         (or)
    ---------------------------
    ------------------------------
    | objectName['propertyName'] |
    -------------------------------

Object Methods :- 
-------------------
    The Object can also have the pre-defined methods and the user-defined methods.

Creating Objects in JavaScript :- 
----------------------------------
    There are 3 ways to create objects in JavaScript. They are :- 
    (i) By Object Literal
    (ii) By creating instance of object (using 'new' keyword).
    (iii) By using an object constructor (using 'new' keyword).
*/

"use-strict";
const prompt = require("prompt-sync")();

function objectDataType()
{
    // By Object Literal
    const personDetails = {
        first_name : 'Ashwin',
        last_name : 'Kannan',
        age : 22,
        emailID : 'ashwinkannan1501@gmail.com',
        phoneNo : 7401421277,
        profession : "Associate Software Developer",
        first_name : "John",

        isAlive()
        {
            console.log(true);
        },

        canRun()
        {
            console.log(true);
        }
    };

    console.log(personDetails);
    
    console.log("------------ Looping an object ----------------");
    for(var [key, value] in personDetails)
    {
        // console.log(`${key}: ${value}`);
        if(personDetails.hasOwnProperty(key))
        {
            console.log(`${key} : ${personDetails[key]}`);
        }
        
    }
    console.log(`First Name : ${personDetails.first_name}`);
    console.log(`Last Name ; ${personDetails.last_name}`);
    console.log(`Age : ${personDetails.age}`);
    console.log(`Email ID : ${personDetails.emailID}`);
    console.log(`Phone No : ${personDetails.phoneNo}`);
    console.log(`Profession : ${personDetails.profession}`);
    personDetails.isAlive();
    personDetails.canRun();

    // ----------------- Looping an object datatype in "forEach()" method ----------------
    // personDetails.forEach((value, key) => {
    //     console.log(`${key} : ${value}`);
    // });

    // By Creating an instance of an object (using 'new' keyword).
    const carDetails = new Object();
    carDetails['brandName'] = "BMW";
    carDetails['brandModel'] = "X5";
    carDetails['year'] = 2023;
    carDetails['variant'] = "Petrol";
    carDetails['transmission'] = "Automatic";
    carDetails['cost'] = BigInt(15000000);

    
    console.log(`Car Details : ${carDetails}`);
    for(var key in carDetails)
    {
        if(carDetails.hasOwnProperty(key))
        {
            console.log(`${key} = ${carDetails[key]}`);
        }
    }
    console.log(`Brand Name : ${carDetails['brandName']}`);
    console.log(`Brand Model : ${carDetails['brandModel']}`);
    console.log(`Year : ${carDetails['year']}`);
    // By using the Object Constructor.
    console.log(`Car Variant : ${carDetails['variant']}`);
    console.log(`car Transmission : ${carDetails['transmission']}`);
    console.log(`Car Cost : ${carDetails['cost']}`);

    function motorcycle()
    {
        this.brandName = "KTM";
        this.brandModel = "RC"
        this.cc = 390;
        this.color = "Orange";
        this.display = "TFT Display";
        this.gearBox = 6;
        this.cost = 400000;

        this.start = function()
        {
            return `The bike ${this.brandName} ${this.brandModel} ${this.cc} has started`;
        }
        this.drive = function()
        {
            return `The bike ${this.brandName} ${this.brandModel} ${this.cc} has been driving now`;
        }
        this.brake = function()
        {
            return `The bike ${this.brandName} ${this.brandModel} ${this.cc} has been applied brake`;
        }
        this.stop = function()
        {
            return `The bike ${this.brandName} ${this.brandModel} ${this.cc} has stopped`;
        }
    }

    const bikeDetails = new motorcycle();
    console.log(`Bike : ${bikeDetails}`);
    for(var key in bikeDetails)
    {
        if(bikeDetails.hasOwnProperty(key))
        {
            console.log(`${key} : ${bikeDetails[key]}`);
        }
    }
    console.log(`Brand Name : ${bikeDetails.brandName}`);
    console.log(`"Brand Model : ${bikeDetails.brandModel}`);
    console.log(`CC : ${bikeDetails.cc}`);
    console.log(`Color : ${bikeDetails.color}`)
    console.log(`Display : ${bikeDetails.display}`);
    console.log(`Bike Gear Box : ${bikeDetails.gearBox}`);
    console.log(`Bike Cost : ${bikeDetails.cost}`);
    console.log(`${bikeDetails.start()}`);
    console.log(`${bikeDetails.drive()}`);
    console.log(`${bikeDetails.brake()}`);
    console.log(`${bikeDetails.stop()}`);

    // Object methods :-
    console.log(Object.keys(bikeDetails));
    console.log(Object.values(bikeDetails));
    console.log(Object.entries(bikeDetails));

}

if(require.main === module)
{
    objectDataType();
}
