const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

let incidents = [];

app.get('/api/incidents', (req, res) => {
  res.json(incidents);
});

app.post('/api/incidents', (req, res) => {
  const { description, lat, lng } = req.body;
  const incident = { id: uuidv4(), description, lat, lng };
  incidents.push(incident);
  res.status(201).json(incident);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
