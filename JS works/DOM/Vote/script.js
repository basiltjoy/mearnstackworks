// alert("hello world")

// var Litem=document.getElementByID("item")
// Litem.style.color="green"


// to select by giving the tag an ID
// var items=document.getElementsByClassName("section")
// for(let      item of items){
//     item.style.color="yellow"
// }

// 'textContent' used to change the content
// document.getElementById("h1").textContent="Document Object Model"



document.getElementById("h1").innerHTML="<em>Document Object Model</em>"


//querySelectorAll
var it=document.querySelectorAll("li")
for(let item of it){
    item.style.color="red"}

//querySelector
 var items=document.querySelector("li")
items.style.color="green"


//to make all the tags into an array
