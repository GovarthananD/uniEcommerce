import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const DB = async () => {
   try{
    await mongoose.connect(process.env.MONGO_URL)
    console.log("DATABASE CONNECTED");
   }catch(error){
    console.log("Error while DB Connecting", error)
   }
}

export default DB;