// NOTE BY CHANCE I KEPT ID AND  VARIABLE NAME IN JAVASCRIPT AS SAME

/*for first image,audio,figcaption*/

// Step 1: Get the image and audio elements
var image = document.getElementById('playaudio'); // Retrieve the image element by its ID
var audio = document.getElementById('myaudio') ;






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




/*1.1)taken for hovering on figcaption bcoz its block element itself */

var figcapone = document.getElementById('figcapone')
var audio = document.getElementById('myaudio') ;



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
figcapone.addEventListener('mouseover', function() { // Listen for mouseover is -> hover of css over the image
    
    if (audio.paused) { // Check if the audio is currently paused
        audio.play(); // Play the audio if it's paused
    }
});

// Step 4: Add another event listener for 'mouseout' to stop the audio when you stop hovering
figcapone.addEventListener('mouseout', function() { // Listen for when the mouse leaves the image
    audio.pause(); // Pause the audio when the mouse is no longer hovering
    // Do NOT reset currentTime to allow resuming from last position
});










//********************************************************************************** */
// 2>>>>>>>>
/*for second image,audio,figcaption*/
// i can create this with java script arrays and loop but for now longer code bcoz dont know js 


// Step 1: Get the image and audio elements
var imagesec = document.getElementById('secondimg'); // Retrieve the image element by its ID
var audiosec = document.getElementById('myaudiosec') ;



// Step 2: Check local storage for sound status
if (!localStorage.getItem('soundEnabled')) { // Check if 'soundEnabled' is not set in local storage
    // If sound is not enabled, set up a click event on the document
    document.addEventListener('click', function() { // Listen for a click event on the document
        
        audiosec.muted = false; // Unmute audio, allowing it to be played

        localStorage.setItem('soundEnabled', 'true'); // Save sound status as enabled in local storage
        
        alert("Sound enabled! You can now hover over the image."); // Alert user that sound is enabled

        // Remove click event after enabling sound to prevent multiple triggers
        document.removeEventListener('click', arguments.callee); // This stops listening for the click event
    });
} else {
    // If sound was previously enabled, unmute it
    audiosec.muted = false; // Unmute the audio if it was already enabled
}

// Step 3: Add an event listener to the image to listen for 'mouseover' (hover)
imagesec.addEventListener('mouseover', function() { // Listen for mouseover is -> hover of css over the image
    
    if (audiosec.paused) { // Check if the audio is currently paused
        audiosec.play(); // Play the audio if it's paused
    }
});

// Step 4: Add another event listener for 'mouseout' to stop the audio when you stop hovering
imagesec.addEventListener('mouseout', function() { // Listen for when the mouse leaves the image
    audiosec.pause(); // Pause the audio when the mouse is no longer hovering
    // Do NOT reset currentTime to allow resuming from last position
});





/*2.1)taken for hovering on figcaption bcoz its block element itself */


// Step 1: Get the image and audio elements

var figcaptwo = document.getElementById('figcaptwo')
var audiosec = document.getElementById('myaudiosec') ;



// Step 2: Check local storage for sound status
if (!localStorage.getItem('soundEnabled')) { // Check if 'soundEnabled' is not set in local storage
    // If sound is not enabled, set up a click event on the document
    document.addEventListener('click', function() { // Listen for a click event on the document
        
        audiosec.muted = false; // Unmute audio, allowing it to be played

        localStorage.setItem('soundEnabled', 'true'); // Save sound status as enabled in local storage
        
        alert("Sound enabled! You can now hover over the image."); // Alert user that sound is enabled

        // Remove click event after enabling sound to prevent multiple triggers
        document.removeEventListener('click', arguments.callee); // This stops listening for the click event
    });
} else {
    // If sound was previously enabled, unmute it
    audiosec.muted = false; // Unmute the audio if it was already enabled
}

// Step 3: Add an event listener to the image to listen for 'mouseover' (hover)
figcaptwo.addEventListener('mouseover', function() { // Listen for mouseover is -> hover of css over the image
    
    if (audiosec.paused) { // Check if the audio is currently paused
        audiosec.play(); // Play the audio if it's paused
    }
});

// Step 4: Add another event listener for 'mouseout' to stop the audio when you stop hovering
figcaptwo.addEventListener('mouseout', function() { // Listen for when the mouse leaves the image
    audiosec.pause(); // Pause the audio when the mouse is no longer hovering
    // Do NOT reset currentTime to allow resuming from last position
});









// 3)thirdtime
//********************************************************************************** */

