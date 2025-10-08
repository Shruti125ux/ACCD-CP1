// Array of image sources
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg'
];

let currentIndex = 0;
let autoPlayInterval = 500;
let isPlaying = false;

// Function to change the main display image
function changeImage(index) {
    currentIndex = index;
    
    // Update main display
    const mainImage = document.getElementById('mainImage');
    mainImage.src = images[index];

    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// Start auto-play
function startAutoPlay() {
    if (isPlaying) return;
    
    isPlaying = true;
    document.getElementById('playButton').disabled = true;
    document.getElementById('pauseButton').disabled = false;
    
    autoPlayInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        changeImage(currentIndex);
    }, 2000);
}

// Pause auto-play
function pauseAutoPlay() {
    if (!isPlaying) return;
    
    isPlaying = false;
    clearInterval(autoPlayInterval);
    document.getElementById('playButton').disabled = false;
    document.getElementById('pauseButton').disabled = true;
}




