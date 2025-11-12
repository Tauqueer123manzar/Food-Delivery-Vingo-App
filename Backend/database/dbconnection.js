import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log("!!!Mongodb Database connected successfully!!!");
    } catch (error) {
        console.log("Error in DB connection", error.message);
        process.exit(1);
    }
}

