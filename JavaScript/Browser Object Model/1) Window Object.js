'use strict';

/*
Browser Object Model (BOM) :- 
-------------------------------
    The Browser Object Model (BOM) is used to interact with the browser.
    The default object of the browser is "window".
    The document object represents an HTML document. It forms DOM.

Window Object :- 
------------------
    The "Window" object represents a window in the browser.
    An object of the window is created automatically by the browser.
    The "Window" is the object of the browser, it is not the object of the javascript.

    NOTE :- If HTML document contains the frame (or) iframe, the browser creates the additional window objects for each frame.

    In Window Object, there are 5 different object which is comes under the "Window" object. They are :-
    (i) Screen Object
    (ii) History Object
    (iii) Location Object
    (iv) Navigator Object
    (v) Location Object

    Note :-
        The Global variables are the properties of the window object.
        The Global Functions are the methods of the window object.
*/

/*
Methods :-
-------------
(i) alert() :- It displays the alert box containing the message with the "OK" button
*/
window.alert("This is the alert message with using the 'window' object");
alert("This is the alert message without using the 'window' object");

// (ii) prompt() :- It displays the dialog box to get the input from the user.
var number = Number(window.prompt("Enter a number (with using 'window' object): "));
console.log(number);
console.log(typeof number);

var number = Number(prompt("Enter a number (without using 'window' object): "));
console.log(number);
console.log(typeof number);

// (iii) confirm() :- It displays the confirm dialog box containing the message with the "OK" and the "Cancel" button
var hasConfirm = window.confirm("Are you sure want to exit ? ");
if(hasConfirm)
{
    window.alert("You press Ok button. You are exit now.");
}
else{
    window.alert("You press Cancel button. You are not exit now.");
}

function openWindow()
{
    // (iv) open() :- It opens the new window.
    window.open("https://www.google.com");
}

function closeWindow()
{
    // (v) close() :- It closes the current window
    window.close();
}

function timeOut()
{
    // (vi) setTimeOut() :- It performs the action after the specified time like "calling the function, evaluating the expression, etc.,"
    window.setTimeout(() => {
        window.open("https://www.facebook.com");
    }, 5000)
}

/*
Window Size :- 
----------------
    Two Properties can be used to determine the size of the browser window. Both Properties returns the size in 
pixels. The Two Properties are :-
    (i) innerHeight   (and)
    (ii) innerWidth

    Note :- The Browser window (viewport) is not including the toolbars and scrollbars.
*/

// (i) innerHeight :- It defines the inner height of the browser window in pixels
var height = window.innerHeight;
window.alert(`Height : ${height}`);

// (ii) innerWidth :- It defines the inner width of the browser window in pixels
var width = window.innerWidth;
window.alert(`Width : ${width}`);

window.moveTo(2000, 4000); // It moves the current window

console.log(window.height);
console.log(window.width);

// window.moveTo(1000, 2000)
