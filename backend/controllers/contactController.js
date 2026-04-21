const mailer = require("../services/emailService");

exports.submitContactForm = async (req, res) => {
  console.log("📩 Received Contact Form Request:", req.body);
  
  try {
    const { name, email, message, _subject } = req.body;

    // Basic Spam Protection (Honeypot)
    if (_subject) {
      console.warn("SPAM DETECTED 🛡️");
      return res.status(400).json({ success: false, message: "Spam detected" });
    }

    // Basic Validation
    if (!name || !email || !message) {
      console.warn("VALIDATION FAILED ❌: Missing fields");
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.warn("VALIDATION FAILED ❌: Invalid email", email);
      return res.status(400).json({ success: false, message: "Invalid email format" });
    }

    console.log("📧 [Backend] Validation passed. Sending 202 Accepted response...");
    
    // RESPOND EARLY to prevent timeout
    res.status(202).json({ success: true, message: "Accepted" });

    // Send email in BACKGROUND
    mailer.sendMail({
      from: `"InfozaTech Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: "📩 New Contact Form Message",
      html: `
        <h3>New Message Received</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    }).then(() => {
      console.log("✅ [Background] Email sent successfully to:", process.env.EMAIL_USER);
    }).catch((err) => {
      console.error("❌ [Background] Email failed:", err.message);
    });
    
  } catch (error) {
    console.error("CONTACT FORM ERROR ❌:", error.message);
    // If we haven't responded yet, send error
    if (!res.headersSent) {
      return res.status(500).json({ success: false, message: "Server error" });
    }
  }
};
