// Set the duration of each slide in milliseconds
const duration = 1000;

// Get the carousel items and total count
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;

// Set the initial slide and timer variables
let slide = 0;
let timer = null;

// Define the function to switch the active slide
function switchSlide(nextSlide) {
    // Remove the active class from the current slide
    carouselItems[slide].classList.remove('active');
    // Add the active class to the next slide
    carouselItems[nextSlide].classList.add('active');
    // Update the slide variable
    slide = nextSlide;
}