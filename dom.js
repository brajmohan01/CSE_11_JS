// DOM manupulation in JS
// selecting with id
var result = document.getElementById("para"); // returns first element with the id
result.innerHTML = "This is a paragraph";
result.title = "myname";
console.log(result);
// document.write(result)

// selecting with class
const elements = document.getElementsByClassName("myclass"); // returns an array
console.log(elements);
elements[0].innerHTML = "Jitendra";
elements[1].innerHTML = "Kumar";
elements[2].innerHTML = "Sir";

// selecting with tag name
const results3 = document.getElementsByTagName("p");// returns an array
results3[0].innerHTML = "This is a paragraph 1";
results3[0].style.color = "blue";
results3[2].innerText = "This is a paragraph 3";
results3[3].innerHTML = "This is a paragraph 4";

//selecting with query selector
const test = document.querySelector("ul li:nth-child(2)");// can give id , class , tag to select it 
test.style.backgroundColor = "yellow";

const test2 = document.querySelectorAll("ul li"); // returns a NodeList
for(x in test2){
    test2[x].style.backgroundColor = "yellow";
    test2[x].style.margin = "10px";
}
// getAttribute
const element = document.getElementById("myH1");
let text = element.getAttribute("class");
document.getElementById("demo").innerHTML= text;

// setAttribute
function myFunction(){
    document.getElementById("myH1").setAttribute("class", "democlass");
    alert("Attribute added")
}

//create an element
const heading = document.createElement("h2");
//get the parernt
const bodyTag = document.getElementsByTagName("body");
// before - preappend - append - after
bodyTag[0].append(heading);

heading.innerHTML = "hello" ;

