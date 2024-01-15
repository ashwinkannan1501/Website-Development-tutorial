/*
String Data Type :- 
---------------------
    A String is a sequence of characters written with single quotes ('') (or) double quotes (""). The Strings are
for storing and manipulating text.

    Each element/character in the string is accessed via indexing. Indexing starts from [0] to [length_of_string-1]
Negative Indexing is not possible via '[]' in JS like python. Range Slicing is also not possible via '[]' in JS like 
Python.

    Strings are immutable (i.e) Not Changeable in JS. Strings cannot be changed, only be replaced

    Example :- string = "Hello";
    - 0 -  1 -  2 -  3 -  4 ------ 
    | H  | e  | l  | l  | o  | \0| -> '\0' -> End of line character
    | -5 | -4 | -3 | -2 | -1 -----

    There are 2 ways to create strings in JavaScript.
    (i) String Literal
    (ii) String Object

 */
"use-strict";
const prompt = require("prompt-sync")();

/*
(i) String Literal :- 
-----------------------
    The String literal is cfeated using ('') or (""). The datatype of string literal is "string".
*/
let string_literal = "Ashwin Kannan";
console.log(`String Literal : ${string_literal}`);
console.log(`DataType : ${typeof(string_literal)}`);

/*
(ii) String Object :- 
-----------------------
    The string object si created using 'new' keyword followed by the 'String Constructor'. Here the 'new' keyword is
used to create an instance of the string. The datatype of string datatype is 'object'.
*/
let string_object = new String("Amutha Kannan");
console.log(`String Object : ${string_object}`);
console.log(`Data Type : ${typeof(string_object)}`);

/* String is immutable (not changeable after declaring). */
string_literal[2] = 'u'; // Gives NBo Error but also nothing change in the original string.
console.log(string_literal); // Output original String

let string = prompt("Enter a String : ");
console.log(string.length); // length is a property not a function in JS which retuns a length of a string
console.log(string.constructor); // constructor is a property not a function in JS. The constructor property returns the function that created the String prototype.For JavaScript strings the constructor returns:(function String() { [native code] })
console.log(string[0]); // Prints the character in the 0th index of the string
// console.log(string[2:5]); // Output : Error // Range Slicing is not possible in access property '[]' syntax.
console.log(string[-1]); // Output : undefined // Negative Indexing is also not possible in access property '[]' syntax.
console.log(string[(string.length)-1]);

/*
String Methods :- 
------------------
Extracting String Parts :- 
----------------------------
    There are 3 methods for extracting a part of a string. They are :-
    (i) slice(start, [end]) method :-
    (ii) substring(start, [end]) method :-
    (iii) substr(start, [length]) method :-
*/
/*
(i) slice(start, [end]) method :- 
------------------------------------
    The 'slice()' method extracts a part of a string and returns the extarcted part in a new string.
    This method takes 2 parameters : (a) startIndex (included) (b) endIndex (excluded).
    The slice() method is a range slicing concept

*/
console.log(string.slice()); // prints the full string.
console.log(string.slice(0, 1)); // Prints the 1st element in the string
console.log(string.slice(-1)); // prints the last element in the string
console.log(string.slice(2, 6)); // prints the element from 2nd index to 5th index in the string
console.log(string.slice(-8, -2)); // prints the element from -8th index to -2nd index in the string.

/* 
(ii) substring(start , [end]) method :- 
-----------------------------------------
    The 'substring()' method is smiliar to the slice() method. The difference is that the start and end values 
less than  0 are treated as 0 in the substring() method. (i.e)there is no negative indexing in substring() method.
*/
console.log(string.substring()); // Prints the full element in the string.
console.log(string.substring(3)); // Prints the element from the 3rd element in the string.
console.log(string.substring(0, 1)); // prints the 1st element in the string.
console.log(string.substring(-1)); // Output Nothing
console.log(string.substring(2, 6)); // prints the element from the 2nd index to the 5th index in the string.
console.log(string.substring(-2, -8)); // Outputs Nothing

/*
(iii) substr(start, [length]) method :-
-----------------------------------
    The 'substr()' method is a deprecated method (i.e) this methiod is not in use. 
    It is similar to the 'slice()' method.
    It supports negative indexing.
    The difference is that the 2nd parameter specifies the length of the extracted part.
*/
console.log(string.substr()); // prints the entire element in the string.
console.log(string.substr(0)); // prints the element from the 0th index in the string
console.log(string.substr(0, 1)); // prints the 0th element in the string
console.log(string.substr(2, 6)); // prints the element from the 2nd index to the 5th index in the string
console.log(string.substr(-6)); // prints the element from the -6th index in the string
console.log(string.substr(-12, 6)); // prints the element from the -12th index to the -6th index in the string

