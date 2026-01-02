import Admin from "../model/admin.js";
import brycpt from "bcrypt";
import httpStatus from "http-status"

const signup = async (req, res)=>{
  const {email , password}= req.body;

   try{
           const existUser = await Admin.findOne({email});
            
                if(existUser){
                    return res.status(httpStatus.CONFLICT).json({message:"User already exist.", success:false});
                }
        
                const hashPassword = await brycpt.hash(password,10);

                const admin = new Admin({
                    email,
                  password:  hashPassword
                });
                
                await admin.save();
                
      res.status(httpStatus.CREATED).json({message:"User is created", success:true});
      
         }catch(err){
         res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message:` ${err.message}`, success:false});


    }
 
    
}

const login = async (req , res)=>{
     const {email  , password} = req.body;

    try{
        const user = await Admin.findOne({email});

        console.log(user);
        if(!user){
            return res.status(httpStatus.NOT_FOUND).json({message:"User not found" , success:false});
        }
        const isMatch = await brycpt.compare(password,user.password);
        if(!isMatch){
            return res.status(httpStatus.UNAUTHORIZED).json({message:"Invalid password",success:false});
        }
        console.log(user);
         res.status(httpStatus.OK).json({message:"Login successfull", success:true});
        

          }catch(err){
         res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message:` ${err.message}`, success:false});


    }
}

export {signup, login};