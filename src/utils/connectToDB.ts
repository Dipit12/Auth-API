require("dotenv").config();
import mongoose from 'mongoose'

async function connectToDatabase(){
    try{
        
        await mongoose.connect(process.env.MONGOOSE_URL!)
        console.log("Connected to MongoDB")
    }catch(err){
        console.log("Error:" + err);
    }
   
}
export {connectToDatabase}