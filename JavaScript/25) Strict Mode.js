/*
Use Strict :- 
--------------
    The "use strict" defines that the JS code should be executed in "strict mode".
    It is not a statement, but a littke expression.
    It helps you to write a cleaner code.
    The "use strict" is just a string.

    NOTE :- The "use strict" directive is only recognized at the beginning of a script (or) a function.

Declaring Strict Mode :- 
---------------------------
    The strict mode is declared by adding "use strict"; to a beginning of a script (or) a function.
    By declaring at the beginning of a script, it has the global scope (all code in the script will execute in strict mode).
    By declaring inside the function, it has only tyhe local scope (only the code inside the function will execute in strict mode).

With Strict Mode, you cannot do the following things. They are :-
    (i) Using a variable without declaring is not allowed.
    (ii) Deleting a variable / object is not allowed.
    (iii) Deleting a function is not allowed.
    (iv) Duplicating the parameter name is not allowed.
    (v) Octal Numerical Literals (010) and octal escape characters ("\010") are not allowed.
    (vi) Writing a read-only and get-only properties are not allowed.
    (vii) Deleting an undeletable property is not allowed.
    (viii) The word "eval" & "arguments" cannot be used as variables.
    (ix) The "with" statement is not allowed.
*/

"use strict";

// x = 5;
// console.log(x);

object = {firstName:"Ashwin"};
console.log(object);

let x = 10;
console.log(x);
// delete x;
// console.log(x);

// function add(num1, num1){
//     console.log(num1 + num1);
// }

// add(20)

// let y = 010;

// let z = "\010";

// const obj = {};
// Object.defineProperty(obj, "x", {value:0, writable:false});

// obj.x = 3.14;            // This will cause an error 

// const obj = {get x() {return 0} };

// obj.x = 3.14;            // This will cause an error 

// delete Object.prototype;


