document.addEventListener("DOMContentLoaded", function () {
    console.log("Document loaded, trying to access the video element...");
    
    const videoElement = document.getElementById('videoElement');
    console.log("Video Element:", videoElement); // Check if videoElement is null

    // Check if the videoElement exists
    if (!videoElement) {
        console.error("Video element not found!");
        return; // Exit if the video element is not found
    }

    // Video sources
    const videoSources = [
        "assets/vids/bong-budots.mp4",
        "assets/vids/du30-americans.mov",
        "assets/vids/hidden-cell3.mov" 
    ];

    let currentVideoIndex = 0;

    // Function to play the next video in the array
    function playNextVideo() {
        // Set the video source to the current index
        videoElement.src = videoSources[currentVideoIndex];

        // Play the video
        videoElement.play().catch(error => {
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
    videoElement.addEventListener('ended', playNextVideo);

    // Start with the first video
    playNextVideo();
});