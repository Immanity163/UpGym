new Swiper('.slider' ,{
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev'
    },

   pagination: {
        el: '.swiper-pag',

        clickable: true,
    },

    slidesPerView: 1,

    effect: 'fade',
    fadeEffect: {
        crossFare: true
    },
});

new Swiper('.product__slider' ,{
    navigation: {
        nextEl: '.product-btn-next',
        prevEl: '.product-btn-prev'
    },

   pagination: {
        el: '.product-pag',

        clickable: true,
    },

    slidesPerView: 2,
    spaceBetween: 16,

    breakpoints: {
        100: {
            slidesPerView: 1,
        },

        1240: {
            slidesPerView: 2,
            spaceBetween: 16,
        }
    },
});

new Swiper('.photo-slider' ,{
    navigation: {
        nextEl: '.photo-btn-next',
        prevEl: '.photo-btn-prev'
    },

   pagination: {
        el: '.photo-pag',

        clickable: true,
    },

    breakpoints: {
        100: {
            slidesPerView: 1,
            spaceBetween: 24,
        },

        1240: {
            slidesPerView: 4,
            spaceBetween: 24,
        }
    },

    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    }
});

new Swiper('.product-slider' ,{
   pagination: {
        el: '.product-pag',

        clickable: true,
    },

    slidesPerView: 1,
    spaceBetween: 24,
});