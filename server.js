// server.js
// Minimal Express server for PDF upload and email
//
// Instructions:
// 1. Install dependencies: npm install express multer nodemailer dotenv
// 2. Create a .env file with:
//    GMAIL_USER=your_gmail_address@gmail.com
//    GMAIL_PASS=your_gmail_app_password
// 3. Run: node server.js
// 4. Open index.html in your browser and submit a PDF.

const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Allow CORS for local testing
app.use(cors());

// Multer setup: store file in memory
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max
});

// Serve index.html for the form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle PDF submission
app.post('/submit', upload.single('pdf'), async (req, res) => {
  if (!req.file || req.file.mimetype !== 'application/pdf') {
    return res.status(400).send('Please upload a valid PDF file.');
  }

  // Set up Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER, // Send to yourself
    subject: 'New PDF Submission',
    text: 'A new PDF has been submitted.',
    attachments: [
      {
        filename: req.file.originalname,
        content: req.file.buffer,
        contentType: 'application/pdf',
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send('PDF submitted and emailed successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to send email.');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
