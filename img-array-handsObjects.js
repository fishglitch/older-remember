document.addEventListener("DOMContentLoaded", () => {
  const imgHands = [
    "assets/hands/000014230016.jpg",
    "assets/hands/000019690025.jpg",
    "assets/hands/alejo000820-R1-056-26A.jpg",
    "assets/hands/alejo000820-R1-062-29A.jpg",
    "assets/hands/alejo000820-R1-064-30A.jpg",
    "assets/hands/glowsticks.png",
    "assets/hands/IMG_0929.JPG",
    "assets/hands/VE_Arnold_Skippy.jpg",
    "assets/objects/000007420032.jpg",
    "assets/objects/000007440005.jpg",
    "assets/objects/000009130022.jpg",
    "assets/objects/000014220001.jpg",
    "assets/objects/000014270003.jpg",
    "assets/objects/000014500026.jpg",
    "assets/objects/000014510019.jpg",
    "assets/objects/000014520018.jpg",
    "assets/objects/000015250003.jpg",
    "assets/objects/000015250013.jpg",
    "assets/objects/000015250019.jpg",
    "assets/objects/000019690017.jpg",
    "assets/objects/000019730011.jpg",
    "assets/objects/AP3.jpg",
    "assets/objects/FH030026.jpg",
    "assets/objects/SoMapagmahal_BayanihanMural.jpg",
  ];

  const hands = [];
  let currentIndexHands = 0;

  // Function to shuffle an array
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Preloads images
  function preload() {
    return Promise.all(
      imgHands.map((url) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => {
            console.log(`Hand images loaded`); // Log when each image is loaded
            resolve(img);
          };
          img.onerror = () => {
            console.error(`Failed to load image: ${url}`); // Log if an image fails to load
          };
        });
      })
    );
  }

  // Sets up the canvas and draws the first image
  function setup() {
    const canvas = document.getElementById("imgHands");
    const ctx = canvas.getContext("2d");

    // Draw the first image
    draw(ctx);
  }

  // Draws the current image on the canvas
  function draw(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    const img = hands[currentIndexHands];
    ctx.drawImage(
      img,
      (ctx.canvas.width - img.width / 2) / 2,
      (ctx.canvas.height - img.height / 2) / 2,
      img.width / 2,
      img.height / 2
    );
  }

  // Moves to the next image
  function nextImage() {
    currentIndexHands++;
    if (currentIndexHands >= hands.length) {
      currentIndexHands = 0; // Wrap around to the first image
    }
    const canvas = document.getElementById("imgHands");
    const ctx = canvas.getContext("2d");
    draw(ctx);
  }

  // Preload images and set up the canvas
  preload()
    .then((loadedImages) => {
      hands.push(...loadedImages);
      shuffle(hands); // Shuffle images here
      console.log("Hand images preloaded and shuffled."); // Log after all images are loaded and shuffled
      setup();

      // Optionally add an interval to automatically change images
      setInterval(nextImage, 200); // Change image every 500 milliseconds
    })
    .catch((err) => {
      console.error("Error preloading images:", err);
    });
});