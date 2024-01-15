'use strict';

/*
(i) Screen Object :-
----------------------
    The "Screen" Object belongs to the "Window" Object.
    The Screen Object hold the information of the browser's screen.
    It can be used to display the screen "width", "height", "colorDepth", "pixelDepth", etc.,
*/

function screenObject()
{
    let screenHeight = screen.height; // It returns the height of the screen
    let screenWidth = screen.width; // It returns the width of the screen
    let screenAvailbleHeight = screen.availHeight; // It returns the available height of the screen
    let screenAvailbleWidth = screen.availWidth; // It returns the available width of the screen
    let screenColorDepth = screen.colorDepth; // It returns the color depth of the screen
    let screenPixelDepth = screen.pixelDepth; // It returns the pixel depth of the screen
    let screenOrientation = screen.orientation; // It returns the orientation of the screen

    console.log(`Screen Height : ${screenHeight}`);
    console.log(`Screen Width : ${screenWidth}`);
    console.log(`Screen Availble Height : ${screenAvailbleHeight}`);
    console.log(`Screen Availble Width : ${screenAvailbleWidth}`);
    console.log(`Screen Color Depth : ${screenColorDepth}`);
    console.log(`Screen Pixel Depth : ${screenPixelDepth}`);
    console.log(`Screen Orientation : ${screenOrientation}`);

     // Note :- The ColorDepth and PixelDepth are equal in all modern computers

    // alert(`Screen Height : ${screenHeight}`);
    // alert(`Screen Width : ${screenWidth}`);
    // alert(`Screen Availble Height : ${screenAvailbleHeight}`);
    // alert(`Screen Availble Width : ${screenAvailbleWidth}`);
    // alert(`Screen Color Depth : ${screenColorDepth}`);
    // alert(`Screen Pixel Depth : ${screenPixelDepth}`);
    // alert(`Screen Orientation : ${screenOrientation}`);
}

screenObject();