/*
Replacing String Content :- 
----------------------------
replace(oldString, newString) method :-
------------------------------------------ 
    The 'replace()' method replaces a specified value with the another value in the string. This method only replaces
the 1st match of the specified value.

    By default, the replace() method replaces only the 1st match of the string. If you want to replace all the matches
us the 'regular expression' with the '(/g) -> global search pattern' flag set.

    By default, the replace() method is case sensitive. To replace the case sensitivity, use the regular expression
with the '(/i) -> case insensitivity pattern' flag set.

    The regular expressions are written without quotes.
*/
string = "Please Visit the Microsoft HeadQuarters. MICROSOFT is an amazing Office for enthusiastic software developer and problem solver";
console.log(string);
console.log("After Replace : " , string.replace("Microsoft", "Google"));
console.log("After Replace : " , string.replace(/Microsoft/ig, "Google"));

/*
replaceAll(oldString, newString) method :-
--------------------------------------------
    In 2021, JS introduces the replaceAll() method. It is a ES2021 feature. This method replaces all the matched strings.
    This method allows you to specify a regular expressions instead of a string to be replaced.
    If a Parameter is a regular expression, the global flag (/g) must be set, otherwise TypeError will be thrown.
*/
console.log("After Replace All : " + string.replaceAll(/Microsoft/ig, "Apple"));

// Converting to Upper Case and Lower Case.
console.log("UpperCase : " + string.toUpperCase()); // This method is used to convert the string to uppercase characters
console.log("LowerCase : " + string.toLowerCase()); // This method is used to convert the string to lowercase characters.
console.log(string.toLocaleUpperCase()); // toLocaleUpperCase() method - Differentiates based on language locale settings. This method converts the string to upper case characters using current locale. The locale is based on the language settings of the browser
console.log(string.toLocaleLowerCase()); // toLocaleLowerCase() method - Differentiates based on language locale settings. This method converts the string to upper case characters using current locale. The locale is based on the language settings of the browser

/*
concat() method :- 
--------------------
    This method joins/concatenates 2 or more strings. It can be used instead of the + operator.
*/
let first_name = "Ashwin";
let last_name = "Kannan";
console.log(`+ Opertor : ${first_name + last_name}`);
console.log(`concat() method : ${first_name.concat(last_name)}`);
console.log(`concat() method : ${("Ashwin").concat("Kannan", "Amutha")}`);

/*
trim() method :- 
-----------------
    The trim() method removes whitespaces from both sides of the string.
trimStart() method :- 
-----------------------
    It is a ES2019 feature. This method removes whitespaces only from the start of the string.
trimEnd() method :-
--------------------
    It is a ES2019 feature. This method removes whitespaces only from the end of the string.
*/
let full_name = "      Ashwin Kannan         ";
console.log(`${full_name}`);
console.log(`${full_name.trim()}`);
console.log(`${full_name.trimStart()}`);
console.log(`${full_name.trimEnd()}`);

/*
Padding :- 
-----------
    In 2017, JS introduced the padStrt() & padEnd() method. It is a ES2017 feature.
*/
console.log(`${string.padStart(15)}`); // This method pads a string from the start. It pads a string with another string (multiple times) until it reaches a given length. To pad a number, convert the number to string first.
console.log(`${string.padStart(15, "₹")}`);
console.log(`${string.padEnd(6)}`); // This method pads a string at the end. It pads a string with another string (multiple times) until it reaches a given length. To pad a number, convert the number to a string first.
console.log(`${string.padEnd(7, "₹")}`);

/*
Extracting String Characters :- 
---------------------------------
    There are 2 methods for extraing the string characters. They are :- 
    (i) charAt(index)
    (ii) charCodeAt(index)
*/
console.log(`${string.charAt(3)}`); // This method returns the character at a specifiedm index in the string.
console.log(`${string.charCodeAt(4)}`); // Output : 115 // This method return the ASCII/Unicode character at a specified index in the string. This method returns a UTF-16 code (an integer between 0 to 65535)
console.log(`${string.codePointAt(4)}`); // Output : 115 // The codePointAt() method returns the Unicode value at an index (position) in a string.
console.log(`${String.fromCharCode(65)}`); // It prints the specified character from the ASCII Value
console.log(`${String.fromCharCode(72, 69, 76, 76, 79)}`); // It prints the series of specific characters from the ASCII value.

/*
split(separator) method :-
----------------------------
    The split() method is used to convert a sting into an array.
    Example :- 
    -----------
        text.split(","); //Split on commas
        text.split(" "); // Split on spaces
        text.split("|"); // Split on Pipe
    If the separator is omitted, the returned array will contain the whole string in index 0. Example :- text.split();
    If the separator is "", the retrned array will be an array of single characters. Example :- text.split("");
*/
let names = prompt("Enter 3 names with a comma (,) : ").split(",");
console.log(`${names}`);
console.log(`${typeof(names)}`);
console.log(`${names[0]}`);
console.log(`${names[1]}`);
console.log(`${names[2]}`);

