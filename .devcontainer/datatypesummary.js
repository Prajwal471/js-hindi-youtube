//   Primitive

//  7 types  : String, Number, Boolean, Null, Undefined, Symbol, BigInt.

const score = 100
const scorevalue = 100.03

const LoggedIn = false 
const outsidetemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)
 
// const bigNumber = 23868734987547248739595n


//  Reference 
// Array, Objects, Functions

const heros = ["Superman","Ironman","Spiderman"];
let myObject = {
    name:"Prajwal",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world!");
    
}

// console.log(typeof outsidetemp)
// console.log(typeof myFunction)
// console.log(typeof heros)
// console.log(typeof myObject)
// console.log(typeof id)



// *********************************************************************


//  Memory

//  Type of meomory: Stack (Primitive) and Heap(Non-Primitive)

let myYoutubename = "Smartguy"

let anothername = myYoutubename
anothername = "Codepecharcha"

console.log(anothername);
console.log(myYoutubename);


let userOne = {
    email: "user123@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "prajwal@google.com"
console.log(userOne.email);
console.log(userTwo.email);