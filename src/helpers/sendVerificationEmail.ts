import { resend } from "@/lib/resend";

import VerificationEmail from "../../emails/VerificationEmail";

import { ApiResponse } from "@/types/ApiResponse";




export async function sendVerificationEmail(
    email:string,
    username:string,
    verifiCode:string

):Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Anonymous Message | Verification code',
            react: VerificationEmail({username , otp:verifiCode}),
          });
          console.log("verify code ---",verifiCode);
          
          return {success:true , message:"Verification email send successfully"}
        
    } catch (emailError) {
        console.error("Error sending verification email" , emailError);
        return {success:false , message:"Failed to send verification email"}
        
    }
}


// import nodemailer from "nodemailer";
// import VerificationEmail from "../../emails/VerificationEmail";
// import { ApiResponse } from "@/types/ApiResponse";

// export async function sendVerificationEmail(
//   email: string,
//   username: string,
//   verifiCode: string
// ): Promise<ApiResponse> {
//   try {
//     // Create a transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//       host: process.env.MAIL_HOST,
//       port: 587, // You can use the port for your SMTP server
//       secure: false, // true for 465, false for other ports
//       auth: {
//         user: process.env.MAIL_USER, // your SMTP username
//         pass: process.env.MAIL_PASS, // your SMTP password
//       },
//     });

//     // Define the email options
//     let info = await transporter.sendMail({
//       from: '"Anonymous Message" <onboarding@resend.dev>', // sender address
//       to: email, // list of receivers
//       subject: "Anonymous Message | Verification code", // Subject line
//       react: VerificationEmail({username , otp:verifiCode}),
//     });

//     console.log("verify code ---", verifiCode);
//     // console.log("Email sent: %s", info.messageId); // Log the messageId

//     return { success: true, message: "Verification email sent successfully" };
//   } catch (emailError) {
//     console.error("Error sending verification email", emailError);
//     return { success: false, message: "Failed to send verification email" };
//   }
// }

