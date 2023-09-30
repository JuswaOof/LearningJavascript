// variable = container for storing data

let firstname = 'Josh' //string
let age = 25 //number or int
let student = false //boolean

console.log(firstname)
console.log(age)
console.log(student)

document.getElementById('p1').innerHTML = 'Hello ' + firstname
document.getElementById('p2').innerHTML = 'You are ' + age + ' years old'
document.getElementById('p3').innerHTML = 'Enrolled: ' + student
