const fs= require("fs")
console.loga("./Node.txt","utf-8",(err,data)=>{
    console.log("we are inside callbqck fn",data)
})

console.loga("end")