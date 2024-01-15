"use-strict";
const prompt = require("prompt-sync")();

let boolean_value = Boolean(prompt("Enter a boolean value : "));
console.log(`Boolean Value : ${boolean_value}`);
console.log(`Datatype of ${boolean_value} is : ${typeof(boolean_value)}`);

console.log(`Boolean of 0 : ${Boolean(0)}`);
console.log(`Boolean of -0 : ${Boolean(-0)}`);
console.log(`Boolean of "" : ${Boolean("")}`);
console.log(`Boolean of null : ${Boolean(null)}`);
console.log(`Boolean of undefined : ${Boolean(undefined)}`);
console.log(`Boolean of NaN : ${Boolean(NaN)}`);
console.log(`Boolean of false : ${Boolean(false)}`);

let boolean_literals = true;
let boolean_objects = new Boolean(false);
console.log(`Value of Boolean Literals : ${boolean_literals}`);
console.log(`Datatype of ${boolean_literals} : ${typeof(boolean_literals)}`);
console.log(`Value of Boolean Objects : ${boolean_objects}`);
console.log(`Datatype of ${boolean_objects} : ${typeof(boolean_objects)}`);

console.log(`${boolean_literals} == ${boolean_objects} : ${boolean_literals == boolean_objects}`);
console.log(`${boolean_literals} === ${boolean_objects} : ${boolean_literals === boolean_objects}`);

console.log(`${boolean_literals} == ${boolean_literals} : ${boolean_literals == boolean_literals}`);
console.log(`${boolean_objects} === ${boolean_objects} : ${boolean_objects === boolean_objects}`);

let bool = false;
console.log(`Constructor Property : ${bool.constructor}`);

console.log(`toString() method : ${bool.toString()}`);
console.log(`valueOf() method : ${bool.valueOf()}`)

