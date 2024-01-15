/* 
Data Types in JavaScript :-
----------------------------
    JavaScript provides different data types to hold different types of values. 
    
    Since JS is a dynamicaaly types language, means that you don't need to specify the type of the variables because
    it is dynamically used by JavaScript engine.

    You need to specify var/let properties here to specify the datatype (var/let is not mandatory). It can hold any types of values such as numbers, strings, etc.,
    
    There are 2 categories of data types in JavaScript. They are :-

    (I) Primitive Data Types
    (II) Non - Primitive Data Types

(I) Primitive Data Types :- 
------------------------------
    There are 7 categories of primitive data types in JavaScript. They are :- 
    (a) Number      - returns 'number' value
    (b) BigInt      - returns 'BigInt' value
    (c) Boolean     - returns 'boolean' value
    (d) Sting       - returns 'string' value
    (e) Null        - returns 'object' value
    (f) Undefined   - returns 'undefined' value
    (g) Symbol      - returns 'symbol' value

*/

/*
(a) Number Data Type :- 
-------------------------
    All JavaScript numbers are stored as decimal format. 
    Numbers can be written with (or) without decimals. 
    Unlike Python, Java, there is separate data type like 'byte', 'short', 'int', 'long', 'float', 'double', etc. 
    In JS, there is 1 datatype called 'number' which holds all of these different number types.
*/
let integer = 10;
console.log(`Integer Value = ${integer}`);
console.log(`Data Type of the value = ${typeof integer} \n`);

let float = 1.36;
console.log(`Floating Point Value = ${float}`);
console.log(`Data type of the value = ${typeof float} \n`);

/*
 Exponential Notation :-
-----------------------------
  Extra large (or) Extra small numbers can be written with scientific / exponential notation.
*/
let exp1 = 123e5;
console.log(`Exponential Notation 1 = ${exp1}`);
console.log(`Data Type of the expoential notation 1 = ${typeof exp1} \n`);

let exp2 = 123e-5;
console.log(`Exponential Notation 2 = ${exp2}`);
console.log(`Data Type of the exponential notation 2 = ${typeof exp2} \n`);

/*
----------------------------------------------------------------------------------------------
|NOTE :- 
|--------
|  Most Programming languages have many number types :-
|
|    Whole Numbers (Integers) :- byte (8-bit), short (16-bit), int (32-bit), long (64-bit)
|    Real Numbers (Floating point) :- float (32-bit), double (64-bit)
|
|  JavaScript 'number' datatype are always one type :- double (64 - bit) floating point value.
|
-----------------------------------------------------------------------------------------------
*/

/*
(b) BigInt - Bigger Integer :-
----------------------------
   The JS 'BigInt' is a new datatype (ES6) that can be used to store integer values that are too big to be represented by a normal JavaScript 'number' datatype.
*/
let bigint = BigInt(4563269758963691258);
console.log(`Bigger Integer Value = ${bigint}`);
console.log(`Data Type of the Bigger Integer Value = ${bigint} \n`);

/*
(c) Booleans :- 
-----------------
  The Booleans can have only either of 2 values 'true' or 'false', '0'/'1'.
  It is often used in conditional testing.
  It have only 1 bit in memory.
*/
let boolean_true = true;
console.log(`Value of the boolean = ${boolean_true}`);
console.log(`Data Type of the value = ${typeof boolean_true} \n`);

let boolean_false = false;
console.log(`Value of the boolean = ${boolean_false}`);
console.log(`Data Type of the value = ${typeof boolean_false} \n`);

let first_number = 12;
let second_number = 13;
console.log(
  `${first_number} == ${second_number} : ${first_number == second_number}`
);
console.log(
  `${first_number} != ${second_number} : ${first_number != second_number} \n`
);

/*
(d) Strings :-
----------------
  A String is a series of characters.
  It is written within single quotes ('') or double quotes ("").
  Anything is written between single quotes ('') and double quotes ("") is considered as a string datatype.
  You can use quotes (') or (") inside a string as long as they don't match the quotes surrounding the string.
*/
let first_name = "Ashwin";
let last_name = "Kannan";
console.log(`Full Name = ${first_name + last_name}`);
console.log(`Data Type of '${first_name}' is ${typeof first_name}`);
console.log(`Data Type of '${last_name}' is ${typeof last_name} \n`);

/*
(e) Null :- 
-------------
  The 'null' value represents the intentional absence of an object value.
  It is treated as 'false' for boolean operations.
*/
let null_value = null;
console.log(`Value of Null is : ${null_value}`);
console.log(`Data Type of 'null_value' is ${typeof null_value} \n`);

/*
(f) Undefined :- 
------------------
  In JS, a variable without a value is called "undefined". The return type is also undefined.
  You can also manually specify the variable into undefined.
*/
let bike;
console.log(`Data Type of '${bike}' is ${typeof bike} `);

let car = undefined;
console.log(`Data Type of '${car}' is ${typeof car} \n`);

/*
(g) Symbol :- 
---------------
  The JS 'Symbol' datatype are new type of primitive datatype which is introduced in ES6.
  They are used to represent unique values that can be used as identifiers / keys in objects.
  They are also used to create private properties and methods in classes.
*/
// let symbol = Symbol();
// console.log(`Symbol Value : ${symbol}`);
// console.log(`Data Type of 'symbol' is ${typeof symbol} \n`);

/*
Non-Primitive Datatypes :-
----------------------------
  There are 2 kinds of non-primitive datatypes. They are :- 
  (a) Arrays
  (b) Objects
*/

/*
(a) Arrays :-
---------------
  The Arrays in JS are the group of elements of same / different datatypes like python.
  It is written within the square brackets []
  Array items are separated by comma(,)
*/
let array = ["BMW", "Audi", "Volvo", "Mercedes", "Ferrari", true, 1, 1.65, BigInt(45693258741456), null, undefined, {first_name: "Ashwin", last_name: "Kannan"}];
console.log(`Array Values = ${array}`);
console.log(`Data Type of ${array} is : ${typeof array} \n`);

/*
(b) Objects :-
----------------
  The JS Objects is similar to the python's dictionary datatype.
  It is written within curly brackets {}.
  Object properties are written as 'key:value' pairs which is separated by commas (,).
*/
let object = { first_name: "Ashwin", last_name: "Kannan", age: 22 };
console.log(`The value of 'object' is : ${object}`);
console.log(`Data type of '${object}' is : ${typeof object} \n`);
