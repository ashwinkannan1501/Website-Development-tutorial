"use-strict";
const prompt = require("prompt-sync")();

/*
JavaScript Set Object :- 
--------------------------
    A JavaScript set is a collection of unique values.
    Each value can occur only once in a set (i.e) The set object cannot contain the duplicate values
    The JavaScript Set objecṭ is similar to the "set" datatype in python.
    The Set Object in JavaScript has no ndex value (i.e) basically we can't access the set object values using indexing.
    The Sets are not in order because it cannot be stored/accessed using indexing.

Creating a Set :-
-------------------
    The set can be create in either iof the following 2 ways :- 
    (i) Passing an value/array to the "new Set()" constructor.
    (ii) Create a new set and use the "add()" method to add the values
*/

function sets()
{
    /*
    (i) Passing an value/array to the "new Set()" constructor :- 
    ---------------------------------------------------------
        You can pass a value/variable to the "new Set()" constructor.
    */
    let set1 = new Set("Ashwin");
    console.log(`Set 1 :- ${set1}`);

    set1.forEach((element) => {
        console.log(`${element}`);
    });

    console.log("----------------------------")

    // You can pass an array to the "new Set()" constructor.
    let set2 = new Set(["Ashwin", "Kannan", "Amutha", "Ashwin",]);
    set2.forEach((element, _, array) => {
        console.log(`${element}`);
        // console.log(array);
    });

    /*
    (ii) Create a new set object and use the "add()" method to add the values :-
    ------------------------------------------------------------------------------
        You can create a set object and add the values later using the "add()" method.
    */
    let set3 = new Set();
    let numberOfProgrammingLanguages = Number(prompt("Enter a number of programming languafges that you want to include : "));
    for (var index = 0; index < numberOfProgrammingLanguages; index += 1)
    {
        let programmingLanguage = prompt(`Enter a Programming language (No ${index + 1}): `);
        set3.add(programmingLanguage);
    }

    console.log("The Programming Languages are :- ");
    set3.forEach((element) => console.log(`${element}`));

    /*
    Methods :- 
    -------------
    (i) values() method :- returns a iterator with all the values in the set.
        Returns :- Iterable Iterator <string>.
    */
    console.log(`Values() method : ${set3.values()}`);
    let values = set3.values();
    for (var value of values)
    {
        console.log(`${value}`);
    }

    /*
    (ii) keys() method :- Returns a iteratorwith all the keys (i.e, values) in the set. 
            Returns :- Iterable Iterator <string>.
            NOTE :- In this "keys()" method in Set object, there is no 'key' like in the Object datatype, so it      returns the values as the key.
    */
    let keys = set2.keys();
    for(var key of keys)
    {
        console.log(`${key}`);
    }

    /*
    (iii) entries() method :- returns an iterator of [value, value] pairs of every 'value' in the set.
            Returns :- Iterable Iterator <[any, any]>.
    */
    let entries = set3.entries();
    for (var entry of entries)
    {
        console.log(`${entry}`);
    }

    /*
    (iv) has() method :- Returns "true" if a value exists in a set, otherwise returns "false"
            Parameter :- any value
            Return :- Boolean value.
    */
    console.log(`has() method : ${set3.has("python")}`);
    
    /*
    (v) clear() method :- It deletes all the value in a set object. It empties the set.
    */
    set1.clear();
    console.log(set1);
    console.log(`set1 size : ${set1.size}`)

    /*
    (vi) delete() method :- Removes a specified value from the set.
            Parameter : any value
            Returns :- Boolean value based on whether the element is present (or) not in the set before deleted.
    */
    console.log(set2.delete("Amutha"));
    console.log(set2);

    /*
    (vii) add() method :- Adds an new element to the set.
            Parameter :- any value but only one value.

    (viii) forEach() method :- Invokes a callback for each element in the set.
            Note :- In generl, the "forEach()" method has 3 arguments : element, index, array.
                But in set object, there is no indexing. So we can't use the 'index' argument in the "forEach()" method inside the set object.
    */

    /*
    Properties :- 
    ---------------
    (i) size :- Returns a number of element in a set.
    */
    console.log(`'size' property : ${set3.size}`);
    
}

if (require.main === module)
{
    sets();
}