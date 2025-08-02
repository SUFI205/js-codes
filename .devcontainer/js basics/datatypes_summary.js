//primitive dattypes


//7 types
/* 1) strings
   2) numbers
   3) booleans
   4) null
   5) undefined
   6) symbols
   7) bigints
*/

///refrence datatypes(non-primitive datatypes)
/* 1) objects
   2) arrays
   3) functions
   4) dates
   5) regexes
*/

const id=Symbol("123");
const anotherid=Symbol("123");
console.log(id === anotherid); // false, symbols are unique

const heros=["Thor", "Ironman", "Hulk"];
let myobj={
    name: "Thor",
    age: 1500,
    isAvenger: true,
}

const myfunction= function()
{
    console.log("Hello, World!");
}

console.log(typeof myfunction);
