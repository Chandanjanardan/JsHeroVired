const express = require("express");
const app =express();
let port=3000

// get method
// get method passes the info using url
app.get("/test",(req,res)=>{
    res.send("Get method working like a charm")
})


app.listen(port,()=>{
    console.log(`my server is running at ${port}`)
})