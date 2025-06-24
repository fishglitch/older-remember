document.addEventListener("DOMContentLoaded", () => {
  const imgSentientBeings = [
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

  const sentientBeings = []; // Updated variable name
  let currentIndexSentient = 0; // Updated variable name

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
      imgSentientBeings.map((url) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => {
            console.log(`Sentient being image loaded: ${url}`); // Log when each image is loaded
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
    const canvas = document.getElementById("imgSentient"); // Updated canvas element ID
    const ctx = canvas.getContext("2d");

    // Draw the first image
    draw(ctx);
  }

  // Draws the current image on the canvas
  function draw(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    const img = sentientBeings[currentIndexSentient]; // Updated array reference
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
    currentIndexSentient++; // Updated variable reference
    if (currentIndexSentient >= sentientBeings.length) {
      currentIndexSentient = 0; // Wrap around to the first image
    }
    const canvas = document.getElementById("imgSentient"); // Updated canvas element ID
    const ctx = canvas.getContext("2d");
    draw(ctx);
  }

  // Preload images and set up the canvas
  preload()
    .then((loadedImages) => {
      sentientBeings.push(...loadedImages); // Updated array reference
      shuffle(sentientBeings); // Shuffle images here
      console.log("Sentient being images preloaded and shuffled."); // Log after all images are loaded and shuffled
      setup();

      // Optionally add an interval to automatically change images
      setInterval(nextImage, 500); // Change image every 500 milliseconds
    })
    .catch((err) => {
      console.error("Error preloading images:", err);
    });
});