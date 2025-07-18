const express = require('express');
const path = require('path');
const PDFDocument = require('pdfkit');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const resumes = [];

app.post('/api/generate', (req, res) => {
  const { name = 'Anonymous', experience = '' } = req.body;

  const doc = new PDFDocument();
  const chunks = [];
  doc.on('data', chunk => chunks.push(chunk));
  doc.on('end', () => {
    const pdf = Buffer.concat(chunks);
    const encoded = pdf.toString('base64');
    resumes.push({ name, pdf: encoded });
    res.json({ pdf: encoded });
  });

  doc.fontSize(20).text(`${name}'s Resume`, { align: 'center' });
  doc.moveDown();
  doc.fontSize(12).text(experience || 'No experience provided');
  doc.end();
});

app.get('/api/resumes', (req, res) => {
  res.json(resumes);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
