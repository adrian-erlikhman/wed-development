# Designify: Community-Driven Merch Creator

## Project Description
A platform where users can submit merch designs and others can vote or comment. Once enough demand is reached, items become available for sale. It supports limited drops and a design gallery.

## Technologies and Tools Used
- Next.js
- Firebase (authentication and database)
- Stripe for payments
- Cloudinary for image storage

## Setup & Installation
1. **Prerequisites**
   - Node.js and npm
   - Firebase project and Stripe account
   - Cloudinary account for image uploads
2. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd designify-merch-creator
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Environment Variables**
   Configure Firebase, Stripe, and Cloudinary keys in `.env`.
5. **Run the dev server**
   ```bash
   npm run dev
   ```
6. **Build for production**
   ```bash
   npm run build
   ```
7. **Deployment**
   Deploy to Vercel for best Next.js support. Set your environment variables in the Vercel dashboard and use `npm start` to run the production server.

## Core Features
- Design submission and gallery
- Voting and comment system
- Stripe checkout for limited drops
- Threshold-based unlocking of items

## Development Roadmap
1. Initialize Next.js project and Firebase integration
2. Implement design upload and gallery pages
3. Add voting and comment features
4. Connect Stripe for payment processing
5. Enable limited drop logic and thresholds
6. Deploy and iterate on user feedback

## Expected Results
Users can browse community designs, vote for favorites, and purchase items when demand unlocks them. Creators manage designs easily through the interface.

## Future Improvements & Research
- Social media integrations to boost votes
- Recommendation engine for trending designs
- Admin analytics dashboard
- Automated order fulfillment integration

[Demo Link Placeholder](https://example.com)
[Stripe API](https://stripe.com/docs/api)
