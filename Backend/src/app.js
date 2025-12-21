import express from "express";
import cors from "cors";

import userRoute from "./route/user.js";

const app = express();
const port = 8080;

app.use(cors());
app.use(express.urlencoded({extended:true,limit:"40kb"}));
app.use(express.json({limit:"50kb"}));

app.use("/",userRoute);

app.listen(port, async ()=>{
    console.log("Server is working on port :",port);
}); 