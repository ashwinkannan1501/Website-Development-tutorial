"use-strict";
const prompt = require("prompt-sync")();

/*
JavaScript Number DataType :- 
-------------------------------
    JavaScript has only one type of number. Numbers can be written with (or) without decimals.
*/
console.log("------------------ Number Data Type ----------------");
let integer = 256;
let float = 3.1456;
console.log(`Integer : ${integer}`);
console.log(`Floating Point : ${float}`);

/*
Exponential Notation :- 
-------------------------
    Extra large (or) extra small numbers can be written with scientific (exponent) notation.
*/
let positive_exponential_notation = 456e3;
let negative_exponential_notation = 456e-3;
console.log(`Positive Exponential Notation : ${positive_exponential_notation}`);
console.log(`Negative Exponential Notation : ${negative_exponential_notation}`);

/*
JavaScript Numbers are always 64-bit floating point :- 
---------------------------------------------------------
    Unlike many other programming languages, JS doesn't define different types of numbers like 'int', 'short', 'float', 'long', etc,.
    JS numbers are always stored as double-precision floating point numbers.
    This format stores numbers in 64-bits.
*/

/*
Integer Precision :- 
----------------------
    Integers are accurate upto 15-digits. The maximum number of decimals are 17.
*/
let x = 999999999999999; // x will be 999999999999999
let y = 9999999999999999; // y will be 10000000000000000
console.log(`X Value : ${x}`);
console.log(`Y Value : ${y}`);

console.log(x.toString().length);
console.log(y.toString().length);

/*
Floating Point Precision :- 
-----------------------------
    Floating-point arithmetic is not 100% accurate
*/
let mistake_floating_point = 0.1 + 0.2;
console.log(mistake_floating_point);
let correct_floating_point = (0.1 * 10 + 0.2 * 10) / 10; // To solve the problem above, it helps to multiply and divide by 10
console.log(correct_floating_point);

/*
Adding Numbers and Strings :- 
-------------------------------
    JS uses the '+' operator for both the addition and the concatenation. Number are added, strings are concatenated.
*/
// if you add 2 numbers, the result will be number
let first_number = parseInt(prompt("Enter the first number : "));
let second_number = parseInt(prompt("Enter the second number : "));
console.log(`${first_number} + ${second_number} = ${first_number + second_number}`);
// if you add 2 strings, the result will be string concatenation.
let first_string = prompt("Enter the first number string : ");
let second_string  = prompt("Enter the second number string : ");
console.log(`${first_string} + ${second_string} = ${first_string + second_string}`);

console.log("Number Addition : " + first_number + second_number); // String Concatenation.

let third_string  = prompt("Enter the 3rd number string : ");
console.log(`${first_number} + ${second_number} + ${third_string} = ${first_number + second_number + third_string}`); // Firstly the number is added and then it concatenated to strings

/*
Number Strings :- 
-------------------
    JS Strings can have numberic content. JS will try to convert the strings to numbers in all numeric operations except + operator
*/
console.log(`${first_string} + ${second_string} = ${first_string + second_string}`); // String Concatenation
console.log(`${first_string} - ${second_string} = ${first_string - second_string}`); // Subtraction
console.log(`${first_string} * ${second_string} = ${first_number * second_string}`); // Multiplication
console.log(`${first_string} / ${second_string} = ${first_string / second_string}`); // Division

/*
Not a Number (NaN) :- 
-----------------------
    'NaN' is a JS reserved keyword indicating that a number is not a legal number. Trying to do a arithmetic with a non-numeric string will result in NaN.
*/
let word = prompt("Enter a Word : ");
console.log(word / 2);
console.log(word / word);

console.log(first_string / first_number); // However if a string is numeric, the result will be a number.

console.log(isNaN(word));
console.log(isNaN(first_string / first_number)); // You can use the global 'isNaN()' function to find out if a value is not a number. It returns true/false.
// If you use NaN in mathematic expression, the result will be also NaN or result will be concatenated like 'NaN5'
let not_a_number = NaN;
console.log(not_a_number + first_number); // Output : NaN
console.log(not_a_number + first_string); // OutPut : NaN5
// NaN is a number datatype.
console.log(typeof(NaN)); // Output : number

