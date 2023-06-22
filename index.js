//1.  Ways to print in JavaScript
//console.log("Hwlloe World");
//alert("me");
//document.write("This is document write")


//2.  Javascript console API
console.log("Hwllo World", 4 + 6, "another jadu");
console.warn("This is warning")
console.error("This is an error")

//3. JavaScript Variables
// what are Variables ? : Containers to store data values

var number1 = 35;
var number2 = 35;
console.log("Addition is", number1 + number2);

// 4.Data types in JavaScript

//String
var str1 = "This is a String";
var str2 = "This is also a string";

//numbers
var num1 = 2444;
var num2 = 22.32;

//objects
var marks = {
    yash: 99,
    Shashwat: 0.8,
    khizar: 100000.0
}
console.log(marks)

// Booleans
var a = true;
var b = false;
console.log(a, b);

// var und;
var und = undefined;
console.log(und);

var n = null;
console.log(n);



// At a very high level, there are two types of data types in javascript
// 1. Primitive data types : undefined, null, number, string, boolean, symbol
// 2/ Reference data types : Arrays and objects

var arr = [1, 2, 3, "Yash", 4, 5];
console.log(arr)


//Operators in JavaScript
// 1.Arithmetic Operators
// var c = 34;
// var d = 34;
// console.log("The value of a + b is", c + d);
// console.log("The value of a - b is", c - d);
// console.log("The value of a * b is", c * d);
// console.log("The value of a / b is", c / d);

// 2.Assignment Operators
// var h = b;
// h += 2;
// h -= 2; // h = h-2;
// h *= 2;
// h /= 2;
// console.log(h);

// 3.Comparison operator
var x = 20;
var y = 30;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x < y);
// console.log(x > y);

// 4. logical Opeartors
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);
// console.log(!false);
// console.log(!true);


function avg(a, b) {
    return (a + b) / 2;
}
c1 = avg(4, 6);
c2 = avg(14, 16);
console.log(c1, c2);