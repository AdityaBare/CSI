import brycpt from "bcrypt";
import jwt from  "jsonwebtoken";
import User from "../model/usermodel.js";
import httpStatus from "http-status"
import sendEmail from "../services/sendmail.js";

import { welcomeEmailTemplate,loginAlertTemplate } from "../util/emailTemplate.js";

const login = async (req, res)=>{
    const {email , number , password} = req.body;

    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(httpStatus.NOT_FOUND).json({message:"User not found" , success:false});
        }
        const isMatch = await brycpt.compare(password,user.password);
        if(!isMatch){
            return res.status(httpStatus.UNAUTHORIZED).json({message:"Invalid password",success:false});
        }
        const token = jwt.sign(
        {userId:user._id},
         process.env.JWT_SECRET,
        { expiresIn: "5d" }
      );
            res.cookie("accessToken", token, {
            httpOnly: true,
            secure: false,        
            sameSite: "lax",     
            maxAge: 120*60 * 60 * 1000});
        res.status(httpStatus.OK).json({message:"Login successfull", success:true});
          setImmediate(()=>{
            const time = new Date();
        sendEmail(
            email,
            "Welcome to CSI",
            loginAlertTemplate(user.name, time.toString().split(" GMT")[0])

        );
      })

    }catch(err){
         res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message:`Internal server error : ${err.message}`, success:false});

    }
}

const signup = async (req, res)=>{
  
    const {name, email , number , password , branch,year,prn,college} = req.body;

    try{
        const existUser = await User.findOne({email});
    
        if(existUser){
            return res.status(httpStatus.CONFLICT).json({message:"User already exist.", success:false});
        }

        const hashPassword = await brycpt.hash(password,10);

        const user = new User({
            name:name,
            email:email,
            number:number,
            branch:branch,
            year,
            college,
            prn,
            password:hashPassword
        });

      await  user.save();
   
      const token = jwt.sign(
        {userId:user._id},
         process.env.JWT_SECRET,
        { expiresIn: "5d" }
      );
      
            res.cookie("accessToken", token, {
            httpOnly: true,
            secure: false,        
            sameSite: "lax",     
            maxAge: 120*60 * 60 * 1000});

      res.status(httpStatus.CREATED).json({message:"User is created", success:true});

      setImmediate(()=>{
        sendEmail(
            email,
            "Welcome to CSI",
            welcomeEmailTemplate(user.name)

        );
      })


    }catch(err){
         res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message:` ${err.message}`, success:false});


    }


}


const mySpace = async (req, res)=>{

    try{
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password -token -event");
        if(!user){
            return res.status(httpStatus.NOT_FOUND).json({message:"User not found", success:false});
        }
        
        res.status(httpStatus.OK).json({message:"User Found.",data:user,success:true});

    }catch(err){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message:err.message, success:false});
    }
}



export {signup, login, mySpace};