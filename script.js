console.log("Welcome to GYM-JAMMING");

// Initialize the Variables
let songsIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

// Single song that plays for all buttons
let songs = [
    {songName: "HOT GIRL BUMMER", filePath: "songs/1.mp3", coverPath: "cover1.jpg.png"}
];

// DON'T update song names - keep the original HTML names
let songItems = Array.from(document.getElementsByClassName('songItem'));
songItems.forEach((element, i) => {
    // Only update the cover image, NOT the song name
    let img = element.getElementsByTagName("img")[0];
    if (img) {
        img.src = songs[0].coverPath; // Same cover for all
    }
});

// Handle play pause click on master button
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        if (gif) gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        if (gif) gif.style.opacity = 0;
    }
});

// Listen to timeupdate event
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    if (!isNaN(progress)) {
        myProgressBar.value = progress;
    }
});

// Seek functionality
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

// Individual play buttons in the song list (exclude master play button)
let songPlayButtons = document.querySelectorAll('.songListPlay .fa-circle-play');
songPlayButtons.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.stopPropagation();
        
        if (!audioElement.paused) {
            // Pause if already playing
            audioElement.pause();
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
            if (gif) gif.style.opacity = 0;
        } else {
            // Play the same song
            audioElement.currentTime = 0; // Restart from beginning
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            
            // Update all song list buttons to pause state
            songPlayButtons.forEach(btn => {
                btn.classList.remove('fa-circle-play');
                btn.classList.add('fa-circle-pause');
            });
            
            if (gif) gif.style.opacity = 1;
        }
    });
});

// Click on any song item to play the SAME song
songItems.forEach((element) => {
    element.addEventListener('click', () => {
        audioElement.currentTime = 0; // Restart from beginning
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
        // Update all song list buttons to pause state
        songPlayButtons.forEach(btn => {
            btn.classList.remove('fa-circle-play');
            btn.classList.add('fa-circle-pause');
        });
        
        if (gif) gif.style.opacity = 1;
    });
});

// Next button - restarts the SAME song
let nextBtn = document.querySelector('.bottom .fa-forward-step');
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        audioElement.currentTime = 0; // Restart from beginning
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
        // Update all song list buttons to pause state
        songPlayButtons.forEach(btn => {
            btn.classList.remove('fa-circle-play');
            btn.classList.add('fa-circle-pause');
        });
        
        if (gif) gif.style.opacity = 1;
    });
}

// Previous button - restarts the SAME song
let prevBtn = document.querySelector('.bottom .fa-backward-step');
if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        audioElement.currentTime = 0; // Restart from beginning
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
        // Update all song list buttons to pause state
        songPlayButtons.forEach(btn => {
            btn.classList.remove('fa-circle-play');
            btn.classList.add('fa-circle-pause');
        });
        
        if (gif) gif.style.opacity = 1;
    });
}

// When song ends, restart the SAME song
audioElement.addEventListener('ended', () => {
    audioElement.currentTime = 0;
    audioElement.play();
});

console.log("✅ GYM-JAMMING Ready!");