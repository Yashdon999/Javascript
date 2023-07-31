let namee = "Yash"
console.log(namee.length)

console.log(namee.toUpperCase())
console.log(namee.toLowerCase())
console.log(namee.slice(1, 3))
console.log(namee.slice(1))
console.log(namee.replace("Yas", "jam"))

let friend = "Jadu"
console.log(namee.concat("Is a friend of ", friend))

let friend2 = "      San???        "
console.log(friend2)
console.log(friend2.trim())

let fr = "Mustang" + "Supra" + "Yash"
console.log(fr[0])
console.log(fr[1])
console.log(fr[2])
console.log(fr[3])
console.log(fr[4])
console.log(fr[5])
console.log(fr[6])
    // fr[4]= "o" // This is not possible 
console.log(fr)


// Q : Use a for loop to print a String
let nameee = "Jane meri jane man bachpan ka payar";
for (let i = 0; i < nameee.length; i++) {
    console.log(nameee[i]);
}