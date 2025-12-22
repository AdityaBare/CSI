import brycpt from "bcrypt";
import crypto from  "crypto";
import User from "../model/usermodel.js";
import httpStatus from "http-status"


const signup = async (req, res)=>{
  
    const {name, email , number , password , branch} = req.body;

    try{
        const existUser = await User.findOne({email});
        if(existUser){
            return res.status(httpStatus.FOUND).json({message:"User already exist.", success:"false"});
        }

        const hashPassword = await brycpt.hash(password,10);

        const user = new User({
            name:name,
            email:email,
            number:number,
            branch:branch,
            password:hashPassword
        });

      await  user.save();

      res.status(httpStatus.CREATED).json({message:"User is created", success:"True"});


    }catch(err){
         res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message:`Internal server error : ${err}`, success:"false"});


    }


}



export {signup};