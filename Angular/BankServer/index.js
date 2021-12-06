
//import express
const express = require('express')
const dataService=require('./servives/data.services')


//create express app
const app=express()
app.use(express.json())

//nodemon installation:   npm i -g nodemon

//define default router
//SYNTAX:-     expressApp.HTTPmethod(path,callback function)
app.get('/',(req,res)=>{
    res.send("Get methodd.....")
})


//register API
app.post('/',(req,res)=>{
    res.send("Post method")
})


app.put('/',(req,res)=>{
    res.send("Put method")
})


app.patch('/',(req,res)=>{
    res.send("Patch method")
})


app.delete('/',(req,res)=>{
    res.send("Delete method")
})




//set a port
app.listen(3000,()=>{
    console.log("server started at port 3000")
    })


//register API
app.post('/register',(req,res)=>{
    console.log(req.body);
   const result= dataService.register(req.body.acno,req.body.uname,req.body.password)
    res.status(result.statusCode).send(result)
})


// login API
app.post('/login',(req,res)=>{
   const result= dataService.login(req.body.acno,req.body.pswd)
    res.status(result.statusCode).send(result)
})

