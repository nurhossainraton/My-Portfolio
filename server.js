const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config(); // To load environment variables from a .env file

// Server setup
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

// Nodemailer transporter setup
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Load your email address from environment variables
    pass: process.env.EMAIL_PASS, // Load your email password from environment variables
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("Error configuring email:", error);
  } else {
    console.log("Email server is ready to send messages.");
  }
});

router.post("/contact", (req, res) => {
  console.log("Incoming from frontend",req.body)

  const name = `${req.body.firstName} ${req.body.lastName}`;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  const mail = {
    from: name,
    to: "ratonkhan7799@gmail.com", // Your email address
    subject: "Contact Form Submission - Portfolio",
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log("Error sending email:", error);
      res.status(500).json({ code: 500, status: "Failed to send message" });
    } else {
      console.log("Email sent successfully.");
      res.status(200).json({ code: 200, status: "Message Sent" });
    }
  });
  
});
