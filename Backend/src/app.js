import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import userRoute from "./route/user.js";
import eventRoute from "./route/event.js";
import registerRoute from "./route/registration.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 8080;

app.use(cors());
app.use(express.urlencoded({extended:true,limit:"40kb"}));
app.use(express.json({limit:"50kb"}));
app.use(cookieParser());

app.use("/registration" , registerRoute);
app.use("/events",eventRoute);
app.use("/",userRoute);


app.listen(port, async ()=>{
    console.log("Server is working on port :",port);

    mongoose.connect("mongodb+srv://bareaditya:csi_2028@cluster0.1uujtn4.mongodb.net/?appName=Cluster0")
    .then(()=>{
        console.log("Data Base is connected");
    })
    .catch((err)=>{
        console.log(err);
    })
}); 