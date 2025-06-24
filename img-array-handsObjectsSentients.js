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
    "assets/sentient-beings/000007400021.jpg",
    "assets/sentient-beings/000007420019.jpg",
    "assets/sentient-beings/000007440022.jpg",
    "assets/sentient-beings/000007440024.jpg",
    "assets/sentient-beings/000007440026.jpg",
    "assets/sentient-beings/000009150002.jpg",
    "assets/sentient-beings/000009150003.jpg",
    "assets/sentient-beings/000009150014.jpg",
    "assets/sentient-beings/000009150015.jpg",
    "assets/sentient-beings/000009150017.jpg",
    "assets/sentient-beings/000009160009.jpg",
    "assets/sentient-beings/000009160018.jpg",
    "assets/sentient-beings/000009170017.jpg",
    "assets/sentient-beings/000009170029.jpg",
    "assets/sentient-beings/000009180017.jpg",
    "assets/sentient-beings/000009180018.jpg",
    "assets/sentient-beings/000009180023.jpg",
    "assets/sentient-beings/000011550004.jpg",
    "assets/sentient-beings/000014230005.jpg",
    "assets/sentient-beings/000014500001.jpg",
    "assets/sentient-beings/000014520002.jpg",
    "assets/sentient-beings/000014520036.jpg",
    "assets/sentient-beings/000019750019.jpg",
    "assets/sentient-beings/20190418_SoMapagmahalVMDshoot.etc_028_Erina C Alejo.JPG",
    "assets/sentient-beings/20190418_SoMapagmahalVMDshoot.etc_032_Erina C Alejo.JPG",
    "assets/sentient-beings/000051240014.jpg",
    "assets/sentient-beings/alejo000820-R1-042-19A.jpg",
    "assets/sentient-beings/alejo000820-R1-044-20A.jpg",
    "assets/sentient-beings/alejo000820-R1-048-22A.jpg",
    "assets/sentient-beings/AP8.jpg",
    "assets/sentient-beings/FH030002.jpeg",
    "assets/sentient-beings/SoMapagmahal_Alley.jpg",
    "assets/sentient-beings/vines - Copy of 000009150003.jpg"
    
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
    // Start the image cycling with random intervals
    cycleImages(ctx);
  }

  // Moves to the next image
  function nextImage(ctx) {
    currentIndexHands++;
    if (currentIndexHands >= hands.length) {
      currentIndexHands = 0;
    }
    draw(ctx);
  }

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

  // Cycle through images with varying intervals
  function cycleImages(ctx) {
    nextImage(ctx); // Call to show the next image

    // Generate a random interval between 300 and 1500 milliseconds
    const randomInterval = Math.floor(Math.random() * (800 + 1)) + 300; // Random between 300 ms and 1500 ms
    setTimeout(() => cycleImages(ctx), randomInterval); // Call the next cycle with the random interval
  }

  // Preload images and set up the canvas
  preload()
    .then((loadedImages) => {
      hands.push(...loadedImages); // Push loaded images into the 'hands' array
      shuffle(hands); // Shuffle hands images
      console.log("Hand images preloaded and shuffled."); // Log after all images are loaded and shuffled
      setup();
    })
    .catch((err) => {
      console.error("Error preloading images:", err);
    });
});