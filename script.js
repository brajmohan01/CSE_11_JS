console.log("Hello World!");
// document.write("Hello World!");

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
