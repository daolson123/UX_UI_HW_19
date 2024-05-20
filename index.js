console.log("Your index.js file is loaded correctly!");
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const pagination = document.querySelector('.pagination');
    const scrollInterval = 6000; 

    // Calculate the number of slides
    const slides = carousel.querySelectorAll('.workGrid').length;

    // Create pagination dots
    for (let i = 0; i < slides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('pagination-dot');
        pagination.appendChild(dot);
    }

    // Function to update active pagination dot
    function updatePagination() {
        const activeSlideIndex = Math.round(carousel.scrollLeft / carousel.clientWidth);
        const dots = pagination.querySelectorAll('.pagination-dot');
        dots.forEach((dot, index) => {
            if (index === activeSlideIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Update pagination on carousel scroll
    carousel.addEventListener('scroll', updatePagination);

    // Function to scroll to the next item with looping
    function scrollToNext() {
        const nextPosition = carousel.scrollLeft + carousel.clientWidth;
        if (nextPosition >= carousel.scrollWidth) {
            carousel.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        } else {
            carousel.scrollTo({
                left: nextPosition,
                behavior: 'smooth'
            });
        }
    }

    // Start auto-scrolling
    setInterval(scrollToNext, scrollInterval);

    // Initial pagination update
    updatePagination();
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.navMenu');

    toggleButton.addEventListener('click', function() {
        toggleButton.classList.toggle('active');
        navMenu.classList.toggle('menu-open'); 
    });
});

