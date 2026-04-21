require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS allowing localhost and other origins
app.use(cors({
  origin: '*', // Allow all for testing purposes as requested
  credentials: true
}));

// Parse JSON bodies
app.use(express.json());

// In-Memory Database for Contacts and Leads
const contacts = [];
const leads = [];

// Request Logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// 1. Test route
app.get('/api/test', (req, res) => {
  res.json({ message: "API working" });
});

// 2. GET all contacts
app.get('/api/contacts', (req, res) => {
  res.status(200).json({
    success: true,
    count: contacts.length,
    data: contacts
  });
});

// 3. POST new contact
app.post('/api/contacts', (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate inputs
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: "All fields are required" 
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: "Invalid email format" 
      });
    }

    // Save data in memory
    const newContact = {
      id: Date.now().toString(),
      name,
      email,
      message,
      createdAt: new Date().toISOString()
    };
    
    contacts.push(newContact);

    // Return success response
    res.status(201).json({
      success: true,
      message: "Contact saved successfully",
      data: newContact
    });

  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ 
      success: false, 
      message: "Internal Server Error" 
    });
  }
});

// 4. GET all leads
app.get('/api/leads', (req, res) => {
  res.status(200).json({
    success: true,
    count: leads.length,
    data: leads
  });
});

// 5. POST new lead from popup
app.post('/api/leads', (req, res) => {
  try {
    const { email } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: "Valid email is required" 
      });
    }

    const newLead = {
      id: Date.now().toString(),
      email,
      status: "New",
      isImportant: false,
      createdAt: new Date().toISOString()
    };
    
    leads.push(newLead);

    res.status(201).json({
      success: true,
      message: "Lead saved successfully",
      data: newLead
    });

  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ 
      success: false, 
      message: "Internal Server Error" 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`\n========================================`);
  console.log(`🚀 Server started on port ${PORT}`);
  console.log(`👉 Test API at: http://localhost:${PORT}/api/test`);
  console.log(`👉 Contacts API: http://localhost:${PORT}/api/contacts`);
  console.log(`👉 Leads API: http://localhost:${PORT}/api/leads`);
  console.log(`========================================\n`);
});
