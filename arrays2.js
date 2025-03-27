const marvel_heroes = ["Thor", "Ironman", "Spiderman"]
const Dc_Heroes = ["Batman", "Superman", "Flash"]

// marvel_heroes.push(Dc_Heroes)

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

// const allHeroes = marvel_heroes.concat(Dc_Heroes)
// console.log(allHeroes)

const all_new_heroes = [...marvel_heroes, ...Dc_Heroes]// This method is more preferable.
// console.log(all_new_heroes)

const new_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]]]
const real_Array = new_Array.flat(Infinity)

// console.log(real_Array)



console.log(Array.isArray("Prajwal"))
console.log(Array.from("Prajwal"))
console.log(Array.from({name: "Prajwal"}))// Intresting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

