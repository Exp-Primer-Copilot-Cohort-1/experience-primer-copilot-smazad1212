// Create web server
// Run server
// Go to localhost:3000
// Add comments
// Comments appear on page

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Use body-parser to parse the body of the request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files in the public directory
app.use(express.static('public'));

// Array to store comments
let comments = [];

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  let comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Start server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});

// Comments can be added and will appear on the page
// Comments are stored in the comments array
// Comments are served as JSON at /comments

// Test in Postman
// POST /comments
// Body: x-www-form-urlencoded
// Key: text Value: Test comment
// Response: Test comment appears in the response body
// GET /comments
// Response: Array with one comment

// Test in browser
// Go to http://localhost:3000
// Add a comment
// Comments appear on the page
// Comments are stored in the comments array
// Comments are served as JSON at /comments
// Comments are stored in the comments array
// Comments are served as JSON at /comments
// Comments can be added and will appear on the page
// Comments are stored in the comments array
// Comments are served as JSON at /comments
// Comments are stored in the comments array
// Comments are served as JSON at /comments
// Comments can be added and will appear on the page
// Comments are stored in the comments array
// Comments are served as JSON at /comments
// Comments are stored in the comments array
// Comments are served as JSON at /comments
// Comments can be added and will appear on the page
// Comments are stored in the comments array
// Comments are served as JSON at /comments
// Comments are stored in the comments array
// Comments are served as JSON at /comments
// Comments can be added and will appear on the page
// Comments are stored in the comments array