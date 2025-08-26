// Express server that exposes simple funding simulation endpoints.
const express = require('express');
const path = require('path');
const math = require('mathjs');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend assets and parse JSON bodies
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// In-memory array of previous simulations. Replace with persistent storage.
let simulations = [];

// Calculate post-money valuation and equity split.
// For more complex scenarios, expand with option pools or conversion terms.
app.post('/api/simulate', (req, res) => {
  const { pre, investment } = req.body;
  const post = math.add(pre, investment); // post-money valuation
  const equity = math.divide(investment, post); // investor equity percentage
  const result = { postMoneyValuation: post, investorEquity: equity };
  simulations.push(result);
  res.json(result);
});

// Return all stored simulation results
app.get('/api/simulations', (req, res) => {
  res.json(simulations);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
