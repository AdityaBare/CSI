import nodemailer from "nodemailer";

const sendEmail = async (to , subject , html)=>{
    try{
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.Email_User,
                pass:process.env.Email_Pass
            },
        });

        await transporter.sendMail({
            from:`CSI ${process.env.Email_User}`,
            to,
            subject,
            html
        });

        console.log("Email sent to:",to);

    }
    catch(err){
        console.log("Email error :",err.message);
    }
};

export default sendEmail;