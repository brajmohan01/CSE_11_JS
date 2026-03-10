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

var count2 = 0;
document.write("Starting While Loop <br>");
while(count2 < 10){
    document.write("Count: " + count2 + "<br>");
    count2++;
}
document.write("While Loop Stopped! <br>");

//conditional statements
let age = 20;
if(age>=18){
    console.log('You are an adult');
}
else{
    console.log('You are a minor');
}

//switch case
var grade = 'D';
document.write("Entering Switch Case <br>");
switch(grade){
    case 'A':document.write("Excellent! <br>");
    break;
    case 'B':document.write("Good! <br>");
    break;
    case 'C':document.write("Average! <br>");
    break;
    case 'D':document.write("Passed <br>");
    break;
    case 'E':document.write("Failed <br>");
    break;
    default:document.write("Invalid Grade! <br>");
}

document.write("Exiting switch case")

// functions
function myFunction() {
    alert("Hello World!")
}
function sayHello(name , age) {
    document.write(name + " is "+ age + " years old")
}

//normal function
function add(a, b) {
    return a + b;
}
//arrow function
var add2 = (a, b)=>{
    return a + b;
}

// Array - it is an ordered collection of data. Array is a special kind of object, declared with square brackets 
const myInformation = [];
var myinfo = new Array();
var myinfo1 = Array;
console.log(myinfo , myinfo1);

let collection = [
    {},
    [],
    true,
    "John",
    function(){},
    908009808,
    undefined,
    null,
    new String("abc"), 
    new Date(),
]

console.log(collection);
collection.teacherName = "John Mack";
collection.phoneNo = 456666;
console.log(collection);

var trainerinfo = ["Jitendra", 29 , "Ghaziabad" , {isMarried: false}];
console.log(trainerinfo.length);

trainerinfo.contactNo = 9876543210;
console.log(trainerinfo);
console.log(trainerinfo.length);

trainerinfo[0] = "Jitendra Kumar";
console.log(trainerinfo);
console.log(trainerinfo.length);