// i can create this with java script arrays and loop but for now longer code bcoz dont know js 


// Step 1: Get the image and audio elements
var imagethird = document.getElementById('imagethird'); // Retrieve the image element by its ID
var audiothird = document.getElementById('audiothird') ;



// Step 2: Check local storage for sound status
if (!localStorage.getItem('soundEnabled')) { // Check if 'soundEnabled' is not set in local storage
    // If sound is not enabled, set up a click event on the document
    document.addEventListener('click', function() { // Listen for a click event on the document
        
        audiothird.muted = false; // Unmute audio, allowing it to be played

        localStorage.setItem('soundEnabled', 'true'); // Save sound status as enabled in local storage
        
        alert("Sound enabled! You can now hover over the image."); // Alert user that sound is enabled

        // Remove click event after enabling sound to prevent multiple triggers
        document.removeEventListener('click', arguments.callee); // This stops listening for the click event
    });
} else {
    // If sound was previously enabled, unmute it
    audiothird.muted = false; // Unmute the audio if it was already enabled
}

// Step 3: Add an event listener to the image to listen for 'mouseover' (hover)
imagethird.addEventListener('mouseover', function() { // Listen for mouseover is -> hover of css over the image
    
    if (audiothird.paused) { // Check if the audio is currently paused
        audiothird.play(); // Play the audio if it's paused
    }
});

// Step 4: Add another event listener for 'mouseout' to stop the audio when you stop hovering
imagethird.addEventListener('mouseout', function() { // Listen for when the mouse leaves the image
    audiothird.pause(); // Pause the audio when the mouse is no longer hovering
    // Do NOT reset currentTime to allow resuming from last position
});






/*3.1)taken for hovering on figcaption bcoz its block element itself */

// i can create this with java script arrays and loop but for now longer code bcoz dont know js 


// Step 1: Get the image and audio elements
var figcapthree = document.getElementById('figcapthree'); // Retrieve the image element by its ID
var audiothird = document.getElementById('audiothird') ;



// Step 2: Check local storage for sound status
if (!localStorage.getItem('soundEnabled')) { // Check if 'soundEnabled' is not set in local storage
    // If sound is not enabled, set up a click event on the document
    document.addEventListener('click', function() { // Listen for a click event on the document
        
        audiothird.muted = false; // Unmute audio, allowing it to be played

        localStorage.setItem('soundEnabled', 'true'); // Save sound status as enabled in local storage
        
        alert("Sound enabled! You can now hover over the image."); // Alert user that sound is enabled

        // Remove click event after enabling sound to prevent multiple triggers
        document.removeEventListener('click', arguments.callee); // This stops listening for the click event
    });
} else {
    // If sound was previously enabled, unmute it
    audiothird.muted = false; // Unmute the audio if it was already enabled
}

// Step 3: Add an event listener to the image to listen for 'mouseover' (hover)
figcapthree.addEventListener('mouseover', function() { // Listen for mouseover is -> hover of css over the image
    
    if (audiothird.paused) { // Check if the audio is currently paused
        audiothird.play(); // Play the audio if it's paused
    }
});

// Step 4: Add another event listener for 'mouseout' to stop the audio when you stop hovering
figcapthree.addEventListener('mouseout', function() { // Listen for when the mouse leaves the image
    audiothird.pause(); // Pause the audio when the mouse is no longer hovering
    // Do NOT reset currentTime to allow resuming from last position
});








// fourth
//********************************************************************************** */

// i can create this with java script arrays and loop but for now longer code bcoz dont know js 


// Step 1: Get the image and audio elements
var imagefourth = document.getElementById('imagefourth'); // Retrieve the image element by its ID
var audiofourth = document.getElementById('audiofourth') ;



// Step 2: Check local storage for sound status
if (!localStorage.getItem('soundEnabled')) { // Check if 'soundEnabled' is not set in local storage
    // If sound is not enabled, set up a click event on the document
    document.addEventListener('click', function() { // Listen for a click event on the document
        
        audiofourth.muted = false; // Unmute audio, allowing it to be played

        localStorage.setItem('soundEnabled', 'true'); // Save sound status as enabled in local storage
        
        alert("Sound enabled! You can now hover over the image."); // Alert user that sound is enabled

        // Remove click event after enabling sound to prevent multiple triggers
        document.removeEventListener('click', arguments.callee); // This stops listening for the click event
    });
} else {
    // If sound was previously enabled, unmute it
    audiofourth.muted = false; // Unmute the audio if it was already enabled
}

