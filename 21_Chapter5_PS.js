// Chapter 5 Practice Set
// Practice problem 1
// let arr = [1, 2, 3, 4, 5, 6, 7, 83]
// let a = prompt("Enter a number")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)

// Practice problem 2   
// let arr = [1, 2, 3, 4, 5, 6, 7, 83]
// do {
//     let a = prompt("Enter a number")
//     a = Number.parseInt(a)
//     arr.push(a)
//     console.log(arr)
// } while (a != 0);


// Practice problem 3
// let arr = [1, 2, 3, 48, 5, 60, 7, 83]
// let n = arr.filter((x) => {
//     return x % 10 == 0
// })
// console.log(n)


// Practice problem 4
// let arr = [1, 2, 3, 48, 5, 60, 7, 83]
// let n = arr.map((x) => {
//     return x * x
// })
// console.log(n)

// Practice problem 5
let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let n = arr.reduce((x1, x2) => {
    return x1 * x2
})
console.log(n)