// Change the card title to red
let ctitle = document.getElementById("firstcardtitle")
ctitle.style.color = "blue"

let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color = "blue"
ctitles[1].style.color = "Red"
ctitles[2].style.color = "Orange"
console.log(ctitles)

document.querySelector(".this").style.color = "black"
document.querySelector(".this").style.background = "red"

console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))
console.log(document.getElementsByName("search"))