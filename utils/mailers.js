import nodemailer from "nodemailer";
export async function main(mailTo) {

  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false, 
    auth: {
      user: "3f5eebba2fab48", 
      pass: "109147337a23c9", 
    },
  });

  let info = await transporter.sendMail({
    from: "sabitasitaula705@gmail.com", 
    to: mailTo, 
    subject: "Thanks for your response",
    html: `<h2 >Hello!</h2>
    <br>Thank you for submitting the form. Your information is recorded. I will get to you soon.
    <br><br>
    <span>Sincerely</span>,<br>
    <h3>Sabita` 
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
