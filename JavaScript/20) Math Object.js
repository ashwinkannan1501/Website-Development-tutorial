/*
Math Object :- 
---------------
    The JavaScript 'Math' object provides several constants & methods to perform mathematical operations on numbers.
    Unlike other objects, the Math object has no cosnstructor.
    The Math Object is static.
    All methods & properties (constants) cna be used without creating a math object first.
    The Math object is a global object, and it's properties & methods are available for use directly in your JS code
without any additional imports (or) declarations.
*/

"use-strict";
const prompt = require("prompt-sync")();

function mathObject() {

    mathProperties();

    mathMethods();
}

function mathProperties() {

    // Math Properties
    const PI = Math.PI.toFixed(2);
    console.log(`PI value = ${PI}`); // returns PI value

    const E = Math.E.toFixed(2);
    console.log(`E value = ${E}`); // returns Euler's Number (approx. 2.718)

    const SQRT2 = Math.SQRT2.toFixed(2);
    console.log(`SQRT2 value = ${SQRT2}`); // returns the square root of 2

    const SQRT1_2 = Math.SQRT1_2.toFixed(2);
    console.log(`SQRT1_2 value = ${SQRT1_2}`); // returns the square root of 1/2

    const LOG2E = Math.LOG2E.toFixed(2);
    console.log(`LOG2E value = ${LOG2E}`); // returns base 2 logarithm of E

    const LOG10E = Math.LOG10E.toFixed(2);
    console.log(`LOG10E value = ${LOG10E}`); // returns base 10 logarithm of E 

    const LN2 = Math.LN2.toFixed(2);
    console.log(`LN2 value = ${LN2}`); // returns the natural logarithm of 2

    const LN10 = Math.LN10.toFixed(2);
    console.log(`LN10 value = ${LN10}`); // returns the natural logarithm of 10
}

function mathMethods()
{
    // Math Methods
    var number = Number(prompt("Enter a number : "));

    let sqrtMethod = Math.sqrt(number);
    console.log(`sqrt(${number}) method : ${sqrtMethod}`);

    let cbrtMethod = Math.cbrt(number);
    console.log(`cbrt(${number}) method : ${cbrtMethod}`);

    let baseNumber = Number(prompt("Enter the base number : "));
    let exponentNumber = Number(prompt("Enter a exponent number : "));
    let powerMethod = Math.pow(baseNumber, exponentNumber);
    console.log(`pow(${baseNumber}, ${exponentNumber}) method : ${powerMethod}`);

    let expMethod = Math.exp(number); // Returns the value of E to the power x
    console.log(`exp(${number}) method : ${expMethod}`);

    let expm1Method = Math.expm1(number);
    console.log(`expm1(${number}) method : ${expm1Method}`);

    let negativeNumber = Number(prompt("Enter a negative number : "));
    let absoluteMethod = Math.abs(negativeNumber);
    console.log(`abs(${negativeNumber}) method : ${absoluteMethod}`);

    let array = [12, 45, 22, 89, 125, 2, 0, -8];
    let minimumMethod = Math.min(...array);
    console.log(`min(${array}) method : ${minimumMethod}`);

    let maximumMethod = Math.max(...array);
    console.log(`max(${array}) method : ${maximumMethod}`);

    let floorMethod = Math.floor(2.7);
    console.log(`floor(2.7) method : ${floorMethod}`);

    let ceilMethod = Math.ceil(3.1);
    console.log(`ceil(3.1) method : ${ceilMethod}`);

    let roundMethod = Math.round(4.4);
    console.log(`round(4.4) method : ${roundMethod}`);

    let froundMethod = Math.fround(5.6);
    console.log(`fround(5.6) method : ${froundMethod}`);

    let clz32Method = Math.clz32(number);
    console.log(`clz32(${number}) method : ${clz32Method}`);

    let hypotenusMethod = Math.hypot(12, 5, 9);
    console.log(`hypot(12, 5, 9}) method : ${hypotenusMethod}`);

    let sinMethod = Math.sin(number);
    console.log(`sin(${number}) method : ${sinMethod}`);

    let cosMethod = Math.cos(number);
    console.log(`cos(${number}) method : ${cosMethod}`);

    let tanMethod = Math.tan(number);
    console.log(`tan(${number}) method : ${tanMethod}`);

    let sinhMethod = Math.sinh(number);
    console.log(`sinh(${number}) method : ${sinhMethod}`);

    let coshMethod = Math.cosh(number);
    console.log(`cosh(${number}) method : ${coshMethod}`);

    let tanhMethod = Math.tanh(number);
    console.log(`tanh(${number}) method : ${tanhMethod}`);

    let asinMethod = Math.asin(number);
    console.log(`asin(${number}) method : ${asinMethod}`);

    let acosMethod = Math.acos(number);
    console.log(` acos(${number}) method : ${acosMethod}`);

    let atanMethod = Math.atan(number);
    console.log(` atan(${number}) method : ${atanMethod}`);

    let atan2Method = Math.atan2(baseNumber, exponentNumber);
    console.log(` atan2(${number}) method : ${atan2Method}`);

    let asinhMethod = Math.asinh(number);
    console.log(` asinh(${number}) method : ${asinhMethod}`);

    let acoshMethod = Math.acosh(number);
    console.log(`acosh(${number} method : ${acoshMethod})`);

    let atanhMethod = Math.atanh(number);
    console.log(`atanh(${number}) method : ${atanhMethod}`);

    let imulMethod = Math.imul(baseNumber, exponentNumber);
    console.log(`imul(${number}) method : ${imulMethod}`);

    let logMethod = Math.log(number);
    console.log(`log(${number}) method : ${logMethod}`);

    let log2Method = Math.log2(number);
    console.log(`log2(${number}) method : ${log2Method}`);

    let log10Method = Math.log10(number);
    console.log(`log10(${number}) method : ${log10Method}`);

    let log1pMethod = Math.log1p(number);
    console.log(`log1p(${number}) method : ${log1pMethod}`);

    let signMethod = Math.sign(number);
    console.log(`sign(${number}) method : ${signMethod}`);

    let trucateMethod = Math.trunc(number);
    console.log(`trucate(${number}) method : ${trucateMethod}`);
}

if (require.main === module) {
  mathObject();
}
