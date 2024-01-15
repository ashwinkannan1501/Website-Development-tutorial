/*
JavaScript Map Object :- 
--------------------------
    A Map object is similar to the "object" datatype in JavaScript.
    A Map object holds the "key:value" pair where the "key" can be of any datatype.
    A Map object remembers the oriinal insertion order of the keys.
    Like Set object, the Map object doesn't allow the duplicate values.
    It will update te latest values 'v' if teh key 'k' is already exists.

Creating a Map object :- 
-----------------------------
    There are 2 ways to create a Map object. They are :- 
        (i) Passing an array to the "new Map()" constructor.
        (ii) Create a Map and use the "Map.set()" method.
*/

function mapObject()
{
    /*
    (i) Passing an arrray to the "new Map()" constructor :-
    */
    let jobRole = new Map([
        ["K. Ashwin", "Software Developer"],
        ["D. Unmesh", "Photoshop Designer"],
        ["S. Kowshik", "Photographer"],
        ["S. Reshma", "HR Manager"],
        ["D. Unmesh", "UI/UX Designer"] // Map object update it's 'value' if 'key' is already exists in the map object.
    ]);

    jobRole.forEach((value, key) =>{
        console.log(`${key} : ${value}`);
    })
    console.log("\n")

    /*
    (ii) Creating a Map object and use the "Map.set()" method :- 
    --------------------------------------------------------------
        You can add elements to a Map object with the "set()" method.
    */
    let phoneBook = new Map();
    phoneBook.set('K. Ashwin', 7401421277);
    phoneBook.set('A. Kannan', 9444110383);
    phoneBook.set('K. Amutha', 8428110383);
    phoneBook.set('K. Ashwin', 9444581958); // K. Ashwin Changes his phone number, so the map object updates it's 'value' if 'key' exists already

    console.log(`${phoneBook}`);
    for (var [key, value] of phoneBook)
    {
        console.log(`${key} : ${value}`);
    }

    console.log("---------------------------------");

    phoneBook.forEach((value, key, item) => {
        console.log(`${key} : ${value}`);
        // console.log(`${item}`);
    });

    console.log(`'size' property : ${phoneBook.size}`); // Returns the number of elements in the map object
    console.log(`'has()' method : ${phoneBook.has('K. Ashwin')}`); // Returns true if the key exists, otherwise returns false.
    console.log(`'get()' method : ${phoneBook.get("K. Amutha")} \n`); // Returns the "value" of the key in the map object if the key is already exists. If key doesn't exists, it returns "undefined"

    console.log("The 'keys' of the phoneBook are :- ")
    let keys = phoneBook.keys(); // returns a iterator object. We want to loop through the iterator object to extract the 'values' out of it. 
    for (var key of keys)
    {
        console.log(`${key}`);
    }

    console.log("\nThe 'values' of the phoneBook are :- "); 
    let values = phoneBook.values(); // returns a iterator object. We want to loop through the iterator object to extract the 'values' out of it. 
    for (var value of values)
    {
        console.log(`${value}`);
    }

    console.log("\nThe 'entries' of the phoneBook are :- ");
    let entries = phoneBook.entries(); // returns a iterator object. We want to loop through the iterator object to extract the 'values' out of it. 
    for (var entry of entries)
    {
        console.log(`${entry}`);
    }

    phoneBook.clear(); // It clears / removes all the items in the map object
    console.log(`\nSize of phoneBook : ${phoneBook.size}`);

    console.log(`delete() method : ${jobRole.delete('D. Unmesh')}`); // It deletes the item if the key is already exists and returns true, otherwise returns false
    jobRole.forEach((value, key) => {
        console.log(`${key} : ${value}`);
    });
}

if (require.main === module)
{
    mapObject()
}