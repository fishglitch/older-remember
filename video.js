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
    "assets/vids/iris-canada-captions.mp4",
    "assets/vids/hidden-cell3.mov",
    "assets/vids/drumpf-budots.mov",
    "assets/vids/little-masantol-2x.mp4",
    "assets/vids/du30-americans.mov",
    "assets/vids/sagay-massacre-2x-captioned.mov",
    "assets/vids/du30-with-lady.mov",
    "assets/vids/hidden-cell-8days.mov",
    "assets/vids/Salesforce-time-lapse..mp4",
    "assets/vids/1000cuts-2x.mov",
    "assets/vids/aninoko-ice-clip-audio-replaced.mp4",
    "assets/vids/dj-love-boiler-edited.mp4"
  ];

  let currentVideoIndex = 0;
  let videoPosition = { x: 0, y: 0 }; // Initial position
  let moveSpeed = .5; // Pixels to move per frame
  let moveDirection = { x: 0, y: 0 }; // Direction of movement

  function playNextVideo() {
    // Set the video source for the current index
    videoElement.src = videoSources[currentVideoIndex];
    
    // Play the video
    videoElement.play().catch((error) => {
        console.error("Error trying to play the video:", error);
    });

    // Increment the index for the next video
    currentVideoIndex++;
    if (currentVideoIndex >= videoSources.length) {
        currentVideoIndex = 0; 
    }

    // Set random starting position for the video
    const overlayContainer = document.getElementById("overlayContainer");
    const containerWidth = overlayContainer.clientWidth;
    const containerHeight = overlayContainer.clientHeight;

    // Get video dimensions
    const videoWidth = videoElement.offsetWidth || videoElement.videoWidth;
    const videoHeight = videoElement.offsetHeight || videoElement.videoHeight;

    // Calculate new random positions within bounds 
    // Ensure the position is such that the video doesn't overflow the container
    videoPosition.x = Math.random() * (containerWidth - videoWidth); // Random x position
    videoPosition.y = Math.random() * (containerHeight - videoHeight); // Random y position

    // Position the video element
    videoElement.style.position = 'absolute';
    videoElement.style.left = `${videoPosition.x}px`;
    videoElement.style.top = `${videoPosition.y}px`;

    // Determine initial movement direction
    calculateDirection(); // Determine initial direction
    slideVideo(); // Start the sliding movement
}
  function teleportVideo() {
      const overlayContainer = document.getElementById("overlayContainer");
      const containerWidth = overlayContainer.clientWidth;
      const containerHeight = overlayContainer.clientHeight;

      // Get video dimensions
      const videoWidth = videoElement.offsetWidth || videoElement.videoWidth;
      const videoHeight = videoElement.offsetHeight || videoElement.videoHeight;

      // Calculate new random positions within bounds
      const randomX = Math.random() * (containerWidth - videoWidth);
      const randomY = Math.random() * (containerHeight - videoHeight);

      videoElement.style.position = 'absolute';
      videoElement.style.left = `${randomX}px`;
      videoElement.style.top = `${randomY}px`;
  }

  function calculateDirection() {
      const overlayContainer = document.getElementById("overlayContainer");
      const containerWidth = overlayContainer.clientWidth;
      const containerHeight = overlayContainer.clientHeight;

      // Dimensions of video
      const videoWidth = videoElement.offsetWidth || videoElement.videoWidth;
      const videoHeight = videoElement.offsetHeight || videoElement.videoHeight;

      // Space calculation
      const spaceLeft = videoPosition.x; // space on the left
      const spaceRight = containerWidth - (videoPosition.x + videoWidth); // space on the right
      const spaceAbove = videoPosition.y; // space above
      const spaceBelow = containerHeight - (videoPosition.y + videoHeight); // space below

      // Decide movement direction based on available space
      if (spaceLeft > spaceRight) {
          moveDirection.x = -moveSpeed; // Move left
      } else {
          moveDirection.x = moveSpeed; // Move right
      }

      if (spaceAbove > spaceBelow) {
          moveDirection.y = -moveSpeed; // Move up
      } else {
          moveDirection.y = moveSpeed; // Move down
      }
  }

  function slideVideo() {
      const overlayContainer = document.getElementById("overlayContainer");
      const containerWidth = overlayContainer.clientWidth;
      const containerHeight = overlayContainer.clientHeight;

        // Move the video by a fraction of the move speed for smoother movement
        videoPosition.x += moveDirection.x * (moveSpeed / 2);  // Change the division to make it smoother
        videoPosition.y += moveDirection.y * (moveSpeed / 2);  // Same here

      // Update video position
      videoPosition.x += moveDirection.x;
      videoPosition.y += moveDirection.y;

      // Apply new position
      videoElement.style.position = 'absolute';
      videoElement.style.left = `${videoPosition.x}px`;
      videoElement.style.top = `${videoPosition.y}px`;

      // Check for canvas boundaries
      if (videoPosition.x < 0 || videoPosition.x > containerWidth - (videoElement.offsetWidth || videoElement.videoWidth)) {
          moveDirection.x *= -1; // Reverse horizontal direction
      }

      if (videoPosition.y < 0 || videoPosition.y > containerHeight - (videoElement.offsetHeight || videoElement.videoHeight)) {
          moveDirection.y *= -1; // Reverse vertical direction
      }

      // Keep sliding while video is playing
      if (!videoElement.paused && !videoElement.ended) {
          requestAnimationFrame(slideVideo);
      } else {
          teleportVideo(); // Teleport when done
      }
  }

  videoElement.addEventListener("ended", playNextVideo);
  playNextVideo(); // Start with the first video
});