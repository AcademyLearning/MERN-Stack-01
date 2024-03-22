var nodemailer = require("nodemailer");

var trasporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "giftreptile21@gmail.com",
    pass: "jpzlhdwsduenjouc",
  },
});

var mailOptions = {
  from: "giftreptile21@gmail.com",
  to: "info.vivekbhawsar@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

trasporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent : " + info.response);
  }
});
