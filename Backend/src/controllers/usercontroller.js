import brycpt from "bcrypt";
import jwt from  "jsonwebtoken";
import User from "../model/usermodel.js";
import httpStatus from "http-status"


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

    }catch(err){
         res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message:`Internal server error : ${err.message}`, success:false});

    }
}

const signup = async (req, res)=>{
  
    const {name, email , number , password , branch} = req.body;

    try{
        const existUser = await User.findOne({email});
        console.log(existUser);
        if(existUser){
            return res.status(httpStatus.CONFLICT).json({message:"User already exist.", success:false});
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


    }catch(err){
         res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message:` ${err.message}`, success:false});


    }


}



export {signup, login};