let y = "leyamyam";
let x = 23;
let z = "this is my first js code";

console.log(y);
console.log(x);
console.log(z);
// Start new code below
let button = document.getElementById("myButton");
// add a click event to listen to the button
button.addEventListener("click", function(){
    // select the paragraoh elements
    let demoElement = document.getElementById("demo");
    let messageElement =document.getElementById("message")
    //change the color of the text
    messageElement.textContent = "your duped bro!!11";
    demoElement.textcontent="your duped"
    demoElement.textContent.style.color="blue"
    console.log(button)
    console.log(demoElement)
}
);