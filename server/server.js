require("dotenv").config()
const express=require("express");
const app= express();
const port=5000;
const router=require('./router/auth-router');
app.use(express.json());
app.use("/api/auth",router);
const connectDb=require("./utils/db");


//----------------moved to routes-------------
// app.get("/",(req,res)=>{
//     res.status(200).send("Hi,Welcome to MERN Homepage")
// });

// app.get("/register",(req,res)=>{
//     res.status(200).send("Registration Page")
    
// })
connectDb().then(()=>{
    app.listen(port,()=>{
        console.log(`Server running on port ${5000}`);
    });
    
})



