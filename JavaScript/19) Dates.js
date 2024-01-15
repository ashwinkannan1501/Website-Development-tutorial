/*
JavaScript Date Object :- 
---------------------------
    The "date" object can be used to get the date and time.
    You can display a timer on the webpage by the help of JavaScript date object.
    You can use different Date constructors to create date object. 
    It provides methods to get and set day, month, year, hour, minute and seconds.
    The "Date" object in JavaScript is similar to the "datetime" module in python and the "java.time" package in java

Constructor :-
----------------
    You can use 4 variant of Date constructor to create date object.

        (i) Date()
        (ii) Date(milliseconds)
        (iii) Date(dateString)
        (iv) Date(year, month, [day], [hours], [minutes], [seconds], [milliseconds]).

JavaScript date Object Output :- 
---------------------------------
    By default, JavaScript will use the browser's time zone and display a date as a full text string:
    Example :- Tue Sep 05 2023 20:23:58 GMT+0530 (India Standard Time)

Creating Date Objects :- 
--------------------------
    Date objects are created with the "new Date()"" constructor.

*/

function dateObject() {
  "use-strict";
  const prompt = require("prompt-sync")();

  /*
JavaScript new Date() :- 
---------------------------
    The "new Date()" creates a date object with the current date and time:
 */
  var date = new Date();
  console.log(date);
  /*
new Date(dateString) :-
------------------------
    The "new Date(dateString)"" creates a date object from a date string.
*/
  var date = new Date("2022-09-02");
  console.log(date);
  var date = new Date("September 02, 2023 01:00:00");
  console.log(date);

  var dateInMilliseconds = new Date(100000000000);
  console.log(dateInMilliseconds);

  /*
new Date(year, month, [day], [hours], [minutes], [seconds], [mlliseconds]) :- 
-------------------------------------------------------------------------------
    It creates a date object.
    The parameter "years & months" are mandotory and the "day, hours, minutes, seconds & milliseconds" are optional.
    A Single parameter is considered as a "millisecond" value.

NOTE :- JS counts months from 0 to 11. 0-Jan, 11-Dec.
Specifying a month higher than 11, will not result in an error but add the overflow to the next year.
By default, it adds month number by 1 to compensate it.
Specifying a day higher than max, will not result in an error but add the overflow to the next month.
*/
  var dateInYM = new Date(2019, 13);
  console.log(dateInYM);
  var dateInYMD = new Date(2019, 8, 16);
  console.log(dateInYMD);
  var dateInYMDH = new Date(2020, 1, 31, 15);
  console.log(dateInYMDH);
  /*
Previous Century :-
--------------------
    19xx -> 99 -> 1999, 98 -> 1998
*/
  var dateInYMDHM = new Date(98, 5, 26, 22, 15);
  console.log(dateInYMDHM);
  var dateInYMDHMS = new Date(97, 6, 2, 16, 25, 58);
  console.log(dateInYMDHMS);
  var dateInYMDHMSM = new Date(88, 5, 9, 16, 25, 58, 1000);
  console.log(dateInYMDHMSM);

  /*
JavaScript stores  dates as milliseconds :- 
--------------------------------------------
    JS stores dates as a number of milliseconds since January 1, 1970.
    Zero time is January 1, 1970, 00:00:0 UTC
    24hrs is 864000000 milliseconds.

Displaying Dates :-
---------------------
    JS by default will output dates using the "toString()" method
*/

  console.log(
    "------------------------------ JavaScript Date Formats ------------------------"
  );
  /*
------------------------------ JavaScript Date Formats ------------------------
There are generally 3 types of JavaScript date input formats. They are :- 
(i) ISO Date - Example :- "2015-03-25" (The International Standard)
(ii) Short Date - Example :- "03/25/2015"
(iii) Long Date - Exampe : "Mar 25 2015" (or) "25 Mar 2015".

Note :- 
----------
    The ISO format follows a strict standard in JavaScript.
    The other formats are not so well defined and might be browser specific.

Date Output :- 
----------------
    Independent of input format, JavaScript will (by default) output dates in full text string format
    Example :- Tue Sep 05 2023 21:38:36 GMT+0530 (India Standard Time) 

(i) ISO Dates :- 
------------------
    The "ISO 8601" is the international standard for the representation of dates & times.
    The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format.
*/

  var date = new Date("2015-03-25");
  console.log(date);

  /*
  NOTE :- 
  --------
    The computed date will be relative to your time zone.
    Depending on your time zone, the result above will vary between March 24 and March 25.
  */

  /* 
  ISO Dates (Year & Month) :- 
  ----------------------------
    ISO dates can be written without specifying the day (YYYY-MM)
  */
  var date = new Date("2015-03");
  console.log(date);
  /*
  NOTE :- 
  -------
    Time zones will vary the result above between February 28 and March 01.
  */  

  /*
  ISO Dates (Only Year) :-
  --------------------------
    ISO dates can be written without month and day (YYYY)

  NOTES :-
  ----------
    Time zones will vary the result above between December 31 2014 and January 01 2015.  
  */
  var date = new Date("2015");
  console.log(date);

  /*
  ISO Dates (Date-Time) :-
  -------------------------
    ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ)
  */
  var date = new Date("2015-03-25T12:00:00Z");
  console.log(date);
  /*
  Date and time is separated with a capital 'T'.
  UTC time is defined with a capital letter 'Z'.
  If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead
  */
  var date = new Date("2015-03-25T15:00:00+06:30");
  console.log(date);
  var date = new Date("2015-03-25T15:00:00-08:50");
  console.log(date);
  /*
  NOTE :-
  ---------
    UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time).
    Omitting T or Z in a date-time string can give different results in different browsers.
  */

  /*
  (ii) Short Dates :-
  --------------------
    Short dates are written with an "MM/DD/YYYY" syntax like this.
  */
  var date = new Date("03/25/2015");
  console.log(date);
  /*
  WARNING :-
  -----------
    In some browsers, months or days with no leading zeroes may produce an error
  */
  var date = new Date("2015-3-25");
  console.log(date);
  /*
  The behavior of "YYYY/MM/DD" and "DD_MM_YYYY" is undefined. 
  Some browsers will try to guess the format. 
  Some will return NaN 
  */
  var date = new Date("2015/03/25");
  console.log(date);
  var date = new Date("25-03-2015"); // Invalid Date
  console.log(date);

  /*
  (iii) Long Dates :- 
  --------------------
    The Long dates are most often written with a "MMM DD YYYY" syntax like this
  */
  var date = new Date("Mar 25 2015");
  console.log(date);
  var date = new Date("25 Mar 2015"); // Month and day can be in any order.
  console.log(date);
  // Month can be writtejn in full (JANUARY) (OR) abbreviated (JAN).
  var date = new Date("Jan 25 2015"); 
  console.log(date);
  var date = new Date("January 25 2015");
  console.log(date);
  // Names are insensitive and commas are ignored
  var date = new Date("JANUARY, 25, 2015");
  console.log(date);

  /*
  Parsing Dates :- 
  -----------------
    If you have a valid date string, you can use the "Date.parse()" method to convert it to milliseconds.
    The "Date.parse()" method returns the number of milliseconds between the date and January 1, 1970
  */
  var msecs = Date.parse("March 21 2012");
  console.log(msecs);
    // You can then use the number of milliseconds to convert it to a date object
  var date = new Date(msecs);
  console.log(date);

  console.log("------------------ JavaScript Get Date Methods ---------------");
  const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const DAYS = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"]
  var date = new Date();
  console.log(`Full Year : ${date.getFullYear()}`);
  console.log(`Month : ${MONTHS[date.getMonth()]}`);
  console.log(`Date : ${date.getDate()}`);
  console.log(`Day : ${DAYS[date.getDay()]}`);
  console.log(`Hours : ${date.getHours()}`);
  console.log(`Minutes : ${date.getMinutes()}`);
  console.log(`Seconds : ${date.getSeconds()}`);
  console.log(`MilliSeconds : ${date.getMilliseconds()}`);
  console.log(`Time : ${date.getTime()}`);

  console.log(`Date.now() : ${Date.now()}`);

  console.log(`UTC Date : ${date.getUTCDate()}`)
  console.log(`UTC Full Year : ${date.getUTCFullYear()}`);
  console.log(`UTC Month : ${MONTHS[date.getMonth()]}`);
  console.log(`UTC Day : ${DAYS[date.getUTCDay()]}`);
  console.log(`UTC Hour : ${date.getUTCHours()}`);
  console.log(`UTC Minutes : ${date.getUTCMinutes()}`);
  console.log(`UTC Seconds : ${date.getUTCSeconds()}`);
  console.log(`UTC Milliseconds : ${date.getUTCMilliseconds()}`);

  console.log(`getTimeZoneOffset() method : ${date.getTimezoneOffset()}`);

  console.log("---------------------- JavaSCript Set Date Methods --------------------");
  var date = new Date();
  date.setFullYear(2023, 2, 14);
  console.log(date);
  date.setDate(24);
  console.log(date);
  date.setMonth(8, 2);
  console.log(date);
  date.setHours(23, 14, 50, 5000);
  console.log(date);
  date.setMinutes(55, 30, 6000);
  console.log(date);
  date.setSeconds(40, 7000);
  console.log(date);
  date.setTime(6547891230);
  console.log(date);

  date.setUTCFullYear(2023, 2, 14);
  console.log(date);
  date.setUTCDate(21);
  console.log(date);
  date.setUTCMonth(8, 2);
  console.log(date);
  date.setUTCHours(12, 24, 40);
  console.log(date);
  date.setUTCMinutes(55, 30, 6000);
  console.log(date);
  date.setUTCSeconds(40, 7000);
  console.log(date);
  date.setUTCMilliseconds(456123);
  console.log(date);

  console.log("---------------- Other Methods --------------");
  var date = new Date();
  console.log(`toDateString() : ${date.toDateString()}`);
  console.log(`toTimeString() : ${date.toTimeString()}`);
  console.log(`toLocaleDateString() : ${date.toLocaleDateString()}`);
  console.log(`toLocaleTimeString() : ${date.toLocaleTimeString()}`);
  console.log(`toLocaleString() : ${date.toLocaleString()}`);
  console.log(`toUTCString() : ${date.toUTCString()}`);
  console.log(`toISOString() : ${date.toISOString()}`);
  console.log(`toJSON() : ${date.toJSON()}`);

}

if (require.main === module) {
  dateObject();
}
