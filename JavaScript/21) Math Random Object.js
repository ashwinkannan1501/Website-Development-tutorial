/*
Math.random() method :- 
-------------------------
    The "random()" method of the "Math" object returns a pseudo random number between 0 (inclusive) and 1 (exclusive).
    It always returns a pseudo-random number lower than 1.
*/

function randomObject()
{
    let randomNumber = Math.random();
    console.log(`The Random Number is : ${randomNumber}`);

    let diceRoll = Math.ceil(Math.random() * 6);
    console.log(`The outcome of the roll of a dice is : ${diceRoll}`);

    
}

if (require.main === module)
{
    randomObject();
}