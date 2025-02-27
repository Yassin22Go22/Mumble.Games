window.addEventListener('scroll', function() {
    const blubImage = document.getElementById('blubImage');
    const scrollPosition = window.scrollY;
    blubImage.style.top = `${-90 + scrollPosition * 0.15}px`; // Adjust the multiplier as needed
});