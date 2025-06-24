const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000; // You can choose any port number

// Define the path to the folder containing your images
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
            .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
            .map(file => `/images/${file}`);
        res.json(imageUrls); // Send back the image URLs as a JSON array
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});