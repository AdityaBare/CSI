import mongoose, { Schema } from "mongoose";

const registerUserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
      
    },
    year: {
        type: String
    },
    prn: {
        type: String,
        default:"-",
       
    },
    branch: {
        type: String
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    event:{
        type:Schema.Types.ObjectId,
        ref:"Event"
    }
}, { timestamps: true });

const RegisterUser = mongoose.model("RegisterUser", registerUserSchema);
export default RegisterUser;
