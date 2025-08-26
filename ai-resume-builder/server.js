// Basic Express server that generates simple resumes and exposes them via REST endpoints.
const express = require('express');
const path = require('path');
const PDFDocument = require('pdfkit');
const app = express();
const PORT = process.env.PORT || 3000; // Allow port override for deployment

// Serve the static frontend assets from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
// Parse incoming JSON bodies for API requests
app.use(express.json());

// In-memory store for generated resumes. Replace with a database in production.
const resumes = [];

// Endpoint to generate a resume PDF based on user-provided data.
// In a full implementation, this could call the OpenAI API for better wording.
app.post('/api/generate', (req, res) => {
  const { name = 'Anonymous', experience = '' } = req.body; // Basic fields

  const doc = new PDFDocument();
  const chunks = [];
  // Collect the PDF chunks as they are generated
  doc.on('data', chunk => chunks.push(chunk));
  // Once PDF generation is finished, encode and return it
  doc.on('end', () => {
    const pdf = Buffer.concat(chunks);
    const encoded = pdf.toString('base64');
    resumes.push({ name, pdf: encoded });
    res.json({ pdf: encoded });
  });

  // Basic resume layout; extend this with themes and better formatting
  doc.fontSize(20).text(`${name}'s Resume`, { align: 'center' });
  doc.moveDown();
  doc.fontSize(12).text(experience || 'No experience provided');
  doc.end();
});

// Return all previously generated resumes.
// This demonstrates simple data retrieval; secure or paginate in production.
app.get('/api/resumes', (req, res) => {
  res.json(resumes);
});

// Start the HTTP server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
