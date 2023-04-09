const res = require("express/lib/response")

function asyncfunvtion (){
    setTimeout(()=>{
        console.log("I am delayed")
        return p1
    },3000 )
}

let data =asyncfunvtion()
console.log("after setout function")
console.log(data)
const p1= new Promise ((resolve,reject)=>{
    resolve({name:"chandy", age:36})
});
p1.then((result)=>{
    console.log(result)
})