// 1Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt.

// for investigation ==  node basics_01/datatypes-summary.js

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let uderEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 345677834476758575n



// 2Reference ( Non Primitive)

// Array, Objects, Functions.


const heros = ["shaktiman", "Ironman", "Thor"]
{
    name: "Aditya"
    age: "20"
}

const myFunction = function(){
console.log("Hello world!");
}

console.log(typeof anotherId);




// Stack (Primitive), Heap (Non- Primitive)

let myYoutubename = "adityachoudharydotcom"

let anothername = "trickyaditya"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "aditya@google.com"

console.log(userOne.email);
console.log(userTwo.email);
