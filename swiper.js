var swiper = new Swiper(".mySwiper", {
    loop: true,
    slide: true,
    freeMode: true,
    autoplay: {
        delay: 800,
        disableOnInteraction: true
    },
    breakpoints: {
        350: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        1250: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1600: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
        1920: {
            slidesPerView: 7,
            spaceBetween: 50,
        },
    }
});