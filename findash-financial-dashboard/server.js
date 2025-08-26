// Express server providing stock quotes and portfolio management endpoints.
const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000; // Use environment port for deployment

// Serve static frontend assets
app.use(express.static(path.join(__dirname, 'public')));
// Parse JSON request bodies
app.use(express.json());

// Fallback quote data used when API keys are missing
const sampleData = {
  AAPL: { price: 150.12, change: 1.2 },
  MSFT: { price: 310.5, change: -0.8 }
};

// Retrieve the latest stock quote for a given symbol. If an Alpha Vantage
// API key is configured, real data is fetched. Otherwise, we fall back to
// static sample data so the frontend can still function.
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

  // Default response when no API key or data available
  res.json(sampleData[symbol] || { error: 'Symbol not found' });
});

// Sample in-memory portfolio. Replace with a PostgreSQL or other DB in production.
let portfolio = [{ symbol: 'AAPL', shares: 10 }];

// Return the user's current portfolio holdings
app.get('/api/portfolio', (req, res) => {
  res.json(portfolio);
});

// Add a new holding to the portfolio
app.post('/api/portfolio', (req, res) => {
  portfolio.push(req.body);
  res.status(201).json({ success: true });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
