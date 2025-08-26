// Express server for managing incident reports.
const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend and parse JSON payloads
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Temporary in-memory store for incidents.
// Swap with MongoDB for persistence and querying.
let incidents = [];

// Return all reported incidents
app.get('/api/incidents', (req, res) => {
  res.json(incidents);
});

// Submit a new incident report with a generated UUID
app.post('/api/incidents', (req, res) => {
  const { description, lat, lng } = req.body;
  const incident = { id: uuidv4(), description, lat, lng };
  incidents.push(incident);
  res.status(201).json(incident);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
