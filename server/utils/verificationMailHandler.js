const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

// let transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   service: "gmail",
//   port: 587,
//   secure: false,
//   auth: {
//     user: "lilbabybeauty69@gmail.com",
//     pass: "Morolake@12",
//   },
// });
let transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "newton63@ethereal.email",
    pass: "EXF6PXhM4KFHWUUmCe",
  },
});

const sendMail = async (user, id = null) => {
  //const accesstoken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET);
  const verificationLink = `http://127.0.0.1:5173/verify/${user.id}`;
  try {
    const result = await transporter.verify();
    if (result) {
      let info = await transporter.sendMail({
        from: "Book Keepers", // sender address
        to: `${user.email}`, // list of receivers
        subject: "Verification", // Subject line
        html: `<h2>Welcome to Bookeepers. </h2><p>Please use this link to verify your identity</p><a href=${verificationLink}> Verify me</a>`, // html body
      });
      if (info) {
        console.log("mail sent");
      }
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = sendMail;