// Step 3: Add an event listener to the image to listen for 'mouseover' (hover)
imagefourth.addEventListener('mouseover', function() { // Listen for mouseover is -> hover of css over the image
    
    if (audiofourth.paused) { // Check if the audio is currently paused
        audiofourth.play(); // Play the audio if it's paused
    }
});

// Step 4: Add another event listener for 'mouseout' to stop the audio when you stop hovering
imagefourth.addEventListener('mouseout', function() { // Listen for when the mouse leaves the image
    audiofourth.pause(); // Pause the audio when the mouse is no longer hovering
    // Do NOT reset currentTime to allow resuming from last position
});



/*4.1)taken for hovering on figcaption bcoz its block element itself */
//********************************************************************************** */

// i can create this with java script arrays and loop but for now longer code bcoz dont know js 


// Step 1: Get the image and audio elements
var figcapfour = document.getElementById('figcapfour'); // Retrieve the image element by its ID
var audiofourth = document.getElementById('audiofourth') ;



// Step 2: Check local storage for sound status
if (!localStorage.getItem('soundEnabled')) { // Check if 'soundEnabled' is not set in local storage
    // If sound is not enabled, set up a click event on the document
    document.addEventListener('click', function() { // Listen for a click event on the document
        
        audiofourth.muted = false; // Unmute audio, allowing it to be played

        localStorage.setItem('soundEnabled', 'true'); // Save sound status as enabled in local storage
        
        alert("Sound enabled! You can now hover over the image."); // Alert user that sound is enabled
figcapfour
        // Remove click event after enabling sound to prevent multiple triggers
        document.removeEventListener('click', arguments.callee); // This stops listening for the click event
    });
} else {
    // If sound was previously enabled, unmute it
    audiofourth.muted = false; // Unmute the audio if it was already enabled
}

// Step 3: Add an event listener to the image to listen for 'mouseover' (hover)
figcapfour.addEventListener('mouseover', function() { // Listen for mouseover is -> hover of css over the image
    
    if (audiofourth.paused) { // Check if the audio is currently paused
        audiofourth.play(); // Play the audio if it's paused
    }
});

// Step 4: Add another event listener for 'mouseout' to stop the audio when you stop hovering
figcapfour.addEventListener('mouseout', function() { // Listen for when the mouse leaves the image
    audiofourth.pause(); // Pause the audio when the mouse is no longer hovering
    // Do NOT reset currentTime to allow resuming from last position
});









// fifth
//********************************************************************************** */

// Step 1: Get the image and audio elements
var imagefifth = document.getElementById('imagefifth'); // Retrieve the image element by its ID
var audiofifth = document.getElementById('audiofifth') ;






