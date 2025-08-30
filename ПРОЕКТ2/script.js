const scrollContainer = document.querySelector('.scroll-container');
const items = document.querySelectorAll('.item');
const scrollLeftButton = document.getElementById('scroll-left');
const scrollRightButton = document.getElementById('scroll-right');
const itemWidth = 160; 


const cloneItems = () => {
  items.forEach(item => {
    scrollContainer.appendChild(item.cloneNode(true));
  });
  scrollContainer.style.width = `${itemWidth * items.length * 2}px`; 
}


cloneItems();


const scrollLeft = () => {
  scrollContainer.scrollBy({
    left: -itemWidth,
    behavior: 'smooth'
  });

 
  if (scrollContainer.scrollLeft <= 0) {
    scrollContainer.scrollLeft = itemWidth * items.length;
  }
}


const scrollRight = () => {
  scrollContainer.scrollBy({
    left: itemWidth,
    behavior: 'smooth'
  });

    
  if (scrollContainer.scrollLeft >= itemWidth * items.length) {
      scrollContainer.scrollLeft = 0;
    }
}


scrollLeftButton.addEventListener('click', scrollLeft);
scrollRightButton.addEventListener('click', scrollRight);

scrollContainer.addEventListener('scroll', () => {
  if (scrollContainer.scrollLeft + scrollContainer.offsetWidth >= scrollContainer.scrollWidth) {
    scrollContainer.scrollLeft = 0;
  }

  if (scrollContainer.scrollLeft <= 0) {
    scrollContainer.scrollLeft = scrollContainer.scrollWidth - scrollContainer.offsetWidth;
  }
});



document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const controls = document.querySelectorAll('.slider-controls button');

    let currentSlide = 0; 

    function updateSlider() {
        const translateX = -currentSlide * 25; 
        slider.style.transform = `translateX(${translateX}%)`;
    }

    function updateActiveButton() {
        controls.forEach(btn => btn.classList.remove('active'));
        controls[currentSlide].classList.add('active');
    }

    controls.forEach((button, index) => {
        button.addEventListener('click', function() {
            currentSlide = index; 
            updateSlider(); 
            updateActiveButton(); 
        });
    });


    updateActiveButton();
});

