const images = [];
let currentIndex = 0;

// Function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Fetch the image URLs and handle errors
function fetchImageUrls() {
    return fetch('/api/images')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            return []; // Return an empty array to prevent further errors
        });
}

// Preloads images
function preload(urls) {
    return Promise.all(urls.map(url => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve(img);
        });
    }));
}

// Sets up the canvas and draws the first image
function setup() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Draw the first image
    draw(ctx);
}

// Draws the current image on the canvas
function draw(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    const img = images[currentIndex];
    ctx.drawImage(img, (ctx.canvas.width - img.width / 2) / 2, (ctx.canvas.height - img.height / 2) / 2, img.width / 2, img.height / 2);
}

// Moves to the next image
function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    draw(ctx);
}

// Fetch and preload images
fetchImageUrls().then(urls => {
    return preload(urls);
}).then(loadedImages => {
    images.push(...loadedImages);
    shuffle(images); // Shuffle images here
    setup();

    // Optionally add an interval to automatically change images
    setInterval(nextImage, 500); // Change image every 500 milliseconds
});