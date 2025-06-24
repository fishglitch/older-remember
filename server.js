const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000; // You can choose any available port

// Path to your images folder
const imageDirectory = path.join(__dirname, 'assets/selections');

// Serve static files from the images folder
app.use('/images', express.static(imageDirectory));

// Endpoint to get the list of images
app.get('/api/images', (req, res) => {
    fs.readdir(imageDirectory, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read images directory' });
        }
        // Filter out non-image files
        const imageUrls = files
            .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file)) // Adjust extensions as needed
            .map(file => `/images/${file}`); // Create URL paths to access images
        res.json(imageUrls); // Send back the image URLs as a JSON array
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});