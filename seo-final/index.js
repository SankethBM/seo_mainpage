const sliderContainer = document.querySelector('.slider-container');
const slides = Array.from(document.querySelectorAll('.slide'));

let slideWidth = slides[0].clientWidth;
let currentIndex = 0;

function slideNext() {
    currentIndex++;
    if (currentIndex === slides.length) {
        currentIndex = 0;
    }
    sliderContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

// Call slideNext() function periodically to auto-slide
setInterval(slideNext, 3000); // Change the time interval as desired
