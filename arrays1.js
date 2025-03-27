// Array

const myArr = [0, 1, 2, 3, 4, 5];
const Heroes = ["Hanuman", "Krishna", "Shivaji Maharaj"]

const myArray = new Array(1,2,3,4)
// console.log(Heroes[0])

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(10))
// console.log(myArr.indexOf(10))

// const newarr = myArr.join()

// console.log(myArr);
// console.log(typeof newarr);


// slice, splice

console.log("A ", myArr);

const MyN1 = myArr.slice(1,3)

console.log(MyN1)
console.log("B ", myArr);

const MyN2 = myArr.splice(1,3)
console.log("C ", myArr);

console.log(MyN2)