/*
Infinity :- 
-------------
    Infinity (or) -Infinity is the value JS will return if you calculate a number outside the largest possible number. In 'number' datatype, the largest possible number is 15 digits.
    Division by 0 also generates the Infinity.
  */
console.log(first_number / 0); // OutPut : Infinity
console.log(typeof(Infinity)); // Infinity is a number datatype

/*
Hexadecimal Numbers :- 
------------------------
    JS interprets numeric constants as hexadecimal if they are preceeded by '0x'.

    NOTE :- Never write a number with leading 0 (like : 07). Some JS versions interprets numbers as octal if they written with a leading 0.

    By default, JS displays numbers as 'base 10' decimals. But you can use the 'toString()' method from 'base 2' to 'base 36' decimals
*/
console.log(0xFF); // Output : 255
let number = 456;
console.log(`Base 36 (Hexatrigesimal) of decimal ${number} : ${number.toString(36)}`);
console.log(`Base 32 (Duotrigesimal) of decimal ${number} : ${number.toString(32)}`);
console.log(`Base 16 (Hexadecimal) of decimal ${number} : ${number.toString(16)}`);
console.log(`Base 12 (DuoDecimal) of decimal ${number} : ${number.toString(12)}`);
console.log(`Base 10 (Decimal) of decimal ${number} : ${number.toString(10)}`);
console.log(`Base 8 (Octal) of decimal ${number} : ${number.toString(8)}`);
console.log(`Base 2 (Binary) of decimal ${number} : ${number.toString(2)}`);

/*
JavaScript numbers as objects :- 
----------------------------------
    Normally JavaScript numbers are primitive values created from literals. But numbers can also be defined as objects with 'new' keyword.

    NOTE :- Do not create number objects. The 'new' keyword complicates the code and slows down the execution speed.
    Number Objects can produce the unexpected results.
 */
let number_object = new Number(456); // new Number() -> Constructor
console.log(`Number Object : ${number_object}`) // Output : 456
console.log(`Type of ${number_object} is : ${typeof(number_object)}`); // Output : Object

console.log(`${number} == ${number_object} : ${number == number_object}`); // Output : true
console.log(`${number} === ${number_object} : ${number === number_object}`); // Output : false
// Comparing 2/more JS objects always returns false.
console.log(new Number(456) == new Number(456)); // Output : false
console.log(new Number(789) === new Number(789)); // Output : false

console.log("\n--------------- Number Properties -------------------- ");
console.log(`Epsilon : ${Number.EPSILON}`);
console.log(`Minimum Value : ${Number.MIN_VALUE}`);
console.log(`Maimum Value : ${Number.MAX_VALUE}`);
console.log(`Minimum Safe Integer : ${Number.MIN_SAFE_INTEGER}`);
console.log(`Maximum Safe Integer : ${Number.MAX_SAFE_INTEGER}`);
console.log(`Positive Infinity : ${Number.POSITIVE_INFINITY}`);
console.log(`Negative Infinity : ${Number.NEGATIVE_INFINITY}`);
console.log(`Not a Number : ${Number.NaN}`);
console.log(`Constructor Property : ${first_number.constructor}`);

console.log(first_number.MAX_VALUE);

console.log("\n---------------- Number Methods ---------------------");
console.log(`toString() method : ${(123).toString()}`);
console.log(`toString() method with base-2 : ${(123).toString(2)}`);
console.log(`toExponential() method : ${(5.36).toExponential(5)}`);
console.log(`toFixed() method : ${(9.3).toFixed()}`);
console.log(`toPrecision() method : ${(9.26).toPrecision(2)}`);
console.log(`valueOf() method : ${(563).valueOf()}`);
console.log(`toLocaleString() method : ${(456).toLocaleString()}`);

var num = Number(prompt("Enter a number : "));
console.log(`Number() method : ${num}`);
console.log(`dataType of ${num} : ${typeof(num)}`);

var date = Number(new Date("2023-08-06"))
console.log(`Number() method with Date() Constructor : ${date}`);
console.log(`DataType of ${date} : ${typeof(date)}`);

var num = parseInt(prompt("Enter a Integer Value : "));
console.log(`Integer Value : ${num}`);
console.log(`Datatype of ${num} : ${typeof(num)}`);

var num = parseFloat(prompt("Enter a floating point value : "));
console.log(`Floating Point Value : ${num}`);
console.log(`Datatype of ${num} : ${typeof(num)}`);

