require("dotenv").config(); 

const express = require("express");
const cors = require("cors");
const mailer = require("./mailer"); // dotenv ke baad import

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await mailer.sendMail({
      from: `"Buildora Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "📩 New Contact Form Message",
      html: `
        <h3>New Message Received</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    res.json({ success: true });
  } catch (error) {
    console.error("MAIL ERROR ❌", error);
    res.json({ success: false });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
