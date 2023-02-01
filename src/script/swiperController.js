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
    initialSlide: 1,
    breakpoints: {
      320: {
        slidesPerView: 1, 
        spaceBetween: 100,
      },
      500: {
        loop: true,
        slidesPerView: 1.5,
      },
      755: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1170: {
        slidesPerView: 1,
      },
      1172: {
        slidesPerView: 1.98,
        spaceBetween: 30,
      },
      1174: {
        slidesPerView: 2.2,
      },
    },
    spaceBetween: 30,

    navigation: {
      nextEl: ".Sfeerfoto__button-next",
      prevEl: ".Sfeerfoto__button-prev",
    },
  });
};
