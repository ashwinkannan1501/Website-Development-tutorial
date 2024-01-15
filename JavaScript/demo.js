'use strict';
const prompt = require("prompt-sync")();
function demo() {
  console.log("Hello World which is using node.js");

  console.log("Ashwin Kannan");

  let a = 10;
  let b = 5;
  if (a=10) {
    console.log("Zoho Corporation");
  } else {
    console.log("ABC Company");
  }

  console.log("K. Ashwin" & "Ashwin Kannan");
  console.log("K. Ashwin" & "K. Ashwin");

  console.log("This is the log message");
  console.error("This is the error message");
  console.warn("This is the warning message");

  var message = eval(prompt("Enter a prompt : ")); // eval() method means evaluating the code/expression/statement.
  console.log(`The message is : ${message}`);

}

if (require.main === module) {
  demo();
}
