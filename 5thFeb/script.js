console.log("hello 5th feb")
class demo{
    x;
    demomethod(){
        console.log("Hello class")
        console.log(this.x)
    }
}
let a1= new demo;
a1.x="sumit"
a1.demomethod()