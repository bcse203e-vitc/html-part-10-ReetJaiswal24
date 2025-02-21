function bringToFront(imageElement) {
    const images = document.querySelectorAll('.image');

    images.forEach(image => {
        image.style.zIndex = 1; // Reset z-index to 1 for all images
    });
    imageElement.style.zIndex = 10; // Bring the clicked image to the front
}
