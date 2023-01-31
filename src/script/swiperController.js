import Swiper from "swiper";

export const swiperController = () => {
    new Swiper('.goede__swiper', {

        navigation: {
            nextEl: '.goede__button-next',
            prevEl: '.goede__button-prev',
        },

    });

    new Swiper('.Sfeerfoto__slider', {
        loop: true,
        centeredSlides: 1,
        initialSlide: 3,
        slidesPerView: 3.15,
        spaceBetween: 30,
        navigation: {
            nextEl: '.Sfeerfoto__button-next',
            prevEl: '.Sfeerfoto__button-prev',
        },

    });
}