import mongoose, {Schema} from "mongoose";

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
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    }

});

const User = mongoose.model("User", userModel);

export default User;