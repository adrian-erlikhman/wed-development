const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

let incidents = [];

app.get('/api/incidents', (req, res) => {
  res.json(incidents);
});

app.post('/api/incidents', (req, res) => {
  const { description } = req.body;
  const incident = { id: Date.now(), description };
  incidents.push(incident);
  res.status(201).json(incident);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
