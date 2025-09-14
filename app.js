const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the same directory
app.use(express.static(__dirname));

// Route for the birthday page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'birthday.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Birthday server running at http://localhost:${port}`);
    console.log('Open this URL in your browser to view the birthday card for Sujal!');
});