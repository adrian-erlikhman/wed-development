const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

let expenses = [];

app.get('/api/expenses', (req, res) => {
  res.json(expenses);
});

app.post('/api/expenses', (req, res) => {
  expenses.push(req.body);
  res.status(201).json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
