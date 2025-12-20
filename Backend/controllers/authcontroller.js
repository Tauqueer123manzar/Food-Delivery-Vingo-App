import User from "../models/UserModel";
import bcrypt from "bcryptjs";

// ==================================== Signup ====================================
export const signup=async(req,res)=>{
    try{
     const {fullName,email,mobile,password,role}=req.body;
     if(!fullName || !email || !mobile || !password || !role){
        return res.status(400).json({
            message:"All fields are required"
        });
     }
     const user=await User.findOne({email});
     if(user){
        return res.status(400).json({
            message:"User already exists with this emaail"
        });
     }
     if(password.length<6){ 
        return res.status(400).json({
            message:"Password must be at least 6 characters long"
        })
     }
     if(mobile.length<10){
        return res.status(400).json({
            message:"mobile number must be at least 10 characters long"
        })
     }
     const hashedPassword = await bcrypt.hash(password,10);
    
     const newUser = await User.create({
        fullName,
        email,
        mobile,
        password:hashedPassword,
        role
     });

    }catch(error){
        res.status(500).json({message:"Internal Server Error"})
    }
}