const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const sampleData = {
  AAPL: { price: 150.12, change: 1.2 },
  MSFT: { price: 310.5, change: -0.8 }
};

app.get('/api/stock/:symbol', async (req, res) => {
  const symbol = req.params.symbol.toUpperCase();
  const apiKey = process.env.ALPHAVANTAGE_KEY;

  if (apiKey) {
    try {
      const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;
      const response = await axios.get(url);
      const quote = response.data['Global Quote'];
      if (quote && quote['05. price']) {
        return res.json({
          price: Number(quote['05. price']),
          change: Number(quote['10. change percent'].replace('%',''))
        });
      }
    } catch (err) {
      console.error(err.message);
      return res.json({ error: 'API error' });
    }
  }

  res.json(sampleData[symbol] || { error: 'Symbol not found' });
});

let portfolio = [{ symbol: 'AAPL', shares: 10 }];

app.get('/api/portfolio', (req, res) => {
  res.json(portfolio);
});

app.post('/api/portfolio', (req, res) => {
  portfolio.push(req.body);
  res.status(201).json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
