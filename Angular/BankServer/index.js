
//import express
const express = require('express')

//create express app
const app=express()


//set a port
app.listen(3000,()=>{
console.log("server started at port 3000")
})


//define default router
//SYNTAX:-     expressApp.HTTPmethod(path,callback function)
app.get('/',(req,res)=>{
    res.send("Get method")
})


app.post('/',(req,res)=>{
    res.send("Post method")
})





//nodemon installation:   npm i -g nodemon
  

