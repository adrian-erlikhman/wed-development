# SmartSpend: Research Report

## Abstract
SmartSpend evaluates the effectiveness of a Firebase‑powered budgeting tool for categorizing expenses and visualizing spending trends.

## Introduction
Personal finance apps often overwhelm users with complexity. SmartSpend aims for clarity, emphasizing goal tracking and friendly charts to encourage engagement.

## System Architecture
The React client communicates with Firebase Authentication and Firestore. Plaid or mock banking data imports transactions, which are charted with Chart.js.

## Implementation
We developed category rules and monthly budgets stored in Firestore. A synchronization job processes new transactions and updates cumulative totals.

## Results
User testing with simulated accounts revealed improved budgeting awareness; participants adjusted spending after reviewing visual breakdowns.

## Future Work
Future directions include machine‑learning‑based categorization, mobile apps for receipt scanning, and forecasting features for savings goals.
