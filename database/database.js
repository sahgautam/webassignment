const mongoose=require("mongoose")
const dotenv=require("dotenv").config()
const connectDatabase=()=>{
    mongoose.connect(process.env.MONGODB_CLOUDURL).then(()=>{
        console.log("connected to database...")
   })
}

module.exports=connectDatabase;