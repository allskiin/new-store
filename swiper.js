// swiper bonus
var swiper = new Swiper('.swiper', {

    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
});