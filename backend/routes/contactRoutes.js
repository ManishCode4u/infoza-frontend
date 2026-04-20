const express = require("express");
const router = express.Router();
const rateLimit = require("express-rate-limit");
const contactController = require("../controllers/contactController");

// Rate limiting for the contact route
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  message: { success: false, message: "Too many requests. Please try again later." },
});

router.post("/", contactLimiter, contactController.submitContactForm);

module.exports = router;
