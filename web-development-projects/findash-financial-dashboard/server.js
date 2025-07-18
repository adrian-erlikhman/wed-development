const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const sampleData = {
  AAPL: { price: 150.12, change: 1.2 },
  MSFT: { price: 310.5, change: -0.8 }
};

app.get('/api/stock/:symbol', (req, res) => {
  const symbol = req.params.symbol.toUpperCase();
  res.json(sampleData[symbol] || { error: 'Symbol not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
