// Step 1: Get the image and audio elements
var image = document.getElementById('playaudio'); // Retrieve the image element by its ID
var audio = document.getElementById('myaudio');   // Retrieve the audio element by its ID

// Step 2: Check local storage for sound status
if (!localStorage.getItem('soundEnabled')) { // Check if 'soundEnabled' is not set in local storage
    // If sound is not enabled, set up a click event on the document
    document.addEventListener('click', function() { // Listen for a click event on the document
        
        audio.muted = false; // Unmute audio, allowing it to be played

        localStorage.setItem('soundEnabled', 'true'); // Save sound status as enabled in local storage
        
        alert("Sound enabled! You can now hover over the image."); // Alert user that sound is enabled

        // Remove click event after enabling sound to prevent multiple triggers
        document.removeEventListener('click', arguments.callee); // This stops listening for the click event
    });
} else {
    // If sound was previously enabled, unmute it
    audio.muted = false; // Unmute the audio if it was already enabled
}

// Step 3: Add an event listener to the image to listen for 'mouseover' (hover)
image.addEventListener('mouseover', function() { // Listen for mouseover is -> hover of css over the image
    
    if (audio.paused) { // Check if the audio is currently paused
        audio.play(); // Play the audio if it's paused
    }
});

// Step 4: Add another event listener for 'mouseout' to stop the audio when you stop hovering
image.addEventListener('mouseout', function() { // Listen for when the mouse leaves the image
    audio.pause(); // Pause the audio when the mouse is no longer hovering
    // Do NOT reset currentTime to allow resuming from last position
});