// Step 2: Check local storage for sound status
if (!localStorage.getItem('soundEnabled')) { // Check if 'soundEnabled' is not set in local storage
    // If sound is not enabled, set up a click event on the document
    document.addEventListener('click', function() { // Listen for a click event on the document
        
        audiofifth.muted = false; // Unmute audio, allowing it to be played

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
imagefifth.addEventListener('mouseover', function() { // Listen for mouseover is -> hover of css over the image
    
    if (audiofifth.paused) { // Check if the audio is currently paused
        audiofifth.play(); // Play the audio if it's paused
    }
});

// Step 4: Add another event listener for 'mouseout' to stop the audio when you stop hovering
imagefifth.addEventListener('mouseout', function() { // Listen for when the mouse leaves the image
    audiofifth.pause(); // Pause the audio when the mouse is no longer hovering
    // Do NOT reset currentTime to allow resuming from last position
});




/*5.1)taken for hovering on figcaption bcoz its block element itself */

var figcapfive = document.getElementById('figcapfive')
var audiofifth = document.getElementById('audiofifth') ;



// Step 2: Check local storage for sound status
if (!localStorage.getItem('soundEnabled')) { // Check if 'soundEnabled' is not set in local storage
    // If sound is not enabled, set up a click event on the document
    document.addEventListener('click', function() { // Listen for a click event on the document
        
        audiofifth.muted = false; // Unmute audio, allowing it to be played

        localStorage.setItem('soundEnabled', 'true'); // Save sound status as enabled in local storage
        
        alert("Sound enabled! You can now hover over the image."); // Alert user that sound is enabled

        // Remove click event after enabling sound to prevent multiple triggers
        document.removeEventListener('click', arguments.callee); // This stops listening for the click event
    });
} else {
    // If sound was previously enabled, unmute it
    audiofifth.muted = false; // Unmute the audio if it was already enabled
}

// Step 3: Add an event listener to the image to listen for 'mouseover' (hover)
figcapfive.addEventListener('mouseover', function() { // Listen for mouseover is -> hover of css over the image
    
    if (audiofifth.paused) { // Check if the audio is currently paused
        audiofifth.play(); // Play the audio if it's paused
    }
});

// Step 4: Add another event listener for 'mouseout' to stop the audio when you stop hovering
figcapfive.addEventListener('mouseout', function() { // Listen for when the mouse leaves the image
    audiofifth.pause(); // Pause the audio when the mouse is no longer hovering
    // Do NOT reset currentTime to allow resuming from last position
});






// sixth
//********************************************************************************** */

// Step 1: Get the image and audio elements
var imagesix = document.getElementById('imagesix'); // Retrieve the image element by its ID
var audiosixth = document.getElementById('audiosixth') ;





// Step 2: Check local storage for sound status
if (!localStorage.getItem('soundEnabled')) { // Check if 'soundEnabled' is not set in local storage
    // If sound is not enabled, set up a click event on the document
    document.addEventListener('click', function() { // Listen for a click event on the document
        
        audiosixth.muted = false; // Unmute audio, allowing it to be played

        localStorage.setItem('soundEnabled', 'true'); // Save sound status as enabled in local storage
        
        alert("Sound enabled! You can now hover over the image."); // Alert user that sound is enabled

        // Remove click event after enabling sound to prevent multiple triggers
        document.removeEventListener('click', arguments.callee); // This stops listening for the click event
    });
} else {
    // If sound was previously enabled, unmute it
    audiosixth.muted = false; // Unmute the audio if it was already enabled
}

// Step 3: Add an event listener to the image to listen for 'mouseover' (hover)
imagesix.addEventListener('mouseover', function() { // Listen for mouseover is -> hover of css over the image
    
    if (audiosixth.paused) { // Check if the audio is currently paused
        audiosixth.play(); // Play the audio if it's paused
    }
});

// Step 4: Add another event listener for 'mouseout' to stop the audio when you stop hovering
imagesix.addEventListener('mouseout', function() { // Listen for when the mouse leaves the image
    audiosixth.pause(); // Pause the audio when the mouse is no longer hovering
    // Do NOT reset currentTime to allow resuming from last position
});




/*6.1)taken for hovering on figcaption bcoz its block element itself */

var figcapsix = document.getElementById('figcapsix')
var audiosixth = document.getElementById('audiosixth') ;



// Step 2: Check local storage for sound status
if (!localStorage.getItem('soundEnabled')) { // Check if 'soundEnabled' is not set in local storage
    // If sound is not enabled, set up a click event on the document
    document.addEventListener('click', function() { // Listen for a click event on the document
        
        audiosixth.muted = false; // Unmute audio, allowing it to be played

        localStorage.setItem('soundEnabled', 'true'); // Save sound status as enabled in local storage
        
        alert("Sound enabled! You can now hover over the image."); // Alert user that sound is enabled

        // Remove click event after enabling sound to prevent multiple triggers
        document.removeEventListener('click', arguments.callee); // This stops listening for the click event
    });
} else {
    // If sound was previously enabled, unmute it
    audiosixth.muted = false; // Unmute the audio if it was already enabled
}

// Step 3: Add an event listener to the image to listen for 'mouseover' (hover)
figcapsix.addEventListener('mouseover', function() { // Listen for mouseover is -> hover of css over the image
    
    if (audiosixth.paused) { // Check if the audio is currently paused
        audiosixth.play(); // Play the audio if it's paused
    }
});

// Step 4: Add another event listener for 'mouseout' to stop the audio when you stop hovering
figcapsix.addEventListener('mouseout', function() { // Listen for when the mouse leaves the image
    audiosixth.pause(); // Pause the audio when the mouse is no longer hovering
    // Do NOT reset currentTime to allow resuming from last position
});






// seven
//********************************************************************************** */

// Step 1: Get the image and audio elements
var imageseven = document.getElementById('imageseven'); // Retrieve the image element by its ID
var audioseven = document.getElementById('audioseven') ;





// Step 2: Check local storage for sound status
if (!localStorage.getItem('soundEnabled')) { // Check if 'soundEnabled' is not set in local storage
    // If sound is not enabled, set up a click event on the document
    document.addEventListener('click', function() { // Listen for a click event on the document
        
        audioseven.muted = false; // Unmute audio, allowing it to be played

        localStorage.setItem('soundEnabled', 'true'); // Save sound status as enabled in local storage
        
        alert("Sound enabled! You can now hover over the image."); // Alert user that sound is enabled

        // Remove click event after enabling sound to prevent multiple triggers
        document.removeEventListener('click', arguments.callee); // This stops listening for the click event
    });
} else {
    // If sound was previously enabled, unmute it
    audioseven.muted = false; // Unmute the audio if it was already enabled
}

// Step 3: Add an event listener to the image to listen for 'mouseover' (hover)
imageseven.addEventListener('mouseover', function() { // Listen for mouseover is -> hover of css over the image
    
    if (audioseven.paused) { // Check if the audio is currently paused
        audioseven.play(); // Play the audio if it's paused
    }
});

// Step 4: Add another event listener for 'mouseout' to stop the audio when you stop hovering
imageseven.addEventListener('mouseout', function() { // Listen for when the mouse leaves the image
    audioseven.pause(); // Pause the audio when the mouse is no longer hovering
    // Do NOT reset currentTime to allow resuming from last position
});




/*7.1)taken for hovering on figcaption bcoz its block element itself */

var figcapseven = document.getElementById('figcapseven')
var audioseven = document.getElementById('audioseven') ;



// Step 2: Check local storage for sound status
if (!localStorage.getItem('soundEnabled')) { // Check if 'soundEnabled' is not set in local storage
    // If sound is not enabled, set up a click event on the document
    document.addEventListener('click', function() { // Listen for a click event on the document
        
        audioseven.muted = false; // Unmute audio, allowing it to be played

        localStorage.setItem('soundEnabled', 'true'); // Save sound status as enabled in local storage
        
        alert("Sound enabled! You can now hover over the image."); // Alert user that sound is enabled

        // Remove click event after enabling sound to prevent multiple triggers
        document.removeEventListener('click', arguments.callee); // This stops listening for the click event
    });
} else {
    // If sound was previously enabled, unmute it
    audioseven.muted = false; // Unmute the audio if it was already enabled
}

// Step 3: Add an event listener to the image to listen for 'mouseover' (hover)
figcapseven.addEventListener('mouseover', function() { // Listen for mouseover is -> hover of css over the image
    
    if (audioseven.paused) { // Check if the audio is currently paused
        audioseven.play(); // Play the audio if it's paused
    }
});

// Step 4: Add another event listener for 'mouseout' to stop the audio when you stop hovering
figcapseven.addEventListener('mouseout', function() { // Listen for when the mouse leaves the image
    audioseven.pause(); // Pause the audio when the mouse is no longer hovering
    // Do NOT reset currentTime to allow resuming from last position
});






// eight
//********************************************************************************** */

// Step 1: Get the image and audio elements
var imageeight = document.getElementById('imageeight'); // Retrieve the image element by its ID
var audioeight = document.getElementById('audioeight') ;





// Step 2: Check local storage for sound status
if (!localStorage.getItem('soundEnabled')) { // Check if 'soundEnabled' is not set in local storage
    // If sound is not enabled, set up a click event on the document
    document.addEventListener('click', function() { // Listen for a click event on the document
        
        audioeight.muted = false; // Unmute audio, allowing it to be played

        localStorage.setItem('soundEnabled', 'true'); // Save sound status as enabled in local storage
        
        alert("Sound enabled! You can now hover over the image."); // Alert user that sound is enabled

        // Remove click event after enabling sound to prevent multiple triggers
        document.removeEventListener('click', arguments.callee); // This stops listening for the click event
    });
} else {
    // If sound was previously enabled, unmute it
    audioeight.muted = false; // Unmute the audio if it was already enabled
}

// Step 3: Add an event listener to the image to listen for 'mouseover' (hover)
imageeight.addEventListener('mouseover', function() { // Listen for mouseover is -> hover of css over the image
    
    if (audioeight.paused) { // Check if the audio is currently paused
        audioeight.play(); // Play the audio if it's paused
    }
});

// Step 4: Add another event listener for 'mouseout' to stop the audio when you stop hovering
imageeight.addEventListener('mouseout', function() { // Listen for when the mouse leaves the image
    audioeight.pause(); // Pause the audio when the mouse is no longer hovering
    // Do NOT reset currentTime to allow resuming from last position
});




/*8.1)taken for hovering on figcaption bcoz its block element itself */

var figcapeight = document.getElementById('figcapeight')
var audioeight = document.getElementById('audioeight') ;



// Step 2: Check local storage for sound status
if (!localStorage.getItem('soundEnabled')) { // Check if 'soundEnabled' is not set in local storage
    // If sound is not enabled, set up a click event on the document
    document.addEventListener('click', function() { // Listen for a click event on the document
        
        audioeight.muted = false; // Unmute audio, allowing it to be played

        localStorage.setItem('soundEnabled', 'true'); // Save sound status as enabled in local storage
        
        alert("Sound enabled! You can now hover over the image."); // Alert user that sound is enabled

        // Remove click event after enabling sound to prevent multiple triggers
        document.removeEventListener('click', arguments.callee); // This stops listening for the click event
    });
} else {
    // If sound was previously enabled, unmute it
    audioeight.muted = false; // Unmute the audio if it was already enabled
}

// Step 3: Add an event listener to the image to listen for 'mouseover' (hover)
figcapeight.addEventListener('mouseover', function() { // Listen for mouseover is -> hover of css over the image
    
    if (audioeight.paused) { // Check if the audio is currently paused
        audioeight.play(); // Play the audio if it's paused
    }
});

// Step 4: Add another event listener for 'mouseout' to stop the audio when you stop hovering
figcapeight.addEventListener('mouseout', function() { // Listen for when the mouse leaves the image
    audioeight.pause(); // Pause the audio when the mouse is no longer hovering
    // Do NOT reset currentTime to allow resuming from last position
});







// nineimagenine
//********************************************************************************** */

// Step 1: Get the image and audio elements
var imagenine = document.getElementById('imagenine'); // Retrieve the image element by its ID
var audionine = document.getElementById('audionine') ;





// Step 2: Check local storage for sound status
if (!localStorage.getItem('soundEnabled')) { // Check if 'soundEnabled' is not set in local storage
    // If sound is not enabled, set up a click event on the document
    document.addEventListener('click', function() { // Listen for a click event on the document
        
        audionine.muted = false; // Unmute audio, allowing it to be played

        localStorage.setItem('soundEnabled', 'true'); // Save sound status as enabled in local storage
        
        alert("Sound enabled! You can now hover over the image."); // Alert user that sound is enabled

        // Remove click event after enabling sound to prevent multiple triggers
        document.removeEventListener('click', arguments.callee); // This stops listening for the click event
    });
} else {
    // If sound was previously enabled, unmute it
    audionine.muted = false; // Unmute the audio if it was already enabled
}

// Step 3: Add an event listener to the image to listen for 'mouseover' (hover)
imagenine.addEventListener('mouseover', function() { // Listen for mouseover is -> hover of css over the image
    
    if (audionine.paused) { // Check if the audio is currently paused
        audionine.play(); // Play the audio if it's paused
    }
});

// Step 4: Add another event listener for 'mouseout' to stop the audio when you stop hovering
imagenine.addEventListener('mouseout', function() { // Listen for when the mouse leaves the image
    audionine.pause(); // Pause the audio when the mouse is no longer hovering
    // Do NOT reset currentTime to allow resuming from last position
});




/*7.1)taken for hovering on figcaption bcoz its block element itself */

var figcapnine = document.getElementById('figcapnine')
var audionine = document.getElementById('audionine') ;



// Step 2: Check local storage for sound status
if (!localStorage.getItem('soundEnabled')) { // Check if 'soundEnabled' is not set in local storage
    // If sound is not enabled, set up a click event on the document
    document.addEventListener('click', function() { // Listen for a click event on the document
        
        audionine.muted = false; // Unmute audio, allowing it to be played

        localStorage.setItem('soundEnabled', 'true'); // Save sound status as enabled in local storage
        
        alert("Sound enabled! You can now hover over the image."); // Alert user that sound is enabled

        // Remove click event after enabling sound to prevent multiple triggers
        document.removeEventListener('click', arguments.callee); // This stops listening for the click event
    });
} else {
    // If sound was previously enabled, unmute it
    audionine.muted = false; // Unmute the audio if it was already enabled
}

// Step 3: Add an event listener to the image to listen for 'mouseover' (hover)
figcapnine.addEventListener('mouseover', function() { // Listen for mouseover is -> hover of css over the image
    
    if (audionine.paused) { // Check if the audio is currently paused
        audionine.play(); // Play the audio if it's paused
    }
});

// Step 4: Add another event listener for 'mouseout' to stop the audio when you stop hovering
figcapnine.addEventListener('mouseout', function() { // Listen for when the mouse leaves the image
    audionine.pause(); // Pause the audio when the mouse is no longer hovering
    // Do NOT reset currentTime to allow resuming from last position
});




