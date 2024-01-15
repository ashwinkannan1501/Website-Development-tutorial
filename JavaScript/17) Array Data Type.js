/*
JavaScript Arrays :- 
----------------------
    Arrays in JS are the group of elements of same/different datatype like python.
    Arrays are used to store multiple items in a single variable.
    Arrays are mutable (i.e) changeable after declaration.
    It is a common practice to create an array with the 'const' keyword.
    There are 3 ways to create arrays in JS.
    (i) By array literal;
    (ii) By creating instance of the array directly (using 'new' keyword).
    (iii) By using Array Constructor (using 'new' keyword)
*/

"use-strict";
const prompt = require("prompt-sync")();

function arrayMethods() {
  const car_brands = ["Volvo", "BMW", "Audi", "KIA", "Citreon"]; // Array Literal
  const numbers = new Array(); // Creating instance of an array directly (using 'new' keyword)
  numbers[0] = 10;
  numbers[1] = 56;
  numbers[2] = 23;
  numbers[3] = 50.36;
  numbers[4] = 89;
  const mixed_type_array = new Array( // Array Constructor (using 'new' keyword)
    10,
    20,
    289.3,
    "Ashwin",
    "Kannan",
    "Amutha",
    ["Volvo", "BMW", "Audi", "KIA", "Citreon"],
    {
      name: "K. Ashwin",
      age: 22,
      gender: "Male",
    }
  );

  // Note :- For simplicity, readability & execution speed, use the array literal method

  // Printing the array elements and printing the data type of the array.
  console.log(`Car Brands : ${car_brands}`);
  console.log(`DataType of ${car_brands} : ${typeof car_brands}`);
  console.log(`Number : ${numbers}`);
  console.log(`DataType of ${numbers} : ${typeof numbers}`);
  console.log(`Different Value Array : ${mixed_type_array}`);
  console.log(`DataType of ${mixed_type_array} : ${typeof mixed_type_array}`);

  // Accessing array elements.
  console.log(`1st element of ${car_brands} : ${car_brands[0]}`);
  console.log(`2nd element of ${car_brands} : ${car_brands[1]}`);
  console.log(`last element of ${car_brands} : ${car_brands[-1]}`); // Output : Undefined // Negative Indexing is not allowed in [] syntax like python.
  // console.log(`Range Slice of ${car_brands} : ${car_brands[1:3]}`);
  console.log(
    `Last element of ${car_brands} : ${car_brands[car_brands.length - 1]}`
  );

  /* 
Recognize an array :  
----------------------
    The array returns "objects" as a return datatype. Since the array and the object returns as a "object" return type, we don't know which is array? and which is object? 
    To solve this problem, the 'Array.isArray(args)' & 'instaceof'operator is used to check whether the object type is array or not.
*/

  console.log(`${car_brands} is an array ? : ${Array.isArray(car_brands)}`);
  console.log(
    `${mixed_type_array} is an array ? : ${mixed_type_array instanceof Array}`
  );

  // Creating array elements using input
  var arrayToString = [];
  var total_elements = Number(
    prompt("Enter the number of elements for the array : ")
  );
  for (var index = 0; index < total_elements; index += 1) {
    var item = prompt(`Enter the element for index ${index} : `);
    arrayToString.push(item);
  }
  console.log(`Values : ${arrayToString}`);
  console.log(`DataType : ${typeof arrayToString}`);
  console.log(`Values : ${arrayToString.toString()}`); // Change the array to string via 'toString()' method
  console.log(`DataType : ${typeof arrayToString.toString()}`); // Checking the datatype of the arrayToString.

  // Looping the array in JavaScript
  console.log("---------------------- Reverse While Loop -----------------");
  var index = car_brands.length - 1;
  while (index >= 0) {
    console.log(`car-brands[${index}] : ${car_brands[index]}`);
    index -= 1;
  }

  console.log("-------------------- Reverse Do-While Loop -----------------");
  var index = car_brands.length - 1;
  do {
    console.log(`car-brands[${index}] : ${car_brands[index]}`);
    index -= 1;
  } while (index >= 0);

  console.log("----------------------- For Loop -------------------------");
  for (var index = 0; index < numbers.length; index += 1) {
    console.log(`numbers[${index}] : ${numbers[index]}`);
  }

  // The "For-Of" loop in JavaScript is similar to the "for i in array" loop in python
  console.log("--------------------- For Of Loop -----------------");
  for (var element of mixed_type_array) {
    console.log(
      `mixed-type-array[${mixed_type_array.indexOf(element)}] : ${element}`
    );
  }

  // Array Properties :-
  console.log(`Length Property :- ${car_brands.length}`); // It returns the length of an array
  console.log(`Constructor Property :- ${car_brands.constructor}`); // It returns the function that created the array prototype

  // Array Methods :-
  /*
join(separator) method :- 
----------------------------
    The 'join()' method joins the array elements and convert it into a string. It behaves exactly like 'toString()' method but in addition, you can add your own character separator.
*/
  var arrayToString = ["Ashwin", "Kannan", "Amutha", true, false, 1, 2.36];
  var string = arrayToString.join(" * ");
  console.log(string);
  console.log(typeof string);

  /*
Pushing and Popping :- 
------------------------
    When you work with arrays, it is easy to remove elements and add new elements.
        Pushing - Pushing / Insert items into an array.
        Popping - Popping / Removing the items out of an array
push(value) method :- 
----------------------
    The 'push()' method adds a new element to an array (at the end). 
    It returns the new array length. 
    It is similar to 'append()' method in python.
*/
  console.log(car_brands.push("Rolls Royce"));
  console.log(car_brands);

  /*
pop() method :-
----------------
    The 'pop()' method removes the last element from the array. 
    It returns the array that was 'popped out'.
    It is similar to 'pop([index])' method in python.
*/
  console.log(numbers.pop());
  console.log(numbers);

  /*
Shifting Elements :- 
-----------------------
    Shifting is equivalent to popping, but working on the 1st element instead of the last element.

shift() method :- 
--------------------
    The 'shift()' method removes the 1st array element and shifts all other elements to a lower/previous index.
    It returns the value that was shifted out.
*/
  console.log(mixed_type_array.shift());
  console.log(mixed_type_array);

  /*
unshift(...array) method :- 
-----------------------------
    The 'unshft()' method adds a new element at the beginning of an array and unshifts the older elements to right  side of the array.
    It returns the new array length
*/
  console.log(mixed_type_array.unshift(true, false, BigInt(78945675896)));
  console.log(mixed_type_array);

  car_brands[0] = "Volks Wagen";
  console.log(`Car Brands : ${car_brands}`);

  /*
Length Property :- 
--------------------
    The 'length' property provides an easy way to append a new element at the end of the array.
*/
  car_brands[car_brands.length] = "Lambhorghini";
  console.log(`Car Brands : ${car_brands}`);

  /*
Delete Property :- 
--------------------
    Array elements can be deleted using JavaScript 'delete' operator.
    It returns the boolean value (true/false)
    It leaves the undefined holes in the array.
    It is better to use the 'pop()' (or) 'shift()' method instead.
*/
  console.log(
    `Is "${
      arrayToString[0]
    }" element deleted from the "${arrayToString}" array ? : ${delete arrayToString[0]}`
  ); // Output :- true
  console.log(`Array To String Elements :- ${arrayToString}`);
  arrayToString.length = 0; // It will be more like clearing an entire array. It is very similar to 'clear()' method in Python
  console.log(arrayToString);
  arrayToString = undefined; // It will be mre like deleting the entire array
  console.log(arrayToString);

  /*
Concatenating Arrays :- 
--------------------------
    There are 2 ways of concatenating / merging 2 (or) more arrays together. They are :-
    (i) using + operator
    (ii) using 'concat()' method.
*/
  var mergedArray = numbers + car_brands;
  console.log(mergedArray);
  /*
concat(...array) method :- 
----------------------------
    The 'concat()' method joins/concates/merges the 2 (or) more array into a single merged array.
    It returns the new array containing the merged array.
    It does not change the original array
*/
  var mergedArray = numbers.concat(car_brands);
  console.log(mergedArray);
  mergedArray = mergedArray.concat("Tata"); // It also concatenates the individual elements into the same array.
  console.log(mergedArray);

  /*
Flattening an array :- 
------------------------
    Flattening an array is the process of reducing the dimensionality of an array

flat([depth = 1]) method :-
------------------------------
    the 'flat()' method returns a new array with sub-array elements cobncatenated to a speciied depth.
*/
  var flateningArray = [
    1,
    5.0,
    2.3,
    [2, 6],
    [3, 8, 9, ["Ashwin", "Kannan", "Amutha"]],
  ];
  console.log(flateningArray.flat()); // This method doesn't modify the original array
  console.log(flateningArray.flat(2));

  var fruits_and_vegetables = ["Lemon", "Orange", "Pomogrenate"];
  /*
slice([startIndex, endIndex]) method :-
--------------------------------------------
    The 'slice()' method in array is exactly the same as the 'slice()' method in string.
    It returns the new array and doesn' modify the original array.
 */
  console.log(fruits_and_vegetables.slice(1, 2));
  /*
splice([start, deleteCount, ...array]) method :- 
--------------------------------------------------
    The 'splice()' method can be used to add, remove & insert items into an array.
    This method modifies the original array and also returns an array that contains the deleted elements of an original array.
*/
  console.log(fruits_and_vegetables.splice(1)); // This method modifies the original array and returns the selected element in the array
  console.log(fruits_and_vegetables);
  console.log(fruits_and_vegetables.splice(1, 0));
  console.log(fruits_and_vegetables);
  console.log(
    fruits_and_vegetables.splice(
      1,
      0,
      "Orange",
      "Pomogrenate",
      "Dragon Fruit",
      "Onion",
      "Tomato",
      "Red Chilli"
    )
  );
  console.log(fruits_and_vegetables);

  /*
sort() method :- 
------------------
    The 'sort()' method sorts the elements in the array alphabetically.
    It works exactly the same as the 'sort()' method in python

    Stable Array sort :- 
    ----------------------
        ES2019 revised the Array sort() method.
        Before 2019, the specification allowed unstable sorting algorithms such as QuickSort.
        After ES2019, browsers must use a stable sorting algorithm:
        When sorting elements on a value, the elements must keep their relative position to other elements with the same value.
*/
  console.log(`Sorted Strings :- ${fruits_and_vegetables.sort()}`);
  console.log(`Sorted Array in Ascending Order :- ${fruits_and_vegetables}`);
  numbers.sort();
  console.log(`Sorted Numbers in Acsending Order : ${numbers}`);
  mixed_type_array.sort();
  console.log(`Sort Mixed Value Array : ${mixed_type_array}`);

  /*
reverse() method :- 
---------------------
    The 'reverse()' method reverses the elements in the array.
    It works exactly the same as the 'reverse()' method in python.
*/
  console.log(`Reversing the Strings :- ${fruits_and_vegetables.reverse()}`);
  // console.log(`Sorted Array in Descending Order :- ${fruits_and_vegetables}`);
  numbers.reverse();
  console.log(`Reversing the Number : ${numbers}`);
  mixed_type_array.reverse();
  console.log(`Reversing the Mixed Value Array : ${mixed_type_array}`);

  /*
Finding the Minimum and Maximum element in the array :- 
---------------------------------------------------------
    The 'min()' method & 'max()' method from the 'Math' module is used to fins the minimum and maximum element in the array
*/
  console.log(`Min Value in an number array : ${Math.min(...numbers)}`);
  console.log(`Max Value in an number array : ${Math.max(...numbers)}`);
  //console.log(`Max Value in an string array :- ${Math.max.apply(null, fruits_and_vegetables)}`);

  /*
indexOf(searchElement, [fromIndex]) method :- 
------------------------------------------------
    The 'indexOf()' method searches the element in the array returns it's index value.
    If the item is present more than once, it returns the position of the 1st occurrence.
    It returns -1 if teh element was not found
    It is similar to 'index()' method in python
*/
  console.log(fruits_and_vegetables.indexOf("Orange"));
  console.log(fruits_and_vegetables.indexOf("Onion", 2));
  console.log(fruits_and_vegetables.indexOf("Ashwin")); // Returned -1 if the element was not found
  console.log(fruits_and_vegetables.indexOf("Tomato", 1)); // Returned -1 if the element was not found

  /*
lastIndexOf(searchElement, [fromIndex]) method :- 
---------------------------------------------------
    The 'lastIndexOf()' method is the same as the 'indexOf()' method but it returns the position of the last occurrence of the specified element.
    It returns -1 if the element was not found.
*/
  console.log(fruits_and_vegetables.lastIndexOf("Dragon Fruit"));
  console.log(fruits_and_vegetables.lastIndexOf("Tomato", -2));
  console.log(fruits_and_vegetables.lastIndexOf("Kannan"));
  console.log(fruits_and_vegetables.lastIndexOf("Lemon", -3));

  /*
  keys() method :- 
  ------------------
        The 'keys()' method returns the array iterator object with the keys of an array.
        It doesn't change the original array
        The 'key' determines the index of an array elements.
        The 'keys()' method in JavaScript is similar to the 'keys()' method in Python's dictionary object
  */
  let keys = fruits_and_vegetables.keys();
  for (var key of keys) {
    console.log(key);
  }

  /*
  values() method :- 
  --------------------
    The 'values()' method returns the array iterator objects with the values of array.
    It does not change the original array.
    The 'value' determines the elements/items of an array.
    The 'values()' method in JavaScipt is similar to the 'values()' method in Python's dictionary object
  */
  let values = fruits_and_vegetables.values();
  for (var value of values) {
    console.log(value);
  }

  /*
  entries() method :- 
  ----------------------
    The 'entries()' method returns the array iterator object with the ('key, value') pairs.
    It determines the indices and the value of the array elements.
    This method doesn't change the original array.
    The 'entries()' method in JavaScript is very similar to the 'items()' method in Python's dictionary object.
  */
  let entries_method = fruits_and_vegetables.entries();
  console.log(entries_method);
  for (var item of entries_method) {
    console.log(item);
  }

  /*
  includes(searchElement, [fromIndex]) method :-
  ------------------------------------------------
    The 'includes()' method returns 'true' if the element is present in the array (including 'NaN'), otherwise retruns 'false'.
  */
  console.log(fruits_and_vegetables.includes("Tomato"));
  console.log(fruits_and_vegetables.includes("Dragon Fruit"));
  console.log(fruits_and_vegetables.includes("AshwinKannan"));

  console.log(5 in fruits_and_vegetables); // 5 refers to the positive index
  console.log(-3 in fruits_and_vegetables); // -3 refers to the negative index

  /*
  Spread Operator :- 
  --------------------
    The Spread (...) operator expands an iterable (like an array) into more elements.
  */
  var mergedArray = [...numbers, ...car_brands, ...fruits_and_vegetables];
  console.log(mergedArray);

  /*
  forEach(callbackFunction(currentValue, [index], [array])) method :-
  ----------------------------------------------------------------------
    The "forEach()" method allows you to iterate over each element in an array and apply a provided function to each element.
    It makes changes in teh original array and doeesn't return a new array.
    It's mainly used to perform side effects like "updating elements", "logging values" (or) "making UI changes".
    This method doesn't have a way to break out of the loop (or) return a value from the loop.

    SYNTAX :-
    -----------
     --------------------------------------------------------------------
     | array.forEach(callbackFunction(currentValue, [index], [array])); |
     --------------------------------------------------------------------

     Explanation :- 
     ---------------
        (i) array: The array you want to iterate over.
        (ii) callbackFunction: A function that will be called for each element in the array. It can take three arguments:
          (a) currentValue: The current element being processed in the array.
          (b) index (optional): The index of the current element being processed.
          (c) array (optional): The array on which forEach() was called.

      The forEach() method performs the following steps:
      -----------------------------------------------------
        step - 1 :It iterates through each element of the array.
        step - 2 : For each element, it calls the callbackFunction with the current currentValue, index, and array as arguments.
        step - 3 : The callbackFunction performs an action on the current element, such as logging its value or modifying it.
        step - 4 : After the callbackFunction is executed for each element, the forEach() method completes its execution.
   */
  console.log("Doubling the array elements...");
  numbers.forEach((element, index, array) => {
    element *= 2; // I prefer this approach
    // array[index] = element * 2; // Both the method does the same thing
    console.log(`Index ${index} : ${element}`);
  });
  console.log(numbers);

  console.log("Converting the names to uppercase using forEach() method ");
  var names = ["ashwin", "kannan", "amutha"];
  names.forEach((element, index, array) => {
    array[index] = element.toUpperCase();
    console.log(`Index : ${index} : ${array[index]}`);
  });
  console.log(names);

  console.log("Converting the names to lowercase using forEach() method ");
  names.forEach(lowerCaseMethod); // lowercaseMethod - callbackFunction
  function lowerCaseMethod(element, index, array)
  {
    array[index] = element.toLowerCase();
    console.log(`Index : ${index} : ${array[index]}`);
  }
  console.log(names);

  console.log(Array.from(numbers));

  /*
  map(callbackFunction(currentValue, [index], [array])) method :- 
  --------------------------------------------------------------------
    The "map()" function allows you to  transform each element of an array and create a new array containing the results of applying a provided function to each element of the original array. 
    The original array remains unchanged.

    Syntax :- 
    ----------
      let newArray = originalArray.map(callbackFunction(currentValue, [index], [array]));

  */
  var mapMethod = numbers.map(function (element) {
    return element ** 2;
  });
  console.log(mapMethod);
  var mapMethod = numbers.map((element) => element ** 2);
  console.log(mapMethod);

  /*
  faltMap(callbackFunction(currentValue, [index], [array])) method :- 
  ----------------------------------------------------------------------
    The "flatMap()" method is a combination of both "flat()" method and "map()" method.
    It's used to both transform elements in an array and flatten the resulting array of arrays into a single-level array. 
    The primary use case for flatMap() is when you have an array of values, and after applying a function to each value, you end up with nested arrays, but you want a flat result.
    It retuns a new array and the original array remains unchanged.

    SYNTAX :- 
    ----------
      let newArray = originalArray.flatMap(callbackFunction(currentValue, index, array));

  */
  console.log("Flat Map Method")
  var list = [1, 2, 6.6, 45, 12, [56, 23], [78, 42]];
  var flatMapMethod = list.flatMap((element) => {
    if (typeof element === 'number')
    {
      return (element ** 2).toString().split(",");
    }
    else if (Array.isArray(element))
    {
      return element.map(subElement => (subElement ** 2).toString().split(","));
    }
  }
    
);
  console.log(list);
  console.log(flatMapMethod);

  /*
  filter(callbackFunction(element, [index], [array])) method :-
  ---------------------------------------------------------------
    The "filter()" method allows you to create a new array containing elements from the original array that satisfy a given condition.
    It iterates through the elements of an array and applies a provided function to each element, determining whether the element should be included in the new array based on the condition. 
    It returns a new array and the original array remains unchanged.

    SYNTAX :-
    ----------
      let newArray = originalArray.filter(callbackFunction(element, index, array));

    The filter() method performs the following steps:
    --------------------------------------------------
      Step - 1 : It iterates through each element of the originalArray.
      Step - 2 : For each element, it calls the callbackFunction with the current element, index, and array as arguments.
      Step - 3 : The callbackFunction returns a boolean value (true or false) indicating whether the current element should be included in the new array.
      Step - 4 : If the returned value is true, the element is included in the new array. If the returned value is false, the element is excluded.
      Step - 5 : The filter() method creates and returns a new array containing the elements that satisfy the condition.
  */
  var filterMethod = numbers.filter((element) => element % 2 === 0);
  console.log(filterMethod);

  /*
  reduce(callbackFunction(accumulator, currentValue, [index], [array]), [initialValue])) method :- 
  --------------------------------------------------------------------------------------------------
    The "reduce()" method allows you to iterate through an array and accumulate a single value by applying a provided function to each element. 
    It's often used for calculations that require combining elements in an array into a single value. 
    The result of each iteration is carried forward to the next iteration, ultimately resulting in a single accumulated value.

    SYNTAX :-
    ----------
      let result = array.reduce(callbackFunction(accumulator, currentValue, [index], [array]), [initialValue]);

    Explanation :- 
    ---------------
        array: The array you want to iterate over.
    callbackFunction: A function that will be called for each element in the array. It can take four arguments:
        accumulator: The accumulated value from previous iterations.
        currentValue: The current element being processed in the array.
        index (optional): The index of the current element being processed.
        array (optional): The array on which reduce() was called.
    initialValue (optional): The initial value of the accumulator. If not provided, the first element of the array will be used as the initial accumulator value.

  */
  var reduceMethod = numbers.reduce((acc, value) => acc + value, 0);
  console.log(reduceMethod);
  console.log(typeof reduceMethod);

  /*
  reduceRight(callbackFunction(accumulator, currentValue, [index], [array]), [initialValue]) method :- 
  -----------------------------------------------------------------------------------------------------
    The "reduceRight()" method works exactly like the "reduce()" method but it itreates from "right-to-left" instead of "left-to-right"
  */
  var reduceRightMethod = numbers.reduceRight(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log(reduceRightMethod);
  console.log(typeof reduceRightMethod);

  /*
  every(callbackFunction(element, [index], [array])) method :- 
  ----------------------------------------------------------------
    The "every()" method checks each element against a provided "callbackFuntion" and returns "true" if the condition is satisfies on every element in the array.
    If any element fails the condition, it returns "false".
    The "every()" method stops as soon as it finds the non-matching element.

    SYNTAX :- 
    ----------
      let allElementsPass = array.every(callbackFunction(element, index, array));
  */
  var names = ["Alice", "Bob", "Ashwin"];
  var everyMethod = names.every((element) =>
    element.toLowerCase().includes("a")
  );
  console.log(everyMethod);

  /*
  some(callbackFunction(element, [index], [array])) method :- 
  ----------------------------------------------------------------
    The "some()" method checks each element against a provided "callbackFuntion" and returns "true" if the condition is satisfies on any element in the array.
    If all element fails the condition, it returns "false".

    SYNTAX :- 
    ----------
      let anyElementsPass = array.every(callbackFunction(element, index, array));
  */
  var someMethod = names.some((element) => element.toLowerCase().includes("b"));
  console.log(someMethod);

  /*
  find(callbackFunction(element, [index], [array])) method :- 
  --------------------------------------------------------------
    The "find()"" method in JavaScript is a built-in array method that searches through an array and returns the first element that satisfies a given condition. 
    It checks each element against a provided function and stops as soon as it finds an element that matches the condition. 
    If no matching element is found, it returns "undefined".

    SYNTAX :- 
    ----------
    let foundElement = array.find(callbackFunction(element, [index], [array]));
  */
  var people = [
    { name: "Ashwin", age: 22 },
    { name: "Kannan", age: 45 },
    { name: "Amutha", age: 52 },
  ];
  var findMethod = people.find((element) => element.name === "Ashwin");
  console.log(findMethod);
  var findMethod = people.find((element) => element.name === "lakshmi");
  console.log(findMethod);

  /*
  findIndex(callbackFuntion(element, [index], [array])) method :-
  ----------------------------------------------------------------
    The "findIndex()" method is exactly the same as the "find()" method but it finds the index of the 1t found element.
    If no matching was found, it returns "-1"
  */
  var findIndex = people.findIndex((element) => element.name === "Amutha");
  console.log(findIndex);
  var findIndex = people.findIndex((element) => element.name === "lakshmi");
  console.log(findIndex);

  /*
  fill(value, [start:0], [end:array.length]) method :-
  -----------------------------------------------------
    The "fill()" method allows you to modify the elements within the arrayby filling the specified range with a given value.
    It is similar to the "copyWithin()" method.
    It modifies the original array and doesn't return the new array.
    It's a way to perfor bulk updates on array elements
  */
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.fill("Kiwi", 2, 3);
  console.log(fruits);

  /*
  copyWithin([target], [start], [end]) method :- 
  ------------------------------------------------
    The "copyWithin()" method allows you to copy a portion of an array and paste it within the same array, overwriting existing elements. 
    It modifies the original array and doesn't return the new array
    It provides a way to perform in-place modification of an array's elements.

    SYNTAX :-
    -----------
      array.copyWithin([target:0], [start:0], [end"array.length]);

    EXPLANATION :-
    ---------------
      (i) array: The array you want to modify.
      (ii) target: The index at which the copied elements will be pasted. It can be negative, indicating an index from the end of the array. If omitted, the default value is 0.
      (iii) start (optional): The index from which to start copying elements. If omitted, the default value is 0.
      (iv) end (optional): The index up to which elements will be copied. The element at this index is not included. If omitted, the default value is the length of the array.

      Note :- The "target", "start" and "end" parameters are the "index" values
  */
  var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Pineapple"];
  fruits.copyWithin(2, 0, 3);
  console.log(fruits);

  //   var alphabets = [
  //     ['a', 'b', 'c'],
  //     ['b', 'c', 'd'],
  //     ['c', 'd', 'e']
  //   ]

  //   var flatteningAlpabets = alphabets.flat();
  //   var reduceMethod = flatteningAlpabets.reduce((acc, value) => {
  //     if (acc[value])
  //     {
  //         acc[value] += 1;
  //     }
  //     else
  //     {
  //         acc[value] = 1;
  //     }
  //   },
  //   {} // Initially creating the empty object
  //   )
  //   console.log(reduceMethod);
}

if (require.main === module) {
  arrayMethods();
}
