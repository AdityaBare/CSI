import mongoose, {Schema} from "mongoose";
import RegisterUser from "./registerUser.js";
const eventModel = new Schema({
    name:{
        type:String,
        required:true
    },
    description :{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        required:true,
        type:String,
    },
    location:{
        type:String
    },
    logo:{
        url:String,
        filename:String
    },
    prize:[String],
    status:{
       type: String,
    enum:["upcoming", "ongoing", "completed", "cancelled"],
    required: true
    },
    participants:[{
        type:Schema.Types.ObjectId,
        ref:'RegisterUser'}

    ],


});

const Event = mongoose.model("Event",eventModel);
export default Event;