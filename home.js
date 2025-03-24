document.addEventListener("DOMContentLoaded", function() {
    const caseCards = document.querySelectorAll(".case-card");

    caseCards.forEach(card => {
        const video = card.querySelector(".case-video");

        card.addEventListener("mouseenter", function() {
            video.play(); // Play video on hover
        });

        card.addEventListener("mouseleave", function() {
            video.pause(); // Pause video when mouse leaves
            video.currentTime = 0; // Reset to start
        });
    });
});
