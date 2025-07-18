const express = require('express');
const path = require('path');
const math = require('mathjs');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

let simulations = [];

app.post('/api/simulate', (req, res) => {
  const { pre, investment } = req.body;
  const post = math.add(pre, investment);
  const equity = math.divide(investment, post);
  const result = { postMoneyValuation: post, investorEquity: equity };
  simulations.push(result);
  res.json(result);
});

app.get('/api/simulations', (req, res) => {
  res.json(simulations);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
