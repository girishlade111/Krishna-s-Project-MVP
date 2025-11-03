document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('.campus-guide-section .play-button');
    const videoElement = document.querySelector('.campus-guide-section video'); // Assuming you add a <video> tag

    if (playButton && videoElement) {
        playButton.addEventListener('click', () => {
            if (videoElement.paused) {
                videoElement.play();
                playButton.style.display = 'none'; // Hide play button when playing
            } else {
                videoElement.pause();
                playButton.style.display = 'flex'; // Show play button when paused
            }
        });

        // Optionally, show play button again if video ends
        videoElement.addEventListener('ended', () => {
            playButton.style.display = 'flex';
        });
    }

    // Example for a simple "Read more" or link click behavior if needed
    // const learnMoreButtons = document.querySelectorAll('.btn');
    // learnMoreButtons.forEach(button => {
    //     button.addEventListener('click', (e) => {
    //         e.preventDefault(); // Prevent default link behavior for demo
    //         console.log('Button clicked:', e.target.textContent);
    //         // Add custom logic here, e.g., navigate, show modal, etc.
    //     });
    // });
});
