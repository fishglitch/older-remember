document.addEventListener("DOMContentLoaded", function () {
  console.log("Document loaded, trying to access the video element...");

  const videoElement = document.getElementById("videoElement");
  console.log("Video Element:", videoElement); // Check if videoElement is null

  // Check if the videoElement exists
  if (!videoElement) {
    console.error("Video element not found!");
    return; // Exit if the video element is not found
  }

  // Video sources
  const videoSources = [
    "assets/vids/student-walkout-trump-4x.mp4",
    "assets/vids/bong-budots.mp4",
    "assets/vids/budots-explained-by-white-man.mp4",
    "assets/vids/twitter-tax-fifthed-2x.mov",
    "assets/vids/du30-candidates.mov",
    "assets/vids/iris-canada.mov",
    "assets/vids/hidden-cell3.mov",
    "assets/vids/drumpf-budots.mov",
    "assets/vids/little-masantol-2x.mp4",
    "assets/vids/du30-americans.mov",
    "assets/vids/sagay-massacre-2x-captioned.mov",
    "assets/vids/du30-with-lady.mov",
    "assets/vids/hidden-cell-8days.mov",
    "assets/vids/1000cuts-2x.mov",
    "assets/vids/aninoko-ice-clip.mov",
  ];

  let currentVideoIndex = 0;

  // Function to play the next video in the array
  function playNextVideo() {
    // Set the video source to the current index
    videoElement.src = videoSources[currentVideoIndex];

    // Play the video
    videoElement.play().catch((error) => {
      console.error("Error trying to play the video:", error);
    });

    // Increment the index for the next video
    currentVideoIndex++;

    // Reset the index if it exceeds the length of the array
    if (currentVideoIndex >= videoSources.length) {
      currentVideoIndex = 0; // Loop back to the first video
    }
  }

  // Event listener to play the next video when the current one ends
  videoElement.addEventListener("ended", playNextVideo);

  // Start with the first video
  playNextVideo();
});
