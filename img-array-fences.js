document.addEventListener("DOMContentLoaded", () => {
  const imageFences = [
    "assets/fences/2017-04-24 15.31.54.jpg",
    "assets/fences/000007400012.jpg",
    "assets/fences/000007440024.jpg",
    "assets/fences/000007440026.jpg",
    "assets/fences/000007440035.jpeg",
    "assets/fences/000007440035.jpg",
    "assets/fences/alejo000820-R1-054-25A.jpg",
    "assets/fences/FH010010.jpeg",
    "assets/fences/FH020011.jpeg",
  ];

  const fences = [];
  let currentIndexFences = 0;

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
      imageFences.map((url) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => {
            console.log(`fence images loaded`); // Log when each image is loaded
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
    const canvas = document.getElementById("imgFences");
    const ctx = canvas.getContext("2d");

    // Draw the first image
    draw(ctx);
  }

  // Draws the current image on the canvas
  function draw(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    const img = fences[currentIndexFences];
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
    currentIndexFences++;
    if (currentIndexFences >= fences.length) {
      currentIndexFences = 0;
    }
    const canvas = document.getElementById("imgFences");
    const ctx = canvas.getContext("2d");
    draw(ctx);
  }

  // Preload images and set up the canvas
  preload().then((loadedImages) => {
    fences.push(...loadedImages);
    shuffle(fences); // Shuffle images here
    console.log("fence eimages preloaded and shuffled."); // Log after all images are loaded and shuffled
    setup();

    // Optionally add an interval to automatically change images
    setInterval(nextImage, 500); // change image every n milliseconds
  });
});
