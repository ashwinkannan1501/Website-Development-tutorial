// Variables :-
// --------------
//   A JavaScript Variable is simply a name of storage location.

//   The variables are also known as 'identifiers'.

//   Since JavaScript is an interpreted language, we don't want to declare the type of the data before the variable name.

//   There are some rules while declaring the variables. These are :-
//     (a) Name must start with a letter (a to z, A to Z), Underscore(_), Dollor ($) sign.
//     (b) We can use digits in the middle (or) end of the variable name, not at the beginning.
//     (c) The Variable names are case sensitive.

//   Correct JavaScript Variables :-
//   --------------------------------
//     var x = 10;
//     var _y = 20;

//   Incorrect JavaScript Variables :-
//   ---------------------------------
//     var 123 = 10;
//     var *a = 123;

//   There are 3 types of variables in JavaScript. These are :-
//     (i) Local Variable
//     (ii) Global Variable
//     (iii) Constant Variable

let first_name = "Ashwin";
let last_name = "Kannan";
let age = "22";


console.log(first_name + " " + last_name + " is " + age + " years old");

/* (I) Local Variable :- 
      -----------------------
        A JavaScript Local Variable is declared inside a function / block of code. 
        It is accessible within that function. */

function local_variable() {
  let first_name = "Ashwin";
  let age = "22";

  console.log(`Hi, My name is ${first_name} and my age is ${age}`);
}

local_variable();
console.log(`Hi, My name is ${first_name}`);

/* (II) Global Variable :- 
      ------------------------
        A global variable is declared outside of the function scope (or) declared with the window object.
        It is accessed from any function. */

let first_number = 5;
let second_number = 10;
let third_number = 20;
let multiplication = first_number * second_number * third_number;

console.log(
  `${first_number} * ${second_number} * ${third_number} = ${multiplication}`
);

function global_variable() {
  console.log(
    `${first_number} * ${second_number} * ${third_number} = ${multiplication}`
  );
}

global_variable();

/* (III) Constant Variable :- 
      ---------------------------
        A Constant Variable cannot be redeclared / reassigned once it is declared / assigned
        'const' is the keyword which is used to assign the constant variable. */

const constant_variable = 3.14;
console.log(`Constant Variable = ${constant_variable}`);

constant_variable = 2.3; // This will cause an error
console.log(`Constant Variable = ${constant_variable}`);
