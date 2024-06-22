const swiper = new Swiper('.swiper', {
  // loop: true,
  grabCursor: true,

  slidesPerView: 1.2,
  spaceBetween: 24,
  navigation: {
    nextEl: '#my-swiper-button-next',
    prevEl: '#my-swiper-button-prev',
  },

  breakpoints: {
    640: {
      slidesPerView: 1.8,
      spaceBetween: 24
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2.4,
      spaceBetween: 48
    },
    1024: {
      slidesPerView: 2.8,
      spaceBetween: 48,
    },
    1280: {
      slidesPerView: 3.5,
      spaceBetween: 48,
    }
  }
});