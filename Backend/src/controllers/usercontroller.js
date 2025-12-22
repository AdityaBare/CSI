import brycpt from "bcrypt";
import crypto from  "crypto";
import User from "../model/usermodel.js";
import httpStatus from "http-status"


const login = async (req, res)=>{
    const {email , number , password} = req.body;

    try{
        const user = await User.findOne({email,number});
        if(!user){
            return res.status(httpStatus.NOT_FOUND).json({message:"User not found" , success:false});
        }
        const isMatch = await brycpt.compare(password,user.password);
        if(!isMatch){
            return res.status(httpStatus.NOT_FOUND).json({message:"Password is incorrect",success:false});
        }
        res.status(httpStatus.FOUND).json({message:"Login successfull", success:true});

    }catch(err){
         res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message:`Internal server error : ${err}`, success:false});

    }
}

const signup = async (req, res)=>{
  
    const {name, email , number , password , branch} = req.body;

    try{
        const existUser = await User.findOne({email});
        if(existUser){
            return res.status(httpStatus.FOUND).json({message:"User already exist.", success:false});
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

      res.status(httpStatus.CREATED).json({message:"User is created", success:true});


    }catch(err){
         res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message:`Internal server error : ${err}`, success:false});


    }


}



export {signup, login};