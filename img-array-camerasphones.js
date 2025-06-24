document.addEventListener("DOMContentLoaded", () => {
    const imgCameraPhones = [
      "assets/cameras-phones/000007410001.jpg",
      "assets/cameras-phones/000009130001.jpg",
      "assets/cameras-phones/000009130023.jpg",
      "assets/cameras-phones/000009150019.jpg",
      "assets/cameras-phones/000014230004.jpg",
      "assets/cameras-phones/000019690015.jpg",
      "assets/cameras-phones/000019690020.jpg",
      "assets/cameras-phones/000019710005.jpg",
      "assets/cameras-phones/000019720022.jpg",
      "assets/cameras-phones/IMG_0910.JPG",
      "assets/cameras-phones/IMG_6393.JPG",
    ];
  
    const cameraPhones = [];
    let currentCameraIndex = 0;
  
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
        imgCameraPhones.map((url) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
              console.log(`Camera and phone image loaded`); // Log when each image is loaded
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
      const canvas = document.getElementById("imgCameraPhones");
      const ctx = canvas.getContext("2d");
      console.log("Setup complete. Drawing first image..."); // Log setup completion
  
      // Draw the first image
      draw(ctx);
          // Start the image cycling with random intervals
    cycleImages(ctx);
    }
  
    // Draws the current image on the canvas
    function draw(ctx) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      const img = cameraPhones[currentCameraIndex];
      ctx.drawImage(
        img,
        (ctx.canvas.width - img.width / 2) / 2,
        (ctx.canvas.height - img.height / 2) / 2,
        img.width / 2,
        img.height / 2
      );
      // console.log(`Drawing image ${currentCameraIndex + 1} out of ${cameraPhones.length}`); // Log which image is being drawn
    }
  
    // Moves to the next image
    function nextImage() {
      currentCameraIndex++;
      if (currentCameraIndex >= cameraPhones.length) {
        currentCameraIndex = 0;
      }
      const canvas = document.getElementById("imgCameraPhones");
      const ctx = canvas.getContext("2d");
      draw(ctx);
    }
  
      // Cycle through images with varying intervals
  function cycleImages(ctx) {
    nextImage(ctx); // Call to show the next image

    // Generate a random interval between 300 and 1500 milliseconds
    const randomInterval = Math.floor(Math.random() * (1500 + 1)) + 300; // Random between 300 ms and 1500 ms
    setTimeout(() => cycleImages(ctx), randomInterval); // Call the next cycle with the random interval
  }


    // Preload images and set up the canvas
    preload()
      .then((loadedImages) => {
        cameraPhones.push(...loadedImages);
        shuffle(cameraPhones); // Shuffle images here
        console.log("Camera phone images preloaded and shuffled."); // Log after all images are loaded and shuffled
        setup();
  
        // Optionally add an interval to automatically change images
        setInterval(nextImage, 500); // Change image every 500 milliseconds
      })
      .catch((err) => {
        console.error("Error preloading images:", err);
      });
  });