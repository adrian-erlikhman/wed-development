const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const resumes = [];

app.post('/api/generate', (req, res) => {
  const { name = 'Anonymous' } = req.body;
  const resume = `Generated resume for ${name}.`;
  resumes.push(resume);
  res.json({ resume });
});

app.get('/api/resumes', (req, res) => {
  res.json(resumes);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
