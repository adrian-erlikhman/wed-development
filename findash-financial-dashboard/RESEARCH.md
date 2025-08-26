# FinDash: Research Report

## Abstract
FinDash studies the aggregation of real‑time financial data into an interactive dashboard. This paper examines data synchronization, visualization techniques, and portfolio tracking accuracy.

## Introduction
Investors manage diverse assets across platforms. FinDash unifies stock quotes, news sentiment, and holdings analytics in a browser‑based interface.

## System Architecture
The frontend uses React and Recharts, while the backend relies on Express to proxy external APIs such as Alpha Vantage and Finnhub. PostgreSQL stores user portfolios and historical snapshots.

## Implementation
We designed a polling strategy with caching to respect rate limits and keep charts updated. Data is normalized into time series for easy chart rendering and CSV export.

## Results
Backtests with sample portfolios confirmed that cached updates reduced API calls by 60% without sacrificing timeliness. Users could export consolidated reports for tax preparation.

## Future Work
Future iterations may incorporate machine learning for anomaly detection, WebSocket streams for tick‑level updates, and integrations with brokerage APIs for live trading.