/*
indexOf(string, [startIndex]) method :- 
-----------------------------------------
    This method returns the index of the last occurrence of a specified text in a string. It accepts a 2nd parameter as a starting index for the search. It returns -1 if the string is not found.
*/
console.log(`${("Ashwin Ashwin Ashwin").indexOf("Ashwin")}`);
console.log(`${("Ashwin Ashwin Ashwin").indexOf("Ashwin", 5)}`);
/*
lastIndexOf(string, [startIndex]) method :-
--------------------------------------------
    This method returns the index of the last occurrence of a specified text in a string. It accepts a 2nd parameter as a starting index for the search. This method searches backwars (from end to begining). It returns -1 if a string is not found.
*/
console.log(`${("Ashwin Ashwin Ashwin").lastIndexOf("Ashwin")}`);
console.log(`${("Ashwin Ashwin Ashwin").lastIndexOf("Ashwin", 12)}`);

/*
search(string/regex) method :- 
---------------------------------
    The search() method searches a string (or) regular expression and returns the index of the match.
*/
console.log(`${("Ashwin Kannan Amutha").search("Ashwin")}`);
console.log(`${("Ashwin Kannan Amutha").search(/k/gi)}`);
/*
---------------------------------------------------------------------------------------------------------
Note :- 
--------
    The search() & (indexOf(), lastIndex()) methods are not equal
    The 'search()' method can't take 2nd start position argument.
    The 'indexOf()' & 'lastIndexOf()' method can't take powerful search values (regular expressions).
------------------------------------------------------------------------------------------------------------
*/

/*
match(string/regex) method :- 
-------------------------------
    The 'match()' method returns an array containing the result of matching a string/regex.
*/
console.log(`${("The rain in SPAIN stays mainly in the plain").match("ain")}`);
console.log(`${("The rain in SPAIN stays mainly in the plain").match(/ain/ig)}`)

/*
matchAll(string.regex) method :-
---------------------------------
    The 'matchAll()' method returns an iterator containing the result of the string/regex.
    It is a ES2020 feature.
    If the parameter is a regular expression, the 'g' flag must be set, otherwise a TypeError is thrown.
*/
console.log(`${Array.from(("The rain in SPAIN stays mainly in the plain").matchAll("ain"))}`);
console.log(`${Array.from(("The rain in SPAIN stays mainly in the plain").matchAll(/ain/ig))}`);

/*
includes(string, [index]) method :-
--------------------------------------
    The 'includes()' method returns 'true' if a string contains a specific value, oherwise it returns 'false'.
    It is case sensitive. 
    It is a ES6 feature.
*/
console.log(`${string.includes("Kannan")}`);
console.log(`${string.includes("Kannan", 7)}`);
console.log(`${string.includes("Kannan", 2)}`);

/*
startsWith(string, [start_index]) method :-
-----------------------------------------------
    The startsWith() method returns true if a string begins with a specified value, otherwise it returns false.
    An optional start_position for the search can also be specified

*/
console.log(`${string_literal.startsWith("Ashwin")}`);
console.log(`${string_literal.startsWith("Ashwin", 0)}`);
console.log(`${string_literal.startsWith("Kannan", 7)}`);
console.log(`${string_literal.startsWith("Kannan", 3)}`);

/*
 endsWith(string, [end_index]) method :- 
 ------------------------------------------
    The endsWith() method returns true if a string ends with a specified value, otherwise it returns false.
    An optional end_index for the search can also be specified

 */
console.log(`${string_object.endsWith("Amutha")}`);
console.log(`${string_object.endsWith("Amutha", 0)}`);
console.log(`${string_object.endsWith("Kannan", 7)}`);
console.log(`${string_object.endsWith("Kannan", 3)}`);

/*
localeCompare(string) method :- 
---------------------------------
    The localeCompare() method compares two strings in the current locale.

The localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal).

The current locale is based on the language settings of the browser.
*/
console.log(`${(string_literal).localeCompare(string_object)}`);

/*
repeat(count:int) method :- 
------------------------------
    The repeat() method returns a string with a number of copies of a string.

The repeat() method returns a new string.

The repeat() method does not change the original string.
*/
console.log(`${string_literal.repeat(3)}`);
console.log(`${string_object.repeat(5)}`);

console.log(`${string[9]}`); // Prints the character of the 9th index
string[0] = 'A'; // No Error - No modification of original string because strings are immutable.
console.log(`${string}`); // Prints the original string

console.log(`${names.at(0)}`); // This method returns the indexed character of the string. It is similar to charAt() method.
