const name = 'Prajwal ';
const repocount = 4

// console.log(name + repocount + " Value");
// Dont use this syntax as it is outdaated and not used much instead use the one below
// console.log(`Hello my name is ${name} and my repo is ${repocount}`);

//  Another way to declare string
const gamename = new String('Sekiro-Shadow-Die-Twice');
// console.log(gamename[0]);
// console.log(gamename.__proto__);
// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(4));
// console.log(gamename.indexOf('i'));

const newString = gamename.substring(0, 4);
console.log(newString);

const anotherString = gamename.slice(0, 5);
console.log(anotherString);

const newstring = "   Sekiro    "
console.log(newstring);
console.log(newstring.trim());

const url = "https://www.google/Prajwal%20Tupe.com"
console.log(url.replace('%20','-'));

console.log(url.includes('Prajwal'))

console.log(gamename.split('-'));