document.addEventListener("DOMContentLoaded", function () {
    console.log("Document loaded, trying to access the video element...");
  
    const videoElement = document.getElementById("videoElement");
    console.log("Video Element:", videoElement);
  
    if (!videoElement) {
      console.error("Video element not found!");
      return;
    }
  
    const videoSources = [
      "assets/vids/student-walkout-trump-4x.mp4",
      "assets/vids/bong-budots.mp4",
      "assets/vids/budots-explained-by-white-man.mp4",
      "assets/vids/twitter-tax-fifthed-2xvol-inc.mov",
      "assets/vids/du30-candidates.mov",
      "assets/vids/iris-canada-captions-vol-inc.mp4",
      "assets/vids/hidden-cell3.mov",
      "assets/vids/drumpf-budots.mov",
      "assets/vids/little-masantol-2x.mp4",
      "assets/vids/du30-americans.mov",
      "assets/vids/sagay-massacre-2x-captioned.mov",
      "assets/vids/du30-with-lady.mov",
      "assets/vids/hidden-cell-8days.mov",
      "assets/vids/Salesforce-time-lapse.mp4",
      "assets/vids/1000cuts-2x.mov",
      "assets/vids/aninoko-ice-clip-audio-replaced.mp4",
      "assets/vids/dj-love-boiler-edited.mp4",
    ];
  
    let currentVideoIndex = 0;
    let videoPosition = { x: 0, y: 0 };
    let moveSpeed = 3; // Increased for faster movement
    let moveDirection = { x: 1, y: 1 }; // Start with a direction
    let animationFrameId; // Store the animation frame ID for cancellation
  
    function playNextVideo() {
      videoElement.src = videoSources[currentVideoIndex];
      videoElement.play().catch((error) => {
        console.error("Error trying to play the video:", error);
      });
  
      currentVideoIndex++;
      if (currentVideoIndex >= videoSources.length) {
        currentVideoIndex = 0;
      }
  
      // Initial positioning
      teleportVideo(); // Use teleport to set initial position
      calculateDirection(); // Recalculate direction after teleporting
      startSliding(); // Start the animation
    }
  
    function teleportVideo() {
      const overlayContainer = document.getElementById("overlayContainer");
      const containerWidth = overlayContainer.clientWidth;
      const containerHeight = overlayContainer.clientHeight;
  
      // Get video dimensions, using offsetWidth/Height after setting the src
      videoElement.style.position = 'absolute';  // VERY IMPORTANT
      videoElement.style.display = 'block'; // Needed if flex is used; this overrides it
  
      const videoWidth = videoElement.offsetWidth || videoElement.videoWidth;
      const videoHeight = videoElement.offsetHeight || videoElement.videoHeight;
  
  
      // Calculate random positions, ensuring the video stays within the container
      videoPosition.x = Math.random() * (containerWidth - videoWidth);
      videoPosition.y = Math.random() * (containerHeight - videoHeight);
  
      // Apply the new position
      videoElement.style.left = `${videoPosition.x}px`;
      videoElement.style.top = `${videoPosition.y}px`;
    }
  
    function calculateDirection() {
      const overlayContainer = document.getElementById("overlayContainer");
      const containerWidth = overlayContainer.clientWidth;
      const containerHeight = overlayContainer.clientHeight;
      const videoWidth = videoElement.offsetWidth || videoElement.videoWidth;
      const videoHeight = videoElement.offsetHeight || videoElement.videoHeight;
  
      // Determine direction based on container size and current position
      if (videoPosition.x <= 0) {
        moveDirection.x = 1; // Right
      }
      if (videoPosition.x + videoWidth >= containerWidth) {
        moveDirection.x = -1; // Left
      }
      if (videoPosition.y <= 0) {
        moveDirection.y = 1; // Down
      }
      if (videoPosition.y + videoHeight >= containerHeight) {
        moveDirection.y = -1; // Up
      }
    }
  
    function slideVideo() {
      const overlayContainer = document.getElementById("overlayContainer");
      const containerWidth = overlayContainer.clientWidth;
      const containerHeight = overlayContainer.clientHeight;
      const videoWidth = videoElement.offsetWidth || videoElement.videoWidth;
      const videoHeight = videoElement.offsetHeight || videoElement.videoHeight;
  
  
      // Update position
      videoPosition.x += moveDirection.x * moveSpeed;
      videoPosition.y += moveDirection.y * moveSpeed;
  
      // Boundary checks and direction reversal
      if (videoPosition.x < 0) {
        videoPosition.x = 0;
        moveDirection.x *= -1;
      }
      if (videoPosition.x + videoWidth > containerWidth) {
        videoPosition.x = containerWidth - videoWidth;
        moveDirection.x *= -1;
      }
      if (videoPosition.y < 0) {
        videoPosition.y = 0;
        moveDirection.y *= -1;
      }
      if (videoPosition.y + videoHeight > containerHeight) {
        videoPosition.y = containerHeight - videoHeight;
        moveDirection.y *= -1;
      }
  
      // Apply new position
      videoElement.style.left = `${videoPosition.x}px`;
      videoElement.style.top = `${videoPosition.y}px`;
  
      // Request next frame if the video is still playing
      if (!videoElement.paused && !videoElement.ended) {
        animationFrameId = requestAnimationFrame(slideVideo);
      } else {
        teleportVideo();
        calculateDirection();
        startSliding();
      }
    }
  
    function startSliding() {
        // Cancel any existing animation
        cancelAnimationFrame(animationFrameId);
        slideVideo(); // Start the animation
    }
  
    videoElement.addEventListener("ended", playNextVideo);
    playNextVideo(); // Start with the first video
  });