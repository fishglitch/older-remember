document.addEventListener("DOMContentLoaded", () => {
  const imgPeople = [
    "assets/ppl-grps/000007410002.jpg",
    "assets/ppl-grps/000009130008.jpg",
    "assets/ppl-grps/000009140012.jpg",
    "assets/ppl-grps/000009150018.jpg",
    "assets/ppl-grps/000009160023.jpg",
    "assets/ppl-grps/000009170006.jpg",
    "assets/ppl-grps/000009170008.jpg",
    "assets/ppl-grps/000009180031.jpg",
    "assets/ppl-grps/000014230017.jpg",
    "assets/ppl-grps/000014260004.jpg",
    "assets/ppl-grps/000014260012.jpg",
    "assets/ppl-grps/20190409_154923.jpg",
    "assets/ppl-grps/alejo000820-R1-020-8A.jpg",
    "assets/ppl-grps/alejo000820-R1-046-21A.jpg",
    "assets/ppl-grps/alejo000820-R1-076-36A.jpg",
    "assets/ppl-grps/IMG_0014.JPG",
    "assets/ppl-grps/IMG_2307.JPG",
    "assets/ppl-grps/IMG_2308.JPG",
    "assets/ppl-grps/IMG_7738.JPG",
    "assets/ppl-grps/RI_Aaliyah_Track.jpg",
    "assets/ppl-grps/RI4.jpg",
    "assets/ppl-grps/volleyball - Copy of 000007430019.jpg",
    "assets/ppl-solo/000007430020.jpg",
    "assets/ppl-solo/000009130006.jpg",
    "assets/ppl-solo/000009130018.jpg",
    "assets/ppl-solo/000009140014.jpg",
    "assets/ppl-solo/000009140015.jpg",
    "assets/ppl-solo/000011550006.jpg",
    "assets/ppl-solo/000014260003.jpg",
    "assets/ppl-solo/000015250001.jpg",
    "assets/ppl-solo/20190418_SoMapagmahalVMDshoot.etc_035_Erina C Alejo.JPG",
    "assets/ppl-solo/alejo000820-R1-006-1A.jpg",
    "assets/ppl-solo/alejo000820-R1-070-33A.jpg",
    "assets/ppl-solo/alejo000820-R1-072-34A.jpg",
    "assets/ppl-solo/anais - 000019700018.jpg",
    "assets/ppl-solo/davids mom - Copy of 000019730001.jpg",
    "assets/ppl-solo/FH010006.jpeg",
    "assets/ppl-solo/FH030001.jpg",
    "assets/ppl-solo/ganni-letter-redacted.jpg",
    "assets/ppl-solo/kuya tim - Copy of 000019730006.jpg",
    "assets/ppl-solo/MCC5.jpg",
    "assets/ppl-solo/mr tak - Copy of 000019730014.jpg",
    "assets/ppl-solo/mr tak supplies - Copy of 000019730007.jpg",
    "assets/ppl-solo/VE_Arnold_Aaliyah_Cola.jpg"
  ];

  const peopleImages = []; // Renamed variable
  let currentIndexPeople = 0; // Renamed variable

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
      imgPeople.map((url) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => {
            console.log(`People images loaded`); // Log when each image is loaded
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
    const canvas = document.getElementById("imgPpl"); // Renamed element
    const ctx = canvas.getContext("2d");

    // Draw the first image
    draw(ctx);
  }

  // Draws the current image on the canvas
  function draw(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    const img = peopleImages[currentIndexPeople]; // Renamed array
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
    currentIndexPeople++; // Renamed variable
    if (currentIndexPeople >= peopleImages.length) {
      currentIndexPeople = 0; // Wrap around to the first image
    }
    const canvas = document.getElementById("imgPpl"); // Renamed element
    const ctx = canvas.getContext("2d");
    draw(ctx);
  }

  // Preload images and set up the canvas
  preload()
    .then((loadedImages) => {
      peopleImages.push(...loadedImages); // Renamed array
      shuffle(peopleImages); // Shuffle images here
      console.log("People images preloaded and shuffled."); // Log after all images are loaded and shuffled
      setup();

      // Optionally add an interval to automatically change images
      setInterval(nextImage, 500); // Change image every 500 milliseconds
    })
    .catch((err) => {
      console.error("Error preloading images:", err);
    });
});