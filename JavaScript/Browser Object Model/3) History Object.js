/*
History Object :-
--------------------
    The History Object belongs to the Window Object.
    The History Object represents an array of URL's visited by the user.
    By using this object, you can able to load the previous, forward or any particular page.

*/
'use strict';
function goBackward()
{
    history.back(); // back() :- It loads the previous web-page
}

function goForward()
{
    history.forward(); // forward() :- It loads the next web-page (if available)
}

// Property :-
console.log(history.length); // length :- It returns the length of the URL's history.
// console.log(history.state);
function loadWebPage()
{
    history.go(); // go() :- It reloads the current web-page (Similar to Ctrl+R)
}
// history.replaceState(55, )