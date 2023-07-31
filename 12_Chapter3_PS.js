let marks = {
    yash: 100,
    shubham: 8,
    omu: 9,
    jadu: 99
}

// Problem No 1
for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("The marks of " + Object.keys(marks)[i] + "are" + marks[Object.keys(marks)[i]])
}

//Problem No 2
for (let key in marks) {
    console.log("The Keys of " + key + "are " + marks[key])

    // console.log("The marks of " + Object.keys(marks)[i] + "are" + marks[Object.keys(marks)[i]])
}

//problem 3
let cn = 4
let i
while (i != cn) {
    i = prompt("Enter a number")
    console.log("Try Again")
}
console.log("you have enter a correct number")

//problem 4
const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4
}
console.log(mean(4, 5, 3, 6))