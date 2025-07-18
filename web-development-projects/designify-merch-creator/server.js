const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const designs = [];

app.get('/api/designs', (req, res) => {
  res.json(designs);
});

app.post('/api/designs', (req, res) => {
  const { design } = req.body;
  if (design) designs.push(design);
  res.status(201).json({ design });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
