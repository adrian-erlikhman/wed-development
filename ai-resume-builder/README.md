# AI Resume Builder

## Project Description
An application that allows users to input their work experience and generates professional resumes using GPT. The app can export results to PDF with multiple themes and formats.

## Technologies and Tools Used
- React
- OpenAI API
- Node.js Express backend
- PDFKit for PDF generation

## Setup & Installation
1. **Prerequisites**
   - Node.js installed
   - OpenAI API key
2. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd ai-resume-builder
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Environment Variables**
   Add your OpenAI API key to `.env`.
5. **Run the app**
   ```bash
   npm start
   ```
   Visit `http://localhost:3000` in your browser to view the demo. After submitting the form, a download link for the generated PDF appears.
6. **Build for production**
   ```bash
   npm run build
   ```
7. **Deployment**
   Deploy to any Node-friendly platform (e.g., Vercel or Heroku). Ensure your OpenAI API key is configured on the host. Use `npm start` to serve the built application.

## Core Features
- Authentication and user accounts
- Form-based resume generation
- PDF export with PDFKit
- Multiple themes and formatting options

## Development Roadmap
1. Build form components and backend API
2. Connect to OpenAI for resume generation
3. Implement PDF export functionality
4. Add user authentication and data storage
5. Create theme selector and styling options
6. Deploy and test with sample users

## Expected Results
Users can quickly create polished resumes tailored to their experience and export them as PDFs in various styles.

## Future Improvements & Research
- Integrate analytics on resume performance
- AI-based suggestions for improvements
- Custom templates marketplace
- Advanced security and privacy controls

[Demo Link Placeholder](https://example.com)
[OpenAI API](https://platform.openai.com/docs)
