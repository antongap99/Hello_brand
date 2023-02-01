import Swiper from "swiper";

export const swiperController = () => {
  new Swiper(".goede__swiper", {
    navigation: {
      nextEl: ".goede__button-next",
      prevEl: ".goede__button-prev",
    },
  });

  new Swiper(".Sfeerfoto__slider", {
    loop: true,
    // centeredSlides: true,
    slidesPerView: 1.98,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1170: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1172: {
        slidesPerView: 1.98,
        spaceBetween: 30,
      },
      1174: {
        slidesPerView: 2,
      },
    },
    spaceBetween: 30,
    navigation: {
      nextEl: ".Sfeerfoto__button-next",
      prevEl: ".Sfeerfoto__button-prev",
    },
  });
};
