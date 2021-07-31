const express = require("express");
const route=require("./route/route")
const app=express()
app.use(express.json())
app.use(route)

app.listen(8080,function(err){
    if(err) throw err;
    console.log("serever running.......")
});
