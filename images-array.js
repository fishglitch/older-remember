const imageUrls = [
    "https://cdn.glitch.global/166b024b-df86-438f-b85c-5d7e7edea0a6/philippine%20national%20police%20waltzing%20at%20the%20EDSA%20rally%20with%20the%20photo%20of%20Ferdinand%20Marcos%20in%20the%20background%20in%20an%20ornate%20frame.png?v=1749924855601", 
    "https://cdn.glitch.global/6c8c742f-3d98-4efa-9e2a-6b24719fd9d8/000011550004.jpg?v=1745700304533",
    "https://cdn.glitch.global/6c8c742f-3d98-4efa-9e2a-6b24719fd9d8/MCC5.jpg?v=1745702249169",
    "https://cdn.glitch.global/6c8c742f-3d98-4efa-9e2a-6b24719fd9d8/000011550006.jpg?v=1745701919627",
    "https://cdn.glitch.global/6c8c742f-3d98-4efa-9e2a-6b24719fd9d8/000015250013.jpg?v=1745702124439",
    "https://cdn.glitch.global/6c8c742f-3d98-4efa-9e2a-6b24719fd9d8/000015250019.jpg?v=1745702045282",
    "https://cdn.glitch.global/6c8c742f-3d98-4efa-9e2a-6b24719fd9d8/000016140002.jpg?v=1745701995237",
    "https://cdn.glitch.global/6c8c742f-3d98-4efa-9e2a-6b24719fd9d8/000016140004.jpg?v=1745701965684",
    "https://cdn.glitch.global/6c8c742f-3d98-4efa-9e2a-6b24719fd9d8/000015250001.jpg?v=1745702182156",
    "https://cdn.glitch.global/6c8c742f-3d98-4efa-9e2a-6b24719fd9d8/000015250003.jpg?v=1745702150370"
];

const images = [];
let currentIndex = 0;

// Function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Preloads images
function preload() {
    return Promise.all(imageUrls.map(url => {
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

// Preload images and set up the canvas
preload().then(loadedImages => {
    images.push(...loadedImages);
    shuffle(images); // Shuffle images here
    setup();

    // Optionally add an interval to automatically change images
    setInterval(nextImage, 500); // change image every n milliseconds
});