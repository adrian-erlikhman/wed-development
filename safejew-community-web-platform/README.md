# SafeJew Community Web Platform

## Project Description
A community-driven platform for tracking and reporting antisemitic incidents across Los Angeles. It features an interactive map, filtering options, resource links, and secure incident reporting. This project is technically interesting due to its focus on real-time data visualization, geospatial filtering, and secure submission workflows.

## Technologies and Tools Used
- React
- TailwindCSS
- Node.js Express backend
- MongoDB
- Mapbox
- Auth0 for authentication

## Setup & Installation
1. **Prerequisites**
   - Node.js and npm installed
   - MongoDB database (local or cloud)
   - Mapbox and Auth0 accounts
2. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd safejew-community-web-platform
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Environment Variables**
   Create a `.env` file with your MongoDB URI, Mapbox token, and Auth0 keys.
5. **Run the development server**
   ```bash
   npm start
   ```
   Access the site at `http://localhost:3000`.
6. **Build for production**
   ```bash
   npm run build
   ```
7. **Deployment**
   Deploy the app to platforms like Vercel or Heroku. Make sure to configure environment variables such as database credentials, Mapbox token, and Auth0 keys on the host. The server uses `npm start` to launch the Express app.

## Core Features
- Interactive Mapbox map with incident markers
- Dynamic incident reports and filter controls
- Analytics dashboard for trend insights
- JWT-based admin panel
- Secure incident submission workflow

## Development Roadmap
1. Set up project structure and dependencies
2. Implement user authentication with Auth0
3. Build the Mapbox map component and integrate MongoDB data
4. Create reporting form and submission API
5. Add admin dashboard with JWT authentication
6. Integrate analytics and filtering
7. Polish UI with TailwindCSS and deploy

## Expected Results
Users can view and report incidents on a map, filter by categories, and admins can manage and analyze incoming reports securely. The experience is intuitive and responsive.

## Future Improvements & Research
- Mobile app version using React Native
- Advanced map analytics and clustering
- Automated moderation with AI-assisted content filtering
- Accessibility audits and enhancements
- Deployment via containerization (Docker)

[Demo Link Placeholder](https://example.com)
[Mapbox API](https://docs.mapbox.com/)
