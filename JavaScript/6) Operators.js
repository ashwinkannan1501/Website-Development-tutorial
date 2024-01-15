/*
Operators in JavaScript :- 
----------------------------
    The Operators are the symbols which is used to perform the mathematical operations/calculations on operands.
    There are 6 types of operators. They are :- 
        (i) Arithmetic operators.
        (ii) Comparison / Relationsl Operators
        (iii) Logical Operators
        (iv) Bitwise Operators
        (v) Assignment Operators
        (vi) Special Operators
*/

"use strict";
const prompt = require("prompt-sync")();

let first_number = parseInt(prompt("Enter the first number :- "));
let second_number = parseInt(prompt("Enter the second number :- "));

/*
(i) Arithmetic operators :-
----------------------------
    It is used to perform arithmetic operations like + and -, etc. There are 7 types of arithmetic operators. They are :- +, -, *, /, %, ++, --.
*/
// Arithmetic Operators
let addition = first_number + second_number;
console.log(`${first_number} + ${second_number} = ${addition}`);

let subtraction = first_number - second_number;
console.log(`${first_number} - ${second_number} = ${subtraction}`);

let multiplication = first_number * second_number;
console.log(`${first_number} x ${second_number} = ${multiplication}`);

let division = first_number / second_number;
console.log(`${first_number} / ${second_number} = ${division}`);

let modulus = first_number % second_number;
console.log(`${first_number} % ${second_number} = ${modulus}`);

let power = first_number ** second_number;
console.log(`${first_number} ** ${second_number} = ${first_number ** second_number}`);

let post_increment = first_number++; // It stores 22 and then +1 = 23
console.log(`Post Increment : ${post_increment}`); // Output : 22

let pre_increment = ++first_number; // It stores 24
console.log(`Pre Increment : ${pre_increment}`); // Output : 24

let post_decrement = second_number--; // It stores 55 and then -1 = 54
console.log(`Post Decrement : ${post_decrement}`); // Output : 54

let pre_decrement = --second_number; // It stores 53
console.log(`Pre Decrement : ${pre_decrement} \n`); // Output : 53

/*
(ii) Comparison (or) Relational Operators :- 
----------------------------------------------
    It is used to comapre the 2 operands. It either returns true / false based on the condition. There are 8 types of comparison operators. They are :- ==, ===, !=, !==, >, >=, <, <=
*/
// Comparison (Relational) Operators :- 
let double_equal_to = first_number == second_number;
console.log(`${first_number} == ${second_number} : ${double_equal_to}`);
console.log('20' == 20);

let triple_equal_to = first_number === second_number; // This operator is also called as identical operator
console.log(`${first_number} === ${second_number} : ${triple_equal_to}`);
console.log('20' === 20);

let not_equal_to = first_number != second_number;
console.log(`${first_number} != ${second_number} : ${not_equal_to}`);
console.log('30' != 30);

let not_identical = first_number !== second_number;
console.log(`${first_number} !== ${second_number} : ${not_identical}`);
console.log('30' !== 30);

let greater_than = first_number > second_number;
console.log(`${first_number} > ${second_number} : ${greater_than}`);

let greater_than_or_equal_to = first_number >= second_number;
console.log(`${first_number} >= ${second_number} : ${greater_than_or_equal_to}`);

let lesser_than = first_number < second_number;
console.log(`${first_number} < ${second_number} : ${lesser_than}`);

let lesser_than_or_equal_to = first_number <= second_number;
console.log(`${first_number} <= ${second_number} : ${lesser_than_or_equal_to} \n`);

/*
(iii) Logical (or) Boolean Operators :- 
-----------------------------------------
    It is used to compare the 2 or more values logically. There are 3 types of logical operators. They are :- &&, ||and !
*/
// Logical / Boolean Operators
let logical_and = first_number && second_number;
console.log(`${first_number} && ${second_number} : ${logical_and}`);

let logical_or = first_number || second_number;
console.log(`${first_number} || ${second_number} : ${logical_or}`);

let logical_not = !first_number;
console.log(`!${first_number} : ${logical_not} \n`);

/*
(iv) Bitwise Operators :- 
---------------------------
    The bitwise operators performs the bitwise operations on operands. There are 7 types of bitwise operators. They are :- &, |, ~, ^, <<, >>, >>>.
*/
// Bitwise Operators 
let bitwise_and = first_number & second_number;
console.log(`${first_number} & ${second_number} : ${bitwise_and}`);

let bitwise_or = first_number | second_number;
console.log(`${first_number} | ${second_number} : ${bitwise_or}`);

let bitwise_not = ~ second_number;
console.log(`~ ${second_number} : ${bitwise_not}`);

let bitwise_xor = first_number ^ second_number;
console.log(`${first_number} ^ ${second_number} : ${bitwise_xor}`);

let bitwise_left_shift = first_number << second_number;
console.log(`${first_number} << ${second_number} : ${bitwise_left_shift}`);

let bitwise_right_shift = first_number >> second_number;
console.log(`${first_number} >> ${second_number} : ${bitwise_right_shift}`);

let bitwise_right_shift_filled_with_zero = first_number >>> second_number;
console.log(`${first_number} >>> ${second_number} : ${bitwise_right_shift_filled_with_zero} \n`);

/*
(v) Assignemnt Operators :-
-----------------------------
    The Assignemnt Operators are used to assign the values on the variables. There are 6 types of assignemnt operators. They are :- =, +=, -=, *=, /=, %=.
*/
// Assignment Operator 
console.log(`First Number : ${first_number}`);
console.log(`Second Number : ${second_number}`);

first_number += 10;
console.log(`First Number : ${first_number}`);

second_number -= 20;
console.log(`Second Number : ${second_number}`);

first_number *= 2;
console.log(`First Number : ${first_number}`);

second_number /= 2;
console.log(`Second Number : ${second_number}`);

first_number %= second_number;
console.log(`First Number : ${first_number}`);

first_number ** second_number;
console.log(`First Number : ${first_number} \n`);

/*
(vi) Special Operators :-
---------------------------
    There are 9 types of special operators in JS. They are :-
    (a) Consitional Operator (?:)
    (b) Comma Operator (,)
    (c) Delete Operator (delete)
    (d) In Operator (in)
    (e) Instance of Operator (instanceof)
    (f) New Operator (new)
    (g) Type Operator (typeof)
    (h) Null Operator (void)
    (i) Yield Operator (yield)
*/
// Special Operators 
console.log(`typeof opertor : ${typeof(second_number)}`);

let ternary_operator = (10 == 20 ? 'true' : 'false');
console.log(`Ternary Operator : ${ternary_operator}`);

let cars = ["BMW", "Mercedes", "Audi", "Ferrari"];
console.log(`Comma Operators : ${cars}`);

let in_operator = "BMW" in cars;
console.log(`In Operator : ${in_operator}`);

let delete_operator = {first_name:"Ashwin", last_name:"Kannan"};

