import mongoose, {Schema} from "mongoose";
import Event from "./eventmodel.js";

const userModel = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    branch:{ type:String},
    number:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    event:[{type:Schema.Types.ObjectId,ref:'Event'}]

});

const User = mongoose.model("User", userModel);

export default User;