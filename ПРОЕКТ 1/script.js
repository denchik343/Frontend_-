document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const dots = document.querySelectorAll('.dot');

    let slideIndex = 0;
    const slideWidth = slides[0].offsetWidth;
    let swipeCount = 0; 
    const maxSwipes = 5; 

    const updateSlider = () => {
        sliderWrapper.style.transform = `translateX(-${slideWidth * slideIndex}px)`;

        slides.forEach((slide, i) => slide.classList.toggle('active', i === slideIndex));
        dots.forEach((dot, i) => dot.classList.toggle('active', i === slideIndex));
    };

    const nextSlide = () => {
        if (swipeCount < maxSwipes) {
            slideIndex = (slideIndex + 1) % slides.length;
            updateSlider();
            swipeCount++;
            checkSwipes();
        }
    };

    const prevSlide = () => {
        if (swipeCount < maxSwipes) {
            slideIndex = (slideIndex - 1 + slides.length) % slides.length;
            updateSlider();
            swipeCount++;
            checkSwipes();
        }
    };
  
    const checkSwipes = () => {
        if (swipeCount >= maxSwipes) {
            nextButton.disabled = true;
            prevButton.disabled = true;
        }
    };

    
    updateSlider();
   
    checkSwipes();

 
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
    dots.forEach((dot, i) => dot.addEventListener('click', () => {
        if (swipeCount < maxSwipes) {
            slideIndex = i;
            updateSlider();
            swipeCount++; 
            checkSwipes();
        }
    }));
});




