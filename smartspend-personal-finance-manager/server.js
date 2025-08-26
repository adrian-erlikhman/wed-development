/**
 * SmartSpend API server.
 * Tracks budgets and transactions. Replace in-memory storage with Firebase for production.
 */
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

let transactions = [];

// Retrieve all recorded transactions
app.get('/api/transactions', (req, res) => {
  res.json(transactions);
});

// Add a new transaction
app.post('/api/transactions', (req, res) => {
  transactions.push(req.body);
  res.status(201).json({ success: true });
});

app.listen(PORT, () => {
  console.log(`SmartSpend server running on port ${PORT}`);
});
