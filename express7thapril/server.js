const express = require("express");
const app =express();
let port=3000

// get method
// get method passes the info using url
// app.get("/test",(req,res)=>{
//     res.send("Get method working like a charm")
// })
const courses=[{
    name:"Node js",
    Author:"sanpreet"
},
{
    name:"react",
    Author:"Chandan"
}]

app.get("/",function (req,res){
    res.send("Hello world")
})
app.get("/courses",function (req,res){
    res.send(courses)
})
app.get("/courses/:name",function (req,res){
    const courseName = req.params.name;
    const course = courses.find(course => course.name.toLowerCase() === courseName.toLowerCase());
  
    if (course) {
      const { name, Author } = course;
      res.send({ name, Author });
    } else {
      res.status(404).send("not found");
    }
  });

//   post request 


app.listen(port,()=>{
    console.log(`my server is running at ${port}`)
})

//ecommerce application has products 
// product.js will hold the array for all the products
// import that array in index js
// getallproduct,getproductid,getproductname , addnewproduct