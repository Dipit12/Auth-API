// setup nodemailer here and write email logic
import nodemailer from 'nodemailer'
require("dotenv").config();

const sendEmail = async(to:string,subject:string,text:string) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.example.com",
        port: 587,
        secure: false, 
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
      try{
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: to,
            subject: subject,
            text: text
        })
        console.log("Message sent successfully")
      }catch(err){
        console.log(err + "Error sending email")
      }
}

export {sendEmail}