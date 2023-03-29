const express = require("express");
const app = express();

app.get("/",(req,res) =>{
    res.status(200).send("Welcome to ExpressJs ");
})

var port = process.env.PORT || 7000;
 app.listen(port,()=>{
    console.log(`server listening in port ${port}`);
 })