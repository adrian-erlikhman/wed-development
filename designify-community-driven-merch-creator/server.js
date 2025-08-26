// Express server powering basic design submission and retrieval.
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files and parse JSON bodies
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Temporary in-memory array of designs. Replace with Firebase in production.
let designs = [];

// Return all submitted designs
app.get('/api/designs', (req, res) => {
  res.json(designs);
});

// Store a new design proposal
app.post('/api/designs', (req, res) => {
  designs.push(req.body);
  res.status(201).json({ success: true });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
