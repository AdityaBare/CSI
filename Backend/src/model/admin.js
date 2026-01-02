import mongoose, { Schema } from "mongoose";
const adminSchema = new Schema({
    email:{type:String},
    password:{type:String},
     
});

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;