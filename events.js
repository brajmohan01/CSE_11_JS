
// events in JS
// mouse events - onclick , onmouseover , onmouseout, onmousedown, onmouseup, onmousemove, ondoubleclick

function onClick(){
    console.log("you have clicked the button");
}
function onMouseOver(){
    console.log("you have hovered the mouse over the button");
}
function onMouseOut(){
    console.log("you have moved the mouse out of the button");
}
function onMouseDown(){
    console.log("you have pressed the mouse button down");
}
function onMouseUp(){
    console.log("you have released the mouse button");
}
function onMouseMove(){
    console.log("you are moving the mouse over the button");
}

// keyboard events - onkeydown, onkeyup, onkeypress

//form events - onfocus, onblur, onchange, onsubmit, onreset

const x = document.getElementById("myInput");
x.addEventListener("focus", onFocus);
x.addEventListener("blur", onBlur);
function onFocus(){
    x.style.backgroundColor = "yellow";
    console.log("input field is focused");
}
function onBlur(){
    x.style.backgroundColor = "red";
    x.style.borderColor = "blue";
    console.log("input field is blurred");
}

// window events - onload, onunload, onresize, onscroll
window.addEventListener("load", onLoad);
function onLoad(){
    alert("page is loaded");
}