const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/api/simulate', (req, res) => {
  const { pre, investment } = req.body;
  const post = pre + investment;
  const equity = investment / post;
  res.json({ postMoneyValuation: post, investorEquity: equity });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
