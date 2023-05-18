
const duration = 5000;
const carouselItems = document.querySelectorAll('.slider-item');
const totalItems = carouselItems.length;
let slide = 0;
let timer = null;

function switchSlide(nextSlide) {
    carouselItems[slide].classList.remove('active');
    carouselItems[nextSlide].classList.add('active');
    slide = nextSlide;
}

function startSlideshow() {
    clearTimeout(timer);
    timer = setTimeout(() => {
        const nextSlide = (slide + 1) % totalItems;
        switchSlide(nextSlide);
        startSlideshow();
    }, duration);
}
startSlideshow();