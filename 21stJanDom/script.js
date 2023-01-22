console.log(document.documentElement.getAttribute("lan"))
console.log("hello dear")
console.log(document.firstElementChild.nodeName)
var para=document.querySelector("#para")
para.style.color="red"

// var abc=document.querySelectorAll(".abc")
// abc.forEach((item) => {
//     item.style.color = "green"})

// var abc=document.querySelectorAll(".abc").forEach((item)=>{
//     item.style.color="yellow"
// })
var abc=document.querySelectorAll(".abc")
abc.forEach((item) => {
    console.log(item.innerHTML)})





var ul=document.querySelectorAll(".li")

ul.forEach((item)=>{
    console.log(item.innerHTML)
})

var first=document.querySelector(".first");
first.classList.add("title")

console.log(first)


// -----------------------------------------
// get attributes of html tags like href

var atag=document.querySelector(".atag")
console.log(atag.getAttributes("href"))