import Admin from "../model/admin.js";
import brycpt from "bcrypt";
import httpStatus from "http-status"
import RegisterUser from "../model/registerUser.js";
import Event from "../model/eventmodel.js";
import jwt from  "jsonwebtoken";

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
                { expiresIn: "1hr" }
              );
              
                    res.cookie("accessToken", token, {
                    httpOnly: true,
                    secure: false,        
                    sameSite: "lax",     
                    maxAge: 60 *60*1000});

         res.status(httpStatus.OK).json({message:"Login successfull", success:true});
        

          }catch(err){
         res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message:` ${err.message}`, success:false});


    }
}

const count = async (req, res)=>{
  
    try{

        const totalEvent = await Event.countDocuments();
        const totalRegistration = await RegisterUser.countDocuments();
        const upcomingEvents = await Event.countDocuments({
      status: "upcoming",
    });
    const completed = await Event.countDocuments({
      status: "completed",
    });

    res.status(200).json({
        success:true,
        data:{
            totalEvent,
            totalRegistration,
            upcomingEvents,
            completed
        }
    })
        
    }
    catch(err){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message:err.message, success:false});
    }
}


const auth = (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) {
    return res.status(401).json({ message: "No token" ,success:false});
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
     
    res.status(httpStatus.OK).json({success:true});
  } catch (err) {
    res.status(401).json({ message: "Invalid token" ,success:false});
  }
};

export default auth;
export {signup, login ,auth, count};