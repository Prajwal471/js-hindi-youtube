//  Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let mycreatedDate = new Date(2023, 0, 23)
// let mycreatedDate = new Date(2023, 0, 23,5,3)
// let mycreatedDate = new Date("2025-03-11")
let mycreatedDate = new Date("03-11-2025")
// console.log(mycreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(mycreatedDate.getTime())
// console.log(Math.floor+(Date.now()/1000))

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth()+1)
// console.log(newDate.getDate())
// console.log(newDate.getDay())
// console.log(newDate.getFullYear())

// `${newDate.getDay()} and the date is`
newDate.toLocaleString('Default',{
    weekday: "long",
    month: "narrow"
})

console.log(newDate)