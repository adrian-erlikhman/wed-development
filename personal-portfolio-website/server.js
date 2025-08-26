/**
 * Simple Express server for the personal portfolio website.
 * Expand with Next.js or custom APIs for form handling and project data.
 */
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Example endpoint for retrieving projects
app.get('/api/projects', (req, res) => {
  // TODO: Fetch from GitHub or CMS
  res.json([{ name: 'Placeholder Project', description: 'Replace with real data' }]);
});

app.listen(PORT, () => {
  console.log(`Portfolio server running on port ${PORT}`);
});
