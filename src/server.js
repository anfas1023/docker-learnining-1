const express=require('express')
const app=express();

app.get('/',(req,res)=>{
    res.send("Welocome to my app")
})

app.listen(3000,()=>{
    console.log("app listen on the port 3000");
});
