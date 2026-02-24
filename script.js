console.log("Hello World!");
document.write("Hello World! <br>");

var num;
console.log(num);
console.log(typeof(num));
num = 10;
console.log(num);
console.log(typeof(num));
num = false;
console.log(num);
console.log(typeof(num));
num = "shiva";
console.log(num);
console.log(typeof(num));
num = null;
console.log(num);
console.log(typeof(num));

//function
var sayHello = function() {
    alert("Hello World!");
}
sayHello();
//array
var numberArray = [1,2,3,4,5];
var animals = new Array("dog", "cat", "mouse");
//object - key value pair
var person = {
    name: "Shiva",
    age: 30,
    title: "Software Engineer"
}

//Symbol Type
const sym1 = Symbol(4);
console.log(sym1);
const sym2 = Symbol(4);
console.log(sym2);
console.log(sym1 === sym2); // false, each symbol is unique

//JS Operators
// create a another js file to show all operators use case as in pdf and link that file in html and show the output in console.
// = -> assignment operator
// == -> comparison operator
// === -> strict equality operator, compares both value and type

// arithmetic operators -> +, -, *, /, %
// comparison operators -> >, <, >=, <=
// assignment operators -> +=, -=, *=, /=
// logical operators -> &&, ||, !
// ternary operator -> condition ? expression1 : expression2
// ques: find put max out of 3 numbers using ternary operator.

//loops --> control flow statements that allow us to execute a block of code repeatedly as long as a specified condition is true.
// for loop -> used when the number of iterations is known
// while loop -> used when the number of iterations is not known

var count;
document.write("Starting Loops <br>");
for(count = 0; count < 10; count++) {
    document.write("Count: " + count + "<br>");
}
document.write("Loop Stopped! <br>");