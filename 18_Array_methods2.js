// let num = [1, 2, 3, 5, 4, 6, 7, 8, 9]
// let num_more = [11, 12, 13, 15, 14, 16, 17, 18, 19]
// let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]
// console.log(num.length)
// delete num[0]
// console.log(num.length)

// let newArray = num.concat(num_more, num_even_more)
// console.log(newArray)
// console.log(new, num_more)

//sort method
// let compare = (a, b) => {
//     return b - a
// }
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// num.sort(compare)
// num.reverse()
// console.log(num)

// splice and slice
let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
    // num.splice(2, 3, 1021, 1033, 1043)
    // console.log(num)

// let deletedValues = num.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
// console.log(deletedValues)


// let newNum = num.slice(3)
let newNum = num.slice(3, 5)
console.log(newNum)