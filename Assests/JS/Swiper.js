document.addEventListener('DOMContentLoaded', () => {
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 1, // Show one slide at a time
            spaceBetween: 0, // No extra space between slides
            loop: true, // Enable looping
            autoplay: {
                delay: 10000, // Slide every 5 seconds
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination', // Pagination dots
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next', // Next button
                prevEl: '.swiper-button-prev', // Previous button
            },
            scrollbar: {
                el: ".swiper-scrollbar"
            },
        });
    });