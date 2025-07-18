const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const expenses = [];

app.get('/api/expenses', (req, res) => {
  res.json(expenses);
});

app.post('/api/expenses', (req, res) => {
  const { amount } = req.body;
  const expense = { id: Date.now(), amount: Number(amount) };
  expenses.push(expense);
  res.status(201).json(expense);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
