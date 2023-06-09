const nodemailer = require("nodemailer");
const { smtpUserName, smtpPassword } = require("../secret");

console.log(smtpUserName, smtpPassword);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: smtpUserName, // generated ethereal user
    pass: smtpPassword, // generated ethereal password
  },
});

const emailWithNodeMailer = async (emailData) => {
  try {
    const mailOptions = {
      from: smtpUserName, // sender address
      to: emailData.email, // list of receivers
      subject: emailData.subject, // Subject line
      html: emailData.html, // html body
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message send : %s", info.response);
  } catch (error) {
    console.error("Error occured while sending email: ", error);
    throw error;
  }
};

module.exports = emailWithNodeMailer;
