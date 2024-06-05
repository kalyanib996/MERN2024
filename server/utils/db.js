const mongoose=require("mongoose");
// mongoose.connect(uri);
// const uri="mongodb://localhost:27017"
const uri=process.env.MONGODB_URI
const connectDb=async()=>{
    try{
        await mongoose.connect(uri);
        console.log("connected");
    }catch(error){
        console.error("DB connection failed")
        process.exit(0);
    }
}

module.exports=connectDb;