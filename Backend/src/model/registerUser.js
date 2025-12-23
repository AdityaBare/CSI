import mongoose, { Schema } from "mongoose";

const registerUserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    year: {
        type: Number
    },
    prn: {
        type: String,
        unique: true
    },
    branch: {
        type: String
    }
}, { timestamps: true });

const RegisterUser = mongoose.model("RegisterUser", registerUserSchema);
export default RegisterUser;
