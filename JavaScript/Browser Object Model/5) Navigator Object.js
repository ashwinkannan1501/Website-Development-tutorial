/*
Navigator Object :-
---------------------
    The "navigator" object belongs to the "window" object.
    The "navigator" object contains information about the visitor's browser.
    It is used for browser detection. It can be used to get the browser information such as "appName", "appCodeName", etc.,
*/

'use strict';

/*
Properties :- 
--------------
(i) cookieEnabled : This property returns true if the cookies are enabled, otherwise returns false.
 */
var isCookieEnabled = navigator.cookieEnabled;
console.log(`Is Cookie Enabled ? : ${isCookieEnabled}`);

// (ii) appName : This property returns the application name of the browser. (deprecated).
var appName = navigator.appName;
console.log(`App Name : ${appName}`);

// (iii) appCodeName : This property returns the application code name of the browser. (deprecated)
var appCodeName = navigator.appCodeName;
console.log(`App Code Name : ${appCodeName}`);

// (iv) product :- This property returns the product name of the browser engine (deprecated).
var browserEngine = navigator.product;
console.log(`Browser Engine : ${browserEngine}`);

// (v) appVersion :- This property returns the version information about the browser.
var appVersion = navigator.appVersion;
console.log(`App Version : ${appVersion}`);

// (vi) userAgent :- This property returns the user agent header sent by the browser to the server
var browserAgent = navigator.userAgent;
console.log(`Browser Agent : ${browserAgent}`);
/*
Warning :- 
-----------
    The information from the navigator object can often be misleading. The navigator object should not be used to detect browser versions because :-
        (a) Different browsers can use the same name
        (b) The navigator data can be changed by the browser owner.
        (c) Some browsers misidentify themselves to bypass site tests.
        (d) Browser cannot report new OS, released later than the browser.
*/

// platform :- This property returns the browser's platform.
var browserPlatform = navigator.platform;
console.log(`Browser Platform : ${browserAgent}`);

// language :- This property returns the browser's language.
var browserLanguage = navigator.language;
console.log(`Browser Language : ${browserLanguage}`);

// onLine :- This property returns trw if the browser is online.
var isBrowserOnline = navigator.onLine;
console.log(`Is Browser Online : ${isBrowserOnline}`);

// plugins :- This property returns the plugins . It is supported in Netscape & Firefox only.
var plugins = navigator.plugins;
console.log(`Plugins : ${navigator.plugins}`);

// Methods :-
// (i) javaEnabled() :- This method returns true if the java is enabled.
var isJavaEnabled = navigator.javaEnabled();
console.log(`Is Java Enabled : ${isJavaEnabled}`);

// (ii) taintEnabled() :- This method returns true if the taint is enabled.
var isTaintEnabled = navigator.taintEnabled();
console.log(`Is Taint Enabled : ${isTaintEnabled}`);

