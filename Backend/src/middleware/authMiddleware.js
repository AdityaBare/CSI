import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {

    try{
        const token = req.cookies?.token || 
        req.headers.authorization?.split("")[1];

        const decoder = jwt.verify(token , process.env.JWT_SECRET);
        req.user = decoder;
        
        next();
    }catch(err){
        return res.status(401).json({message:"Invalid or expired token.",success:false});
        
    }
}

export default authMiddleware;