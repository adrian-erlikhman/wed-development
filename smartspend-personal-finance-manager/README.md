# SmartSpend: Personal Finance Manager

## Project Description
SmartSpend helps users track budgets, categorize expenses, visualize spending trends, and set financial goals. It tackles the challenge of presenting personal finance data in an intuitive dashboard.

## Technologies and Tools Used
- React
- Firebase Authentication and Firestore
- Chart.js
- Plaid API (or mock banking data)

## Setup & Installation
1. **Prerequisites**
   - Node.js
   - Firebase project and Plaid sandbox credentials (optional)
2. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd smartspend-personal-finance-manager
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Environment Variables**
   Add Firebase config and Plaid keys to a `.env` file.
5. **Run the dev server**
   ```bash
   npm start
   ```
   Then open `http://localhost:3000`.
6. **Build for production**
   ```bash
   npm run build
   ```
7. **Deployment**
   Deploy to Firebase Hosting or Netlify. Configure environment variables for Firebase and Plaid.

## Core Features
- Authentication and user dashboards
- Goal tracking and spending categorization
- Chart.js visualizations
- Month-over-month insights

## Development Roadmap
1. Set up React project and Firebase auth
2. Build expense input and categorization
3. Integrate Chart.js dashboards
4. Add goal tracking and notifications
5. Connect Plaid or mock banking data
6. Deploy and perform user testing

## Expected Results
Users can securely track expenses and goals, gaining insight into their financial habits.

## Future Improvements & Research
- Machine learning for spending predictions
- Budget recommendation engine
- Mobile app using React Native
- Encryption and privacy enhancements

[Demo Link Placeholder](https://example.com)
[Firebase Docs](https://firebase.google.com/docs)
