const express=require("express");
const app=express();
const hbs=require("hbs");
const path=require("path");
const partpath=path.join(__dirname,"/templates/partials");
hbs.registerPartials(partpath);
const viewpath=path.join(__dirname,"/templates/views");
 
 
 //console.log(partpath); 
 
 app.set("views",viewpath);
 app.set("view engine","hbs");
 
app.get("/",(req,res)=>{
res.render("index",{
    username:"Home",
});
});
app.get("/about",(req,res)=>{
    res.render("about",{
        username:"About",
    });
    });

app.listen(3000,()=>{
console.log("listening on port 3000..");
});