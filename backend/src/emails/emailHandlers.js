import { resendClient, sender } from '../lib/resend.js';
import { createWelcomeEmailTemplate } from "../emails/emailTemplate.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
  const { data, error } =await resendClient.emails.send({
    from: `${sender.name} <${sender.email}>`,
    to: [email],
    subject: 'Welcome to YAP!',
    html: createWelcomeEmailTemplate(name, clientURL),
  })

  if(error){
    console.log("Error sendingwelcome email", error);
    throw new Error("failed to send welcome email")
    
  }
  console.log("Welcome Email sent Succesfully", data);
  
  }