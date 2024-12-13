const name = "aditya"
const repoCount = 50 

//console.log(name + repoCount + " Value");

// for Investigation == node basics_01/05_strings.js

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String("adi-tya-ac")

//console.log(gameName[0]);
//console.log(gameName.__proto__);


//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString );

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    aditya   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://aditya.com/aditya%20choudhary"

console.log(url.replace('%20', '-'));
 
console.log(url.includes('sundar'));

console.log(gameName.split('-'));

 