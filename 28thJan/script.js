console.log("hello dom")
// book mark the page 
const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; 
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const todayDate = dd + '-' + mm + '-' + yyyy;

console.log(todayDate)
let date=document.querySelector(".date")
console.log(date.innerHTML=todayDate)